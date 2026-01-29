//import heroImage from "../assets/hero.png";

export default function About() {
	const values = [
		{
			title: "Nowoczesne podejście dzięki AI",
			description:
				"Wykorzystujemy narzędzia AI do szybszych i bardziej efektywnych działań, nie tracąc z oczu ludzkiego elementu. Technologia wspiera, ale to relacje budują sukces.",
			icon: "🤖",
		},
		{
			title: "Autentyczność i luz",
			description:
				"Bez korporacyjnych masek - jesteśmy sobą, na luzie tak często, jak to możliwe. Współpraca jest transparentna, konkretna i szczera.",
			icon: "✨",
		},
		{
			title: "Międzynarodowy zasięg",
			description:
				"Niezależnie od tego, czy szukasz talentów w Polsce, czy na całym świecie - wytrwałość to klucz do sukcesu.",
			icon: "🌍",
		},
		{
			title: "Ludzie na pierwszym miejscu",
			description:
				"Każda aplikacja jest widziana z jej historią, pasją i przyszłością. Chcemy, aby każdy proces rekrutacyjny czuł się jak kawa, a nie stresujący 'egzamin'.",
			icon: "❤️",
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
					<div className="mx-auto mb-6 h-px w-12 bg-teal-500/80" aria-hidden />
					<p className="mx-auto max-w-2xl text-lg font-thin leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-xl">
						RecruMates to więcej niż agencja rekrutacyjna — to przestrzeń, gdzie
						technologia spotyka się z autentycznym, ludzkim podejściem.
					</p>
				</div>

				<div className="mb-14">
					<h3 className="mb-8 text-center text-lg font-semibold uppercase tracking-[0.08em] text-neutral-900 dark:text-white">
						Co nas wyróżnia?
					</h3>
					<div className="grid md:grid-cols-2 gap-6">
						{values.map((value) => (
							<div
								key={value.title}
								className="bg-neutral-50 dark:bg-neutral-950/60 p-8 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 transition-colors"
							>
								<div className="text-3xl mb-4">{value.icon}</div>
								<h4 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">
									{value.title}
								</h4>
								<p className="text-sm font-normal leading-relaxed text-neutral-600 dark:text-neutral-400">
									{value.description}
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
						Robimy to, co kochamy, i widać to w naszej pracy. Łączymy serca,
						umysły i technologię, aby pomagać firmom rosnąć, a kandydatom
						znaleźć miejsce, gdzie mogą być sobą.
					</p>
					<p className="text-lg font-medium text-teal-600 dark:text-teal-400">
						RecruMates. Tworzymy jakościową i przyjazną rekrutację, na luzie :)
					</p>
				</div>
			</div>
		</section>
	);
}
