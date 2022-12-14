import { createStitches } from "@stitches/react"

export const { styled, getCssText, keyframes } = createStitches({
  theme: {
    fonts: {
      main: "Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, sans-serif",
    },
    colors: {
      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",
    },
    fontSizes: {
      1: "13px",
      2: "15px",
      3: "17px",
    },
  },
})
