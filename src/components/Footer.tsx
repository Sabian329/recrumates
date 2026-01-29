export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-12 px-4">
			<div className="container mx-auto max-w-6xl">
				<div className="grid md:grid-cols-4 gap-8 mb-8">
					{/* Logo & About */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							<div className="w-12 h-12 bg-white border-2 border-gray-800 flex items-center justify-center">
								<span className="text-xl font-bold">
									<span className="text-black">R</span>
									<span className="text-green-600">M</span>
								</span>
							</div>
							<div>
								<div className="text-sm font-bold">RECRUMATES</div>
								<div className="text-xs text-gray-400">RECRUITMENT AGENCY</div>
							</div>
						</div>
						<p className="text-gray-400 text-sm">
							Tworzymy jakościową i przyjazną rekrutację, na luzie :)
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-bold mb-4">Szybkie linki</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="#home"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Główna
								</a>
							</li>
							<li>
								<a
									href="#about"
									className="text-gray-400 hover:text-white transition-colors"
								>
									O nas
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Usługi
								</a>
							</li>
							<li>
								<a
									href="#jobs"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Oferty pracy
								</a>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="font-bold mb-4">Usługi</h4>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>Rekrutacja end-to-end</li>
							<li>Doradztwo HR</li>
							<li>Employer branding</li>
							<li>RPO</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="font-bold mb-4">Kontakt</h4>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>Wrocław, Dolnośląskie</li>
							<li>Polska</li>
							<li>
								<a
									href="mailto:kontakt@recrumates.pl"
									className="hover:text-white transition-colors"
								>
									kontakt@recrumates.pl
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Social & Tags */}
				<div className="border-t border-gray-800 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="flex flex-wrap gap-2 text-sm">
							<span className="text-gray-400">#Rekrutacja</span>
							<span className="text-gray-400">#AIRekrutacja</span>
							<span className="text-gray-400">#LudzkaStronaHR</span>
							<span className="text-gray-400">#RecruMates</span>
							<span className="text-gray-400">#Talenty</span>
							<span className="text-gray-400">#Rozwój</span>
							<span className="text-gray-400">#Łączymy</span>
						</div>
						<p className="text-gray-400 text-sm">
							© {new Date().getFullYear()} RecruMates. Wszystkie prawa
							zastrzeżone.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
