import { FC } from "react"

import ContactForm from "./ContactForm"

import {
  StyledBoxTextInterested,
  StyledBoxTextProfessionals,
  StyledSection,
  StyledTextInterested,
  StyledTextProfessionals,
} from "./ContactSection.css"

const ContactSection: FC = () => {
  return (
    <StyledSection>
      <StyledBoxTextProfessionals>
        <StyledTextProfessionals>
          Our team consists of professionals.
        </StyledTextProfessionals>
      </StyledBoxTextProfessionals>
      <StyledBoxTextInterested>
        <StyledTextInterested>
          If you want to know more about our services, leave your e-mail
          address. We will contact you as soon as possible.
        </StyledTextInterested>
      </StyledBoxTextInterested>
      <ContactForm />
    </StyledSection>
  )
}

export default ContactSection
