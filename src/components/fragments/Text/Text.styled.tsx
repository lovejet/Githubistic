import styled, { css } from "styled-components";
import { getTypography } from "@helpers/styles";

type TextProps = {
  textColor: string;
  textSize: string;
  bgColor: string;
  vectical: string;
};

const TextContainer = styled(
  ({ textColor, textSize, bgColor, vertical, ...otherProps }) => (
    <div {...otherProps} />
  )
)<TextProps>`
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.bgColor};
  ${(props) => getTypography(props.textSize)};

  ${(props) => {
    if (props.vertical) {
      return css`
        writing-mode: vertical-rl;
        text-orientation: upright;
      `;
    }
  }}
`;

export { TextContainer };
