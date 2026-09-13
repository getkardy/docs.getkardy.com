/* global useState */
export const GuidePractice = ({ questions }) => {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState(null);
  const question = questions[step];
  const correct = answer === question.correct;
  return (
    <section
      className="kardy-guide kardy-guide-practice"
      aria-label="Practice a real situation"
    >
      <div className="kardy-guide-heading">
        <div>
          <span className="kardy-guide-kicker">TRY IT SAFELY</span>
          <h3>What would you do?</h3>
        </div>
        <span className="kardy-guide-count">
          {step + 1} / {questions.length}
        </span>
      </div>
      <p className="kardy-guide-question">{question.prompt}</p>
      <div
        className="kardy-guide-answers"
        role="group"
        aria-label="Choose an answer"
      >
        {question.options.map((option, index) => (
          <button
            key={`${step}-${index}`}
            type="button"
            aria-pressed={answer === index}
            onClick={() => setAnswer(index)}
          >
            <span aria-hidden="true">{String.fromCharCode(65 + index)}</span>
            {option}
          </button>
        ))}
      </div>
      <div role="status" aria-live="polite">
        {answer !== null && (
          <div className="kardy-guide-feedback" data-correct={correct}>
            <strong>{correct ? "That’s right." : "Not quite."}</strong>
            <p>{question.explanation}</p>
          </div>
        )}
      </div>
      <div className="kardy-guide-footer">
        <small>Practice only. No stamps, claims or account changes.</small>
        <button
          type="button"
          className="kardy-guide-next"
          disabled={answer === null}
          onClick={() => {
            setStep((step + 1) % questions.length);
            setAnswer(null);
          }}
        >
          {step === questions.length - 1 ? "Practise again" : "Next situation"}
          <span aria-hidden="true"> →</span>
        </button>
      </div>
    </section>
  );
};
