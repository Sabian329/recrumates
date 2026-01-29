import heroBackground from "../assets/hero-background.png";

export default function Hero() {
	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6 overflow-hidden bg-neutral-950"
		>
			{/* Background image */}
			<img
				src={heroBackground}
				alt=""
				className="absolute inset-0 z-0 h-full w-full object-cover object-center"
			/>
			{/* Cinematic overlay: vignette + readable content area */}
			<div
				className="absolute inset-0 z-[1] bg-gradient-to-b from-neutral-950/70 via-neutral-950/50 to-neutral-950"
				aria-hidden
			/>

			<div className="container relative z-10 mx-auto max-w-3xl">
				<div className="text-center">
					{/* Eyebrow */}
					<p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
						Twoi Rekrutacyjni Mates
					</p>

					{/* Main headline */}
					<div className="flex items-center justify-center ">
						<h1 className="mb-4 text-5xl font-semibold  tracking-widest text-white md:text-7xl md:leading-[1.05]">
							RECRU
						</h1>
						<h1 className="mb-4 text-5xl font-semibold  tracking-widest text-white md:text-7xl md:leading-[1.05]">
							MATES
						</h1>
					</div>
					{/* Tagline */}

					{/* Lead */}
					<p className="mx-auto mb-8 max-w-lg  font-thin text-neutral-200 text-xl">
						Technologia i ludzkie podejście w jednym miejscu. Budujemy ekosystem
						rekrutacyjny łączący headhunterów w Polsce
					</p>

					{/* CTAs */}
					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
						<a
							href="#contact"
							className="inline-flex min-w-[180px] items-center justify-center rounded-lg border border-teal-500/50 bg-teal-600 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:ring-offset-2 focus:ring-offset-neutral-950"
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
		</section>
	);
}
