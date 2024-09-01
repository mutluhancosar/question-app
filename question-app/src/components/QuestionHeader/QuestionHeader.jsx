import { data } from "../../questions";
import "./questionHeader.css";

// eslint-disable-next-line react/prop-types
function QuestionHeader({ index }) {
  return (
      <div className="header-item">
        <div className="after-item"></div>
        {data.map((item, i) => (
          <button
            style={{
              backgroundColor: index < i
                ? " rgb(173, 173, 173)"
                : "#a07070",

                filter: index < i
                ? " none"
                : "drop-shadow(0 0 10px #000)",

              transition: "all 1s",
            }}
            className="numbers"
            key={i}
          >
            {i + 1}
          </button>
        ))}
      </div>
  );
}

export default QuestionHeader;