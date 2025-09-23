import Hero from '@/components/ui/home/Hero'
import ExploreItems from '@/components/ui/home/ExploreItems'
import WhoWeAre from '@/components/ui/home/WhoWeAre'
import WhyChooseUs from '@/components/ui/home/WhyChooseUs'
import React from 'react'
import Testimoinials from '@/components/ui/home/Testimoinials'

const page = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <WhyChooseUs  />
      <ExploreItems />
      <Testimoinials />
    </div>
  )
}

export default page
