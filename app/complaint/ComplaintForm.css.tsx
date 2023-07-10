import styled from "styled-components"
import { breakpoints } from "../_shared/styles/theme"

export const StyledContainer = styled.div`
  margin-bottom: 85px;

  @media ${breakpoints.xs} {
    margin-bottom: 30px;
  }
`

export const StyledBox = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledBoxButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`

export const StyledRow = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media ${breakpoints.xs} {
    grid-template-columns: 1fr;
  }
`
export const StyledInfoText = styled.p`
  font-size: 18px;
  font-family: "Merriweather";
  font-weight: 700;
`
