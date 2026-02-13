import { Routes, Route, useLocation } from "react-router-dom";
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
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";

function MainPage() {
	return (
		<>
			<Hero />
			<CompanySection />
			<About />
			<Team />
			<CompanyStory />
			<Services />
			<JobOffers />
			<Testimonials />
			<Contact />
		</>
	);
}

function App() {
	const location = useLocation();
	const isPrivacyPage = location.pathname === "/polityka-prywatnosci";

	return (
		<div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
			{!isPrivacyPage && <Header />}
			<main>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
				</Routes>
			</main>
			{!isPrivacyPage && <Footer />}
		</div>
	);
}

export default App;
