import React, { FC } from "react"
import {
  StyledParagraph,
  StyledSection,
  StyledSubtitle,
  StyledTextBold,
  StyledTitle,
} from "./ContentSection.css"

const ContentSection: FC = () => {
  return (
    <StyledSection>
      <StyledTitle>Privacy Policy</StyledTitle>
      <StyledParagraph>
        At Financia, we understand the importance of privacy and the protection
        of personal information. This Privacy Policy outlines how we collect,
        use, disclose, and safeguard the personal data we obtain from
        individuals who use our services or interact with our website. We are
        committed to maintaining the confidentiality and security of the
        information entrusted to us.
      </StyledParagraph>
      <StyledParagraph>
        Collection of Personal Information We may collect personal information
        from users, including but not limited to names, contact details,
        financial information, and investment preferences. This information is
        obtained through various means, including online forms, email
        correspondence, or direct interactions with our representatives.
      </StyledParagraph>
      <StyledParagraph>
        <StyledSubtitle> Use of Personal Information</StyledSubtitle>
        We use the collected personal information for the following purposes: -
        Assessing investment risk and providing risk evaluation services -
        Communicating with clients and responding to inquiries - Personalizing
        and improving our services - Complying with legal and regulatory
        requirements - Conducting data analysis and research to enhance our
        offerings Disclosure of Personal Information We may disclose personal
        information to third parties under the following circumstances: With the
        explicit consent of the individual To our trusted service providers who
        assist us in delivering our services When required by law or regulatory
        authorities In connection with a merger, acquisition, or business
        transition Data Security We implement appropriate technical and
        organizational measures to protect personal information from
        unauthorized access, loss, misuse, alteration, or destruction. We
        restrict access to personal data to authorized personnel who require it
        for legitimate business purposes.
      </StyledParagraph>
      <StyledParagraph>
        <StyledSubtitle>Data Retention</StyledSubtitle> We retain personal
        information for as long as necessary to fulfill the purposes outlined in
        this Privacy Policy, unless a longer retention period is required or
        permitted by law.
      </StyledParagraph>
      <StyledParagraph>
        <StyledSubtitle>Cookies and Tracking Technologies</StyledSubtitle> Our
        website may use cookies and similar tracking technologies to enhance
        user experience and gather information about usage patterns. Users have
        the option to manage their cookie preferences through their web browser
        settings.
      </StyledParagraph>
      <StyledParagraph>
        <StyledSubtitle>Links to Third-Party Websites</StyledSubtitle> Our
        website may contain links to third-party websites. We are not
        responsible for the privacy practices or content of these external
        sites. We encourage users to review the privacy policies of any linked
        websites before providing personal information.
      </StyledParagraph>
      <StyledParagraph>
        <StyledSubtitle>Children&apos;s Privacy</StyledSubtitle> Our services
        are not intended for individuals under the age of 18. We do not
        knowingly collect personal information from children. If we become aware
        of any personal data collected from a child, we will take appropriate
        steps to delete it from our systems.
      </StyledParagraph>
      <StyledParagraph>
        <StyledSubtitle>Your Rights</StyledSubtitle> Individuals have the right
        to access, update, correct, or delete their personal information held by
        Financia. To exercise these rights or inquire about our privacy
        practices, please contact us using the information provided at the end
        of this policy.
      </StyledParagraph>
      <StyledParagraph>
        <StyledSubtitle>Updates to the Privacy Policy</StyledSubtitle> We may
        update this Privacy Policy periodically to reflect changes in our
        practices or legal requirements. The updated version will be posted on
        our website, and the revised date will be indicated at the top of the
        policy.
      </StyledParagraph>
      <StyledParagraph>
        <StyledSubtitle>Contact Us</StyledSubtitle> If you have any questions,
        concerns, or requests regarding this Privacy Policy or our privacy
        practices, please contact us at:
      </StyledParagraph>
      <StyledParagraph>
        <p>
          Financia Address:
          <StyledTextBold>Sunset Street 42, 44320 New York</StyledTextBold>
        </p>
        <p>
          Email: <StyledTextBold>contact@financialservice.com</StyledTextBold>
        </p>
        <p>
          Phone: <StyledTextBold>+999000999</StyledTextBold>
        </p>
      </StyledParagraph>
      <StyledParagraph>
        Please allow a reasonable time for us to respond to your inquiries.
      </StyledParagraph>
      Effective Date: 01.07.2023
    </StyledSection>
  )
}

export default ContentSection
