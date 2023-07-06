import Image from "next/image"
import React, { FC } from "react"

import {
  StyledBoxHeading,
  StyledBoxImgUp,
  StyledBoxTextPhotoUp,
  StyledColPhotoUp,
  StyledColTextUp,
  StyledHeading,
  StyledHeadingListUp,
  StyledLiRaport,
  StyledListRaport,
  StyledNumberLi,
  StyledRowUp,
  StyledSection,
  StyledTextPhotoUp,
} from "./BenefitsSection.css"

const BenefitsSection: FC = () => {
  return (
    <StyledSection>
      <StyledBoxHeading>
        <StyledHeading>
          The report service consists in identifying key issues related to the
          potential, value and possible development of the company.
        </StyledHeading>
      </StyledBoxHeading>
      <StyledRowUp>
        <StyledColTextUp>
          <StyledHeadingListUp>Raport allows you check:</StyledHeadingListUp>
          <StyledListRaport>
            <StyledLiRaport>
              <StyledNumberLi>1.</StyledNumberLi>
              Market value of the company
            </StyledLiRaport>
            <StyledLiRaport>
              <StyledNumberLi>2.</StyledNumberLi>
              Liabilities
            </StyledLiRaport>
            <StyledLiRaport>
              <StyledNumberLi>3.</StyledNumberLi>
              Financial liquidity
            </StyledLiRaport>
            <StyledLiRaport>
              <StyledNumberLi>4.</StyledNumberLi>
              Risk index
            </StyledLiRaport>
            <StyledLiRaport>
              <StyledNumberLi>5.</StyledNumberLi>
              Customers opinion
            </StyledLiRaport>
            <StyledLiRaport>
              <StyledNumberLi>6.</StyledNumberLi>
              Company&apos;s financial background
            </StyledLiRaport>
          </StyledListRaport>
        </StyledColTextUp>
        <StyledColPhotoUp>
          <StyledBoxImgUp>
            <Image
              src={"/img/raport-details.jpg"}
              alt={"Raport details"}
              width={500}
              height={300}
            />
          </StyledBoxImgUp>
          <StyledBoxTextPhotoUp>
            <StyledTextPhotoUp>
              Our experts in the field of finance will help you determine the
              level of investment risk and show an alternative one
            </StyledTextPhotoUp>
          </StyledBoxTextPhotoUp>
        </StyledColPhotoUp>
      </StyledRowUp>
    </StyledSection>
  )
}

export default BenefitsSection
