import Image from "next/image"
import { FC } from "react"

import {
  StyledBoxImgPhotoDown,
  StyledBoxTextPhotoDown,
  StyledColPhotoDown,
  StyledRowDown,
  StyledSection,
  StyledTextPhotoDown,
} from "./InfoSection.css"

const InfoSection: FC = () => {
  return (
    <StyledSection>
      <StyledRowDown>
        <StyledColPhotoDown>
          <StyledBoxImgPhotoDown>
            <Image
              src={"/img/planning.jpg"}
              alt={"Planning"}
              width={900}
              height={400}
            />
          </StyledBoxImgPhotoDown>
          <StyledBoxTextPhotoDown>
            <StyledTextPhotoDown>
              Our service is the only one on the market that gives you the
              opportunity to check the so-called red flags, i.e. key risks and
              factors that increase the investment risk.
            </StyledTextPhotoDown>
          </StyledBoxTextPhotoDown>
        </StyledColPhotoDown>
        <StyledColPhotoDown>
          <StyledBoxImgPhotoDown>
            <Image
              src={"/img/discussing-charts.jpg"}
              alt={"Discussing Charts"}
              width={900}
              height={400}
            />
          </StyledBoxImgPhotoDown>
          <StyledBoxTextPhotoDown>
            <StyledTextPhotoDown>
              By collaborating with key databases, after obtaining the report,
              you can order an investment plan that guides you through the
              specified investment.
            </StyledTextPhotoDown>
          </StyledBoxTextPhotoDown>
        </StyledColPhotoDown>
      </StyledRowDown>
    </StyledSection>
  )
}

export default InfoSection
