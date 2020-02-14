import React from "react";
import styles from "./styles.module.css";
import "./index.css";

const HighlightWords = (text, highlightedWords, color, style) => {
    if (!text) {
        return null;
    }
    const start = (text.toLowerCase()).indexOf((highlightedWords || "").toLowerCase());
    const end = start + (highlightedWords || "").length;
    if (start >= 0) {
        const match = text.slice(start, end);
        return (
            <span>
        {text.slice(0, start)}
                <span
                    className={[
                        `highlight-words-bg`,
                        color,
                        styles.highlightWords,
                        style || ""
                    ].join(" ")}
                >
          {match}
        </span>
                {text.slice(end, text.length)}
      </span>
        );

    } else {
        highlightedWords = ((highlightedWords || "").split(",") || []).map((word = '') =>
            word.trim().toLowerCase()
        );
        return (
            <React.Fragment>
        <span>
          {text.split(" ").map((wd, index) =>
              highlightedWords.includes((wd || "").toLowerCase().replace(",", "")) ? (
                  <span key={`highlights_${index}`}>
                {" "}
                      <span
                          key={`${wd}_${index}`}
                          className={[
                              `highlight-words-bg`,
                              color,
                              styles.highlightWords,
                              style || ""
                          ].join(" ")}
                      >
                  {wd}
                </span>
              </span>
              ) : (
                  <span key={`${wd}_${index}`}> {wd}</span>
              )
          )}
        </span>
            </React.Fragment>
        );
    }
};

export default HighlightWords;
