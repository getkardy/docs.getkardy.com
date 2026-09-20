import React from "react";
import { createRoot } from "react-dom/client";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  ControlButton,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// One static sequence illustration inside the native viewport keeps every
// lifeline, connector and label together; no diagram elements are editable.
function Sequence({ data }) {
  const width = 750;
  const height = 92 + data.steps.length * 92;
  const x = (lane) => 125 + lane * 250;
  const y = (index) => 88 + index * 92;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      role="group"
      aria-label={`${data.label}: ${data.steps.length} steps`}
    >
      {data.lanes.map((lane, index) => (
        <g key={lane}>
          <line
            className="kardy-flow-lane"
            x1={x(index) - 115}
            y1="52"
            x2={x(index) - 115}
            y2={height - 20}
          />
          <rect
            className={`kardy-flow-accent kardy-flow-accent-${index}`}
            x={x(index) - 117}
            y="25"
            width="4"
            height="16"
            rx="2"
          />
          <text className="kardy-flow-lane-label" x={x(index) - 105} y="38">
            {lane}
          </text>
        </g>
      ))}
      {data.steps.map(([lane], index) => (
        <rect
          key={`activity-${index}`}
          className={`kardy-flow-accent-${lane}`}
          x={x(lane) - 116}
          y={y(index) - 24}
          width="2"
          height="48"
          rx="1"
          aria-hidden="true"
        />
      ))}
      {data.steps.slice(1).map((step, index) => {
        const from = x(data.steps[index][0]);
        const to = x(step[0]);
        const start = y(index) + 29;
        const end = y(index + 1) - 32;
        return (
          <g key={index} aria-hidden="true">
            <path
              className="kardy-flow-edge"
              d={`M ${from} ${start} V ${start + 16} H ${to} V ${end}`}
            />
            <path
              className="kardy-flow-arrow"
              d={`M ${to - 4} ${end - 5} L ${to} ${end} L ${to + 4} ${end - 5}`}
            />
          </g>
        );
      })}
      {data.steps.map(([lane, title], index) => (
        <foreignObject
          key={`${0}-${index}`}
          x={x(lane) - 104}
          y={y(index) - 28}
          width="208"
          height="62"
        >
          <div
            className="kardy-flow-node"
            aria-label={`Step ${index + 1}, ${data.lanes[lane]}: ${title}`}
          >
            <span className="kardy-flow-number">{index + 1}</span>
            <span>{title}</span>
          </div>
        </foreignObject>
      ))}
    </svg>
  );
}
const nodeTypes = { sequence: Sequence };
const fitOptions = { padding: 0.2, maxZoom: 0.9 };

function CentreView() {
  const { fitView } = useReactFlow();
  return (
    <ControlButton
      aria-label="Reset view"
      title="Centre view"
      onClick={() => fitView(fitOptions)}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        style={{ fill: "none" }}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="6" />
        <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </svg>
    </ControlButton>
  );
}

function Canvas({ data }) {
  const nodes = [
    {
      id: "sequence",
      type: "sequence",
      position: { x: 0, y: 0 },
      data,
      width: 750,
      height: 92 + data.steps.length * 92,
      selectable: false,
      draggable: false,
      focusable: false,
    },
  ];
  return (
    <ReactFlow
      nodes={nodes}
      edges={[]}
      nodeTypes={nodeTypes}
      nodesDraggable={false}
      nodesConnectable={false}
      nodesFocusable={false}
      edgesFocusable={false}
      elementsSelectable={false}
      selectionOnDrag={false}
      panOnDrag
      zoomOnDoubleClick={false}
      zoomOnScroll={false}
      minZoom={0.25}
      maxZoom={2}
      fitView
      fitViewOptions={fitOptions}
      proOptions={{ hideAttribution: true }}
      onMoveStart={(event) => {
        if (event?.target instanceof Element)
          event.target
            .closest(".kardy-flow-canvas")
            ?.focus({ preventScroll: true });
      }}
      ariaLabelConfig={{
        "controls.zoomIn.ariaLabel": "Zoom in",
        "controls.zoomOut.ariaLabel": "Zoom out",
        "controls.fitView.ariaLabel": "Reset view",
      }}
    >
      <Background
        variant={BackgroundVariant.Dots}
        gap={12}
        size={1.6}
        color="var(--flow-dot)"
        bgColor="var(--flow-canvas)"
      />
      <Controls
        position="bottom-left"
        showInteractive={false}
        showFitView={false}
        fitViewOptions={fitOptions}
      >
        <CentreView />
      </Controls>
    </ReactFlow>
  );
}

// Mintlify cannot import npm components in evaluated snippets. Mount an isolated,
// bundled React root in each declarative placeholder, including on client navigation.
const mounted = new Map();
function sync() {
  for (const [element, entry] of mounted) {
    if (!element.isConnected) {
      entry.root.unmount();
      mounted.delete(element);
    }
  }
  document.querySelectorAll("[data-kardy-flow]").forEach((element) => {
    const value = element.getAttribute("data-kardy-flow");
    let entry = mounted.get(element);
    if (entry?.value === value) return;
    if (!entry) {
      entry = { root: createRoot(element), value: null };
      mounted.set(element, entry);
    }
    entry.value = value;
    entry.root.render(<Canvas key={value} data={JSON.parse(value)} />);
  });
}
let scheduled = false;
const observer = new MutationObserver(() => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    sync();
  });
});
observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ["data-kardy-flow"],
});
sync();
