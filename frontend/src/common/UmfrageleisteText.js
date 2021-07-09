import "./Umfrageleiste.css";

export default function UmfrageleisteText({ checkedAnswer, setCheckedAnswer }) {
  const handleOnChange = (event) => {
    setCheckedAnswer(event.target.value);
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
              checked={checkedAnswer === "Trifft nicht zu"}
            />
            <label>
              <>
                <div>Trifft</div>
                <div>nicht</div>
                <div>zu</div>
              </>
            </label>
          </li>
          <li>
            <input
              onChange={handleOnChange}
              type="radio"
              name="likert"
              value="Trifft kaum zu"
              checked={checkedAnswer === "Trifft kaum zu"}
            />
            <label>
              <>
                <div>Trifft</div>
                <div>kaum</div>
                <div>zu</div>
              </>
            </label>
          </li>
          <li>
            <input
              onChange={handleOnChange}
              type="radio"
              name="likert"
              value="Trifft ziemlich zu"
              checked={checkedAnswer === "Trifft ziemlich zu"}
            />
            <label>
              <>
                <div>Trifft</div>
                <div>ziemlich</div>
                <div>zu</div>
              </>
            </label>
          </li>
          <li>
            <input
              onChange={handleOnChange}
              type="radio"
              name="likert"
              value="Trifft deutlich zu"
              checked={checkedAnswer === "Trifft deutlich zu"}
            />
            <label>
              <>
                <div>Trifft</div>
                <div>deutlich</div>
                <div>zu</div>
              </>
            </label>
          </li>
          <li>
            <input
              onChange={handleOnChange}
              type="radio"
              name="likert"
              value="Trifft extrem zu"
              checked={checkedAnswer === "Trifft extrem zu"}
            />
            <label>
              <>
                <div>Trifft</div>
                <div>extrem</div>
                <div>zu</div>
              </>
            </label>
          </li>
        </ul>
      </form>
    </div>
  );
}
