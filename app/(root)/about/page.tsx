import AboutPage from '@/components/ui/about/Hero'
import OurMission from '@/components/ui/about/OurMission'
import OurProcess from '@/components/ui/about/OurProcess'
import WhoWeAre from '@/components/ui/about/WhoWeAre'
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