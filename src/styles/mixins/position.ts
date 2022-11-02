import { css } from 'styled-components';

export const posCneterX = (pos = 'absolute') => {
  if (pos === 'absolute' || pos === 'absolute') {
    return css`
      position: ${pos};
      left: 50%;
      transform: translateX(-50%);
    `;
  }
};

export const posCenterY = (pos = 'absolute') => css`
  position: ${pos};
  top: 50%;
  transform: translateY(-50%);
`;

export const posCenter = (pos = 'absolute') => css`
  position: ${pos};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
