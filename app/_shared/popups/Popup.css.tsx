import styled from "styled-components"
import { breakpoints } from "../styles/theme"

interface BackdropProps {
  position?: "top" | "center" | "bottom"
}

export const StyledBackdrop = styled.div<BackdropProps>`
  width: 100%;
  height: 100%;
  background-color: rgba(141, 141, 141, 0.257);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: ${({ position }) =>
    position === "top"
      ? "flex-start"
      : position === "bottom"
      ? "flex-end"
      : "center"};
`

export const StyledPopup = styled.div`
  max-width: 1200px;
  width: 90%;
  border: 3px solid ${({ theme }) => theme.blue};
  border-radius: 10px;
  padding: 48px;
  background-color: #fff;

  @media ${breakpoints.xxs} {
    padding: 30px;
  }
`
