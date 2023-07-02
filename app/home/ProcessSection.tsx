import { useRouter } from "next/navigation"
import { FC } from "react"

import {
  StyledBoxArrowIcon,
  StyledBoxButton,
  StyledBoxImg,
  StyledBoxImgReportIcon,
  StyledBoxStage,
  StyledBoxStages,
  StyledBoxTextStage,
  StyledSection,
  StyledTextStage,
} from "./ProcessSection.css"

import Button from "../_shared/formElements/Button"

import ReportIcon from "../_shared/icons/ReportIcon"
import PaymentIcon from "../_shared/icons/PaymentIcon"
import FormIcon from "../_shared/icons/FormIcon"
import LocationIcon from "../_shared/icons/LocationIcon"
import ArrowIcon from "../_shared/icons/ArrowIcon"

const ProcessSection: FC = () => {
  const router = useRouter()

  return (
    <StyledSection>
      <StyledBoxStages>
        <StyledBoxArrowIcon>
          <ArrowIcon />
        </StyledBoxArrowIcon>
        <StyledBoxArrowIcon>
          <ArrowIcon />
        </StyledBoxArrowIcon>
        <StyledBoxArrowIcon>
          <ArrowIcon />
        </StyledBoxArrowIcon>
        <StyledBoxStage>
          <StyledBoxImg>
            <LocationIcon />
          </StyledBoxImg>
          <StyledBoxTextStage>
            <StyledTextStage>Choose the company</StyledTextStage>
          </StyledBoxTextStage>
        </StyledBoxStage>
        <StyledBoxStage>
          <StyledBoxImg>
            <FormIcon />
          </StyledBoxImg>
          <StyledBoxTextStage>
            <StyledTextStage>Complete the form</StyledTextStage>
          </StyledBoxTextStage>
        </StyledBoxStage>
        <StyledBoxStage>
          <StyledBoxImg>
            <PaymentIcon />
          </StyledBoxImg>
          <StyledBoxTextStage>
            <StyledTextStage>Pay</StyledTextStage>
          </StyledBoxTextStage>
        </StyledBoxStage>
        <StyledBoxStage>
          <StyledBoxImgReportIcon>
            <ReportIcon />
          </StyledBoxImgReportIcon>
          <StyledBoxTextStage>
            <StyledTextStage>Get the form</StyledTextStage>
          </StyledBoxTextStage>
        </StyledBoxStage>
      </StyledBoxStages>

      <StyledBoxButton>
        <Button width={350} onClick={() => console.log("Get Manual")}>
          Get Manual
        </Button>
      </StyledBoxButton>
    </StyledSection>
  )
}

export default ProcessSection
