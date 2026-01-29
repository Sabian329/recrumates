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
		<section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						O nas
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						RecruMates to więcej niż agencja rekrutacyjna - to przestrzeń, gdzie
						technologia spotyka się z autentycznym, ludzkim podejściem.
					</p>
				</div>

				<div className="mb-16">
					<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
						Co nas wyróżnia?
					</h3>
					<div className="grid md:grid-cols-2 gap-8">
						{values.map((value) => (
							<div
								key={value.title}
								className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg hover:shadow-lg transition-shadow"
							>
								<div className="text-4xl mb-4">{value.icon}</div>
								<h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
									{value.title}
								</h4>
								<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
									{value.description}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="bg-green-50 dark:bg-green-900/20 p-8 md:p-12 rounded-lg text-center border border-green-200 dark:border-green-800">
					<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
						Dlaczego warto nas poznać?
					</h3>
					<p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
						Robimy to, co kochamy, i widać to w naszej pracy. Łączymy serca,
						umysły i technologię, aby pomagać firmom rosnąć, a kandydatom
						znaleźć miejsce, gdzie mogą być sobą.
					</p>
					<p className="text-xl font-semibold text-green-700 dark:text-green-400">
						RecruMates. Tworzymy jakościową i przyjazną rekrutację, na luzie :)
					</p>
				</div>
			</div>
		</section>
	);
}
