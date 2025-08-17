import { getTopPerformers } from '@/api/leaderboardapi'
import { CarouselMenu } from '@/components/CarouselMenu'
import { FeatureCard } from '@/components/featureCard'
import HeroSection from '@/components/HeroSection'
import { Leaderboard } from '@/components/LeaderBoard'
import { WorkshopCard } from '@/components/WorkshopCard'
import { usePublic } from '@/context/public'
import React, { useState, useEffect } from 'react'


const Home = () => {
  const {loading,workshopStats,topPerformer,upcomingWorkshops} = usePublic()


  if (loading) return <p>Loading homepage...</p>;

  return (
    <div className="container mx-auto p-4">
      <HeroSection {...workshopStats} />

      <div className='p-4'>

        <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance p-2 m-2 mb-4'>Upcoming Workshops</h1>
        <CarouselMenu
          items={upcomingWorkshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        />
      </div>
      <div className="p-4">

        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance p-2 m-2 mb-4">Leaders of Summer School</h1>
        <Leaderboard
          users={topPerformer}
          title="Top Performers"
          maxRanks={5}
        />

        {/* Leaderboard component here */}
      </div>

      <div>
        <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance p-2 m-2 mb-4'>Features</h1>
        <FeatureCard isLoggedIn={false} />
      </div>
      {/* Features card component here */}

      <h1 className="text-2xl font-bold my-4">Testimonials</h1>
      {/* Testimonials component here */}
    </div>
  )
}

export default Home
