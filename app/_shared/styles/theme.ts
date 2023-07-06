import { DefaultTheme } from "styled-components"

export const theme: DefaultTheme = {
  primary: "#000",
  secondary: "#fff",
  grey100: "#9a9a9a",
  blue: "#07579e",
  btnBg:
    "linear-gradient(156deg, rgba(98,162,233,1) 0%, rgba(39,104,193,1) 30%, rgba(0,17,166,1) 58%);",
  error: "#ED4337",
  success: "#198754",
}

export const breakpoints = {
  xxs: "(max-width: 480px)",
  xs: "(max-width: 768px)",
  sm: "(max-width: 1024px)",
  md: "(max-width: 1280px)",
  xl: "(max-width: 1660px)",
}

export const maxWidthContainer = "1620px"
