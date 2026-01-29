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
		<section id="faq" className="py-24 px-4 bg-neutral-900/30">
			<div className="container mx-auto max-w-3xl">
				<div className="text-center mb-12">
					<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
						Pytania
					</p>
					<h2 className="mb-2 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl md:tracking-widest">
						Często zadawane pytania
					</h2>
					<div className="mx-auto mb-6 h-px w-12 bg-teal-500/80" aria-hidden />
					<p className="text-lg font-thin text-neutral-600 dark:text-neutral-400 md:text-xl">
						Odpowiedzi na najczęściej zadawane pytania
					</p>
				</div>

				<div className="space-y-3">
					{faqs.map((faq, index) => (
						<div
							key={`faq-${faq.question.slice(0, 20)}`}
							className="overflow-hidden rounded-xl border border-neutral-200/80 bg-white dark:border-neutral-800/80 dark:bg-neutral-950/80"
						>
							<button
								type="button"
								onClick={() => setOpenIndex(openIndex === index ? null : index)}
								className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-neutral-50/80 dark:hover:bg-neutral-900/50 transition-colors"
							>
								<span className="text-base font-medium text-neutral-900 dark:text-white pr-4 text-left">
									{faq.question}
								</span>
								<svg
									className={`w-5 h-5 text-teal-500 transition-transform flex-shrink-0 ${
										openIndex === index ? "rotate-180" : ""
									}`}
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
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
									<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal text-sm">
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
