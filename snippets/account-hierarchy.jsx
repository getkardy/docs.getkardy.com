export const AccountHierarchy = () => (
  <figure className="kardy-feature-art account-hierarchy">
    <div className="account-hierarchy-person">
      <small>ONE KARDY ACCOUNT</small>
      <div>
        <img src="/images/avatar-amelia-tan.png" alt="" />
        <span>
          <b>Amelia Tan</b>
          <small>One login. Roles belong to each brand.</small>
        </span>
      </div>
    </div>
    <div className="account-hierarchy-label">Brand workspaces</div>
    <div className="account-hierarchy-brands">
      {[
        {
          name: "Sunday Coffee",
          logo: "sunday-coffee",
          role: "Owner",
          teammates: [
            ["Daniel", "Manager"],
            ["Jamie", "Staff"],
          ],
          outlets: ["Orchard", "Joo Chiat", "Tiong Bahru"],
        },
        {
          name: "Forma Studio",
          logo: "forma-studio",
          role: "Manager",
          teammates: [
            ["Sarah", "Owner"],
            ["Jamie", "Staff"],
          ],
          outlets: ["Tanjong Pagar", "River Valley"],
        },
      ].map((brand) => (
        <div className="account-hierarchy-branch" key={brand.name}>
          <div className="account-hierarchy-brand">
            <small>BRAND</small>
            <img
              src={`/images/landing/${brand.logo}-wordmark.svg`}
              alt={brand.name}
            />
            <span>Amelia · {brand.role}</span>
          </div>
          <div className="account-hierarchy-team">
            <small>OTHER TEAM MEMBERS</small>
            {brand.teammates.map(([name, role]) => (
              <div className="account-hierarchy-teammate" key={name}>
                <img src={`/images/avatar-${name.toLowerCase()}.png`} alt="" />
                <span>
                  <b>{name}</b>
                  <small>{role}</small>
                </span>
              </div>
            ))}
            <p>Shared across this brand’s outlets.</p>
          </div>
          <div className="account-hierarchy-outlets">
            <small>{brand.outlets.length} outlets</small>
            <ul>
              {brand.outlets.map((outlet) => (
                <li key={outlet}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {outlet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    <figcaption>
      Illustrative example. Each brand has its own team, programme and billing.
      Managers and Staff can work at eligible outlets within their brand; roles
      are not assigned separately to each outlet. Customer memberships do not
      grant workspace access.
    </figcaption>
  </figure>
);
