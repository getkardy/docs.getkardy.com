export const QrFormat = () => (
  <figure
    className="qr-format-example"
    aria-label="Illustrative print formats, with A6 insert selected"
  >
    <div className="qr-format-options">
      <div>
        <span className="qr-format-paper qr-format-square" aria-hidden="true" />
        <strong>Square</strong>
        <small>Trim to fit</small>
      </div>
      <div>
        <span className="qr-format-paper qr-format-a4" aria-hidden="true" />
        <strong>A4 poster</strong>
        <small>Walls &amp; entrances</small>
      </div>
      <div className="qr-format-selected">
        <span className="qr-format-check" aria-hidden="true">
          ✓
        </span>
        <span className="qr-format-paper qr-format-a6" aria-hidden="true" />
        <strong>A6 insert</strong>
        <small>Counter holders</small>
      </div>
    </div>
    <figcaption>
      <strong>105 × 148 mm</strong>
      <span>A6 portrait · Measure your holder’s insert pocket.</span>
    </figcaption>
    <p>Illustrative format choices · A6 selected</p>
  </figure>
);
