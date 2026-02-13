import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import contactBackground from "../assets/contact-bg.jpg";
import {
	MapPin,
	Phone,
	Mail,
	Linkedin,
	Instagram,
	Facebook,
} from "lucide-react";

const inputBase =
	"w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-normal text-neutral-900 placeholder:text-neutral-400 transition-shadow focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 dark:border-neutral-700 dark:bg-neutral-950/80 dark:text-white dark:placeholder:text-neutral-500";

export default function Contact() {
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [isFormValid, setIsFormValid] = useState(false);
	const [phoneCopied, setPhoneCopied] = useState(false);
	const [emailCopied, setEmailCopied] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	const accessKey = import.meta.env.VITE_MAIL_KEY;

	const checkFormValidity = () => {
		setIsFormValid(formRef.current?.checkValidity() ?? false);
	};

	const handleCopyToClipboard = async (
		value: string,
		type: "phone" | "email",
	) => {
		try {
			await navigator.clipboard.writeText(value);
			if (type === "phone") {
				setPhoneCopied(true);
			} else {
				setEmailCopied(true);
			}
		} catch (err) {
			console.error("[Clipboard] Nie udało się skopiować wartości", err);
		}
	};

	useEffect(() => {
		if (status === "success") {
			const timeout = setTimeout(() => {
				setStatus("idle");
			}, 4000);
			return () => clearTimeout(timeout);
		}
		return;
	}, [status]);

	useEffect(() => {
		if (!phoneCopied && !emailCopied) return;

		const timeout = setTimeout(() => {
			setPhoneCopied(false);
			setEmailCopied(false);
		}, 2000);

		return () => clearTimeout(timeout);
	}, [phoneCopied, emailCopied]);

	useEffect(() => {
		if (status !== "success" && formRef.current) {
			setIsFormValid(formRef.current.checkValidity());
		}
	}, [status]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!accessKey) {
			console.warn("[Web3Forms] Brak VITE_MAIL_KEY w pliku .env");
			setErrorMessage(
				"Formularz chwilowo niedostępny. Spróbuj ponownie później lub napisz bezpośrednio na kontakt@recrumates.pl.",
			);
			setStatus("error");
			return;
		}

		const form = e.currentTarget;
		const formData = new FormData(form);
		formData.append("access_key", accessKey);

		try {
			setStatus("loading");
			setErrorMessage(null);

			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});

			const data = await response.json();

			if (response.ok && data.success !== false) {
				setStatus("success");
				form.reset();
			} else {
				setStatus("error");
				setErrorMessage(
					data.message ||
						"Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na kontakt@recrumates.pl.",
				);
			}
		} catch (err) {
			console.error("[Web3Forms] Błąd wysyłki formularza", err);
			setStatus("error");
			setErrorMessage(
				"Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na kontakt@recrumates.pl.",
			);
		}
	};

	return (
		<section
			id="contact"
			className="relative py-24 px-4 overflow-hidden bg-neutral-950"
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
					<div
						className="mx-auto mb-6 h-px w-12 bg-accent-500/80"
						aria-hidden
					/>
					<p className="mx-auto max-w-xl text-lg font-thin leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-xl">
						Skontaktuj się z nami i dowiedz się, jak możemy pomóc
					</p>
				</header>

				<div className="grid gap-10 md:grid-cols-2 md:items-stretch md:gap-6">
					{/* Left: Contact info + CTA */}
					<div className="flex min-h-0 flex-col gap-6 md:h-full">
						{/* Contact details card */}
						<div className="flex-shrink-0 rounded-xl border border-neutral-200/80 bg-neutral-50/80 p-6 dark:border-neutral-800/80 dark:bg-neutral-900/50">
							<h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.08em] text-neutral-900 dark:text-white">
								Informacje kontaktowe
							</h3>
							<ul className="space-y-0 divide-y divide-neutral-200/80 dark:divide-neutral-800/80">
								<li className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
									<MapPin
										className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-400 dark:text-neutral-500"
										aria-hidden="true"
									/>
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
									<Phone
										className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-400 dark:text-neutral-500"
										aria-hidden="true"
									/>
									<div>
										<p className="text-xs font-medium uppercase tracking-[0.06em] text-neutral-500 dark:text-neutral-400">
											Telefon
										</p>
										<button
											type="button"
											onClick={() =>
												handleCopyToClipboard("+48 609 896 011", "phone")
											}
											className="mt-1 text-sm font-normal text-accent-500  decoration-accent-500/30 underline-offset-2 hover:decoration-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:ring-offset-2 focus:ring-offset-neutral-950"
										>
											+48 609 896 011
										</button>
										{phoneCopied && (
											<p className="mt-1 text-[11px] font-normal text-neutral-400">
												Numer skopiowany do schowka.
											</p>
										)}
									</div>
								</li>
								<li className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
									<Mail
										className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-400 dark:text-neutral-500"
										aria-hidden="true"
									/>
									<div>
										<p className="text-xs font-medium uppercase tracking-[0.06em] text-neutral-500 dark:text-neutral-400">
											Email
										</p>
										<button
											type="button"
											onClick={() =>
												handleCopyToClipboard(
													"maciej.recrumates@gmail.com",
													"email",
												)
											}
											className="mt-1 text-sm font-normal text-accent-500 decoration-accent-500/30 underline-offset-2 hover:decoration-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:ring-offset-2 focus:ring-offset-neutral-950"
										>
											maciej.recrumates@gmail.com
										</button>
										{emailCopied && (
											<p className="mt-1 text-[11px] font-normal text-neutral-400">
												Email skopiowany do schowka.
											</p>
										)}
									</div>
								</li>
							</ul>
						</div>

						{/* CTA card */}
						<div className="flex min-h-[200px] flex-1 flex-col justify-between rounded-xl border border-neutral-200/80 bg-neutral-50/80 p-6 dark:border-neutral-800/80 dark:bg-neutral-900/50">
							<h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.06em] text-neutral-900 dark:text-white flex items-start justify-start">
								Gotowy na współpracę?
							</h4>
							<p className="mb-5 text-sm font-normal leading-relaxed text-neutral-600 dark:text-neutral-400">
								Opowiedz nam o swoim zespole, planach zatrudnień i wyzwaniach
								rekrutacyjnych. Dobierzemy model współpracy dopasowany do etapu
								rozwoju Twojej firmy – od pojedynczych rekrutacji po stałe
								wsparcie w formie RPO.
								<br />
								Zwykle odpowiadamy w ciągu 24 godzin roboczych z pierwszym
								pomysłem na dalsze kroki.
							</p>
							<div>
								<p className="mt-4 text-xs font-normal text-neutral-500 dark:text-neutral-400">
									lub napisz na{" "}
									<a
										href="mailto:maciej.recrumates@gmail.com"
										className="text-accent-600 underline decoration-accent-500/30 underline-offset-2 hover:decoration-accent-500 dark:text-accent-400"
									>
										maciej.recrumates@gmail.com
									</a>
								</p>

								<div className="mt-5 flex items-center gap-3">
									<span className="text-xs font-medium uppercase tracking-[0.06em] text-neutral-500 dark:text-neutral-400">
										Social media
									</span>
									<div className="flex items-center gap-3">
										<a
											href="https://pl.linkedin.com/company/recrumates"
											target="_blank"
											rel="noreferrer"
											aria-label="LinkedIn"
											className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-600/60 bg-neutral-900/60 text-neutral-200 transition-colors hover:border-accent-500 hover:text-accent-400"
										>
											<Linkedin className="h-4 w-4" aria-hidden="true" />
										</a>
										<a
											href="https://pl.linkedin.com/company/recrumates"
											target="_blank"
											rel="noreferrer"
											aria-label="Instagram"
											className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-600/60 bg-neutral-900/60 text-neutral-200 transition-colors hover:border-accent-500 hover:text-accent-400"
										>
											<Instagram className="h-4 w-4" aria-hidden="true" />
										</a>
										<a
											href="https://pl.linkedin.com/company/recrumates"
											target="_blank"
											rel="noreferrer"
											aria-label="Facebook"
											className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-600/60 bg-neutral-900/60 text-neutral-200 transition-colors hover:border-accent-500 hover:text-accent-400"
										>
											<Facebook className="h-4 w-4" aria-hidden="true" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right: Form / success state */}
					<div className="flex min-h-0 flex-col overflow-y-auto rounded-xl border border-neutral-200/80 bg-neutral-50/80 p-6 dark:border-neutral-800/80 dark:bg-neutral-900/50 md:min-h-0 md:p-8">
						{status === "success" ? (
							<div className="flex flex-1 flex-col items-center justify-center text-center py-8">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-400">
									<span className="text-2xl">✓</span>
								</div>
								<h3 className="mb-2 text-base font-semibold uppercase tracking-[0.08em] text-neutral-900 dark:text-white">
									Wiadomość wysłana
								</h3>
								<p className="max-w-xs text-sm font-normal text-neutral-600 dark:text-neutral-400">
									Dziękujemy za kontakt! Odezwiemy się do Ciebie tak szybko, jak
									to możliwe.
								</p>
							</div>
						) : (
							<>
								<h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.08em] text-neutral-900 dark:text-white">
									Wyślij zapytanie
								</h3>
								<form
									ref={formRef}
									className="flex min-h-0 flex-col space-y-5"
									onSubmit={handleSubmit}
									onChange={checkFormValidity}
									onInput={checkFormValidity}
								>
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
									<div className="flex items-start gap-3">
										<input
											id="contact-privacy"
											name="privacy_consent"
											type="checkbox"
											required
											className="mt-1 h-4 w-4 flex-shrink-0 rounded border-neutral-300 bg-white accent-accent-500 focus:ring-2 focus:ring-accent-500/30 focus:ring-offset-0 dark:border-neutral-600 dark:bg-neutral-900 dark:focus:ring-offset-neutral-950"
											aria-describedby="contact-privacy-desc"
										/>
										<label
											id="contact-privacy-desc"
											htmlFor="contact-privacy"
											className="text-xs font-normal leading-relaxed text-neutral-600 dark:text-neutral-400"
										>
											Wyrażam zgodę na przetwarzanie moich danych osobowych w
											celu odpowiedzi na zapytanie zgodnie z{" "}
											<Link
												to="/polityka-prywatnosci"
												target="_blank"
												rel="noopener noreferrer"
												className="text-accent-600 underline underline-offset-2 hover:text-accent-500 dark:text-accent-400 dark:hover:text-accent-300"
											>
												polityką prywatności
											</Link>
											.
										</label>
									</div>
									<button
										type="submit"
										disabled={!isFormValid || status === "loading"}
										className={`w-full rounded-lg border px-6 py-3.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950 ${
											status === "loading"
												? "border-accent-500/50 bg-accent-600 text-white opacity-60 cursor-not-allowed"
												: !isFormValid
													? "border-neutral-400 bg-neutral-300 text-neutral-500 cursor-not-allowed dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-500"
													: "border-accent-500/50 bg-accent-600 text-white hover:bg-accent-500"
										}`}
									>
										{status === "loading" ? "Wysyłanie..." : "Wyślij wiadomość"}
									</button>
									{status === "error" && errorMessage && (
										<p className="text-xs font-normal text-red-400">
											{errorMessage}
										</p>
									)}
								</form>
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
