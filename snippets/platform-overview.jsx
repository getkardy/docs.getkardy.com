export const PlatformOverview = () => (
  <figure
    className="kardy-feature-art platform-overview"
    aria-label="The merchant portal and customer wallet connect to Kardy's shared programme records"
  >
    <div className="platform-overview-sites">
      <div className="platform-overview-card">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 10h18l-2-6H5l-2 6Zm2 0v10h14V10M9 20v-6h6v6M3 10c0 3 4 3 4 0 0 3 5 3 5 0 0 3 5 3 5 0 0 3 4 3 4 0" />
        </svg>
        <small>FOR YOUR TEAM</small>
        <strong>Kardy Merchant</strong>
        <span>
          Manage your programme.
          <br />
          Record visits and confirm claims.
        </span>
      </div>
      <div className="platform-overview-card">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 8V5H5a2 2 0 0 0 0 4h15v11H5a2 2 0 0 1-2-2V7m17 5h-6v5h6M16 14.5h1" />
        </svg>
        <small>FOR YOUR CUSTOMERS</small>
        <strong>Kardy wallet</strong>
        <span>
          Keep memberships together.
          <br />
          Show your QR and check progress.
        </span>
      </div>
    </div>
    <div className="platform-overview-connectors" aria-hidden="true">
      <i />
      <i />
    </div>
    <div className="platform-overview-shared">
      <strong>One connected programme</strong>
      <p>Kardy keeps access and confirmed activity in sync.</p>
      <div>
        <span>Memberships</span>
        <span>Stamps</span>
        <span>Rewards</span>
      </div>
    </div>
    <figcaption>
      Each business keeps its own programme and member records. Illustrative
      overview.
    </figcaption>
  </figure>
);
