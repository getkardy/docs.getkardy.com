/* global useState, useEffect */
// Mintlify supplies React hooks to snippets; no nested imports are supported.
export const GuideChecklist = ({ guide, title, items }) => {
  const [checked, setChecked] = useState([]);
  const [storage, setStorage] = useState(
    "Progress stays in this browser only.",
  );
  useEffect(() => {
    try {
      const value = JSON.parse(
        localStorage.getItem(`kardy-guide-v1:${guide}`) || "[]",
      );
      // Restore only known item indexes, never arbitrary stored content.
      setChecked(
        Array.isArray(value)
          ? [
              ...new Set(
                value.filter(
                  (i) => Number.isInteger(i) && i >= 0 && i < items.length,
                ),
              ),
            ]
          : [],
      );
    } catch {
      setStorage(
        "Browser storage is unavailable. Progress lasts until you leave this page.",
      );
    }
  }, [guide, items.length]);
  const save = (next) => {
    setChecked(next);
    try {
      localStorage.setItem(`kardy-guide-v1:${guide}`, JSON.stringify(next));
    } catch {
      setStorage(
        "Browser storage is unavailable. Progress lasts until you leave this page.",
      );
    }
  };
  return (
    <section className="kardy-guide" aria-label={title}>
      <div className="kardy-guide-heading">
        <div>
          <span className="kardy-guide-kicker">YOUR CHECKLIST</span>
          <h3>{title}</h3>
        </div>
        <span className="kardy-guide-count" role="status">
          {checked.length} / {items.length}
        </span>
      </div>
      <progress
        aria-label={`${title} progress`}
        max={items.length}
        value={checked.length}
      />
      <div className="kardy-guide-tasks">
        {items.map((item, index) => (
          <button
            type="button"
            key={item}
            className="kardy-guide-task t-check"
            role="checkbox"
            aria-checked={checked.includes(index)}
            onClick={() =>
              save(
                checked.includes(index)
                  ? checked.filter((i) => i !== index)
                  : [...checked, index],
              )
            }
          >
            <span className="kardy-guide-box" aria-hidden="true">
              <svg viewBox="0 0 10.1668 10.1668">
                <path
                  ref={(path) => {
                    if (path)
                      path.style.setProperty(
                        "--check-len",
                        String(Math.ceil(path.getTotalLength())),
                      );
                  }}
                  d="M1 5.52L3.92 9.17L9.17 1"
                />
              </svg>
            </span>
            <span>{item}</span>
          </button>
        ))}
      </div>
      <div className="kardy-guide-footer">
        <small>
          {checked.length === items.length
            ? "Checklist complete. This is a personal reminder, not a system readiness check."
            : storage}
        </small>
        <button
          type="button"
          className="kardy-guide-reset"
          onClick={() => save([])}
          disabled={!checked.length}
        >
          Reset checklist
        </button>
      </div>
    </section>
  );
};
