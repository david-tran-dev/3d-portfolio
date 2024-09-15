const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 pb-3 border-t c-space pt-7 border-black-300">
      <div className="flex gap-2 text-white-500">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/david-tran-dev"
          target="_blank"
          rel="noreferrer"
          className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://x.com/DavidT_Dev"
          target="_blank"
          rel="noreferrer"
          className="social-icon">
          <img
            src="/assets/twitter.svg"
            alt="twitter"
            className="w-1/2 h-1/2"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/david-tran-dev"
          target="_blank"
          rel="noreferrer"
          className="social-icon">
          <img
            src="/assets/linkedIn-logo.png"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>

      <p className="text-white-500">© 2024 David TRAN. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
