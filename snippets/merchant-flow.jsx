/* global useState */

// Keep lifecycle language aligned with the surrounding guides, not backend APIs.
export const MerchantFlow = ({ type }) => {
  // Mintlify evaluates each component in isolation: keep its data in scope.
  const merchantFlows = {
    "mcp-read": {
      title: "From your question to a read-only answer",
      lanes: ["Business Owner", "Your agent", "Kardy"],
      scenarios: [
        {
          label: "Read merchant data",
          note: "Available on dev; production rollout is separate. Customer records and changes to your business are outside these tools.",
          steps: [
            [
              0,
              "Ask about your rewards",
              "Ask your connected agent which active rewards your business offers and where they can be claimed.",
            ],
            [
              1,
              "Request an approved tool",
              "The agent requests programme, rewards or outlet data using its connection credentials.",
            ],
            [
              2,
              "Check access and limits",
              "Kardy checks the connection, approved permissions, subscription and workspace allowance before returning data.",
            ],
            [
              2,
              "Return permitted data",
              "Only the connected workspace's permitted read-only data is returned. Each results page counts as a tool call.",
            ],
            [
              1,
              "Summarise the result",
              "Your agent uses the returned data to answer. It cannot change rewards, issue stamps or manage your team.",
            ],
          ],
        },
      ],
    },
    "mcp-connect": {
      title: "From adding Kardy to approving your agent",
      lanes: ["Business Owner", "Your agent", "Kardy"],
      scenarios: [
        {
          label: "Approve with OAuth",
          note: "Only the Owner can approve access. Cancel grants no access; revoking a connection stops new requests but cannot recall data already shared.",
          steps: [
            [
              0,
              "Copy your MCP endpoint",
              "Open Settings → Agent connections in the merchant portal and copy the MCP endpoint.",
            ],
            [
              1,
              "Open Kardy sign-in",
              "Add the endpoint in a compatible OAuth client. The agent opens Kardy in your browser.",
            ],
            [
              0,
              "Review and approve access",
              "Sign in, check the client name and return address, choose your merchant and approve only the read permissions you want to share.",
            ],
            [
              2,
              "Return an authorisation code",
              "After approval, Kardy redirects to the registered client with a short-lived authorisation code.",
            ],
            [
              1,
              "Exchange the code securely",
              "The client exchanges the code using PKCE and receives credentials for the approved connection. No manual API key needs to be copied.",
            ],
            [
              0,
              "Try a read-only question",
              "Return to your agent and ask it to list active rewards. Manage or revoke the connection in Agent connections.",
            ],
          ],
        },
      ],
    },
    billing: {
      title: "What changes for your subscription and customers",
      lanes: ["Business Owner", "Subscription", "Customers"],
      scenarios: [
        {
          label: "First payment",
          note: "Returning from checkout alone does not activate your business. Finish payment before using paid tools.",
          steps: [
            [
              0,
              "Choose your business and plan",
              "Review the monthly price and any eligible first-month offer. Each business has its own subscription.",
            ],
            [
              0,
              "Complete payment",
              "Finish checkout in Kardy Payments. If payment is unfinished, your paid access has not started.",
            ],
            [
              1,
              "Paid access starts",
              "Once payment is confirmed, your business can use its paid merchant tools and included outlet capacity.",
            ],
            [
              2,
              "Join, collect stamps and claim",
              "Customers can join your active programme. Your team records qualifying visits and confirms eligible reward claims.",
            ],
          ],
        },
        {
          label: "Failed renewal",
          note: "Saving a new card alone does not settle an outstanding payment. Managers and Staff should ask the Owner to resolve billing.",
          steps: [
            [
              1,
              "Renewal payment fails",
              "Unresolved payment can pause this business's paid merchant access, including access for employees.",
            ],
            [
              2,
              "Programme paused",
              "While service is paused, stamps and reward claims are unavailable. Existing memberships and saved progress remain.",
            ],
            [
              0,
              "Resolve the outstanding payment",
              "Open billing, update the payment method if needed and complete the outstanding payment. Do not buy a second subscription.",
            ],
            [
              1,
              "Paid access resumes",
              "Access resumes after successful payment is confirmed. Choose Check payment status; contact support if access is still paused after payment.",
            ],
            [
              2,
              "Continue with saved progress",
              "Customers can use the active programme again without losing their existing memberships or recorded progress.",
            ],
          ],
        },
        {
          label: "Cancel renewal",
          note: "Canceling renewal does not automatically refund a payment or delete membership history.",
          steps: [
            [
              0,
              "Cancel and check the end date",
              "Cancel renewal in billing and keep the displayed access end date. Select the correct business first.",
            ],
            [
              1,
              "Active until the paid period ends",
              "Your subscription will not renew, but paid merchant access continues through the period already paid for.",
            ],
            [
              2,
              "Keep using the programme",
              "Customers can continue using the programme normally while the paid period remains active.",
            ],
            [
              1,
              "Paid access ends",
              "If cancellation is not reversed, paid merchant tools become unavailable when the subscription ends.",
            ],
            [
              2,
              "Store inactive; progress kept",
              "The card shows Store inactive. New joins, stamps and claims stop, but existing memberships and saved progress remain.",
            ],
          ],
        },
        {
          label: "Undo cancellation",
          note: "Undo a scheduled cancellation before the subscription ends. If it has already ended, use Restart Growth monthly instead; the introductory offer does not repeat.",
          steps: [
            [
              0,
              "Open billing before the end date",
              "As the Owner, select the business with a scheduled cancellation and review its remaining paid period.",
            ],
            [
              0,
              "Reverse the scheduled cancellation",
              "Use the subscription management options in Kardy Payments to keep the subscription renewing.",
            ],
            [
              1,
              "Renewal continues",
              "Confirm that cancellation is no longer scheduled and review the next billing date and amount. Future renewals still require successful payment.",
            ],
            [
              2,
              "No interruption to the programme",
              "Reversing cancellation before access ends keeps the programme available. Customers retain their memberships and progress.",
            ],
          ],
        },
      ],
    },
    outlets: {
      title: "More outlets, one business subscription",
      lanes: ["Business Owner", "Kardy Payments", "Kardy"],
      scenarios: [
        {
          label: "Add capacity",
          note: "Where outlet-quantity billing is enabled. Creating a location does not buy paid capacity.",
          steps: [
            [
              0,
              "Select the business",
              "Outlets belong to one business and use that business's subscription.",
            ],
            [
              0,
              "Increase paid outlet quantity",
              "In Settings → Billing, review the new monthly total and any prorated charge.",
            ],
            [
              1,
              "Confirm the extra payment",
              "Extra capacity waits for payment confirmation; a failed payment does not unlock it.",
            ],
            [
              2,
              "Update outlet allowance",
              "Kardy applies the payment-confirmed quantity to this business.",
            ],
            [
              0,
              "Add or activate the outlet",
              "Save the store details in Locations within your paid allowance. Additional outlets do not receive another introductory offer.",
            ],
          ],
        },
        {
          label: "Reduce capacity",
          note: "Pausing or deleting a location alone does not reduce your bill.",
          steps: [
            [
              0,
              "Pause unwanted locations",
              "Keep the active outlet count within the lower quantity you intend to buy.",
            ],
            [
              0,
              "Schedule a lower quantity",
              "Use Settings → Billing. The smaller quantity takes effect at the next renewal.",
            ],
            [
              1,
              "Renew at the new quantity",
              "The current period is not automatically refunded.",
            ],
            [
              2,
              "Apply confirmed capacity",
              "Kardy updates the allowance after the billing change is confirmed.",
            ],
          ],
        },
      ],
    },
    counter: {
      title: "A scan checks. Confirmation records.",
      lanes: ["Customer", "Employee", "Kardy"],
      scenarios: [
        {
          label: "Earn a stamp",
          note: "Slide approval is a development flow; production rollout is separate. Never add a duplicate because a wallet refresh is delayed.",
          steps: [
            [
              0,
              "Show membership QR",
              "Use the membership QR from the customer's Kardy wallet.",
            ],
            [
              1,
              "Scan at the right outlet",
              "Choose the active outlet, then check the returned membership and qualifying purchase.",
            ],
            [
              2,
              "Check membership and access",
              "Scanning identifies the membership. It does not award a stamp.",
            ],
            [
              1,
              "Slide to add stamp",
              "Complete the approval control. An early release does not submit the operation.",
            ],
            [
              2,
              "Save the stamp once",
              "Wait for the confirmed result. Recorded activity is the source of truth.",
            ],
            [
              0,
              "Refresh wallet if needed",
              "The displayed balance can lag behind the recorded stamp. Refresh while online rather than requesting a second stamp.",
            ],
          ],
        },
        {
          label: "Redeem a reward",
          note: "Timed reward QRs and slide approval are implemented in development; check availability before using this flow in production.",
          steps: [
            [
              0,
              "Prepare reward QR",
              "Open the earned reward and prepare its temporary QR. This does not spend stamps.",
            ],
            [
              1,
              "Scan and review",
              "Choose the active outlet and check the reward details. A membership QR cannot authorise a reward claim.",
            ],
            [
              2,
              "Check eligibility",
              "Kardy checks the code, reward, membership, outlet and programme access. A rejected check must be resolved before continuing.",
            ],
            [
              1,
              "Slide to redeem reward",
              "Confirm the claim once. Do not hand over the reward until success is shown.",
            ],
            [
              2,
              "Record the redemption",
              "The successful claim is recorded once. Stamp rewards deduct their cost; excess stamps carry forward.",
            ],
            [
              1,
              "Hand over the reward",
              "If the result is uncertain, check the original transaction before trying again.",
            ],
          ],
        },
      ],
    },
    notifications: {
      title: "From a new member to your device",
      lanes: ["Owner or Manager", "Kardy", "Device"],
      scenarios: [
        {
          label: "Receive an alert",
          note: "Push is enabled. Delivery starts at 50 ready notifications or a fixed 15-minute recovery check, then continues while ready work remains. Device settings and connectivity can delay delivery.",
          steps: [
            [
              0,
              "Choose alerts for this business",
              "Open Settings → This device. Preferences are separate for every business and device.",
            ],
            [
              2,
              "Allow notifications",
              "Permission follows Enable notifications. On iPhone or iPad, open the installed Home Screen app first.",
            ],
            [
              1,
              "A new member joins",
              "Kardy records the membership and queues device alerts within the business’s monthly allowance. At the cap, the membership still succeeds but no new alert is queued.",
            ],
            [
              1,
              "Recheck access and preferences",
              "Removed access, disabled preferences or an inactive subscription stops new deliveries.",
            ],
            [
              2,
              "Display the notification",
              "The alert contains no customer names or contact details. Focus settings may suppress its display.",
            ],
            [
              0,
              "Open the correct business",
              "Tapping the alert checks access before selecting the business. The Members page shows the actual record.",
            ],
          ],
        },
      ],
    },
  };

  const flow = merchantFlows[type];
  const [scenarioIndex, setScenarioIndex] = useState(0);
  if (!flow) return null;
  const scenario = flow.scenarios[scenarioIndex] || flow.scenarios[0];
  return (
    <figure className="kardy-flow" aria-label={flow.title}>
      <figcaption className="kardy-flow-heading">{flow.title}.</figcaption>
      {flow.scenarios.length > 1 && (
        <div
          className="kardy-flow-options"
          role="group"
          aria-label="Choose a scenario"
        >
          {flow.scenarios.map((item, index) => (
            <button
              type="button"
              key={item.label}
              aria-pressed={scenarioIndex === index}
              onClick={() => {
                setScenarioIndex(index);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
      <div className="kardy-flow-map">
        <div
          className="kardy-flow-canvas"
          data-kardy-flow={JSON.stringify({
            lanes: flow.lanes,
            steps: scenario.steps,
            label: scenario.label,
          })}
          tabIndex={0}
          role="region"
          aria-label="Lifecycle diagram. Drag to pan. Zoom and reset controls are at the bottom left."
        />
      </div>
      <ol className="kardy-flow-text">
        {scenario.steps.map(([lane, title, detail], index) => (
          <li key={`${scenarioIndex}-${index}`}>
            <strong>{title}</strong>
            <p>
              {flow.lanes[lane]} · {detail}
            </p>
          </li>
        ))}
      </ol>
      <div className="kardy-flow-note">{scenario.note}</div>
    </figure>
  );
};
