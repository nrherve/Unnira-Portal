import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
                <HeroSection />
                <FeaturesSection />
            </main>
            <Footer />
        </div>
    );
}

export default Home;