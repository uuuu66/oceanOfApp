const normalFont = `
  font-weight: 400;
  color: #2c2c2c;
`;
const normalFont14 = `
  ${normalFont};
  font-size: 14px;
  line-height: 16px;
`;

const normalFont16 = `
  ${normalFont};
  font-size: 16px;
  line-height: 18px;
`;

const normalFont24 = `
  ${normalFont};
  font-size: 24px;
  line-height: 26px;
`;

const boldFont = `
  font-weight: 700;
  color: #000000;
`;
const boldFont14 = `
  ${normalFont14};
  ${boldFont};
`;
const boldFont16 = `
  ${normalFont16};
  ${boldFont};
`;
const boldFont18 = `
  ${boldFont};
  font-size: 18px;
  line-height: 20px;
`;
const boldFont24 = `
  ${normalFont24};
  ${boldFont};
`;

const boldFont32 = `
  ${boldFont};
  font-size: 32px;
  font-weight: 36px;
`;

const fonts = {
  boldFont14,
  boldFont16,
  boldFont18,
  boldFont24,
  boldFont32,
  normalFont14,
  normalFont16,
  normalFont24,
};
export default fonts;
