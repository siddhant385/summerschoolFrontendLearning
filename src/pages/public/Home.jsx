import { getTopPerformers } from '@/api/leaderboardapi'
import { getWorkshopsStats, getUpcomingWorkshops } from '@/api/workshopapi'
import { CarouselMenu } from '@/components/CarouselMenu'
import { FeatureCard } from '@/components/featureCard'
import HeroSection from '@/components/HeroSection'
import Updated_HeroSection from '@/components/Updated_HeroSection'
import { Leaderboard } from '@/components/LeaderBoard'
import { WorkshopCard } from '@/components/WorkshopCard'
import React, { useState, useEffect } from 'react'
import About from '@/components/About'
import FeedbackSection from '@/components/FeedbackSection'


const Home = () => {
  const [workshops, setWorkshops] = useState([]);
  const [workshopStats, setWorkshopStats] = useState([]);
  const [topPerformer, setTopPerformer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getWorkshopsStats();
        console.log(data.data)
        setWorkshopStats(data.data);
      } catch (error) {
        console.error("Error fetching workshop stats:", error);
      }
    };


    const fetchTopPerformers = async () => {
      try {
        const data = await getTopPerformers();
        setTopPerformer(data.data.top_three);
        console.log(data.data.top_three)
      } catch (error) {
        console.error("Error fetching top performers:", error);
      }
    };

    const fetchWorkshops = async () => {
      try {
        const data = await getUpcomingWorkshops(5);
        setWorkshops(data.data);
      } catch (err) {
        console.error("Error fetching upcoming workshops:", err);
      } finally {
        setLoading(false); // loading sirf yahan handle kar rahe
      }
    };

    fetchStats();
    fetchTopPerformers();
    fetchWorkshops();
  }, []);

  if (loading) return <p>Loading homepage...</p>;

  return (<>
    <div className="container mx-auto p-4">

      <div>
        {/* <Updated_HeroSection /> */}

      </div>

      <HeroSection {...workshopStats} />

      <About />

      <div className='p-4'>

        <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance p-2 m-2 mb-4'>Upcoming Workshops</h1>
        <CarouselMenu
          items={workshops.map((workshop) => (
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
      <h1 className="text-2xl font-bold my-4">Features Card</h1>
      {/* Features card component here */}

      <FeedbackSection />

    </div>

    <style jsx>{`
    @import "tailwindcss";

.bgg-blackk {
    background-size: cover;
    background-image: url('./assets/images/bg.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
}

/* Hides scrollbar but allows scrolling */
::-webkit-scrollbar {
    display: none;
}

html {
    scrollbar-width: none;
}

body {
    -ms-overflow-style: none;
}`}</style>

  </>
  )
}

export default Home
