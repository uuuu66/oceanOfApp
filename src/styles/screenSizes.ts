const screenSizes = {
  mobile: 327,
  tablet: 768,
  pc: 1024,
};

export const media = {
  TABLET: `@media(max-width: ${screenSizes.tablet - 1}px)`,
  MOBILE: `@media(max-width: ${screenSizes.pc - 1}px)`,
};
export default screenSizes;
