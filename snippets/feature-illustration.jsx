// Portable landing-style scenes. No app imports, account data or live controls.
// Mintlify evaluates the exported component in isolation; keep helpers in scope.
export const FeatureIllustration = ({ type }) => {
  const FeatureIcon = ({ name = "coffee" }) => {
    const paths = {
      coffee:
        "M4 8h12v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z M16 9h2a3 3 0 0 1 0 6h-2 M7 3v2m4-3v3m4-2v2",
      check: "m5 12 4 4L19 6",
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
  const FeatureAvatar = ({ name, green = false }) => (
    <span className={green ? "bf-avatar bf-avatar-green" : "bf-avatar"}>
      {name.slice(0, 1)}
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
    <div className="bf-pass">
      <div className="bf-pass-top">
        <FeatureBrand />
        <span>
          <small>STAMPS</small>
          <b>
            {full ? "8" : "5"}
            <small> / 8</small>
          </b>
        </span>
      </div>
      <div className="bf-pass-body">
        <b>Coffee</b>
        <div className="bf-stamps">
          {Array.from({ length: 8 }, (_, i) => (
            <i key={i} className={i < (full ? 8 : 5) ? "bf-stamped" : ""} />
          ))}
        </div>
      </div>
      <div className="bf-pass-foot">
        <span>
          <small>MEMBER</small>Amelia
        </span>
        <span>
          <small>REWARD</small>A coffee, on us
        </span>
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
  const FeaturePhone = ({ children }) => (
    <div className="bf-phone">
      <div className="bf-phone-status">
        <span>9:41</span>
        <i />
        <span>•••</span>
      </div>
      <div className="bf-phone-content">{children}</div>
      <div className="bf-home-bar" />
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
    "kardy-network": [
      "search",
      "The Kardy network",
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
                <FeatureField label="Stamps to unlock" value="8 stamps" />
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
                  {["#6b43ff", "#e5b8c9", "#dbe5ce", "#171a18"].map(
                    (color, i) => (
                      <span key={color} style={{ background: color }}>
                        {i === 0 && <FeatureIcon name="check" />}
                      </span>
                    ),
                  )}
                </div>
                <FeatureRow
                  title="Saved design"
                  detail="Gradient · round stamps"
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
            <FeatureRow
              title="kardy-mcp"
              detail="Your merchant workspace"
              end={<FeaturePill>3 tools</FeaturePill>}
              icon="plug"
            />
            {["get_programme", "list_rewards", "list_outlets"].map((name) => (
              <div className="bf-tool" key={name}>
                <span>{name}</span>
                <FeatureIcon name="check" />
              </div>
            ))}
            <div className="bf-split-note">
              <span>Read-only access</span>
              <span>Owner-approved OAuth</span>
            </div>
          </FeaturePanel>
          <FeatureBranches>
            {["Claude", "Codex", "Other clients"].map((name, i) => (
              <div className="bf-client" key={name}>
                <span className={`bf-client-mark bf-client-${i}`}>
                  {i < 2 ? (
                    <img
                      src={`/images/landing/${name.toLowerCase()}.svg`}
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
    if (type === "kardy-network")
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
              title="5 / 8 stamps"
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
            <b className="bf-device-heading">Wallet</b>
            <FeatureCard />
            <div className="bf-action">Show my QR</div>
          </FeaturePhone>
          <div className="bf-device-note">
            <span className="bf-app-mark">k.</span>
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
          <div className="bf-pair">
            <div className="bf-card-wrap">
              <FeatureCard />
            </div>
            <FeaturePanel title="Keep your pass close">
              <FeatureRow
                title="Apple Wallet"
                detail="Signed pass, when configured"
                icon="wallet"
              />
              <FeatureRow
                title="Google Wallet"
                detail="Save link, when configured"
                icon="wallet"
              />
              <FeaturePill>Availability depends on setup</FeaturePill>
            </FeaturePanel>
          </div>
          <div className="bf-under-note">
            Use the browser wallet for current stamp progress. Saving a native
            pass is optional.
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
          <FeatureScene type={type} />
        </div>
        <div className="bf-example">
          Illustrative example · not a live account
        </div>
      </div>
    </div>
  );
};
