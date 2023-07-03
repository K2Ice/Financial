"use client"

import { NextPage } from "next"
import HeroSection from "./home/HeroSection"
import ReportSection from "./home/ReportSection"
import ProcessSection from "./home/ProcessSection"
import BenefitsSection from "./home/BenefitsSection"
import InfoSection from "./home/InfoSection"

const HomePage: NextPage = () => {
  return (
    <>
      <HeroSection />
      <ReportSection />
      <ProcessSection />
      <BenefitsSection />
      <InfoSection />
    </>
  )
}
export default HomePage
