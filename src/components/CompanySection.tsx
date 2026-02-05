import ceoImage from "../assets/CEO.jpg";

export default function CompanySection() {
	const traits = [
		"indywidualnym podejściem do każdego kandydata",
		"partnerską współpracą z firmami",
		"koncentracją na dopasowaniu, nie ilości",
		"transparentną komunikacją na każdym etapie",
	];

	return (
		<section
			id="company"
			className=" relative py-16 md:py-24 px-4 bg-neutral-950 bg-gradient-to-t  text-neutral-100 overflow-hidden"
		>
			<div className="container mx-auto max-w-6xl">
				<div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
					{/* CEO Photo */}
					<div className="relative order-2 md:order-1 mt-10 md:mt-0 flex justify-center md:justify-end">
						<div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/5] rounded-xl overflow-hidden border border-neutral-800/80">
							<img
								src={ceoImage}
								alt="CEO RecruMates"
								className="w-full h-full object-cover object-center"
							/>
						</div>
					</div>

					{/* Content */}
					<div className="order-1 md:order-2">
						<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
							Zespół
						</p>
						<h2 className="mb-2 text-3xl font-semibold tracking-tight text-white md:text-4xl md:tracking-widest">
							Kim jesteśmy
						</h2>
						<div className="mb-6 h-px w-12 bg-accent-500/80" aria-hidden />
						<p className="text-lg font-thin text-neutral-200 mb-6 leading-relaxed md:text-xl">
							RecruMates to coś więcej niż agencja rekrutacyjna.
						</p>
						<p className="text-base text-neutral-500 mb-8 leading-relaxed font-normal">
							Jesteśmy hubem łączącym firmy i ludzi, którzy chcą rozwijać się
							razem. Stawiamy na partnerskie podejście, autentyczne relacje i
							realne zrozumienie potrzeb obu stron. Nie działamy według
							schematów. Każde CV traktujemy indywidualnie, każdą firmę
							poznajemy od środka, a każdą rekrutację prowadzimy tak, jakby
							chodziło o nasz własny zespół. Bo dobra rekrutacja zaczyna się od
							rozmowy.
						</p>

						<h3 className="text-lg font-semibold mb-4 text-white uppercase tracking-[0.08em]">
							Czym się charakteryzujemy
						</h3>
						<ul className="space-y-3">
							{traits.map((trait) => (
								<li
									key={trait.slice(0, 24)}
									className="flex items-start gap-3 text-neutral-400 font-normal"
								>
									<span className="text-accent-500 mt-0.5 shrink-0">✓</span>
									<span>{trait}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
