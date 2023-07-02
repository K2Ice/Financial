import Image from "next/image"
import { FC } from "react"

import Button from "../_shared/formElements/Button"

import {
  StyledBg,
  StyledBoxContent,
  StyledBoxText,
  StyledHeading,
  StyledSection,
  StyledText,
} from "./HeroSection.css"

const HeroSection: FC = () => {
  const scrollToOrder = () => {
    const orderSection = document.querySelector("#orderSection")

    if (orderSection) {
      const sectionTopOffset =
        orderSection.getBoundingClientRect().top + window.scrollY
      const scrollPosition = sectionTopOffset - 150

      window.scrollTo({ top: scrollPosition, behavior: "smooth" })
    }
  }

  return (
    <StyledSection>
      <StyledBg>
        <Image
          src="/img/count-money.jpg"
          alt="Count money"
          width={1920}
          height={1200}
          style={{ filter: "brightness(70%)" }}
        />
      </StyledBg>
      <StyledBoxContent>
        <StyledHeading>
          Check partners reliability
          <br />
          Keep your business safe
        </StyledHeading>
        <StyledBoxText>
          <StyledText>
            Check your business partner and never be afraid to invest again.
            Check the financial report.
          </StyledText>
        </StyledBoxText>
        <Button width={310} onClick={scrollToOrder}>
          Order raport
        </Button>
      </StyledBoxContent>
    </StyledSection>
  )
}

export default HeroSection
