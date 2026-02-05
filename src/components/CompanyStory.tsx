const paragraphs = [
	"Budujemy RecruMates, bo sami znamy realia rynku pracy - zarówno od strony firm, jak i kandydatów.",
	"Dlatego stworzyliśmy miejsce, w którym proces rekrutacyjny jest prosty, transparentny i oparty na wzajemnym zaufaniu. Pomagamy firmom znaleźć ludzi, którzy naprawdę pasują do ich kultury, a kandydatom odnaleźć środowisko, w którym mogą się rozwijać.",
	"Bez presji. Bez zbędnych formalności. Z normalną rozmową.",
];

export default function CompanyStory() {
	return (
		<section
			id="story"
			className="py-20 md:py-28 px-4 bg-neutral-900 dark:bg-neutral-950 text-neutral-100"
		>
			<div className="container mx-auto max-w-6xl">
				<div className="mx-auto max-w-3xl">
					<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
						O firmie
					</p>
					<h2 className="mb-2 text-3xl font-semibold tracking-tight text-white md:text-4xl md:tracking-widest">
						Kilka słów o nas
					</h2>
					<div className="mb-8 h-px w-12 bg-accent-500/80" aria-hidden />
					<div className="space-y-6 text-base font-normal leading-relaxed text-neutral-300 md:text-lg">
						{paragraphs.map((text) => (
							<p key={text.slice(0, 24)}>{text}</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
