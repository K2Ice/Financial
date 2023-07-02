import styled from "styled-components"
import { breakpoints, maxWidthContainer } from "../styles/theme"

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 8px 10px -7px rgba(66, 68, 90, 0.5);
  background-color: #fff;
  z-index: 5;
`

export const StyledNav = styled.nav`
  height: 100px;
  max-width: ${maxWidthContainer};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakpoints.xl} {
    margin: 0 16px;
  }
`

export const StyledBoxLogo = styled.div`
  margin: 0;
  height: 80px;
`

export const StyledBoxContact = styled.div`
  display: flex;
  gap: 10px;
`
