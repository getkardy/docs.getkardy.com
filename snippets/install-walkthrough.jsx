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
            <rect x="23" y="18" width="194" height="414" rx="26" />
          </clipPath>
          <clipPath id={`${id}-card`}>
            <rect x="36" y="127" width="168" height="216" rx="12" />
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
          rx="30"
          fill={`url(#${id}-metal)`}
          stroke="#a7a4a9"
        />
        <rect
          x="19"
          y="13"
          width="202"
          height="424"
          rx="28"
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
              <g clipPath={`url(#${id}-card)`}>
                <rect x="36" y="127" width="168" height="216" fill="#eee5ff" />
                <image
                  href="/images/landing/wallet-drift.svg"
                  x="36"
                  y="127"
                  width="168"
                  height="216"
                  preserveAspectRatio="xMidYMid slice"
                />
                <rect x="36" y="127" width="168" height="44" fill="#ffffffcc" />
                <image
                  href="/images/landing/sunday-coffee-wordmark.svg"
                  x="46"
                  y="135"
                  width="90"
                  height="32"
                />
                <rect
                  x="46"
                  y="177"
                  width="148"
                  height="76"
                  rx="9"
                  fill="#fff"
                />
                {Array.from({ length: 10 }, (_, n) => (
                  <g
                    key={n}
                    transform={`translate(${56 + (n % 5) * 27} ${187 + Math.floor(n / 5) * 23}) scale(.55)`}
                  >
                    <path
                      d={
                        n === 9
                          ? "M4 8h12v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z M16 9h2a3 3 0 0 1 0 6h-2 M7 3v2m4-3v3m4-2v2"
                          : "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"
                      }
                      fill={n < 7 ? "#42001c" : "none"}
                      stroke={n < 7 ? "#42001c" : "#71717a"}
                      strokeWidth="1.4"
                    />
                  </g>
                ))}
                <text x="55" y="244" fontSize="7" fill="#3f3f46">
                  7 / 10 stamps
                </text>
                <rect
                  x="94"
                  y="267"
                  width="52"
                  height="52"
                  rx="4"
                  fill="#fff"
                />
                <image
                  href="/images/sample-wallet-qr.svg"
                  x="98"
                  y="271"
                  width="44"
                  height="44"
                />
                <text
                  x="120"
                  y="331"
                  textAnchor="middle"
                  fontSize="6"
                  fill="#42001c"
                >
                  Preview only
                </text>
              </g>
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
          <rect x="93" y="23" width="54" height="16" rx="8" fill="#08080a" />
          <circle cx="138" cy="31" r="2.5" fill="#252636" />
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

  const AndroidInstallScreen = ({ step }) => (
    <svg
      viewBox="0 0 240 450"
      fontFamily="Inter, Arial, sans-serif"
      aria-hidden="true"
      style={{
        display: "block",
        width: "100%",
        maxWidth: 260,
        margin: "0 auto",
      }}
    >
      <defs>
        <clipPath id={`android-screen-${step}`}>
          <rect x="23" y="15" width="194" height="418" rx="22" />
        </clipPath>
        <linearGradient id={`android-wallpaper-${step}`} x2="1" y2="1">
          <stop stopColor="#E3EBDD" />
          <stop offset=".6" stopColor="#D8DFEA" />
          <stop offset="1" stopColor="#C2CEBC" />
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="441" rx="80" ry="5" fill="#202124" opacity=".07" />
      <path
        d="M222 89v31m0 18v47"
        stroke="#75777A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="18"
        y="10"
        width="204"
        height="428"
        rx="27"
        fill="#343639"
        stroke="#9C9EA2"
        strokeWidth="1.2"
      />
      <rect x="21" y="13" width="198" height="422" rx="24" fill="#111214" />
      <g clipPath={`url(#android-screen-${step})`}>
        <rect
          x="23"
          y="15"
          width="194"
          height="418"
          fill={step === 2 ? `url(#android-wallpaper-${step})` : "#FAFAFA"}
        />
        <text x="35" y="33" fontSize="8" fontWeight="600" fill="#303438">
          9:41
        </text>
        <path d="M179 30h2m2-2v2m2-4v4" stroke="#51565B" strokeWidth="1.5" />
        <rect
          x="192"
          y="24"
          width="10"
          height="6"
          rx="1"
          stroke="#51565B"
          fill="none"
          strokeWidth=".8"
        />
        <rect x="194" y="26" width="6" height="2" fill="#51565B" />
        {step < 2 ? (
          <>
            <rect
              x="31"
              y="47"
              width="157"
              height="27"
              rx="13.5"
              fill="#EBEDF0"
            />
            <text x="44" y="64" fontSize="9" fill="#45494E">
              getkardy.com
            </text>
            <g fill="#45494E">
              <circle cx="202" cy="56" r="1.2" />
              <circle cx="202" cy="60.5" r="1.2" />
              <circle cx="202" cy="65" r="1.2" />
            </g>
            <text x="35" y="100" fontSize="7" fill="#7B8078">
              Good morning, Amelia
            </text>
            <text x="35" y="123" fontSize="19" fontWeight="600" fill="#273025">
              Your wallet
            </text>
            <rect
              x="34"
              y="140"
              width="172"
              height="225"
              rx="13"
              fill="#EEE7F8"
            />
            <image
              href="/images/landing/wallet-drift.svg"
              x="34"
              y="140"
              width="172"
              height="225"
              preserveAspectRatio="xMidYMid slice"
            />
            <image
              href="/images/landing/sunday-coffee-wordmark.svg"
              x="45"
              y="154"
              width="74"
              height="27"
            />
            <rect x="43" y="210" width="154" height="72" rx="10" fill="white" />
            <text x="56" y="234" fontSize="13" fill="#42001C">
              ♥ ♥ ♥ ♥ ♥
            </text>
            <text x="56" y="254" fontSize="13" fill="#42001C">
              ♥ ♥ ♡ ♡ ♡
            </text>
            <text x="54" y="272" fontSize="7" fill="#74747D">
              7 / 10 stamps
            </text>
            <rect x="96" y="299" width="48" height="48" rx="5" fill="white" />
            <image
              href="/images/sample-wallet-qr.svg"
              x="100"
              y="303"
              width="40"
              height="40"
            />
            {step === 0 ? (
              <>
                <rect
                  x="65"
                  y="77"
                  width="144"
                  height="215"
                  rx="12"
                  fill="#202124"
                  opacity=".08"
                />
                <rect
                  x="62"
                  y="74"
                  width="144"
                  height="215"
                  rx="12"
                  fill="#F1F3F7"
                  stroke="#E0E3E8"
                />
                <g fontSize="9" fill="#44474C">
                  <text x="77" y="98">
                    New tab
                  </text>
                  <text x="77" y="123">
                    New incognito tab
                  </text>
                  <text x="77" y="155">
                    History
                  </text>
                  <text x="77" y="180">
                    Downloads
                  </text>
                  <text x="77" y="205">
                    Bookmarks
                  </text>
                </g>
                <path d="M72 136h124" stroke="#DDE0E5" />
                <rect
                  x="69"
                  y="221"
                  width="130"
                  height="29"
                  rx="7"
                  fill="#DFE9FA"
                />
                <text
                  x="77"
                  y="240"
                  fontSize="9"
                  fontWeight="600"
                  fill="#244D88"
                >
                  Add to Home screen
                </text>
                <text x="77" y="274" fontSize="9" fill="#44474C">
                  Settings
                </text>
              </>
            ) : (
              <>
                <rect
                  x="23"
                  y="42"
                  width="194"
                  height="391"
                  fill="#202124"
                  opacity=".22"
                />
                <rect
                  x="35"
                  y="165"
                  width="170"
                  height="151"
                  rx="20"
                  fill="#F4F6FA"
                />
                <rect
                  x="51"
                  y="183"
                  width="29"
                  height="29"
                  rx="8"
                  fill="#FF90C1"
                />
                <image
                  href="/images/landing/mcp-mascot.svg"
                  x="56"
                  y="190"
                  width="19"
                  height="15"
                />
                <text
                  x="90"
                  y="195"
                  fontSize="11"
                  fontWeight="600"
                  fill="#30343B"
                >
                  Install Kardy?
                </text>
                <text x="90" y="209" fontSize="8" fill="#757A82">
                  getkardy.com
                </text>
                <text x="51" y="237" fontSize="9" fill="#5E636D">
                  Add the app to your device.
                </text>
                <text x="90" y="289" fontSize="9" fill="#2556A2">
                  Cancel
                </text>
                <rect
                  x="132"
                  y="270"
                  width="57"
                  height="29"
                  rx="14.5"
                  fill="#D8E6FF"
                />
                <text
                  x="160"
                  y="289"
                  fontSize="9"
                  fontWeight="600"
                  fill="#2556A2"
                  textAnchor="middle"
                >
                  Install
                </text>
              </>
            )}
          </>
        ) : (
          <>
            <circle cx="207" cy="202" r="147" fill="#EDF1E6" opacity=".7" />
            <circle cx="33" cy="394" r="144" fill="#BBCABE" opacity=".55" />
            <text x="40" y="86" fontSize="12" fill="#3D493D">
              Tuesday, 15 September
            </text>
            <text x="39" y="136" fontSize="42" fontWeight="300" fill="#3D493D">
              09:41
            </text>
            <rect
              x="43"
              y="208"
              width="43"
              height="43"
              rx="13"
              fill="#FF90C1"
            />
            <image
              href="/images/landing/mcp-mascot.svg"
              x="52"
              y="221"
              width="25"
              height="18"
            />
            <text
              x="64"
              y="267"
              textAnchor="middle"
              fontSize="9"
              fill="#354034"
            >
              Kardy
            </text>
            <rect
              x="39"
              y="367"
              width="162"
              height="33"
              rx="16.5"
              fill="#F8FAF7"
              opacity=".9"
            />
            <text x="53" y="388" fontSize="12" fontWeight="600" fill="#4285F4">
              G
            </text>
            <text x="77" y="387" fontSize="9" fill="#7A8078">
              Search
            </text>
          </>
        )}
        <rect x="89" y="423" width="62" height="3" rx="1.5" fill="#25282B" />
      </g>
      <circle cx="120" cy="27" r="3.6" fill="#111214" />
      <circle cx="120" cy="27" r="1.6" fill="#202A37" />
    </svg>
  );

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
              <AndroidInstallScreen step={index} />
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
