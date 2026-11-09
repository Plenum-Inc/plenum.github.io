'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { sendDemoInquiry } from '@/lib/contact';
import { useLanguage } from './i18n/LanguageProvider';

export default function DemoRequest() {
  const { copy } = useLanguage();
  const text = copy.demo;
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const pending = useRef<AbortController | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [isOpen]);

  useEffect(() => () => pending.current?.abort(), []);

  function open() {
    dialog.current?.showModal();
    setIsOpen(true);
  }

  function close() {
    if (!pending.current) dialog.current?.close();
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current || sent) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const controller = new AbortController();
    pending.current = controller;
    setSending(true);
    setError(false);
    const timeout = setTimeout(() => controller.abort(), 20000);

    try {
      await sendDemoInquiry({
        name: String(data.get('name') ?? ''),
        company: String(data.get('company') ?? ''),
        email: String(data.get('email') ?? ''),
        message: String(data.get('message') ?? ''),
        website: String(data.get('website') ?? ''),
      }, controller.signal);
      setSent(true);
    } catch {
      // Preserve the input so a failed request can be corrected and retried.
      setError(true);
    } finally {
      clearTimeout(timeout);
      pending.current = null;
      setSending(false);
    }
  }

  return (
    <div className="demo-request">
      <button ref={opener} type="button" className="primary-button demo-request-button" onClick={open}>
        {text.button}
      </button>
      <dialog
        ref={dialog}
        className="demo-modal"
        aria-labelledby="demo-title"
        aria-describedby="demo-note"
        onCancel={(event) => { if (pending.current) event.preventDefault(); }}
        onClick={(event) => { if (event.target === event.currentTarget) close(); }}
        onClose={() => { setIsOpen(false); opener.current?.focus(); }}
      >
        <div className="modal-panel">
          <div className="modal-heading">
            <h2 id="demo-title">{text.title}</h2>
            <button type="button" className="modal-close" aria-label={text.close} onClick={close} disabled={sending}>×</button>
          </div>
          <form onSubmit={submit} aria-busy={sending}>
            <fieldset disabled={sending || sent} className="demo-fields">
              <label htmlFor="demo-name">{text.name}
                <input id="demo-name" name="name" autoComplete="name" required maxLength={100} autoFocus />
              </label>
              <label htmlFor="demo-company">{text.company}
                <input id="demo-company" name="company" autoComplete="organization" required maxLength={200} />
              </label>
              <label htmlFor="demo-email">{text.email}
                <input id="demo-email" name="email" type="email" autoComplete="email" required maxLength={254} />
              </label>
              <label htmlFor="demo-message">{text.message}
                <textarea id="demo-message" name="message" rows={4} required maxLength={5000} />
              </label>
              <div className="form-honeypot" aria-hidden="true">
                <label htmlFor="demo-website">Website<input id="demo-website" name="website" tabIndex={-1} autoComplete="off" /></label>
              </div>
              <button type="submit" className="primary-button form-submit">{sending ? text.sending : text.send}</button>
            </fieldset>
            <p className="demo-success" role="status">{sent ? text.success : ''}</p>
            <p className="form-error" role="alert">{error ? text.error : ''}</p>
            <p id="demo-note" className="demo-note">{text.note}</p>
          </form>
        </div>
      </dialog>
    </div>
  );
}
