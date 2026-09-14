export const InstallWalkthrough = ({ platform = "iphone" }) => {
  const IPhoneInstallScreen = ({ step }) => {
    const id = `install-iphone-${step}`;
    return (
      <svg
        viewBox="0 0 240 450"
        fontFamily="-apple-system, BlinkMacSystemFont, Inter, Arial, sans-serif"
        aria-hidden="true"
        style={{
          display: "block",
          width: "100%",
          maxWidth: 260,
          margin: "0 auto",
        }}
      >
        <defs>
          <linearGradient id={`${id}-metal`} x2="1" y2="1">
            <stop stopColor="#969397" />
            <stop offset=".24" stopColor="#333236" />
            <stop offset=".55" stopColor="#79777c" />
            <stop offset="1" stopColor="#242326" />
          </linearGradient>
          <linearGradient id={`${id}-wallpaper`} x2=".8" y2="1">
            <stop stopColor="#fff0ee" />
            <stop offset=".5" stopColor="#ff90c1" />
            <stop offset="1" stopColor="#dfc9fa" />
          </linearGradient>
          <clipPath id={`${id}-screen`}>
            <rect x="23" y="18" width="194" height="414" rx="30" />
          </clipPath>
        </defs>
        <ellipse
          cx="120"
          cy="441"
          rx="84"
          ry="6"
          fill="#42001c"
          opacity=".08"
        />
        <path
          d="M15 76v17m0 15v29m0 12v29m210-59v45"
          stroke="#77747a"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect
          x="16"
          y="10"
          width="208"
          height="430"
          rx="38"
          fill={`url(#${id}-metal)`}
          stroke="#a7a4a9"
        />
        <rect
          x="19"
          y="13"
          width="202"
          height="424"
          rx="35"
          fill="#101013"
          stroke="#262528"
        />
        <g clipPath={`url(#${id}-screen)`}>
          <rect
            x="23"
            y="18"
            width="194"
            height="414"
            fill={step === 2 ? `url(#${id}-wallpaper)` : "#f7f7f9"}
          />
          {step === 2 ? (
            <>
              <circle cx="211" cy="283" r="130" fill="#fff0ee" opacity=".46" />
              <circle cx="27" cy="348" r="104" fill="#af79f3" opacity=".2" />
              {[0, 1, 2, 3].map((n) => (
                <rect
                  key={n}
                  x={38 + n * 44}
                  y="83"
                  width="32"
                  height="32"
                  rx="9"
                  fill="#ffffff"
                  opacity=".55"
                />
              ))}
              <g transform="translate(38 140)">
                <rect
                  width="36"
                  height="36"
                  rx="10"
                  fill="#ff90c1"
                  stroke="#42001c12"
                />
                <g transform="translate(7 10) rotate(8 11 8)">
                  <rect width="22" height="16" rx="5" fill="#42001c" />
                  <rect x="5" y="5" width="4" height="5" rx="1.5" fill="#fff" />
                  <rect
                    x="14"
                    y="5"
                    width="4"
                    height="5"
                    rx="1.5"
                    fill="#fff"
                  />
                </g>
              </g>
              <text
                x="56"
                y="190"
                textAnchor="middle"
                fontSize="9"
                fill="#42001c"
              >
                Kardy
              </text>
              <rect
                x="33"
                y="360"
                width="174"
                height="54"
                rx="20"
                fill="#fff"
                opacity=".55"
              />
              {["#51ad79", "#539cce", "#51ad79"].map((color, n) => (
                <rect
                  key={color + n}
                  x={49 + n * 54}
                  y="370"
                  width="34"
                  height="34"
                  rx="10"
                  fill={color}
                />
              ))}
              <path
                d="M59 381q2-4 4 0l2 4q-2 2 3 5l3-2 3 3q0 5-5 3-11-5-10-13"
                fill="none"
                stroke="#fff"
                strokeWidth="1.6"
              />
              <circle
                cx="120"
                cy="387"
                r="10"
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
              />
              <ellipse
                cx="120"
                cy="387"
                rx="4"
                ry="10"
                fill="none"
                stroke="#fff"
                strokeWidth="1.2"
              />
              <path d="M110 387h20" stroke="#fff" />
              <path d="M164 380h18v12h-8l-5 4v-4h-5z" fill="#fff" />
            </>
          ) : (
            <>
              <text x="37" y="90" fontSize="10" fill="#77717a">
                Good morning
              </text>
              <text
                x="37"
                y="111"
                fontSize="21"
                fontWeight="700"
                fill="#42001c"
              >
                Your wallet
              </text>
              <rect
                x="36"
                y="127"
                width="168"
                height="112"
                rx="16"
                fill="#ff90c1"
              />
              <text
                x="49"
                y="152"
                fontSize="12"
                fontWeight="700"
                fill="#42001c"
              >
                Your memberships
              </text>
              <rect
                x="48"
                y="169"
                width="144"
                height="50"
                rx="10"
                fill="#fff"
              />
              {[0, 1, 2, 3, 4].map((n) => (
                <circle
                  key={n}
                  cx={64 + n * 27}
                  cy="190"
                  r="6"
                  fill={n < 3 ? "#42001c" : "#f3e4eb"}
                />
              ))}
              {step === 0 ? (
                <>
                  <rect
                    x="23"
                    y="254"
                    width="194"
                    height="178"
                    rx="17"
                    fill="#ececf0"
                    stroke="#d9d9df"
                  />
                  <rect
                    x="102"
                    y="261"
                    width="36"
                    height="4"
                    rx="2"
                    fill="#c5c5cb"
                  />
                  <rect
                    x="35"
                    y="277"
                    width="26"
                    height="26"
                    rx="7"
                    fill="#ff90c1"
                  />
                  <text
                    x="48"
                    y="295"
                    textAnchor="middle"
                    fontSize="17"
                    fontWeight="700"
                    fill="#42001c"
                  >
                    K
                  </text>
                  <text
                    x="68"
                    y="287"
                    fontSize="10"
                    fontWeight="600"
                    fill="#222"
                  >
                    Kardy
                  </text>
                  <text x="68" y="300" fontSize="8" fill="#6d6d76">
                    getkardy.com
                  </text>
                  <rect
                    x="33"
                    y="316"
                    width="174"
                    height="32"
                    rx="9"
                    fill="#fff"
                  />
                  <text x="44" y="336" fontSize="10" fill="#242429">
                    Copy
                  </text>
                  <rect
                    x="33"
                    y="353"
                    width="174"
                    height="38"
                    rx="9"
                    fill="#fff0ee"
                    stroke="#ff90c1"
                    strokeWidth="2"
                  />
                  <text
                    x="44"
                    y="376"
                    fontSize="10"
                    fontWeight="600"
                    fill="#42001c"
                  >
                    Add to Home Screen
                  </text>
                  <rect
                    x="184"
                    y="365"
                    width="13"
                    height="13"
                    rx="3"
                    fill="none"
                    stroke="#42001c"
                  />
                  <path d="M190.5 368v7m-3.5-3.5h7" stroke="#42001c" />
                  <text
                    x="120"
                    y="411"
                    textAnchor="middle"
                    fontSize="8"
                    fill="#6d6d76"
                  >
                    Safari · Share menu
                  </text>
                </>
              ) : (
                <>
                  <rect
                    x="23"
                    y="65"
                    width="194"
                    height="367"
                    rx="18"
                    fill="#f2f2f7"
                  />
                  <text x="35" y="91" fontSize="10" fill="#575761">
                    Cancel
                  </text>
                  <text
                    x="120"
                    y="116"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="600"
                    fill="#242429"
                  >
                    Add to Home Screen
                  </text>
                  <rect
                    x="172"
                    y="74"
                    width="36"
                    height="26"
                    rx="13"
                    fill="#ff90c1"
                  />
                  <text
                    x="190"
                    y="91"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="600"
                    fill="#42001c"
                  >
                    Add
                  </text>
                  <rect
                    x="35"
                    y="137"
                    width="170"
                    height="64"
                    rx="12"
                    fill="#fff"
                  />
                  <rect
                    x="45"
                    y="149"
                    width="37"
                    height="37"
                    rx="10"
                    fill="#ff90c1"
                  />
                  <text
                    x="63"
                    y="174"
                    textAnchor="middle"
                    fontSize="24"
                    fontWeight="700"
                    fill="#42001c"
                  >
                    K
                  </text>
                  <text x="93" y="164" fontSize="12" fill="#242429">
                    Kardy
                  </text>
                  <text x="93" y="181" fontSize="8" fill="#767680">
                    getkardy.com
                  </text>
                  <rect
                    x="35"
                    y="218"
                    width="170"
                    height="42"
                    rx="11"
                    fill="#fff"
                  />
                  <text x="45" y="244" fontSize="10" fill="#242429">
                    Open as Web App
                  </text>
                  <rect
                    x="166"
                    y="229"
                    width="30"
                    height="20"
                    rx="10"
                    fill="#34c759"
                  />
                  <circle cx="186" cy="239" r="8" fill="#fff" />
                  <text x="43" y="279" fontSize="8" fill="#6d6d76">
                    Open Kardy in its own window.
                  </text>
                </>
              )}
            </>
          )}
          <text x="39" y="43" fontSize="9" fontWeight="600" fill="#18181b">
            9:41
          </text>
          <path d="M174 42v-3m3 3v-5m3 5v-7" stroke="#18181b" strokeWidth="2" />
          <path
            d="M185 37q4-4 8 0m-6 2q2-2 4 0"
            fill="none"
            stroke="#18181b"
            strokeWidth="1.2"
          />
          <circle cx="189" cy="41" r=".8" fill="#18181b" />
          <rect
            x="197"
            y="35"
            width="11"
            height="7"
            rx="2"
            fill="none"
            stroke="#18181b"
            strokeWidth=".8"
          />
          <rect x="199" y="37" width="7" height="3" rx=".6" fill="#18181b" />
          <rect x="82" y="26" width="76" height="21" rx="11" fill="#08080a" />
          <circle cx="147" cy="36.5" r="3" fill="#172035" />
          <circle cx="146" cy="35.5" r="1" fill="#334361" />
          <path
            d="M88 424h64"
            stroke="#18181b"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    );
  };

  const iphone = platform === "iphone";
  const steps = [
    {
      title: iphone ? "1. Open Share" : "1. Open the menu",
      action: iphone ? "Share ↑" : "More ⋮",
      detail: iphone
        ? "In Safari, open Share and choose Add to Home Screen. Share may be inside More."
        : "In Chrome, tap the three dots next to the address bar.",
    },
    {
      title: "2. Add Kardy",
      action: iphone ? "Add to Home Screen" : "Install app",
      detail: iphone
        ? "Keep Open as Web App on if shown, then tap Add."
        : "Choose Add to Home screen, then Install and confirm.",
    },
    {
      title: "3. Open your wallet",
      action: "Kardy",
      detail: "Tap the Kardy icon. Sign in with your existing account.",
    },
  ];
  return (
    <figure
      style={{
        margin: "24px 0",
        padding: 16,
        border: "1px solid #42001c18",
        borderRadius: 20,
        background: "#fff",
        color: "#42001c",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
          gap: 16,
        }}
      >
        {steps.map((step, index) => (
          <div key={step.title}>
            {iphone ? (
              <IPhoneInstallScreen step={index} />
            ) : (
              <svg
                viewBox="0 0 220 245"
                fontFamily="Inter, Arial, sans-serif"
                aria-hidden="true"
                style={{
                  display: "block",
                  width: "100%",
                  maxWidth: 240,
                  margin: "0 auto",
                }}
              >
                <rect
                  x="23"
                  y="5"
                  width="174"
                  height="232"
                  rx="25"
                  fill="#fff"
                  stroke="#42001c"
                  strokeWidth="3"
                />
                <rect
                  x="87"
                  y="14"
                  width="46"
                  height="7"
                  rx="4"
                  fill="#42001c"
                />
                {index < 2 ? (
                  <>
                    <rect
                      x="34"
                      y="32"
                      width="152"
                      height="27"
                      rx="8"
                      fill="#FFF0EE"
                    />
                    <text x="43" y="50" fontSize="12" fill="#42001c">
                      getkardy.com
                    </text>
                    <text
                      x="42"
                      y="92"
                      fontSize="18"
                      fontWeight="700"
                      fill="#42001c"
                    >
                      {index === 0 ? "Your wallet" : "Add Kardy"}
                    </text>
                    <rect
                      x="34"
                      y="110"
                      width="152"
                      height="44"
                      rx="9"
                      fill={iphone ? "#FF90C1" : "#dec6ff"}
                    />
                    <text
                      x="110"
                      y="137"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#42001c"
                    >
                      {step.action}
                    </text>
                    {index === 1 && (
                      <>
                        <text
                          x="110"
                          y="176"
                          textAnchor="middle"
                          fontSize="10"
                          fill="#42001c"
                        >
                          {iphone
                            ? "Open as Web App: ON"
                            : "Install to your device"}
                        </text>
                        <rect
                          x="58"
                          y="190"
                          width="104"
                          height="29"
                          rx="8"
                          fill="#42001c"
                        />
                        <text
                          x="110"
                          y="209"
                          textAnchor="middle"
                          fontSize="12"
                          fill="#fff"
                        >
                          {iphone ? "Add" : "Install"}
                        </text>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <rect
                      x="34"
                      y="33"
                      width="152"
                      height="189"
                      rx="14"
                      fill="#FFF0EE"
                    />
                    <rect
                      x="82"
                      y="66"
                      width="56"
                      height="56"
                      rx="15"
                      fill="#FF90C1"
                    />
                    <g transform="translate(94 82) rotate(8 16 12)">
                      <rect width="32" height="24" rx="7" fill="#42001c" />
                      <rect
                        x="8"
                        y="8"
                        width="5"
                        height="7"
                        rx="2"
                        fill="#fff"
                      />
                      <rect
                        x="20"
                        y="8"
                        width="5"
                        height="7"
                        rx="2"
                        fill="#fff"
                      />
                    </g>
                    <text
                      x="110"
                      y="144"
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="700"
                      fill="#42001c"
                    >
                      Kardy
                    </text>
                    <text
                      x="110"
                      y="181"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#42001c"
                    >
                      One tap to open.
                    </text>
                    <text
                      x="110"
                      y="198"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#42001c"
                    >
                      No browser tabs.
                    </text>
                  </>
                )}
                <path
                  d="M88 229h44"
                  stroke="#42001c"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            )}
            <p style={{ margin: "12px 0 4px", fontWeight: 700, fontSize: 15 }}>
              {step.title}
            </p>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6 }}>
              {step.detail}
            </p>
          </div>
        ))}
      </div>
      <figcaption style={{ marginTop: 16, fontSize: 11, color: "#68515b" }}>
        Simplified {iphone ? "Safari" : "Chrome"} illustrations, not exact
        screenshots. Menu names and positions vary by device.
      </figcaption>
    </figure>
  );
};
