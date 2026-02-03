import heroBackground from "../assets/hero-background.png";
import heroBackgroundMobile from "../assets/hero-background-mobile.jpg";

export default function Hero() {
	return (
		<section
			id="home"
			className="relative sm:min-h-screen min-h-[95vh] flex flex-col md:flex-row md:items-center justify-start md:justify-center pt-[4.5rem] md:pt-24 pb-28 md:pb-20 px-5 md:px-6 overflow-hidden bg-neutral-950"
		>
			{/* Background image */}
			<img
				src={heroBackgroundMobile}
				alt=""
				className="absolute inset-0 z-0 h-full w-full object-cover object-bottom sm:hidden"
			/>
			<img
				src={heroBackground}
				alt=""
				className="absolute inset-0 z-0 hidden h-full w-full object-cover object-center sm:block"
			/>

			{/* Overlay – mocniejszy u góry na mobile dla czytelności */}
			<div
				className="absolute inset-0 z-[1] bg-gradient-to-b from-neutral-950/85 via-neutral-950/45 to-neutral-950/70 md:from-neutral-950/70 md:via-neutral-950/50 md:to-neutral-950"
				aria-hidden
			/>

			{/* Treść */}
			<div className="container relative z-10 mx-auto max-w-3xl flex-1 flex flex-col mt-12 sm:mt-0 justify-start sm:justify-center">
				<div className="text-center pt-6 md:pt-0  ">
					<p className="mb-3 text-[11px] font-medium uppercase  tracking-[0.22em] text-neutral-400 md:mb-6 md:text-xs md:tracking-[0.2em] md:text-neutral-500">
						Twoi Rekrutacyjni Mates
					</p>

					<h1 className="mb-2 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-0 md:mb-4">
						<span className="text-4xl font-semibold tracking-[0.28em] text-white md:text-7xl md:leading-[1.05] md:tracking-widest">
							RECRU
						</span>
						<span className="text-4xl font-semibold tracking-[0.28em] text-white md:text-7xl md:leading-[1.05] md:tracking-widest">
							MATES
						</span>
					</h1>

					<div
						className="mx-auto mb-4 h-px w-10 bg-accent-500/80 md:mb-6 md:w-12"
						aria-hidden
					/>

					<p className="mx-auto max-w-[20rem] text-sm font-light leading-relaxed text-neutral-300 md:max-w-lg md:mb-8 md:text-xl md:font-thin md:text-neutral-200">
						Technologia i ludzkie podejście w jednym miejscu. Budujemy ekosystem
						rekrutacyjny łączący headhunterów w Polsce
					</p>

					{/* CTAs – tylko desktop/tablet */}
					<div className="mt-6 hidden flex-row flex-wrap items-center justify-center gap-3 sm:flex">
						<a
							href="#contact"
							className="inline-flex min-w-[180px] items-center justify-center rounded-lg border border-accent-500/50 bg-accent-600 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:ring-offset-2 focus:ring-offset-neutral-950"
						>
							Zamów usługi
						</a>
						<a
							href="#jobs"
							className="inline-flex min-w-[180px] items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-neutral-950"
						>
							Oferty pracy
						</a>
					</div>
				</div>
			</div>

			{/* Pasek CTA – tylko mobile, na dole ekranu */}
			<div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col sm:hidden w-full h-fit">
				<div className="px-4 py-4 w-full">
					<div className="mx-auto flex w-full flex-row items-stretch justify-between gap-4">
						<a
							href="#contact"
							className="flex-1 min-w-0 rounded-xl border border-accent-500/50 bg-accent-600 py-3 text-center text-xs font-medium text-white transition-colors active:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:ring-offset-2 focus:ring-offset-neutral-950"
						>
							Zamów usługi
						</a>
						<a
							href="#jobs"
							className="flex-1 min-w-0 rounded-xl border border-white/20 bg-white/5 py-3 text-center text-xs font-medium text-white backdrop-blur-sm transition-colors active:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-neutral-950"
						>
							Oferty pracy
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
