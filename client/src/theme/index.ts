import { colors } from "./colors";
import { fonts } from "./fonts";
import { shadows } from "./shadows";

interface Theme {
  colors: typeof colors;
  shadows: typeof shadows;
  fonts: typeof fonts;
}

export const theme: Theme = {
  colors,
  shadows,
  fonts,
};
