import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import JobOffers from "./components/JobOffers";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="min-h-screen">
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<JobOffers />
				<FAQ />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
