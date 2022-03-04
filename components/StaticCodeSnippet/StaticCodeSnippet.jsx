import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

const StaticCodeSnippet = ({ children: code, language }) => (
  <>
    <span>{language}</span>
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, fontSize: 16 }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  </>
);

export default StaticCodeSnippet;
