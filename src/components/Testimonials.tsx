import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

interface Partnership {
	id: string;
	title: string;
	jobName: string;
	desc: string;
}

interface AllPartnershipsResponse {
	allPartnerships: Partnership[];
}

const ALL_PARTNERSHIPS_QUERY = gql`
	query AllPartnerships {
		allPartnerships {
			title
			jobName
			id
			desc
		}
	}
`;

export default function Testimonials() {
	const { data, loading, error } = useQuery<AllPartnershipsResponse>(
		ALL_PARTNERSHIPS_QUERY,
		{
			fetchPolicy: "cache-first",
		},
	);

	const collaborations =
		data?.allPartnerships.map((p) => ({
			id: p.id,
			company: p.title,
			description: p.desc,
			contact: p.jobName,
		})) ?? [];

	return (
		<section
			id="collaborations"
			className="py-16 md:py-24 px-4 bg-neutral-900/30 text-neutral-100"
		>
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-12 md:mb-14">
					<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
						Doświadczenie
					</p>
					<h2 className="mb-2 text-3xl font-semibold tracking-tight text-white md:text-4xl md:tracking-widest">
						Współprace
					</h2>
					<div
						className="mx-auto mb-6 h-px w-12 bg-accent-500/80"
						aria-hidden
					/>
					<p className="mx-auto max-w-2xl text-lg font-thin text-neutral-400 md:text-xl">
						Firmy, z którymi budowaliśmy zespoły i procesy rekrutacyjne — bez
						logotypów, za to z krótkim opisem zakresu współpracy.
					</p>
				</div>

				{loading && (
					<p className="text-center text-sm text-neutral-400 mb-6">
						Ładowanie współprac z DatoCMS…
					</p>
				)}
				{(error || (!loading && collaborations.length === 0)) && (
					<p className="text-center text-sm text-red-400 mb-6">
						Nie udało się pobrać listy współprac z DatoCMS lub nie ma jeszcze
						opublikowanych wpisów.
					</p>
				)}

				{collaborations.length > 0 && (
					<div className="grid sm:grid-cols-2 gap-6 md:gap-8">
						{collaborations.map((item) => (
							<div
								key={item.id}
								className="rounded-xl border border-neutral-800/80 bg-neutral-900/50 p-6 md:p-8 flex flex-col"
							>
								<h3 className="text-xl font-semibold tracking-tight text-white mb-4">
									{item.company}
								</h3>
								<p className="text-neutral-300 font-normal leading-relaxed flex-1">
									&quot;{item.description}&quot;
								</p>
								<p className="mt-4 text-sm text-neutral-500 font-normal">
									{item.contact}
								</p>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
