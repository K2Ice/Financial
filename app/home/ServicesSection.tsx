import { FC } from "react"
import Image from "next/image"

import {
  StyledContainer,
  StyledCard,
  StyledBoxImg,
  StyledBoxText,
  StyledSection,
  StyledText,
  StyledSubtitle,
} from "./ServicesSection.css"

const services = [
  {
    src: "/img/insurance.jpg",
    title: "Insurances",
  },
  {
    src: "/img/audits.jpg",
    title: "Audits",
  },
  {
    src: "/img/consulting.jpg",
    title: "Consulting",
  },
  {
    src: "/img/mediatation.jpg",
    title: "Mediatation",
  },
]

interface ServiceCard {
  src: string
  title: string
}

const ServiceCard: FC<ServiceCard> = ({ src, title }) => {
  return (
    <StyledCard>
      <StyledBoxImg>
        <Image src={src} alt={title} width={360} height={250} />
      </StyledBoxImg>
      <StyledBoxText>
        <StyledText>{title}</StyledText>
      </StyledBoxText>
    </StyledCard>
  )
}

const ServicesSection: FC = () => {
  return (
    <StyledSection>
      <StyledSubtitle>More Services</StyledSubtitle>
      <StyledContainer>
        {services.map(
          (service: { src: string; title: string }, index: number) => (
            <ServiceCard key={index} src={service.src} title={service.title} />
          )
        )}
      </StyledContainer>
    </StyledSection>
  )
}

export default ServicesSection
