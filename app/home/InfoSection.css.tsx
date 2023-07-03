import styled from "styled-components"
import { breakpoints, maxWidthContainer } from "../_shared/styles/theme"

export const StyledSection = styled.section`
  max-width: ${maxWidthContainer};
  margin: 120px auto;

  @media ${breakpoints.xl} {
    padding: 50px 0;
    margin: 0 20px;
  }
`

export const StyledRowDown = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  justify-content: space-between;

  @media ${breakpoints.sm} {
    grid-template-columns: 1fr;
  }

  @media ${breakpoints.xs} {
    gap: 0;
  }
`

export const StyledColPhotoDown = styled.div`
  display: flex;
  flex-direction: column;
  height: 820px;

  &:first-of-type {
    flex-direction: column-reverse;

    @media ${breakpoints.sm} {
      flex-direction: column;
    }
  }

  @media ${breakpoints.sm} {
    width: 90%;
    height: auto;
    margin: 0 auto 50px;
  }
`

export const StyledBoxImgPhotoDown = styled.div`
  border-radius: 10px;
  overflow: hidden;
  max-height: 508px;

  @media ${breakpoints.sm} {
    margin-bottom: 50px;
  }

  @media ${breakpoints.xs} {
    margin-bottom: 20px;
  }
`

export const StyledBoxTextPhotoDown = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;

  @media ${breakpoints.sm} {
    flex-grow: 0;
  }
`

export const StyledTextPhotoDown = styled.p`
  font-family: "Merriweather";
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;

  @media ${breakpoints.sm} {
    font-size: 20px;
  }

  @media ${breakpoints.xs} {
    font-size: 18px;
  }
`
