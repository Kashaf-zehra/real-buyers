import BrowseByCategory from '@/src/components/home/BrowseByCategory';
import HeroSection from '@/src/components/home/HeroSection';
import NewlyListedProperties from '@/src/components/home/NewlyListedProperties';
import OurHomePartners from '@/src/components/home/OurHomePartners';
import PopularLocations from '@/src/components/home/PopularLocations';
import CreateAccount from '@/src/components/home/CreateAccount';
import {
  CATEGORIES,
  PARTNERS,
  POPULAR_LOCATIONS_DATA,
} from '@/src/constants/Home';
import { AGENT_PROFILE_DATA } from '@/src/constants/AgentProfile';
import dynamic from 'next/dynamic';
const FeaturedProperties = dynamic(
  () => import('@/src/components/home/FeaturedProperties'),
  {
    ssr: false,
  }
);

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen">
        <HeroSection />
        <BrowseByCategory data={CATEGORIES} />
        <FeaturedProperties />
        <CreateAccount />
        <OurHomePartners data={PARTNERS} />
        <NewlyListedProperties data={AGENT_PROFILE_DATA} />
        <PopularLocations data={POPULAR_LOCATIONS_DATA} />
      </div>
    </>
  );
};

export default HomePage;
