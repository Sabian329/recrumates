import contactBackground from "../assets/contact-bg.png";

const inputBase =
	"w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-normal text-neutral-900 placeholder:text-neutral-400 transition-shadow focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30 dark:border-neutral-700 dark:bg-neutral-950/80 dark:text-white dark:placeholder:text-neutral-500";

export default function Contact() {
	return (
		<section
			id="contact"
			className="relative py-24 px-4 overflow-hidden bg-white dark:bg-neutral-950"
		>
			{/* Subtle background */}
			<div className="absolute inset-0 z-0 opacity-[0.17]" aria-hidden>
				<img
					src={contactBackground}
					alt=""
					className="h-full w-full object-cover object-center"
				/>
			</div>

			<div className="container relative z-10 mx-auto max-w-4xl">
				{/* Section header */}
				<header className="mb-14 text-center">
					<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
						Napisz do nas
					</p>
					<h2 className="mb-2 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl md:tracking-widest">
						Kontakt
					</h2>
					<div className="mx-auto mb-6 h-px w-12 bg-teal-500/80" aria-hidden />
					<p className="mx-auto max-w-xl text-lg font-thin leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-xl">
						Skontaktuj się z nami i dowiedz się, jak możemy pomóc
					</p>
				</header>

				<div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-12">
					{/* Left: Contact info + CTA */}
					<div className="flex flex-col gap-6">
						{/* Contact details card */}
						<div className="rounded-xl border border-neutral-200/80 bg-neutral-50/80 p-6 dark:border-neutral-800/80 dark:bg-neutral-900/50">
							<h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.08em] text-neutral-900 dark:text-white">
								Informacje kontaktowe
							</h3>
							<ul className="space-y-0 divide-y divide-neutral-200/80 dark:divide-neutral-800/80">
								<li className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
									<span
										className="mt-0.5 text-neutral-400 dark:text-neutral-500"
										aria-hidden
									>
										📍
									</span>
									<div>
										<p className="text-xs font-medium uppercase tracking-[0.06em] text-neutral-500 dark:text-neutral-400">
											Siedziba
										</p>
										<p className="mt-1 text-sm font-normal leading-relaxed text-neutral-900 dark:text-white">
											Wrocław, Dolnośląskie
											<br />
											Polska
										</p>
									</div>
								</li>
								<li className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
									<span
										className="mt-0.5 text-neutral-400 dark:text-neutral-500"
										aria-hidden
									>
										💼
									</span>
									<div>
										<p className="text-xs font-medium uppercase tracking-[0.06em] text-neutral-500 dark:text-neutral-400">
											Branża
										</p>
										<p className="mt-1 text-sm font-normal text-neutral-900 dark:text-white">
											Headhunting
										</p>
									</div>
								</li>
								<li className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
									<span
										className="mt-0.5 text-neutral-400 dark:text-neutral-500"
										aria-hidden
									>
										👥
									</span>
									<div>
										<p className="text-xs font-medium uppercase tracking-[0.06em] text-neutral-500 dark:text-neutral-400">
											Wielkość firmy
										</p>
										<p className="mt-1 text-sm font-normal text-neutral-900 dark:text-white">
											11–50 pracowników
										</p>
									</div>
								</li>
							</ul>
						</div>

						{/* CTA card */}
						<div className="rounded-xl border border-neutral-200/80 bg-neutral-50/80 p-6 dark:border-neutral-800/80 dark:bg-neutral-900/50">
							<h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.06em] text-neutral-900 dark:text-white">
								Gotowy na współpracę?
							</h4>
							<p className="mb-5 text-sm font-normal leading-relaxed text-neutral-600 dark:text-neutral-400">
								Opowiedz nam o swoich potrzebach rekrutacyjnych — odpowiemy w
								ciągu 24 godzin.
							</p>
							<a
								href="mailto:kontakt@recrumates.pl"
								className="inline-flex min-w-[180px] items-center justify-center rounded-lg border border-teal-500/50 bg-teal-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950"
							>
								Wyślij e-mail
							</a>
							<p className="mt-4 text-xs font-normal text-neutral-500 dark:text-neutral-400">
								lub napisz na{" "}
								<a
									href="mailto:kontakt@recrumates.pl"
									className="text-teal-600 underline decoration-teal-500/30 underline-offset-2 hover:decoration-teal-500 dark:text-teal-400"
								>
									kontakt@recrumates.pl
								</a>
							</p>
						</div>
					</div>

					{/* Right: Form */}
					<div className="rounded-xl border border-neutral-200/80 bg-neutral-50/80 p-6 dark:border-neutral-800/80 dark:bg-neutral-900/50 md:p-8">
						<h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.08em] text-neutral-900 dark:text-white">
							Wyślij zapytanie
						</h3>
						<form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
							<div>
								<label
									htmlFor="contact-name"
									className="mb-1.5 block text-xs font-medium uppercase tracking-[0.06em] text-neutral-600 dark:text-neutral-400"
								>
									Imię i nazwisko
								</label>
								<input
									type="text"
									id="contact-name"
									name="name"
									required
									placeholder="Jan Kowalski"
									className={inputBase}
								/>
							</div>
							<div>
								<label
									htmlFor="contact-email"
									className="mb-1.5 block text-xs font-medium uppercase tracking-[0.06em] text-neutral-600 dark:text-neutral-400"
								>
									Email
								</label>
								<input
									type="email"
									id="contact-email"
									name="email"
									required
									placeholder="jan@firma.pl"
									className={inputBase}
								/>
							</div>
							<div>
								<label
									htmlFor="contact-company"
									className="mb-1.5 block text-xs font-medium uppercase tracking-[0.06em] text-neutral-600 dark:text-neutral-400"
								>
									Firma{" "}
									<span className="font-normal normal-case text-neutral-400">
										(opcjonalnie)
									</span>
								</label>
								<input
									type="text"
									id="contact-company"
									name="company"
									placeholder="Nazwa firmy"
									className={inputBase}
								/>
							</div>
							<div>
								<label
									htmlFor="contact-message"
									className="mb-1.5 block text-xs font-medium uppercase tracking-[0.06em] text-neutral-600 dark:text-neutral-400"
								>
									Wiadomość
								</label>
								<textarea
									id="contact-message"
									name="message"
									rows={5}
									required
									placeholder="Opisz krótko swoje potrzeby rekrutacyjne..."
									className={`${inputBase} resize-none`}
								/>
							</div>
							<button
								type="submit"
								className="w-full rounded-lg border border-teal-500/50 bg-teal-600 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950"
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
