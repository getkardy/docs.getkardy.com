export const SharedAccount = () => (
  <figure className="kardy-feature-art shared-account">
    <div className="shared-account-identity">
      <small>THE SAME KARDY ACCOUNT</small>
      <img
        className="shared-account-avatar"
        src="/images/avatar-amelia-tan.png"
        alt=""
      />
      <b>Amelia Tan</b>
      <span>amelia@example.com</span>
      <p>One email. One password.</p>
    </div>
    <div className="shared-account-connectors" aria-hidden="true">
      <i />
      <i />
    </div>
    <div className="shared-account-sites">
      <div>
        <img
          className="shared-account-logo"
          src="/images/kardy-logo.svg"
          alt="Kardy"
        />
        <small>getkardy.com</small>
        <span>Your personal wallet</span>
      </div>
      <div>
        <img
          className="shared-account-logo"
          src="/images/kardy-merchant-logo.svg"
          alt="Kardy Merchant"
        />
        <small>merchants.getkardy.com</small>
        <span>Your business workspace</span>
      </div>
    </div>
    <figcaption>
      Illustrative account. You may sign in separately on each site. Customer
      memberships and merchant permissions remain separate.
    </figcaption>
  </figure>
);
