import Header from "./components/Header";
import Hero from "./components/Hero";
import CompanySection from "./components/CompanySection";
import About from "./components/About";
import Team from "./components/Team";
import Services from "./components/Services";
import ClientLogos from "./components/ClientLogos";
import JobOffers from "./components/JobOffers";
import FAQ from "./components/FAQ";
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
				<Services />
				<ClientLogos />
				<JobOffers />
				<FAQ />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
