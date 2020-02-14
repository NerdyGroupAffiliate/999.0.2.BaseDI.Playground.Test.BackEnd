import React from "react";

import styles from "./styles.module.css";

// const computeTotalSpanSize = span =>
//   span.end -
//   span.start +
//   (span.type === "a"
//     ? (span.data.url || `/${span.data.uid}`).length + 7 + 8 + 2
//     : span.type.length * 2 + 5);

const computeSpanTagSize = span =>
  span.type === "a"
    ? (span.data.url || `/${span.data.uid}`).length + 7 + 8 + 2
    : span.type.length * 2 + 5;

const TextWritter = (text, type, style = {}) => {
  if (!!text && text.type === "embed"){

  } else if (!text || (!!text && (!text.text || !text.text.length))) {
    return <br />;
  }

  const inferredType = !!type ? type : !!text && !!text.type ? text.type : null;
  let inferredText = !!text && !!text.text ? text.text : text || null;
  let embedBlock = !!text && text.type === "embed" ? text.oembed.html : null;
  const spans = !!text && !!text.spans ? text.spans : [];
  let inserted = 0;

  const removeScript = str => {
    const script = str.replace('<script async src="//www.instagram.com/embed.js"></script>','');
    return script;
  }

  const getHighlighted = str => {
    const start = str.indexOf("```");
    const end = str.indexOf("```", str.indexOf("```") + 1);
    if (start >= 0 && end >= 0) {
      const result = str.slice(start + 3, end);
      const highlightedText = `${str.slice(0, start)}
          <span style="background-color: #ecd925; padding: 1px 8px;"> ${result}</span>
        ${str.slice(end + 3)}`;
      return highlightedText;
    }
    return str.replace("```", "");
  };

  spans.forEach((span, index) => {
    const nestedSpansRendered =
      spans.filter(
        sp =>
          sp.start === span.start &&
          sp.end === span.end &&
          spans.findIndex(
            s => s.type === sp.type && s.start === sp.start && s.end === sp.end
          ) < index
      ) || [];

    const renderedTagsChars = nestedSpansRendered.reduce(
      (acc, sp) => acc + computeSpanTagSize(sp),
      0
    );

    if (span.type === "hyperlink") {
      inferredText = `${inferredText.slice(
        0,
        span.start + inserted - Math.floor(renderedTagsChars)
      )}
      <a href="${span.data.url ||` /${span.data.uid}`}" ${span.data.target === "_blank" ? `target="_blank"` : null}>${inferredText.slice(
        span.start + inserted - Math.round(renderedTagsChars / 2),
        span.end + inserted - Math.round(renderedTagsChars / 2)
      )}</a>${inferredText.slice(
        span.end + inserted - Math.round(renderedTagsChars / 2)
      )}`;
      inserted += (span.data.url || `/${span.data.uid}`).length + 7 + 8 + 2;
    } else {
      inferredText = `${inferredText.slice(
        0,
        span.start + inserted - Math.floor(renderedTagsChars)
      )}<${span.type}>${getHighlighted(
        inferredText.slice(
          span.start + inserted - Math.round(renderedTagsChars / 2),
          span.end + inserted - Math.round(renderedTagsChars / 2)
        )
      )}</${span.type}>${inferredText.slice(
        span.end + inserted - Math.round(renderedTagsChars / 2)
      )}`;
      inserted += span.type.length * 2 + 5;
    }
  });

  switch (inferredType) {
    case "heading1":
      return (
        <h1
          className={styles.heading}
          style={style}
          key={`text-${Math.floor(Math.random() * 16777215).toString(32)}`}
        >
          <span dangerouslySetInnerHTML={{ __html: inferredText }} />
        </h1>
      );
    case "heading2":
      return (
        <h2
          className={styles.heading}
          style={style}
          key={`text-${Math.floor(Math.random() * 16777215).toString(32)}`}
        >
          <span dangerouslySetInnerHTML={{ __html: inferredText }} />
        </h2>
      );
    case "heading3":
      return (
        <h3
          className={styles.heading}
          style={style}
          key={`text-${Math.floor(Math.random() * 16777215).toString(32)}`}
        >
          <span dangerouslySetInnerHTML={{ __html: inferredText }} />
        </h3>
      );
    case "heading4":
      return (
        <h4
          className={styles.heading}
          style={style}
          key={`text-${Math.floor(Math.random() * 16777215).toString(32)}`}
        >
          <span dangerouslySetInnerHTML={{ __html: inferredText }} />
        </h4>
      );
    case "heading5":
      return (
        <h5
          className={styles.heading}
          style={style}
          key={`text-${Math.floor(Math.random() * 16777215).toString(32)}`}
        >
          <span dangerouslySetInnerHTML={{ __html: inferredText }} />
        </h5>
      );
    case "heading6":
      return (
        <h6
          className={styles.heading}
          style={style}
          key={`text-${Math.floor(Math.random() * 16777215).toString(32)}`}
        >
          <span dangerouslySetInnerHTML={{ __html: inferredText }} />
        </h6>
      );
    case "paragraph":
      return (
        <p
          className={styles.paragraph}
          style={style}
          key={`text-${Math.floor(Math.random() * 16777215).toString(32)}`}
        >
          <span dangerouslySetInnerHTML={{ __html: inferredText }} />
        </p>
      );
    case "list-item":
      return (
        <li
          className={styles.list}
          style={style}
          key={`text-${Math.floor(Math.random() * 16777215).toString(32)}`}
        >
          <span dangerouslySetInnerHTML={{ __html: inferredText }} />
        </li>
      );
    case "embed":
      return (
        <div
          className={styles.embed}
          style={style}
          key={`text-${Math.floor(Math.random() * 16777215).toString(32)}`}
          dangerouslySetInnerHTML={{ __html: removeScript(embedBlock) }}
        />
      );
    case "hypertext":
      return <a />; // eslint-disable-line
    default:
      return null;
  }
};

export default TextWritter;
