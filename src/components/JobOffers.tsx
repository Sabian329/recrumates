import baseLogo from "../assets/BASELOGO.svg";
import { CalendarDays, MapPin } from "lucide-react";

interface JobOffer {
	id: number;
	title: string;
	company: string;
	location: string;
	status: string;
	posted: string;
}

export default function JobOffers() {
	const jobOffers: JobOffer[] = [
		{
			id: 1,
			title: "Key Account Manager Observability & Monitoring",
			company: "RecruMates",
			location: "Warszawa i okolice",
			status: "Aktywne przeglądanie kandydatów",
			posted: "4 dni temu",
		},
		{
			id: 2,
			title: "Senior Account Executive SaaS",
			company: "RecruMates dla Klienta z branży IT",
			location: "Hybrid – Warszawa / remote",
			status: "Etap rozmów z wybranymi kandydatami",
			posted: "1 tydzień temu",
		},
		{
			id: 3,
			title: "Head of Sales (B2B)",
			company: "Scale-up technologiczny",
			location: "Wrocław / cała Polska",
			status: "Nowa rekrutacja",
			posted: "2 dni temu",
		},
		{
			id: 4,
			title: "Cyber Security Engineer",
			company: "Międzynarodowa organizacja",
			location: "Remote z Polski",
			status: "Aktywne poszukiwanie kandydatów",
			posted: "5 dni temu",
		},
		{
			id: 5,
			title: "HR Business Partner",
			company: "Organizacja produkcyjno-technologiczna",
			location: "Poznań i okolice",
			status: "Rozmowy kwalifikacyjne w toku",
			posted: "1 dzień temu",
		},
	];

	return (
		<section id="jobs" className="py-24 px-4 bg-neutral-950">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-12">
					<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
						Kariera
					</p>
					<h2 className="mb-2 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl md:tracking-widest">
						Oferty pracy
					</h2>
					<div className="mx-auto mb-6 h-px w-12 bg-teal-500/80" aria-hidden />
					<p className="mx-auto max-w-xl text-lg font-thin text-neutral-600 dark:text-neutral-400 md:text-xl">
						RecruMates ma {jobOffers.length} otwartą ofertę pracy — znajdź
						odpowiednią dla siebie
					</p>
				</div>

				{/* Search Bar */}
				<div className="max-w-2xl mx-auto mb-12">
					<div className="flex flex-col sm:flex-row gap-3">
						<input
							type="text"
							placeholder="Stanowisko lub słowo kluczowe"
							className="flex-1 rounded-lg border border-neutral-200 bg-white px-5 py-3.5 font-normal text-neutral-900 placeholder:text-neutral-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-white dark:placeholder:text-neutral-500"
						/>
						<button
							type="button"
							className="rounded-lg border border-teal-500/50 bg-teal-600 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950"
						>
							Szukaj
						</button>
					</div>
				</div>

				{/* Job Offers List */}
				<div className="mb-8">
					<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 tracking-tight">
						Opublikowane oferty pracy
					</h3>
					<div className="space-y-4 max-h-[500px] overflow-y-auto custom-scrollbar">
						{jobOffers.map((job) => (
							<div
								key={job.id}
								className="rounded-xl border border-neutral-200/80 bg-neutral-50 p-6 transition-colors dark:border-neutral-800/80 dark:bg-neutral-900/50 mr-2"
							>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
									<div className="flex-1">
										<div className="flex items-center gap-3 mb-2">
											<img
												src={baseLogo}
												alt=""
												className="w-11 h-11  object-contain"
												aria-hidden="true"
											/>

											<div>
												<h4 className="text-lg font-semibold text-neutral-900 dark:text-white tracking-tight">
													{job.title}
												</h4>
												<p className="text-neutral-500 dark:text-neutral-400 text-sm font-normal">
													{job.company}
												</p>
											</div>
										</div>
										<div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-neutral-500 dark:text-neutral-400 font-normal">
											<span className="flex items-center gap-1.5">
												<MapPin className="h-4 w-4" aria-hidden="true" />
												{job.location}
											</span>
											<span className="flex items-center gap-2 text-teal-600 dark:text-teal-400">
												<span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></span>
												{job.status}
											</span>
											<span>
												<CalendarDays
													className="mr-1 inline-block h-4 w-4 align-middle"
													aria-hidden="true"
												/>
												{job.posted}
											</span>
										</div>
									</div>
									<div className="flex items-center gap-3">
										<button
											type="button"
											className="p-2.5 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 rounded-xl transition-colors"
											aria-label="Zapisz ofertę"
										>
											<svg
												className="w-5 h-5 text-neutral-500 dark:text-neutral-400"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
											</svg>
										</button>
										<a
											href="#contact"
											className="whitespace-nowrap rounded-lg border border-teal-500/50 bg-teal-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950"
										>
											Aplikuj
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{jobOffers.length > 0 && (
					<div className="text-center">
						<a
							href="#contact"
							className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium text-sm inline-flex items-center gap-2 transition-colors"
						>
							Zapytaj o więcej ofert →
						</a>
					</div>
				)}
			</div>
		</section>
	);
}
