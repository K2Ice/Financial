import React from "react"
import ComplaintForm from "./ComplaintForm"
import { StyledContainer, StyledHeading } from "./ContentSection.css"

const ContentSection = () => {
  return (
    <StyledContainer>
      <StyledHeading>Make a complaint</StyledHeading>
      <ComplaintForm />
    </StyledContainer>
  )
}

export default ContentSection
