import LightRays from "./ui/LightRays";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

interface TeamMember {
	id: string;
	name: string;
	role: string;
	location: string;
	photo: {
		url: string;
	};
}

interface AllTeamMembersResponse {
	allTeamMembers: TeamMember[];
}

const ALL_TEAM_MEMBERS_QUERY = gql`
	query AllTeamMembers {
		allTeamMembers {
			role
			photo {
				url
			}
			name
			location
			id
		}
	}
`;

export default function Team() {
	const { data, loading, error } = useQuery<AllTeamMembersResponse>(
		ALL_TEAM_MEMBERS_QUERY,
		{
			fetchPolicy: "cache-first",
		},
	);

	const team = data?.allTeamMembers ?? [];

	return (
		<section
			id="team"
			className="relative overflow-hidden py-20 md:py-24 px-5 sm:px-4 bg-neutral-950 text-neutral-100"
		>
			<div
				className="absolute inset-0 z-0 pointer-events-none hidden sm:block"
				aria-hidden
			>
				<LightRays
					raysOrigin="top-center"
					raysColor="#ABABAB"
					raysSpeed={0.2}
					lightSpread={0.5}
					rayLength={3}
					followMouse={true}
					mouseInfluence={0.1}
					noiseAmount={0.5}
					distortion={0}
					className="custom-rays"
					pulsating={false}
					fadeDistance={1}
					saturation={1}
				/>
			</div>

			<div className="container relative z-10 mx-auto max-w-6xl">
				<div className="text-center mb-14 md:mb-14">
					<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
						Zespół
					</p>
					<h2 className="mb-2 text-3xl font-semibold tracking-tight text-white md:text-4xl md:tracking-widest">
						Nasz zespół
					</h2>
					<div
						className="mx-auto mb-6 h-px w-12 bg-accent-500/80"
						aria-hidden
					/>
					<p className="mx-auto max-w-3xl text-base sm:text-lg font-thin leading-relaxed text-neutral-400 md:text-xl">
						Za RecruMates stoją ludzie z doświadczeniem w rekrutacji,
						technologii i biznesie.
						<br className="hidden sm:block" /> Łączy nas jedno: chęć tworzenia
						lepszych procesów i realnej wartości dla firm oraz kandydatów.
						Poznaj osoby, które będą Twoimi rekrutacyjnymi mates.
					</p>
				</div>

				{loading && (
					<p className="text-center text-sm text-neutral-400 mb-6">
						Ładowanie zespołu z DatoCMS…
					</p>
				)}
				{(error || (!loading && team.length === 0)) && (
					<p className="text-center text-sm text-red-400 mb-6">
						Nie udało się pobrać informacji o zespole z DatoCMS lub nie ma
						opublikowanych członków zespołu.
					</p>
				)}

				{team.length > 0 && (
					<div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-12 sm:gap-10 max-w-md sm:max-w-none mx-auto">
						{team.map((member) => (
							<article
								key={member.id}
								className="group text-center sm:flex-1 sm:max-w-[280px] relative overflow-hidden sm:overflow-visible rounded-2xl sm:rounded-none"
							>
								<div className="relative mb-5 sm:mb-4 rounded-2xl overflow-hidden aspect-square max-w-[200px] sm:max-w-[240px] mx-auto">
									<div
										className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5"
										aria-hidden
									/>
									<img
										src={member.photo.url}
										alt={member.name}
										className="relative w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
										loading="lazy"
										width={500}
										height={500}
									/>
								</div>
								<h3 className="text-xl sm:text-lg font-semibold tracking-tight text-white mb-1.5">
									{member.name}
								</h3>
								<p className="text-sm font-medium text-accent-400 sm:text-accent-400/90 mb-1 tracking-tight">
									{member.role}
								</p>
								<p className="text-sm text-neutral-500 font-normal">
									{member.location}
								</p>
							</article>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
