"use client"

import { useServerInsertedHTML } from "next/navigation"
import { FC, useState } from "react"
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components"

import { theme } from "./_shared/styles/theme"
import "./_shared/styles/fonts.css"
import GlobalStyle from "./_shared/styles/GlobalStyles"

import Header from "./_shared/layout/Header"
import Footer from "./_shared/layout/Footer"

interface StyledComponentsRegistryProps {
  children: React.ReactNode | React.ReactNode[]
}

const StyledComponentsRegistry: FC<StyledComponentsRegistryProps> = ({
  children,
}) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    return <>{styles}</>
  })

  if (typeof window !== "undefined") return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}

interface RootLayoutProps {
  children: React.ReactNode | React.ReactNode[]
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <body>
          <StyledComponentsRegistry>
            <>
              <Header />
              <main>{children}</main>
              <Footer />
            </>
          </StyledComponentsRegistry>
        </body>
      </ThemeProvider>
    </html>
  )
}

export default RootLayout
