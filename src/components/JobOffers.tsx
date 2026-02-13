import { useState } from "react";
import baseLogo from "../assets/BASELOGO.svg";
import { CalendarDays, MapPin } from "lucide-react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import JobApplyModal from "./JobApplyModal";

interface JobOffer {
	id: number | string;
	title: string;
	company: string;
	location: string;
	status: string;
	posted: string;
	active?: boolean;
}

interface AllJobOffersResponse {
	allJobOffers: {
		id: string;
		title: string;
		company: string;
		location: string;
		stat: string;
		date: string | null;
		active: boolean | null;
	}[];
	_allJobOffersMeta: {
		count: number;
	};
}

const ALL_JOB_OFFERS_QUERY = gql`
	query AllJobOffers {
		allJobOffers {
			id
			title
			company
			location
			stat
			date
			active
		}
		_allJobOffersMeta {
			count
		}
	}
`;

export default function JobOffers() {
	const [selectedJob, setSelectedJob] = useState<JobOffer | null>(null);

	const { data, loading, error } = useQuery<AllJobOffersResponse>(
		ALL_JOB_OFFERS_QUERY,
		{
			fetchPolicy: "cache-first",
		},
	);

	const remoteMapped: JobOffer[] =
		data?.allJobOffers?.map(
			(job: AllJobOffersResponse["allJobOffers"][number], index: number) => ({
				id: job.id ?? `remote-${index}`,
				title: job.title,
				company: job.company,
				location: job.location,
				status: job.stat,
				posted: job.date ?? "",
				active: job.active ?? true,
			}),
		) ?? [];

	const inactiveRemote = remoteMapped.filter((job) => job.active === false);
	const activeRemote = remoteMapped
		.filter((job) => job.active !== false)
		.slice()
		.sort((a, b) => {
			const aTime = a.posted ? new Date(a.posted).getTime() : 0;
			const bTime = b.posted ? new Date(b.posted).getTime() : 0;
			return bTime - aTime;
		});

	const jobOffers: JobOffer[] = [...inactiveRemote, ...activeRemote];

	const handleOpenApplyModal = (job: JobOffer) => {
		setSelectedJob(job);
	};

	const handleCloseApplyModal = () => {
		setSelectedJob(null);
	};

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
					<div
						className="mx-auto mb-6 mt-3 h-px w-12 bg-accent-500/80"
						aria-hidden
					/>
					{jobOffers.length > 0 && !error && (
						<p className="mx-auto max-w-xl text-lg font-thin text-neutral-600 dark:text-neutral-400 md:text-lg">
							RECRUMATES ma {jobOffers.length} opublikowanych ofert pracy —
							znajdź odpowiednią dla siebie
						</p>
					)}
				</div>

				{loading && (
					<p className="text-center text-sm text-neutral-400 mb-4">
						Ładowanie ofert z DatoCMS…
					</p>
				)}
				{(error || (!loading && jobOffers.length === 0)) && (
					<p className="text-center text-sm text-red-400 mb-4">
						Nie udało się pobrać ofert. Skontaktuj się z nami, jeśli chcesz
						poznać aktualne możliwości.
					</p>
				)}

				{/* Job Offers List */}
				{jobOffers.length > 0 && (
					<div className="mb-8">
						<h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 tracking-tight">
							Opublikowane oferty pracy
						</h3>
						<div className="space-y-4 max-h-[500px]  overflow-y-auto custom-scrollbar">
							{jobOffers.map((job) => (
								<div
									key={job.id}
									className={`rounded-xl border p-6 transition-colors mr-2 ${
										job.active === false
											? "border-neutral-300/80 bg-neutral-900/80 dark:border-neutral-800/80"
											: "border-neutral-200/80 bg-neutral-50 dark:border-neutral-800/80 dark:bg-neutral-900/50"
									}`}
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
												<span
													className={`flex items-center gap-2 ${
														job.active === false
															? "text-neutral-500 dark:text-neutral-500"
															: "text-accent-600 dark:text-accent-400"
													}`}
												>
													<span
														className={`w-1.5 h-1.5 rounded-full ${
															job.active === false
																? "bg-neutral-500"
																: "bg-accent-500 animate-pulse"
														}`}
													/>
													{job.active === false
														? "Oferta nieaktywna"
														: job.status}
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
												onClick={() =>
													job.active === false
														? undefined
														: handleOpenApplyModal(job)
												}
												className={`whitespace-nowrap rounded-lg border border-accent-500/50 px-5 py-3 text-sm font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950 ${
													job.active === false
														? "bg-neutral-600 cursor-not-allowed opacity-60 pointer-events-none"
														: "bg-accent-600 hover:bg-accent-500"
												}`}
												aria-disabled={job.active === false}
											>
												Aplikuj
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{selectedJob && (
					<JobApplyModal
						job={{
							id: selectedJob.id,
							title: selectedJob.title,
							company: selectedJob.company,
							location: selectedJob.location,
						}}
						onClose={handleCloseApplyModal}
					/>
				)}

				{jobOffers.length > 0 && (
					<div className="text-center">
						<a
							href="#contact"
							className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-medium text-sm inline-flex items-center gap-2 transition-colors"
						>
							Zapytaj o więcej ofert →
						</a>
					</div>
				)}
			</div>
		</section>
	);
}
