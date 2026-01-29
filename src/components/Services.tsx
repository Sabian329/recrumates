export default function Services() {
	const services = [
		{
			icon: "🔍",
			title: "Rekrutacja end-to-end",
			description:
				"Kompleksowa obsługa procesu rekrutacyjnego od początku do końca.",
		},
		{
			icon: "🤝",
			title: "Specjalizacja w wielu obszarach",
			description:
				"Specjalizujemy się w rolach handlowych, IT, inżynierskich, CyberSec i managerskich.",
		},
		{
			icon: "💼",
			title: "Doradztwo HR i employer branding",
			description:
				"Pomagamy budować markę pracodawcy i optymalizować procesy HR.",
		},
		{
			icon: "🎯",
			title: "Elastyczne modele rozliczeń",
			description:
				"Success Fee od 8% rocznego wynagrodzenia, opcjonalnie fix price lub RPO.",
		},
	];

	return (
		<section id="services" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						Usługi
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						RecruMates to agencja rekrutacyjna znana z przyjaznego podejścia do
						rozmówców - profesjonalizm i empatia połączone ze zrozumieniem wielu
						obszarów biznesu.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
					{services.map((service) => (
						<div
							key={service.title}
							className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
						>
							<div className="text-4xl mb-4">{service.icon}</div>
							<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
								{service.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								{service.description}
							</p>
						</div>
					))}
				</div>

				<div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-lg shadow-lg">
					<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
						Co możemy dla Ciebie zrobić?
					</h3>
					<ul className="space-y-4 max-w-2xl mx-auto">
						<li className="flex items-start gap-4">
							<span className="text-green-600 dark:text-green-500 text-2xl">
								✓
							</span>
							<span className="text-lg text-gray-700 dark:text-gray-300">
								Znaleźć najlepsze talenty na rynku - szybko i efektywnie
							</span>
						</li>
						<li className="flex items-start gap-4">
							<span className="text-green-600 dark:text-green-500 text-2xl">
								✓
							</span>
							<span className="text-lg text-gray-700 dark:text-gray-300">
								Doradzić, jak ulepszyć procesy rekrutacyjne
							</span>
						</li>
						<li className="flex items-start gap-4">
							<span className="text-green-600 dark:text-green-500 text-2xl">
								✓
							</span>
							<span className="text-lg text-gray-700 dark:text-gray-300">
								Wspierać Twoją firmę w budowaniu przyszłościowych zespołów
							</span>
						</li>
					</ul>
					<div className="text-center mt-8">
						<a
							href="#contact"
							className="inline-block bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors shadow-lg"
						>
							Zamów usługi
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
