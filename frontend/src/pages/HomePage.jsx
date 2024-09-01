import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedEvents from '../components/EventsSection/FeaturedEvents';
import UpcomingEvents from '../components/EventsSection/UpcomingEvents';
import TopOrganizers from '../components/TopOrganizers';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <WhyChooseUs />
            <FeaturedEvents />
            <UpcomingEvents />
            <TopOrganizers />
            <Footer />
        </>
    );
};

export default HomePage;
