import assert from 'node:assert/strict';
import { afterEach, mock, test } from 'node:test';
import { sendDemoInquiry } from '../lib/contact.ts';

const inquiry = {
  name: ' Test User ',
  company: ' Example Inc. ',
  email: ' test@example.com ',
  message: ' Demo request ',
};

afterEach(() => mock.restoreAll());

test('sends the inquiry to the fixed recipient and accepts the service string response', async () => {
  const fetchMock = mock.method(globalThis, 'fetch', async () => Response.json({ success: 'true', message: 'Form submitted successfully' }));
  await sendDemoInquiry(inquiry);
  const [endpoint, options] = fetchMock.mock.calls[0].arguments;
  assert.equal(endpoint, 'https://formsubmit.co/ajax/contact@plenum.co.jp');
  assert.equal(options.method, 'POST');
  const body = JSON.parse(options.body);
  assert.equal(body.name, 'Test User');
  assert.equal(body.company, 'Example Inc.');
  assert.equal(body.email, 'test@example.com');
  assert.equal(body.message, 'Demo request');
  assert.ok(body._subject.includes('Hydrangea'));
});

test('rejects HTTP 200 containing success: "false"', async () => {
  mock.method(globalThis, 'fetch', async () => Response.json({ success: 'false', message: 'Rejected' }));
  await assert.rejects(sendDemoInquiry(inquiry));
});

test('does not report an activation request as an accepted inquiry', async () => {
  mock.method(globalThis, 'fetch', async () => Response.json({ success: 'true', message: 'This form needs Activation.' }));
  await assert.rejects(sendDemoInquiry(inquiry));
});

test('rejects unsuccessful HTTP responses even when their body says success', async () => {
  mock.method(globalThis, 'fetch', async () => Response.json({ success: true }, { status: 429 }));
  await assert.rejects(sendDemoInquiry(inquiry));
});

test('preserves network failures for the form to display and retry', async () => {
  mock.method(globalThis, 'fetch', async () => { throw new TypeError('Network unavailable'); });
  await assert.rejects(sendDemoInquiry(inquiry), /Network unavailable/);
});

test('rejects blank fields and invalid email without contacting the service', async () => {
  const fetchMock = mock.method(globalThis, 'fetch', async () => { throw new Error('Unexpected network request'); });
  await assert.rejects(sendDemoInquiry({ ...inquiry, name: '  ' }));
  await assert.rejects(sendDemoInquiry({ ...inquiry, email: 'invalid' }));
  assert.equal(fetchMock.mock.callCount(), 0);
});

test('passes the cancellation signal to the request', async () => {
  const controller = new AbortController();
  const fetchMock = mock.method(globalThis, 'fetch', async () => Response.json({ success: true }));
  await sendDemoInquiry(inquiry, controller.signal);
  assert.equal(fetchMock.mock.calls[0].arguments[1].signal, controller.signal);
});
