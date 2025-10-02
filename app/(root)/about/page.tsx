import AboutPage from '@/components/about/Hero'
import OurMission from '@/components/about/OurMission'
import OurProcess from '@/components/about/OurProcess'
import WhoWeAre from '@/components/home/WhoWeAre'
import React from 'react'

const page = () => {
  return (
    <>
      <AboutPage />
      <WhoWeAre />
      <OurProcess />
      <OurMission />
    </>
  )
}

export default page