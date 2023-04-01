import { headerSize } from "@/components/Common/Header";

import { media } from "./screenSizes";

const sectionMargin = `
  margin-top: ${headerSize.pc};
  ${media.TABLET} {
    margin-top: ${headerSize.tablet};
  }
  ${media.MOBILE} {
    margin-top: ${headerSize.mobile};
  }
`;
const margin = { sectionMargin };

export default margin;
