import { useState } from "react";

interface FAQItem {
	question: string;
	answer: string;
}

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const faqs: FAQItem[] = [
		{
			question: "Jakie są koszty usług rekrutacyjnych?",
			answer:
				"Oferujemy elastyczne modele rozliczeń. Standardowy model to Success Fee od 8% rocznego wynagrodzenia kandydata. Oferujemy również opcję fix price oraz RPO (Recruitment Process Outsourcing) dostosowane do potrzeb klienta.",
		},
		{
			question: "W jakich obszarach się specjalizujecie?",
			answer:
				"Specjalizujemy się w rekrutacji na stanowiska handlowe, IT, inżynierskie, CyberSec oraz managerskie. Działamy elastycznie i opieramy się na zaufaniu oraz głęboko relacyjnej współpracy.",
		},
		{
			question: "Jak długo trwa proces rekrutacyjny?",
			answer:
				"Czas trwania procesu zależy od specyfiki stanowiska i dostępności kandydatów. Dzięki wykorzystaniu narzędzi AI i naszemu doświadczeniu, staramy się skrócić czas rekrutacji przy zachowaniu wysokiej jakości dopasowania.",
		},
		{
			question: "Czy działacie tylko w Polsce?",
			answer:
				"Nasza główna siedziba znajduje się we Wrocławiu, ale działamy w całej Polsce oraz mamy możliwość prowadzenia rekrutacji międzynarodowej. Wytrwałość i determinacja to nasze atuty w poszukiwaniu talentów na całym świecie.",
		},
		{
			question: "Jak wygląda współpraca z RecruMates?",
			answer:
				"Współpraca z nami jest transparentna, konkretna i szczera. Każdy proces rekrutacyjny traktujemy indywidualnie, dbając o to, aby kandydaci czuli się komfortowo. Łączymy profesjonalizm z autentycznym, ludzkim podejściem.",
		},
		{
			question: "Czy oferujecie również doradztwo HR?",
			answer:
				"Tak, oprócz rekrutacji end-to-end oferujemy również doradztwo HR oraz wsparcie w zakresie employer brandingu. Pomagamy firmom budować przyszłościowe zespoły i optymalizować procesy rekrutacyjne.",
		},
	];

	return (
		<section id="faq" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
			<div className="container mx-auto max-w-4xl">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						Często zadawane pytania
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300">
						Odpowiedzi na najczęściej zadawane pytania
					</p>
				</div>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={`faq-${faq.question.slice(0, 20)}`}
							className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
						>
							<button
								type="button"
								onClick={() => setOpenIndex(openIndex === index ? null : index)}
								className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
							>
								<span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
									{faq.question}
								</span>
								<svg
									className={`w-6 h-6 text-green-600 dark:text-green-500 transition-transform flex-shrink-0 ${
										openIndex === index ? "rotate-180" : ""
									}`}
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<title>Toggle FAQ</title>
									<path d="M19 9l-7 7-7-7" />
								</svg>
							</button>
							{openIndex === index && (
								<div className="px-6 pb-5">
									<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
										{faq.answer}
									</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
