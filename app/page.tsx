"use client"

import { NextPage } from "next"
import HeroSection from "./home/HeroSection"
import ReportSection from "./home/ReportSection"
import ProcessSection from "./home/ProcessSection"

const HomePage: NextPage = () => {
  return (
    <>
      <HeroSection />
      <ReportSection />
      <ProcessSection />
    </>
  )
}
export default HomePage
