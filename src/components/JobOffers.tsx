interface JobOffer {
	id: number;
	title: string;
	company: string;
	location: string;
	status: string;
	posted: string;
}

export default function JobOffers() {
	// Przykładowe oferty - w rzeczywistości będą pobierane z API
	const jobOffers: JobOffer[] = [
		{
			id: 1,
			title: "Key Account Manager Observability &...",
			company: "RecruMates",
			location: "Warszawa i okolice",
			status: "Aktywne przeglądanie kandydatów",
			posted: "4 dni temu",
		},
		// Można dodać więcej ofert
	];

	return (
		<section id="jobs" className="py-20 px-4 bg-white dark:bg-gray-900">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						Oferty pracy
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300">
						RecruMates ma {jobOffers.length} otwartą ofertę pracy - znajdź
						odpowiednią dla siebie
					</p>
				</div>

				{/* Search Bar */}
				<div className="max-w-2xl mx-auto mb-12">
					<div className="flex flex-col sm:flex-row gap-4">
						<input
							type="text"
							placeholder="Stanowisko lub słowo kluczowe"
							className="flex-1 px-6 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-green-600 dark:focus:border-green-500"
						/>
						<button
							type="button"
							className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
						>
							Szukaj
						</button>
					</div>
				</div>

				{/* Job Offers List */}
				<div className="mb-8">
					<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
						Niedawno opublikowane oferty pracy
					</h3>
					<div className="space-y-6">
						{jobOffers.map((job) => (
							<div
								key={job.id}
								className="bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
							>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
									<div className="flex-1">
										<div className="flex items-center gap-3 mb-2">
											<div className="w-12 h-12 bg-white dark:bg-gray-900 border-2 border-gray-800 dark:border-gray-700 flex items-center justify-center rounded">
												<span className="text-sm font-bold">
													<span className="text-black dark:text-white">R</span>
													<span className="text-green-600 dark:text-green-500">
														M
													</span>
												</span>
											</div>
											<div>
												<h4 className="text-xl font-bold text-gray-900 dark:text-white">
													{job.title}
												</h4>
												<p className="text-gray-600 dark:text-gray-400">
													{job.company}
												</p>
											</div>
										</div>
										<div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
											<span className="flex items-center gap-2">
												<span aria-label="Lokalizacja">📍</span> {job.location}
											</span>
											<span className="flex items-center gap-2 text-green-600 dark:text-green-500">
												<span
													className="w-2 h-2 bg-green-600 dark:bg-green-500 rounded-full animate-pulse"
													aria-label="Status aktywny"
												></span>
												{job.status}
											</span>
											<span>
												<span aria-label="Data publikacji">📅</span>{" "}
												{job.posted}
											</span>
										</div>
									</div>
									<div className="flex items-center gap-4">
										<button
											type="button"
											className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
											aria-label="Zapisz ofertę"
										>
											<svg
												className="w-6 h-6 text-gray-600 dark:text-gray-400"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
											</svg>
										</button>
										<a
											href="#contact"
											className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
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
							className="text-green-600 dark:text-green-500 hover:text-green-700 dark:hover:text-green-400 font-semibold text-lg inline-flex items-center gap-2"
						>
							Pokaż wszystkie oferty pracy →
						</a>
					</div>
				)}
			</div>
		</section>
	);
}
