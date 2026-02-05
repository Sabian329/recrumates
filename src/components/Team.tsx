import team1 from "../assets/team/team1.png";
import team2 from "../assets/team/team2.png";
import team3 from "../assets/team/team3.png";
import LightRays from "./ui/LightRays";

const team = [
	{
		name: "Maciej Sabada",
		role: "Co-Founder / CEO",
		location: "Wrocław, Polska",
		image: team1,
	},
	{
		name: "Kasia Kowalska",
		role: "Co-Founder / CTO",
		location: "Warszawa, Polska",
		image: team2,
	},
	{
		name: "Kasia Kowalska",
		role: "Co-Founder / CTO",
		location: "Warszawa, Polska",
		image: team3,
	},
];

export default function Team() {
	return (
		<section
			id="team"
			className="relative overflow-hidden py-16 md:py-24 px-4 bg-neutral-950 text-neutral-100"
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
				<div className="text-center mb-12 md:mb-14">
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
					<p className="mx-auto max-w-3xl text-lg font-thin leading-relaxed text-neutral-400 md:text-xl">
						Za RecruMates stoją ludzie z doświadczeniem w rekrutacji,
						technologii i biznesie.
						<br /> Łączy nas jedno: chęć tworzenia lepszych procesów i realnej
						wartości dla firm oraz kandydatów. Poznaj osoby, które będą Twoimi
						rekrutacyjnymi mates.
					</p>
				</div>

				<div className="flex sm:flex-row flex-col justify-center items-center gap-10">
					{team.map((member) => (
						<div key={member.name} className="group text-center">
							<div className="relative mb-4 rounded-xl overflow-hidden border border-neutral-800/80 bg-neutral-900/50 aspect-square max-w-[240px] mx-auto">
								<img
									src={member.image}
									alt=""
									className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
									loading="lazy"
									width={500}
									height={500}
								/>
							</div>
							<h3 className="text-lg font-semibold tracking-tight text-white mb-1">
								{member.name}
							</h3>
							<p className="text-sm font-medium text-accent-400/90 mb-0.5">
								{member.role}
							</p>
							<p className="text-sm text-neutral-500 font-normal">
								{member.location}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
