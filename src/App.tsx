import Header from "./components/Header";
import Hero from "./components/Hero";
import CompanySection from "./components/CompanySection";
import About from "./components/About";
import Team from "./components/Team";
import Services from "./components/Services";
import CompanyStory from "./components/CompanyStory";
import JobOffers from "./components/JobOffers";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
			<Header />
			<main>
				<Hero />
				<CompanySection />
				<About />
				<Team />
				<CompanyStory />
				<Services />
				<JobOffers />
				<Testimonials />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
