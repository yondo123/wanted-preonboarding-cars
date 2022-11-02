import { css } from 'styled-components';

type flexProps = 'start' | 'end' | 'stretch' | 'center' | 'between' | 'around';

const flexMap: { [key in flexProps]: string } = {
  start: 'flex-start',
  end: 'flex-end',
  stretch: 'stretch',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
};

const getFlexboxVal = (flexProp: flexProps): string => {
  let flexValue = flexMap.start;
  if (!flexProp) return flexValue;

  Object.keys(flexMap).forEach((key) => {
    const prop = key as flexProps;
    if (flexProp === prop) {
      flexValue = flexMap[flexProp];
    }
  });

  return flexValue;
};

export const flexbox = (justify: flexProps, align: flexProps) => css`
  display: flex;
  justify-content: ${getFlexboxVal(justify)};
  align-items: ${getFlexboxVal(align)};
`;

export const inlineFlexbox = (justify: flexProps, align: flexProps) => css`
  display: inline-flex;
  justify-content: ${getFlexboxVal(justify)};
  align-items: ${getFlexboxVal(align)};
`;

export const columnFlexbox = (justify: flexProps, align: flexProps) => css`
  display: flex;
  flex-direction: column;
  justify-content: ${getFlexboxVal(justify)};
  align-items: ${getFlexboxVal(align)};
`;
