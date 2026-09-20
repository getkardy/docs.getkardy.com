// Portable landing-style scenes. No app imports, account data or live controls.
// Mintlify evaluates the exported component in isolation; keep helpers in scope.
export const FeatureIllustration = ({ type }) => {
  const FeatureIcon = ({ name = "coffee" }) => {
    const paths = {
      coffee:
        "M4 8h12v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z M16 9h2a3 3 0 0 1 0 6h-2 M7 3v2m4-3v3m4-2v2",
      check: "m5 12 4 4L19 6",
      heart:
        "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",
      activity: "M3 12h4l3-9 4 18 3-9h4",
      arrow: "M4 12h16m-6-6 6 6-6 6",
      people:
        "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.9 M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8m8 0a4 4 0 0 1 0 8",
      pin: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
      wallet: "M3 6h16v14H3V6Zm0 0 13-3v3m-2 6h7v5h-7v-5Z",
      mail: "M3 5h18v14H3V5Zm0 0 9 8 9-8",
      plug: "M8 3v5m8-5v5M6 8h12v5a6 6 0 0 1-12 0V8Zm6 11v3",
      gift: "M3 8h18v4H3V8Zm2 4v9h14v-9M12 8v13m0-13H8a3 3 0 1 1 3-3l1 3Zm0 0h4a3 3 0 1 0-3-3l-1 3Z",
      search: "M16 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-1 5 6 6",
      lock: "M5 10h14v11H5V10Zm3 0V6a4 4 0 0 1 8 0v4m-4 5v2",
      sliders: "M4 6h16M4 12h16M4 18h16M8 3v6m8 0v6m-6 0v6",
      wrench:
        "M14.7 6.3a5.5 5.5 0 0 0-7 7L3 18a2.1 2.1 0 0 0 3 3l4.7-4.7a5.5 5.5 0 0 0 7-7l-4 4-3-3 4-4Z",
    };
    return (
      <svg
        className="bf-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={paths[name] || paths.coffee} />
      </svg>
    );
  };
  const FeatureBrand = ({ name = "sunday-coffee" }) => (
    <img
      className="bf-brand"
      src={`/images/landing/${name}-wordmark.svg`}
      alt=""
    />
  );
  const FeatureAvatar = ({ name }) => (
    <span className="bf-avatar">
      <img
        src={`/images/avatar-${name.toLowerCase().replaceAll(" ", "-")}.png`}
        alt=""
      />
    </span>
  );
  const FeatureRow = ({ title, detail, end, icon }) => (
    <div className="bf-row">
      {icon && <FeatureIcon name={icon} />}
      <div>
        <b>{title}</b>
        {detail && <small>{detail}</small>}
      </div>
      {end && <span className="bf-row-end">{end}</span>}
    </div>
  );
  const FeatureField = ({ label, value }) => (
    <div className="bf-field">
      <small>{label}</small>
      <div>{value}</div>
    </div>
  );
  const FeaturePill = ({ children }) => (
    <span className="bf-pill">{children}</span>
  );
  const FeaturePanel = ({ title, subtitle, children }) => (
    <div className="bf-panel">
      {title && (
        <div className="bf-panel-title">
          <b>{title}</b>
          {subtitle && <small>{subtitle}</small>}
        </div>
      )}
      {children}
    </div>
  );
  const FeatureCard = ({ full = false }) => (
    <div className="bf-landing-card">
      <div className="bf-landing-card-brand">
        <FeatureBrand />
      </div>
      <div className="bf-landing-stamp-panel">
        <div className="bf-landing-stamps">
          {Array.from({ length: 10 }, (_, i) => (
            <span
              key={i}
              data-filled={i < (full ? 10 : 7)}
              data-reward={i === 9}
            >
              <FeatureIcon name={i === 9 ? "coffee" : "heart"} />
            </span>
          ))}
        </div>
        <span className="bf-landing-stamp-count">
          {full ? 10 : 7} / 10 stamps
        </span>
      </div>
      <div className="bf-landing-card-qr">
        <img src="/images/sample-wallet-qr.svg" alt="" />
        <span>Preview only</span>
      </div>
    </div>
  );
  const FeatureBranches = ({ children }) => (
    <>
      <svg className="bf-wires" viewBox="0 0 480 46" preserveAspectRatio="none">
        <path d="M240 0V46M240 0v10q0 13-13 13H80q-13 0-13 13v10M240 0v10q0 13 13 13h147q13 0 13 13v10" />
      </svg>
      <div className="bf-branches">{children}</div>
    </>
  );
  const FeaturePerson = ({ name, detail, green }) => (
    <div className="bf-person">
      <FeatureAvatar name={name} green={green} />
      <div>
        <b>{name}</b>
        <small>{detail}</small>
      </div>
    </div>
  );
  // Shared portrait shell, proportioned like the consumer login preview.
  const FeaturePhone = ({ children }) => (
    <div className="bf-phone">
      <div className="bf-phone-screen">
        <div className="bf-phone-status" aria-hidden="true">
          <span>9:41</span>
          <i />
          <svg className="bf-phone-connection" viewBox="0 0 42 14" fill="none">
            <path
              d="M2 11V9m3 2V7m3 4V5m3 6V3"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M16 5q5-5 10 0m-8 2q3-3 6 0m-4 2q1-1 2 0"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <rect
              x="30"
              y="3"
              width="9"
              height="8"
              rx="2"
              stroke="currentColor"
            />
            <path d="M41 6v2" stroke="currentColor" />
            <rect
              x="32"
              y="5"
              width="5"
              height="4"
              rx=".5"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="bf-phone-content">{children}</div>
        <div className="bf-home-bar" />
      </div>
    </div>
  );
  const featureSceneCopy = {
    "branded-cards": [
      "sliders",
      "Branded cards",
      "Your brand.",
      "In their wallet.",
    ],
    rewards: [
      "gift",
      "Stamps & rewards",
      "Make every stamp",
      "worth coming back for.",
    ],
    scanning: [
      "search",
      "Scan & redeem",
      "One identity.",
      "One confirmed action.",
    ],
    referrals: [
      "people",
      "Referral programme",
      "Bring a friend.",
      "Both get rewarded.",
    ],
    "qr-signs": ["pin", "QR signs", "At your counter.", "Into their wallet."],
    "join-pages": [
      "people",
      "Customer join pages",
      "Your next regular",
      "starts here.",
    ],
    "browser-wallet": [
      "wallet",
      "Browser wallet",
      "Open in a browser.",
      "Keep on the home screen.",
    ],
    "native-wallets": [
      "wallet",
      "Native wallet passes",
      "Another way",
      "to keep your card close.",
    ],
    "kardy-rewards": [
      "search",
      "The Kardy Rewards",
      "Get discovered.",
      "Become their usual.",
    ],
    "email-preferences": [
      "mail",
      "Email preferences",
      "Their inbox.",
      "Their choice.",
    ],
    members: [
      "people",
      "Members",
      "Know your regulars.",
      "See their progress.",
    ],
    analytics: ["sliders", "Reporting", "Your programme.", "At a glance."],
    outlets: ["pin", "Outlets", "Different neighbourhoods.", "One programme."],
    "team-access": ["people", "Team access", "Your team.", "The right access."],
    "multiple-brands": [
      "people",
      "Multiple brands",
      "Your brands.",
      "One merchant account.",
    ],
    broadcasts: ["mail", "Broadcasts", "A little news.", "Another visit."],
    "merchant-mcp": [
      "plug",
      "Merchant MCP",
      "Your favourite agent.",
      "Meet your workspace.",
    ],
    "usage-limits": [
      "sliders",
      "Usage & limits",
      "Room to grow.",
      "Clear boundaries.",
    ],
  };
  const FeatureScene = ({ type }) => {
    if (type === "branded-cards" || type === "rewards")
      return (
        <div className="bf-pair">
          <FeaturePanel
            title={type === "rewards" ? "Your reward" : "Card design"}
          >
            <FeatureField
              label={type === "rewards" ? "Reward" : "Business name"}
              value={type === "rewards" ? "A coffee, on us" : "Sunday Coffee"}
            />
            {type === "rewards" ? (
              <>
                <FeatureField label="Stamps to unlock" value="10 stamps" />
                <FeatureRow
                  title="Redeem at"
                  detail="Orchard outlet"
                  icon="pin"
                />
              </>
            ) : (
              <>
                <small className="bf-label">Brand colour</small>
                <div className="bf-swatches">
                  {["#ca1c67", "#e5b8c9", "#dbe5ce", "#171a18"].map(
                    (color, i) => (
                      <span key={color} style={{ background: color }}>
                        {i === 0 && <FeatureIcon name="check" />}
                      </span>
                    ),
                  )}
                </div>
                <FeatureRow
                  title="Saved design"
                  detail="Drift artwork · heart stamps"
                  icon="sliders"
                />
              </>
            )}
          </FeaturePanel>
          <div className="bf-card-wrap">
            <small className="bf-label">MEMBER CARD PREVIEW</small>
            <FeatureCard />
          </div>
        </div>
      );
    if (type === "referrals")
      return (
        <>
          <div className="bf-pair">
            <FeaturePanel>
              <FeaturePerson name="Jamie" detail="Your conversation" />
              <div className="bf-chat">
                Coffee at my usual spot? Use my invite—we both get bonus stamps
                after your first purchase.
              </div>
              <div className="bf-invite">
                <FeatureBrand />
                <FeatureRow title="Join with Amelia’s invite" end="↗" />
              </div>
              <small className="bf-receipt">Sent by Amelia ✓✓</small>
            </FeaturePanel>
            <FeaturePanel title="First purchase" subtitle="At Sunday Coffee">
              <div className="bf-coffee">
                <FeatureIcon />
              </div>
              <FeatureRow
                title="Purchase confirmed"
                detail="Staff issue Jamie’s first stamp."
                icon="check"
              />
              <FeaturePill>Qualification complete</FeaturePill>
            </FeaturePanel>
          </div>
          <div className="bf-bonus">
            <span className="bf-label">BOTH EARN BONUS STAMPS</span>
            <div className="bf-pair">
              <div>
                <FeaturePerson name="Amelia" detail="Invited a friend" />
                <strong>
                  +2 <small>bonus stamps</small>
                </strong>
              </div>
              <div>
                <FeaturePerson
                  name="Jamie"
                  detail="Joined through the invite"
                  green
                />
                <strong>
                  +1 <small>bonus stamp</small>
                </strong>
              </div>
            </div>
            <small>
              After the first qualifying purchase and staff-issued stamp—not
              just signup.
            </small>
          </div>
        </>
      );
    if (type === "merchant-mcp")
      return (
        <>
          <FeaturePanel>
            <div className="bf-mcp-header">
              <span className="bf-mcp-mark">
                <img src="/images/landing/mcp-mascot.svg" alt="" />
              </span>
              <div className="bf-mcp-identity">
                <div className="bf-mcp-lockup">
                  <img src="/images/landing/mcp-logo.svg" alt="" />
                  <span>MCP</span>
                </div>
                <small>Your merchant workspace</small>
              </div>
              <FeaturePill>3 tools</FeaturePill>
            </div>
            {[
              ["get_programme", "Your brand, at a glance"],
              ["list_rewards", "Rewards & stamp goals"],
              ["list_outlets", "Where rewards can be claimed"],
            ].map(([name, description]) => (
              <div className="bf-tool" key={name}>
                <FeatureIcon name="wrench" />
                <div>
                  <span>{name}</span>
                  <small>{description}</small>
                </div>
                <FeatureIcon name="check" />
              </div>
            ))}
            <div className="bf-split-note">
              <span className="bf-mcp-access">
                <FeatureIcon name="lock" />
                Read-only access
              </span>
              <span>Owner-approved OAuth</span>
            </div>
          </FeaturePanel>
          <FeatureBranches>
            {["Claude", "Codex", "Other clients"].map((name, i) => (
              <div className="bf-client" key={name}>
                <span className={`bf-client-mark bf-client-${i}`}>
                  {i < 2 ? (
                    <img
                      src={`/images/landing/${i === 1 ? "mcp-codex" : "claude"}.svg`}
                      alt=""
                    />
                  ) : (
                    <FeatureIcon name="plug" />
                  )}
                </span>
                <b>{name}</b>
              </div>
            ))}
          </FeatureBranches>
          <div className="bf-under-note bf-mcp-boundary">
            One merchant. Your permissions. Your choice of agent.
          </div>
          <div className="bf-example">
            Example connection · Owner approval required
          </div>
        </>
      );
    if (type === "broadcasts")
      return (
        <FeaturePanel>
          <FeatureRow
            title="Sunday Coffee"
            detail="Member broadcast"
            end={<FeaturePill>Draft</FeaturePill>}
            icon="coffee"
          />
          <FeatureField label="To" value="Opted-in members only" />
          <div className="bf-email">
            <small>SUBJECT</small>
            <b>Something new is brewing.</b>
            <span>Your next neighbourhood favourite is here.</span>
            <span>Come by this weekend and try our new menu.</span>
          </div>
          <div className="bf-split-note">
            <span>Unsubscribe · Manage preferences</span>
            <span>Preview only</span>
          </div>
        </FeaturePanel>
      );
    if (type === "members")
      return (
        <FeaturePanel
          title="Members"
          subtitle="Sunday Coffee · example records"
        >
          <div className="bf-search">
            <FeatureIcon name="search" />
            Search members
          </div>
          {[
            ["Amelia", "5 / 8 stamps"],
            ["Jamie", "2 / 8 stamps"],
            ["Sarah", "Ready to redeem"],
          ].map(([name, detail], i) => (
            <div className="bf-member-row" key={name}>
              <FeaturePerson
                name={name}
                detail="Active membership"
                green={i === 1}
              />
              <FeaturePill>{detail}</FeaturePill>
            </div>
          ))}
        </FeaturePanel>
      );
    if (type === "analytics")
      return (
        <FeaturePanel
          title="Overview"
          subtitle="This month · UTC · example data"
        >
          <div className="bf-metrics">
            {[
              ["Visits", "248"],
              ["Rewards redeemed", "38"],
              ["Active stores", "2"],
            ].map(([label, value]) => (
              <div key={label}>
                <small>{label}</small>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <FeatureRow
            title="Location performance"
            detail="Visits and redemptions by outlet"
            icon="pin"
          />
          <FeatureRow
            title="Orchard"
            detail="164 recorded visits"
            end="26 claims"
          />
          <FeatureRow
            title="Joo Chiat"
            detail="84 recorded visits"
            end="12 claims"
          />
        </FeaturePanel>
      );
    if (type === "usage-limits")
      return (
        <FeaturePanel
          title="Usage & limits"
          subtitle="Illustrative Growth workspace"
        >
          <div className="bf-usage">
            <FeatureRow title="Stored members" end="800 / 1,000" />
            <div className="bf-meter">
              <span style={{ width: "80%" }} />
            </div>
            <FeaturePill>80% used · plan ahead</FeaturePill>
            <FeatureRow
              title="MCP tool calls"
              detail="This UTC calendar month"
              end="250 / 1,000"
            />
            <div className="bf-meter">
              <span style={{ width: "25%" }} />
            </div>
          </div>
          <FeatureRow
            title="Usage stops at the limit"
            detail="No automatic overage billing."
            icon="lock"
          />
        </FeaturePanel>
      );
    if (["outlets", "team-access", "multiple-brands"].includes(type))
      return (
        <>
          <div className="bf-root">
            <FeaturePanel>
              {type === "outlets" ? (
                <FeatureBrand />
              ) : (
                <FeaturePerson
                  name="Amelia Tan"
                  detail={
                    type === "multiple-brands"
                      ? "One merchant account"
                      : "Organisation Owner"
                  }
                />
              )}
            </FeaturePanel>
          </div>
          <FeatureBranches>
            {(type === "outlets"
              ? [
                  ["Orchard", "Active outlet"],
                  ["Joo Chiat", "Active outlet"],
                  ["Tiong Bahru", "Active outlet"],
                ]
              : type === "team-access"
                ? [
                    ["Amelia", "Owner"],
                    ["Daniel", "Manager"],
                    ["Jamie", "Staff"],
                  ]
                : [
                    ["Sunday Coffee", "Owner"],
                    ["Forma Studio", "Manager"],
                    ["Good Company", "Staff"],
                  ]
            ).map(([name, detail], i) => (
              <div className="bf-node" key={name}>
                {type === "outlets" ? (
                  <FeatureIcon name="pin" />
                ) : type === "multiple-brands" ? (
                  <FeatureBrand
                    name={["sunday-coffee", "forma-studio", "good-company"][i]}
                  />
                ) : (
                  <FeatureAvatar name={name} green={i === 1} />
                )}
                <b>{name}</b>
                <small>{detail}</small>
              </div>
            ))}
          </FeatureBranches>
          <div className="bf-under-note">
            {type === "outlets"
              ? "Shared rewards and member progress across the brand."
              : type === "team-access"
                ? "Roles apply to the organisation, not to individual outlets."
                : "Separate teams, programmes and permissions for each brand."}
          </div>
        </>
      );
    if (type === "email-preferences")
      return (
        <FeaturePanel
          title="Email preferences"
          subtitle="Choose separately for each brand"
        >
          {[
            ["Sunday Coffee", true],
            ["Forma Studio", false],
          ].map(([name, enabled]) => (
            <div className="bf-member-row" key={name}>
              <FeatureRow title={name} detail="Member emails" icon="mail" />
              <div className="bf-toggle-wrap">
                <span
                  className={enabled ? "bf-toggle bf-toggle-on" : "bf-toggle"}
                />
                <small>{enabled ? "Opted in" : "Opted out"}</small>
              </div>
            </div>
          ))}
          <FeatureRow
            title="You’re in control"
            detail="Change your choice at any time."
            icon="check"
          />
        </FeaturePanel>
      );
    if (type === "kardy-rewards")
      return (
        <FeaturePanel>
          <div className="bf-search">
            <FeatureIcon name="search" />
            Search places or perks
          </div>
          <div className="bf-categories">
            <FeaturePill>All</FeaturePill>
            <span>Food & drink</span>
            <span>Wellness</span>
          </div>
          <div className="bf-offer">
            <FeatureBrand />
            <div>
              <b>A coffee, on us.</b>
              <FeatureIcon />
            </div>
            <small>Sunday Coffee · member reward</small>
          </div>
        </FeaturePanel>
      );
    if (type === "scanning")
      return (
        <div className="bf-pair">
          <div className="bf-card-wrap">
            <FeatureCard />
            <div className="bf-under-note">Customer shows their Kardy QR</div>
          </div>
          <FeaturePanel title="Membership found" subtitle="Sunday Coffee">
            <FeaturePerson name="Amelia" detail="Active membership" />
            <FeatureRow
              title="7 / 10 stamps"
              detail="A coffee, on us"
              icon="gift"
            />
            <div className="bf-action">Add stamp</div>
            <small className="bf-under-note">
              Staff confirm the action after the purchase. Scanning alone adds
              nothing.
            </small>
          </FeaturePanel>
        </div>
      );
    if (type === "qr-signs")
      return (
        <div className="bf-pair">
          <FeaturePanel title="Join our programme">
            <FeatureBrand />
            <div className="bf-qr-placeholder">
              <FeatureIcon name="search" />
              <span>
                Your generated
                <br />
                join QR
              </span>
            </div>
            <div className="bf-under-note">Sunday Coffee · Orchard</div>
          </FeaturePanel>
          <div className="bf-card-wrap">
            <FeatureField label="Destination" value="Customer join page" />
            <FeatureField label="Outlet" value="Orchard" />
            <FeatureRow
              title="Print, place, test"
              detail="A sign at the counter helps customers join."
              icon="check"
            />
          </div>
        </div>
      );
    if (type === "join-pages")
      return (
        <div className="bf-device-pair">
          <FeaturePhone>
            <FeatureBrand />
            <b className="bf-device-heading">Your next coffee starts here.</b>
            <FeatureField label="Name" value="Amelia Tan" />
            <FeatureField label="Email" value="amelia@example.com" />
            <div className="bf-action">Create account & join</div>
          </FeaturePhone>
          <div className="bf-device-note">
            <FeaturePill>Sunday Coffee</FeaturePill>
            <b>One Kardy account.</b>
            <span>Join this programme with your new or existing account.</span>
            <FeatureRow
              title="Membership ready"
              detail="Then earn stamps in store."
              icon="wallet"
            />
          </div>
        </div>
      );
    if (type === "browser-wallet")
      return (
        <div className="bf-device-pair">
          <FeaturePhone>
            <small className="bf-wallet-greeting">Good morning, Amelia</small>
            <div className="bf-wallet-heading">
              <b>Your wallet</b>
              <span>
                <img src="/images/landing/mcp-mascot.svg" alt="" />
              </span>
            </div>
            <FeatureCard />
            <p className="bf-wallet-instruction">
              Show this QR code to the staff to scan.
            </p>
            <div className="bf-wallet-nav">
              <span>
                <FeatureIcon name="wallet" />
                Wallet
              </span>
              <span>
                <FeatureIcon name="pin" />
                Places
              </span>
              <span>
                <FeatureIcon name="gift" />
                Rewards
              </span>
              <span>
                <FeatureIcon name="activity" />
                Activity
              </span>
            </div>
          </FeaturePhone>
          <div className="bf-device-note">
            <span className="bf-app-mark">
              <img src="/images/landing/mcp-mascot.svg" alt="" />
            </span>
            <b>Kardy on your home screen</b>
            <span>Choose Add to Home Screen in a supported browser.</span>
            <FeaturePill>Progressive web app</FeaturePill>
            <small>No app-store download.</small>
          </div>
        </div>
      );
    if (type === "native-wallets")
      return (
        <>
          <div className="bf-native-wallets">
            {["apple", "google"].map((platform) => (
              <div className="bf-native-example" key={platform}>
                <div className="bf-wallet-brand">
                  <img
                    src={`/images/${platform}-wallet-icon.${platform === "apple" ? "jpg" : "png"}`}
                    alt=""
                  />
                  <b>
                    {platform === "apple" ? "Apple Wallet" : "Google Wallet"}
                  </b>
                </div>
                <div className={`bf-native-pass bf-native-pass-${platform}`}>
                  <div className="bf-native-top">
                    <span>Sunday Coffee</span>
                    {platform === "apple" && (
                      <span className="bf-native-progress">
                        <small>STAMPS</small>
                        <b>5 / 8</b>
                      </span>
                    )}
                  </div>
                  <div className="bf-native-details">
                    <small>
                      {platform === "apple"
                        ? "MEMBERSHIP"
                        : "Your loyalty, up to date"}
                    </small>
                    <b>
                      {platform === "apple" ? "Sunday Coffee" : "5 / 8 stamps"}
                    </b>
                    {platform === "apple" && (
                      <div className="bf-native-reward">
                        <small>YOUR NEXT REWARD</small>
                        <span>A coffee, on us</span>
                      </div>
                    )}
                  </div>
                  <div className="bf-native-qr">
                    <img src="/images/sample-wallet-qr.svg" alt="" />
                    <small>Sample QR · Not a live pass</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bf-under-note">
            Your membership, in your preferred wallet. Saving is optional and
            depends on setup.
          </div>
        </>
      );
    return null;
  };
  const copy = featureSceneCopy[type];
  if (!copy) return null;
  return (
    <div
      className="kardy-feature-art"
      role="img"
      aria-label={`${copy[1]} illustration. ${copy[2]} ${copy[3]} Example interface; see the caption and instructions below.`}
    >
      <div aria-hidden="true">
        <div className="bf-intro">
          <span>
            <FeatureIcon name={copy[0]} />
            {copy[1]}
          </span>
          <div className="bf-headline">
            {copy[2]}
            <br />
            <em>{copy[3]}</em>
          </div>
        </div>
        <div className={`bf-scene bf-scene-${type}`}>
          {["members", "analytics", "usage-limits", "broadcasts"].includes(
            type,
          ) ? (
            <div className="bf-safari">
              <div className="bf-safari-toolbar">
                <span className="bf-safari-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="bf-safari-address">
                  <FeatureIcon name="lock" />
                  merchants.getkardy.com
                </span>
              </div>
              <div className="bf-safari-content">
                <FeatureScene type={type} />
              </div>
            </div>
          ) : (
            <FeatureScene type={type} />
          )}
        </div>
        {type !== "merchant-mcp" && (
          <div className="bf-example">
            Illustrative example · not a live account
          </div>
        )}
      </div>
    </div>
  );
};
