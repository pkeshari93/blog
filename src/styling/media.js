import { css } from "styled-components";

const sizes = {
  phone: 376,
  tablet: 768,
  desktop: 1500
};

const media = Object.keys(sizes).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size]: function(...args) {
      return css`
        @media (max-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `;
    }
  };
}, {});

export default media;
