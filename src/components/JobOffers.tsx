import { useState, useMemo } from "react";
import clsx from "clsx";
import baseLogo from "../assets/BASELOGO.svg";
import { CalendarDays, MapPin } from "lucide-react";

const SITE_URL = "https://recrumates.com";

function isLinkEmpty(link: string | null | undefined): boolean {
	return !link || link.trim() === "";
}
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
	link?: string | null;
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
		link: string | null;
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
			link
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
				link: job.link ?? undefined,
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

	const jobPostingJsonLd = useMemo(() => {
		const activeJobs = remoteMapped.filter((j) => j.active !== false);
		if (activeJobs.length === 0) return null;
		return {
			"@context": "https://schema.org",
			"@type": "ItemList",
			name: "Oferty pracy RecruMates",
			description:
				"Aktualne oferty pracy – rekrutacja IT, sprzedaż, inżynieria, CyberSec",
			numberOfItems: activeJobs.length,
			itemListElement: activeJobs.map((job, index) => ({
				"@type": "ListItem",
				position: index + 1,
				item: {
					"@type": "JobPosting",
					title: job.title,
					description: `Oferta pracy: ${job.title} w ${job.company}. Lokalizacja: ${job.location}.`,
					datePosted: job.posted || undefined,
					hiringOrganization: {
						"@type": "Organization",
						name: job.company,
					},
					jobLocation: {
						"@type": "Place",
						address: {
							"@type": "PostalAddress",
							addressLocality: job.location,
							addressCountry: "PL",
						},
					},
					url: isLinkEmpty(job.link)
						? `${SITE_URL}/#jobs-${job.id}`
						: (job.link as string).trim(),
				},
			})),
		};
	}, [remoteMapped]);

	const handleOpenApplyModal = (job: JobOffer) => {
		setSelectedJob(job);
	};

	const handleCloseApplyModal = () => {
		setSelectedJob(null);
	};

	return (
		<section
			id="jobs"
			className="py-24 px-4 bg-neutral-950"
			aria-labelledby="jobs-heading"
		>
			{jobPostingJsonLd && (
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data for SEO – safe, serialized from app data
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jobPostingJsonLd),
					}}
				/>
			)}
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-12">
					<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
						Kariera
					</p>
					<h2
						id="jobs-heading"
						className="mb-2 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl md:tracking-widest"
					>
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
						<ul className="space-y-4 xs:max-h-[500px] max-h-[900px] overflow-y-auto custom-scrollbar list-none">
							{jobOffers.map((job) => (
								<li key={job.id}>
									<article
										className={clsx(
											"rounded-xl border p-6 transition-colors mr-2",
											job.active === false
												? "border-neutral-300/80 bg-neutral-900/80 dark:border-neutral-800/80"
												: "border-neutral-200/80 bg-neutral-50 dark:border-neutral-800/80 dark:bg-neutral-900/50",
										)}
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
														<h4
															className={clsx(
																"text-lg font-semibold tracking-tight",
																job.active === false
																	? "text-neutral-500 dark:text-neutral-500"
																	: "text-white",
															)}
														>
															{isLinkEmpty(job.link) ? (
																job.title
															) : (
																<a
																	href={(job.link as string).trim()}
																	target="_blank"
																	rel="noopener noreferrer nofollow"
																	title={`Zobacz pełną ofertę: ${job.title}`}
																	className={clsx(
																		job.active === false
																			? "text-neutral-500 dark:text-neutral-500 cursor-not-allowed"
																			: "hover:text-accent-600 dark:hover:text-accent-400 transition-colors",
																	)}
																>
																	{job.title}
																</a>
															)}
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
														className={clsx(
															"flex items-center gap-2",
															job.active === false
																? "text-neutral-500 dark:text-neutral-500"
																: "text-accent-600 dark:text-accent-400",
														)}
													>
														<span
															className={clsx(
																"w-1.5 h-1.5 rounded-full",
																job.active === false
																	? "bg-neutral-500"
																	: "bg-accent-500 animate-pulse",
															)}
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
													className={clsx(
														"whitespace-nowrap rounded-lg border px-5 py-3 text-sm font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950",
														job.active === false
															? "bg-neutral-600 cursor-not-allowed opacity-60 pointer-events-none focus:outline-none focus:ring-0 text-neutral-200"
															: "bg-accent-600 hover:bg-accent-500 border-accent-500/50 text-white",
													)}
													aria-disabled={job.active === false}
												>
													Aplikuj
												</button>
											</div>
										</div>
									</article>
								</li>
							))}
						</ul>
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
							aria-label="Przejdź do formularza kontaktowego, aby zapytać o więcej ofert"
						>
							Zapytaj o więcej ofert →
						</a>
					</div>
				)}
			</div>
		</section>
	);
}
