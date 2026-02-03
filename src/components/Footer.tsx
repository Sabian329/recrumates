import baseLogo from "../assets/LOGO+SIGN.svg";

export default function Footer() {
	return (
		<footer className="bg-neutral-950 text-neutral-300 py-14 px-4">
			<div className="container mx-auto max-w-6xl">
				<div className="grid md:grid-cols-4 gap-10 mb-10">
					{/* Logo & About */}
					<div>
						<div className="flex items-center gap-2.5 mb-4">
							<a href="#home" aria-label="RecruMates – strona główna">
								<span>
									<img
										src={baseLogo}
										alt="RecruMates"
										className="w-full h-12 object-contain"
										aria-hidden="true"
										aria-label="RecruMates – strona główna"
									/>
								</span>
							</a>
						</div>
						<p className="text-neutral-500 text-sm font-normal leading-relaxed">
							Tworzymy jakościową i przyjazną rekrutację, na luzie :)
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-semibold text-white text-sm mb-4 tracking-tight">
							Szybkie linki
						</h4>
						<ul className="space-y-2.5 text-sm font-normal">
							<li>
								<a
									href="#home"
									className="text-neutral-500 hover:text-teal-400 transition-colors"
								>
									Główna
								</a>
							</li>
							<li>
								<a
									href="#about"
									className="text-neutral-500 hover:text-teal-400 transition-colors"
								>
									O nas
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="text-neutral-500 hover:text-teal-400 transition-colors"
								>
									Usługi
								</a>
							</li>
							<li>
								<a
									href="#jobs"
									className="text-neutral-500 hover:text-teal-400 transition-colors"
								>
									Oferty pracy
								</a>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="font-semibold text-white text-sm mb-4 tracking-tight">
							Usługi
						</h4>
						<ul className="space-y-2.5 text-sm text-neutral-500 font-normal">
							<li>Rekrutacja end-to-end</li>
							<li>Doradztwo HR</li>
							<li>Employer branding</li>
							<li>RPO</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="font-semibold text-white text-sm mb-4 tracking-tight">
							Kontakt
						</h4>
						<ul className="space-y-2.5 text-sm text-neutral-500 font-normal">
							<li>Wrocław, Dolnośląskie</li>
							<li>Polska</li>
							<li>
								<a
									href="mailto:kontakt@recrumates.pl"
									className="hover:text-teal-400 transition-colors"
								>
									kontakt@recrumates.pl
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-neutral-800 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="flex flex-wrap gap-2 text-xs text-neutral-500 font-normal">
							<span>#Rekrutacja</span>
							<span>#AIRekrutacja</span>
							<span>#LudzkaStronaHR</span>
							<span>#RecruMates</span>
							<span>#Talenty</span>
							<span>#Rozwój</span>
							<span>#Łączymy</span>
						</div>
						<p className="text-neutral-500 text-sm font-normal">
							© {new Date().getFullYear()} RecruMates. Wszystkie prawa
							zastrzeżone.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
