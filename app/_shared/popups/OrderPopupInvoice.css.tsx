import styled from "styled-components"
import { breakpoints } from "../styles/theme"

export const StyledRowButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`

export const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 30px;

  @media ${breakpoints.xs} {
    grid-template-columns: 1fr;
  }

  @media ${breakpoints.xs} {
    gap: 12px;
    margin-bottom: 12px;
  }
`

export const StyledContainer = styled.div`
  margin-bottom: 90px;

  @media ${breakpoints.xs} {
    margin-bottom: 30px;
  }
`

export const StyledSubtitleSmall = styled.h3`
  font-family: "Lato";
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;

  @media ${breakpoints.xxs} {
    font-size: 22px;
    margin-bottom: 30px;
  }
`
