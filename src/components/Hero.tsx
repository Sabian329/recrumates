import heroBackground from "../assets/hero.png";

export default function Hero() {
	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center pt-32 pb-20 px-4 overflow-hidden"
		>
			{/* Background image */}
			<div className="absolute inset-0 z-0">
				<img
					src={heroBackground}
					alt=""
					className="w-full h-full object-cover object-center"
				/>
				{/* Overlay for text contrast: darker on left/center, lighter on right */}
				<div
					className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/50 to-transparent"
					aria-hidden
				/>
			</div>

			{/* Content */}
			<div className="container mx-auto max-w-6xl relative z-10">
				<div className="text-center max-w-2xl mx-auto">
					<h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
						RecruMates
					</h1>
					<p className="text-2xl md:text-3xl mb-4 font-light text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
						Make <span className="text-amber-400/90 font-medium">HR</span> Easy
					</p>
					<p className="text-xl md:text-2xl mb-8 text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
						Twoi Rekrutacyjni Mates'
					</p>
					<p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] leading-relaxed">
						Przestrzeń, gdzie technologia spotyka się z autentycznym, ludzkim
						podejściem. Tworzymy unikalny ekosystem rekrutacyjny online
						Headhunterów w całej Polsce.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="#contact"
							className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors shadow-xl border border-green-500/50"
						>
							Zamów usługi
						</a>
						<a
							href="#jobs"
							className="bg-gray-900/90 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg transition-colors shadow-xl border-2 border-white/30 backdrop-blur-sm"
						>
							Zobacz oferty pracy
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
