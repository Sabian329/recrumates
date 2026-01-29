export default function Contact() {
	return (
		<section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
			<div className="container mx-auto max-w-4xl">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						Kontakt
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300">
						Skontaktuj się z nami i dowiedz się, jak możemy pomóc
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{/* Contact Info */}
					<div className="space-y-6">
						<div>
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								Informacje kontaktowe
							</h3>
							<div className="space-y-4">
								<div className="flex items-start gap-4">
									<span className="text-2xl">📍</span>
									<div>
										<p className="font-semibold text-gray-900 dark:text-white">
											Siedziba
										</p>
										<p className="text-gray-600 dark:text-gray-400">
											Wrocław, Dolnośląskie
											<br />
											Polska
										</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<span className="text-2xl">💼</span>
									<div>
										<p className="font-semibold text-gray-900 dark:text-white">
											Branża
										</p>
										<p className="text-gray-600 dark:text-gray-400">
											Headhunting
										</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<span className="text-2xl">👥</span>
									<div>
										<p className="font-semibold text-gray-900 dark:text-white">
											Wielkość firmy
										</p>
										<p className="text-gray-600 dark:text-gray-400">
											11-50 pracowników
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
							<h4 className="font-bold text-gray-900 dark:text-white mb-2">
								Gotowy na współpracę?
							</h4>
							<p className="text-gray-700 dark:text-gray-300 mb-4">
								Skontaktuj się z nami, aby omówić Twoje potrzeby rekrutacyjne.
							</p>
							<a
								href="mailto:kontakt@recrumates.pl"
								className="inline-block bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
							>
								Wyślij wiadomość
							</a>
						</div>
					</div>

					{/* Contact Form */}
					<div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
						<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
							Wyślij zapytanie
						</h3>
						<form className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
								>
									Imię i nazwisko
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									className="w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-green-600 dark:focus:border-green-500"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									className="w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-green-600 dark:focus:border-green-500"
								/>
							</div>
							<div>
								<label
									htmlFor="company"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
								>
									Firma (opcjonalnie)
								</label>
								<input
									type="text"
									id="company"
									name="company"
									className="w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-green-600 dark:focus:border-green-500"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
								>
									Wiadomość
								</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									required
									className="w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-green-600 dark:focus:border-green-500 resize-none"
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
							>
								Wyślij wiadomość
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
