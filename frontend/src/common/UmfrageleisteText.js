import "./Umfrageleiste.css";

export default function UmfrageleisteText({ addAnswer }) {
  const handleOnChange = (event) => {
    addAnswer(event.target.value);
  };

  return (
    <div className="wrap">
      <form action="">
        <ul className="likert">
          <li>
            <input
              onChange={handleOnChange}
              type="radio"
              name="likert"
              value="Trifft nicht zu"
            />
            <label>
              <p>
                <div>Trifft</div>
                <div>nicht</div>
                <div>zu</div>
              </p>
            </label>
          </li>
          <li>
            <input
              onChange={handleOnChange}
              type="radio"
              name="likert"
              value="Trifft kaum zu"
            />
            <label>
              <p>
                <div>Trifft</div>
                <div>kaum</div>
                <div>zu</div>
              </p>
            </label>
          </li>
          <li>
            <input
              onChange={handleOnChange}
              type="radio"
              name="likert"
              value="Trifft ziemlich zu"
            />
            <label>
              <p>
                <div>Trifft</div>
                <div>ziemlich</div>
                <div>zu</div>
              </p>
            </label>
          </li>
          <li>
            <input
              onChange={handleOnChange}
              type="radio"
              name="likert"
              value="Trifft deutlich zu"
            />
            <label>
              <p>
                <div>Trifft</div>
                <div>deutlich</div>
                <div>zu</div>
              </p>
            </label>
          </li>
          <li>
            <input
              onChange={handleOnChange}
              type="radio"
              name="likert"
              value="Trifft extrem zu"
            />
            <label>
              <p>
                <div>Trifft</div>
                <div>extrem</div>
                <div>zu</div>
              </p>
            </label>
          </li>
        </ul>
      </form>
    </div>
  );
}
