import {
	BriefcaseBusiness,
	Handshake,
	Search,
	Target,
} from "lucide-react";

export default function Services() {
	const services = [
		{
			Icon: Search,
			title: "Rekrutacja end-to-end",
			description:
				"Kompleksowa obsługa procesu rekrutacyjnego od początku do końca.",
		},
		{
			Icon: Handshake,
			title: "Specjalizacja w wielu obszarach",
			description:
				"Specjalizujemy się w rolach handlowych, IT, inżynierskich, CyberSec i managerskich.",
		},
		{
			Icon: BriefcaseBusiness,
			title: "Doradztwo HR i employer branding",
			description:
				"Pomagamy budować markę pracodawcy i optymalizować procesy HR.",
		},
		{
			Icon: Target,
			title: "Elastyczne modele rozliczeń",
			description:
				"Success Fee od 8% rocznego wynagrodzenia, opcjonalnie fix price lub RPO.",
		},
	];

	return (
		<section
			id="services"
			className="py-24 px-4 bg-neutral-50 dark:bg-neutral-900/30"
		>
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-14">
					<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
						Co robimy
					</p>
					<h2 className="mb-2 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl md:tracking-widest">
						Usługi
					</h2>
					<div className="mx-auto mb-6 h-px w-12 bg-teal-500/80" aria-hidden />
					<p className="mx-auto max-w-2xl text-lg font-thin leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-xl">
						RecruMates to agencja rekrutacyjna znana z przyjaznego podejścia do
						rozmówców — profesjonalizm i empatia połączone ze zrozumieniem wielu
						obszarów biznesu.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
					{services.map(({ Icon, title, description }) => (
						<div
							key={title}
							className="bg-white dark:bg-neutral-950/80 p-6 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 transition-colors"
						>
							<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-teal-500/30 bg-teal-500/10 text-teal-500 dark:border-teal-400/30 dark:bg-teal-400/10">
								<Icon className="h-5 w-5" aria-hidden="true" />
							</div>
							<h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 tracking-tight">
								{title}
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400 text-sm font-normal leading-relaxed">
								{description}
							</p>
						</div>
					))}
				</div>

				<div className="bg-white dark:bg-neutral-950/80 p-8 md:p-12 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80">
					<h3 className="mb-6 text-center text-lg font-semibold uppercase tracking-[0.08em] text-neutral-900 dark:text-white">
						Co możemy dla Ciebie zrobić?
					</h3>
					<ul className="mx-auto max-w-xl space-y-4">
						<li className="flex items-start gap-3">
							<span className="text-teal-500 mt-0.5 shrink-0">✓</span>
							<span className="font-normal text-neutral-600 dark:text-neutral-400">
								Znaleźć najlepsze talenty na rynku — szybko i efektywnie
							</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-teal-500 mt-0.5 shrink-0">✓</span>
							<span className="font-normal text-neutral-600 dark:text-neutral-400">
								Doradzić, jak ulepszyć procesy rekrutacyjne
							</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-teal-500 mt-0.5 shrink-0">✓</span>
							<span className="font-normal text-neutral-600 dark:text-neutral-400">
								Wspierać Twoją firmę w budowaniu przyszłościowych zespołów
							</span>
						</li>
					</ul>
					<div className="mt-8 text-center">
						<a
							href="#contact"
							className="inline-flex items-center justify-center rounded-lg border border-teal-500/50 bg-teal-600 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950"
						>
							Zamów usługi
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
