export const DesktopInstall = () => (
  <figure
    style={{
      margin: "24px 0",
      padding: 20,
      borderRadius: 20,
      background: "#FFF0EE",
      color: "#42001C",
    }}
  >
    <svg
      viewBox="0 0 680 300"
      role="img"
      aria-label="Illustrative desktop installation: choose the browser install icon, then confirm Install Kardy."
      style={{ width: "100%", display: "block" }}
    >
      <rect
        x="12"
        y="14"
        width="656"
        height="270"
        rx="16"
        fill="#ffffffaa"
        stroke="#42001c20"
      />
      <circle cx="30" cy="34" r="4" fill="#d5cbd0" />
      <circle cx="44" cy="34" r="4" fill="#d5cbd0" />
      <circle cx="58" cy="34" r="4" fill="#d5cbd0" />
      <rect x="155" y="22" width="370" height="26" rx="13" fill="white" />
      <text x="295" y="40" fontSize="12" fill="#60606b">
        getkardy.com
      </text>
      <circle cx="508" cy="35" r="18" fill="#FF90C1" />
      <path
        d="M508 25v13m-5-5 5 5 5-5m-13 8h16"
        fill="none"
        stroke="#42001C"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="24" y="59" width="632" height="212" rx="10" fill="white" />
      <text x="48" y="98" fontSize="24" fontWeight="700" fill="#42001C">
        Your wallet
      </text>
      <rect x="48" y="119" width="180" height="126" rx="16" fill="#eadcfa" />
      <text x="67" y="151" fontSize="20" fontWeight="700" fill="#42001C">
        sunday
      </text>
      <text x="67" y="178" fontSize="12" fill="#42001C">
        Your membership
      </text>
      <rect
        x="320"
        y="78"
        width="305"
        height="167"
        rx="15"
        fill="#fff"
        stroke="#42001c25"
      />
      <text x="344" y="111" fontSize="19" fontWeight="600" fill="#42001C">
        Install Kardy?
      </text>
      <text x="344" y="140" fontSize="12" fill="#60606b">
        Open your wallet in its own window.
      </text>
      <rect x="500" y="180" width="100" height="38" rx="9" fill="#42001C" />
      <text x="550" y="204" textAnchor="middle" fontSize="14" fill="#fff">
        Install
      </text>
      <text x="447" y="204" textAnchor="middle" fontSize="13" fill="#60606b">
        Cancel
      </text>
    </svg>
    <figcaption style={{ marginTop: 12, fontSize: 13, lineHeight: 1.6 }}>
      1. Choose the install icon in Chrome or Edge. 2. Confirm Install. 3. Open
      Kardy from your apps.
      <span
        style={{
          display: "block",
          marginTop: 6,
          color: "#60606b",
          fontSize: 12,
        }}
      >
        Illustrative browser UI. Labels and icon positions vary by browser
        version.
      </span>
    </figcaption>
  </figure>
);
