const clients = [
	{
		name: "Transistor",
		logoLight:
			"https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
		logoDark:
			"https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg",
	},
	{
		name: "Reform",
		logoLight:
			"https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
		logoDark:
			"https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg",
	},
	{
		name: "Tuple",
		logoLight:
			"https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
		logoDark:
			"https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg",
	},
	{
		name: "SavvyCal",
		logoLight:
			"https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
		logoDark:
			"https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg",
	},
	{
		name: "Statamic",
		logoLight:
			"https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
		logoDark:
			"https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg",
	},
];

export default function ClientLogos() {
	return (
		<section className="py-24 px-4 text-white s	bg-neutral-900">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-14">
					<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
						Współpraca
					</p>
					<h2 className="mb-2 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl md:tracking-widest">
						Zaufali nam
					</h2>
					<div
						className="mx-auto mb-6 h-px w-12 bg-accent-500/80"
						aria-hidden
					/>
					<p className="mx-auto max-w-xl text-lg font-thin text-neutral-600 dark:text-neutral-400 md:text-xl">
						Firmy, z którymi nawiązaliśmy współpracę rekrutacyjną
					</p>
				</div>

				<div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					{clients.map((client) => (
						<div
							key={client.name}
							className="col-span-2 flex items-center justify-center lg:col-span-1"
						>
							<img
								alt={client.name}
								src={client.logoLight}
								width={158}
								height={48}
								className="max-h-12 w-full object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:hidden"
							/>
							<img
								alt={client.name}
								src={client.logoDark}
								width={158}
								height={48}
								className="hidden max-h-12 w-full object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:block"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
