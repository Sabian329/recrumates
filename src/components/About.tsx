import { Cpu, Sparkles, Globe2, HeartHandshake } from "lucide-react";

export default function About() {
	const values = [
		{
			title: "Nowoczesne podejście dzięki AI",
			description:
				"Korzystamy z narzędzi AI, aby przyspieszać procesy i docierać do najlepszych talentów bez utraty ludzkiego elementu. Technologia wspiera, ale to ludzie budują sukces.",
			Icon: Cpu,
		},
		{
			title: "Autentyczność i luz",
			description:
				"Bez korporacyjnych masek. Jesteśmy sobą, komunikujemy się wprost i stawiamy na normalne, partnerskie relacje.",
			Icon: Sparkles,
		},
		{
			title: "Międzynarodowy zasięg",
			description:
				"Rekrutujemy lokalnie i globalnie. Docieramy do talentów tam, gdzie są, niezależnie od lokalizacji.",
			Icon: Globe2,
		},
		{
			title: "Ludzie na pierwszym miejscu",
			description:
				"Każda aplikacja to historia, ambicje i plany. Dbamy o to, aby proces rekrutacyjny był partnerski, przejrzysty i bez stresu.",
			Icon: HeartHandshake,
		},
	];

	return (
		<section id="about" className="py-24 px-4  bg-neutral-900">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-14">
					<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
						Wartości
					</p>
					<h2 className="mb-2 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl md:tracking-widest">
						O nas
					</h2>
					<div
						className="mx-auto mb-6 h-px w-12 bg-accent-500/80"
						aria-hidden
					/>
					<p className="mx-auto max-w-3xl text-lg font-thin leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-xl">
						RecruMates to przestrzeń, w której technologia spotyka się z
						autentycznym, ludzkim podejściem. Wykorzystujemy nowoczesne
						narzędzia, aby działać szybciej i skuteczniej - ale to relacje są
						dla nas fundamentem. Pomagamy firmom budować zespoły, a kandydatom
						znaleźć miejsce, w którym mogą być sobą i rozwijać swój potencjał.
						Nie wierzymy w masową rekrutację. Wierzymy w dobre dopasowanie.
					</p>
				</div>

				<div className="mb-14">
					<h3 className="mb-8 text-center text-lg font-semibold uppercase tracking-[0.08em] text-neutral-900 dark:text-white">
						Co nas wyróżnia?
					</h3>
					<div className="grid md:grid-cols-2 gap-6">
						{values.map(({ title, description, Icon }) => (
							<div
								key={title}
								className="bg-neutral-50 dark:bg-neutral-950/60 p-8 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 transition-colors"
							>
								<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent-500/30 bg-accent-500/10 text-accent-500 dark:border-accent-400/30 dark:bg-accent-400/10">
									<Icon className="h-5 w-5" aria-hidden="true" />
								</div>
								<h4 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">
									{title}
								</h4>
								<p className="text-sm font-normal leading-relaxed text-neutral-600 dark:text-neutral-400">
									{description}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="bg-neutral-50 dark:bg-neutral-950/60 p-8 md:p-12 rounded-xl text-center border border-neutral-200/80 dark:border-neutral-800/80">
					<h3 className="mb-4 text-xl font-semibold uppercase tracking-[0.08em] text-neutral-900 dark:text-white">
						Dlaczego warto nas poznać?
					</h3>
					<p className="mx-auto mb-5 max-w-2xl text-base font-normal leading-relaxed text-neutral-600 dark:text-neutral-400">
						Robimy to, co kochamy i widać to w naszej pracy.
						<br /> Łączymy serca, umysły i technologię, aby pomagać firmom
						rosnąć, a kandydatom znaleźć miejsce, w którym naprawdę pasują.
					</p>
					<p className="text-lg font-medium text-accent-600 dark:text-accent-400">
						RecruMates. Tworzymy jakościową i przyjazną rekrutację na luzie.
					</p>
				</div>
			</div>
		</section>
	);
}
