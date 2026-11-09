export type DemoInquiry = {
  name: string;
  company: string;
  email: string;
  message: string;
  website?: string;
};

// This public endpoint contains no credentials; FormSubmit owns email delivery.
const endpoint = 'https://formsubmit.co/ajax/contact@plenum.co.jp';

export async function sendDemoInquiry(inquiry: DemoInquiry, signal?: AbortSignal) {
  const name = inquiry.name.trim();
  const company = inquiry.company.trim();
  const email = inquiry.email.trim();
  const message = inquiry.message.trim();
  if (!name || !company || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Invalid inquiry');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      company,
      email,
      message,
      _subject: '[Hydrangea] デモリクエスト / Demo request',
      _template: 'table',
      _honey: inquiry.website ?? '',
    }),
    signal,
  });
  const result = await response.json();
  // The service may return HTTP 200 with success: "false". An activation
  // request is also not a delivered inquiry, even when success is "true".
  if (!response.ok || (result.success !== true && result.success !== 'true') ||
      (typeof result.message === 'string' && /activat/i.test(result.message))) {
    throw new Error('Inquiry was not accepted');
  }
}
