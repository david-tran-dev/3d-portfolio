import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import { toast } from 'sonner';

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'David TRAN',
          from_email: form.email,
          to_email: 'david.tran.devweb@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          toast.success('Thank you for your message 😃');
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error(`I didn't receive your message 😢`);
        },
      );
  };

  return (
    <section className="my-20 c-space" id="contact">
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 h-[990px] md:h-[950px] min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Let&rsquo;s talk</h3>
          <p className="mt-3 text-lg text-white-600">
            If you&apos;re interested in collaborating or have any questions regarding my work, please feel free to
            reach out using the form below. I&apos;m always open to discussing new opportunities, freelance projects, or
            any creative endeavors. I look forward to hearing from you and will get back to you as soon as possible.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col mt-12 space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
