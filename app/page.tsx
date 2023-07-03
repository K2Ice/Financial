"use client"

import { NextPage } from "next"
import HeroSection from "./home/HeroSection"
import ReportSection from "./home/ReportSection"
import ProcessSection from "./home/ProcessSection"
import BenefitsSection from "./home/BenefitsSection"

const HomePage: NextPage = () => {
  return (
    <>
      <HeroSection />
      <ReportSection />
      <ProcessSection />
      <BenefitsSection />
    </>
  )
}
export default HomePage
