import Image from "next/image"
import { FC } from "react"

import {
  StyledBoxImg,
  StyledBoxImgParameter,
  StyledBoxInfo,
  StyledBoxParameter,
  StyledBoxParameters,
  StyledBoxButton,
  StyledColText,
  StyledSection,
  StyledTextParameter,
  StyledSubtitle,
} from "./ReportSection.css"
import RecordsIcon from "../_shared/icons/RecordsIcon"
import WarningIcon from "../_shared/icons/WarningIcon"
import DataIcon from "../_shared/icons/DataIcon"
import PeopleIcon from "../_shared/icons/PeopleIcon"
import LicenseIcon from "../_shared/icons/LicenseIcon"
import SolarIcon from "../_shared/icons/SolarIcon"
import PlanIcon from "../_shared/icons/PlanIcon"
import Button from "../_shared/formElements/Button"

const ReportSection: FC = () => {
  return (
    <StyledSection>
      <StyledSubtitle>What&apos;s inside?</StyledSubtitle>
      <StyledBoxInfo>
        <StyledColText>
          <StyledBoxParameters>
            <StyledBoxParameter>
              <StyledBoxImgParameter>
                <RecordsIcon />
              </StyledBoxImgParameter>
              <StyledTextParameter>Advantages</StyledTextParameter>
            </StyledBoxParameter>
            <StyledBoxParameter>
              <StyledBoxImgParameter>
                <WarningIcon />
              </StyledBoxImgParameter>
              <StyledTextParameter>Threats</StyledTextParameter>
            </StyledBoxParameter>
            <StyledBoxParameter>
              <StyledBoxImgParameter>
                <DataIcon />
              </StyledBoxImgParameter>
              <StyledTextParameter>Annual Financial Data</StyledTextParameter>
            </StyledBoxParameter>
            <StyledBoxParameter>
              <StyledBoxImgParameter>
                <PeopleIcon />
              </StyledBoxImgParameter>
              <StyledTextParameter>Employment rate</StyledTextParameter>
            </StyledBoxParameter>
            <StyledBoxParameter>
              <StyledBoxImgParameter>
                <LicenseIcon />
              </StyledBoxImgParameter>
              <StyledTextParameter>Experience</StyledTextParameter>
            </StyledBoxParameter>
            <StyledBoxParameter>
              <StyledBoxImgParameter>
                <SolarIcon />
              </StyledBoxImgParameter>
              <StyledTextParameter>Innovation</StyledTextParameter>
            </StyledBoxParameter>
            <StyledBoxParameter>
              <StyledBoxImgParameter>
                <PlanIcon />
              </StyledBoxImgParameter>
              <StyledTextParameter>Prognosis </StyledTextParameter>
            </StyledBoxParameter>
          </StyledBoxParameters>
          <StyledBoxButton>
            <Button width={445} onClick={() => console.log("test")}>
              Get example raport
            </Button>
          </StyledBoxButton>
        </StyledColText>
        <StyledBoxImg>
          <Image
            src={"/img/inside-raport.jpg"}
            width={800}
            height={800}
            alt="raport"
          />
        </StyledBoxImg>
      </StyledBoxInfo>
    </StyledSection>
  )
}

export default ReportSection
