/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/react";

type Props = {};

const Container: FunctionComponent<Props> = ({ children }) => {
  const style = css`
    display: flex;
    flex: wrap;
    height: 90vh;
    justify-content: center;
    align-items: center;
    gap: 1em;
  `;

  return <div css={style}>{children}</div>;
};

export default Container;
