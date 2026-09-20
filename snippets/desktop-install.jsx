export const DesktopInstall = () => (
  <figure className="kardy-feature-art kardy-desktop-install">
    <div
      className="bf-safari"
      role="img"
      aria-label="Illustrative desktop installation: choose the browser install icon, then confirm Install Kardy."
    >
      <div className="bf-safari-toolbar" aria-hidden="true">
        <span className="bf-safari-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="bf-safari-address">
          <svg
            viewBox="0 0 24 24"
            className="bf-icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M5 10h14v11H5zM8 10V6a4 4 0 0 1 8 0v4" />
          </svg>
          getkardy.com
        </span>
        <span className="desktop-install-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
          </svg>
        </span>
      </div>
      <div
        className="bf-safari-content desktop-install-scene"
        aria-hidden="true"
      >
        <div className="desktop-install-wallet">
          <strong>Your wallet</strong>
          <div className="desktop-install-membership">
            <b>sunday</b>
            <small>Your membership</small>
          </div>
        </div>
        <div className="desktop-install-dialog">
          <strong>Install Kardy?</strong>
          <small>Open your wallet in its own window.</small>
          <div className="desktop-install-actions">
            <span>Cancel</span>
            <span className="desktop-install-confirm">Install</span>
          </div>
        </div>
      </div>
    </div>
    <figcaption>
      Choose the install icon in Chrome or Edge, confirm Install, then open
      Kardy from your apps.
      <small>
        Illustrative browser UI. Labels and icon positions vary by browser
        version.
      </small>
    </figcaption>
  </figure>
);
