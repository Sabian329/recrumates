import { Input, Textarea } from "@headlessui/react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

interface JobApplyModalProps {
	job: {
		id: number | string;
		title: string;
		company: string;
		location: string;
	};
	onClose: () => void;
}

export default function JobApplyModal({ job, onClose }: JobApplyModalProps) {
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	const accessKey = import.meta.env.VITE_MAIL_KEY;

	const checkFormValidity = () => {
		setIsFormValid(formRef.current?.checkValidity() ?? false);
	};

	useEffect(() => {
		if (status === "success") {
			const timeout = setTimeout(() => {
				setStatus("idle");
				onClose();
			}, 4000);
			return () => clearTimeout(timeout);
		}
		return;
	}, [status, onClose]);

	useEffect(() => {
		if (status !== "success" && formRef.current) {
			setIsFormValid(formRef.current.checkValidity());
		}
	}, [status]);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!accessKey) {
			console.warn("[Web3Forms] Brak VITE_MAIL_KEY w pliku .env");
			setStatus("error");
			setErrorMessage(
				"Formularz chwilowo niedostępny. Spróbuj ponownie później lub napisz bezpośrednio na kontakt@recrumates.pl.",
			);
			return;
		}

		const form = e.currentTarget;
		const formData = new FormData(form);
		formData.append("access_key", accessKey);
		formData.append(
			"job_offer",
			`${job.title} – ${job.company} (${job.location})`,
		);

		try {
			setStatus("loading");
			setErrorMessage(null);

			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});

			const dataJson = await response.json();

			if (response.ok && dataJson.success !== false) {
				setStatus("success");
				form.reset();
			} else {
				setStatus("error");
				setErrorMessage(
					dataJson.message ||
						"Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na kontakt@recrumates.pl.",
				);
			}
		} catch (err) {
			console.error("[Web3Forms] Błąd wysyłki formularza aplikacji", err);
			setStatus("error");
			setErrorMessage(
				"Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na kontakt@recrumates.pl.",
			);
		}
	};

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
			role="dialog"
			aria-modal="true"
			aria-labelledby="apply-modal-title"
		>
			<div className="w-full max-w-lg rounded-2xl border border-neutral-700 bg-neutral-950 p-6 shadow-xl">
				{status === "success" ? (
					<div className="flex flex-1 flex-col items-center justify-center text-center py-8">
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-400">
							<span className="text-2xl">✓</span>
						</div>
						<h4 className="mb-2 text-base font-semibold uppercase tracking-[0.08em] text-neutral-100">
							Wiadomość wysłana
						</h4>
						<p className="max-w-xs text-sm font-normal text-neutral-400">
							Dziękujemy! Twoja wiadomość została wysłana. Odezwiemy się
							możliwie szybko.
						</p>
					</div>
				) : (
					<div>
						<div className="flex items-start justify-between gap-3 mb-4">
							<div>
								<p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
									Aplikacja na stanowisko
								</p>
								<h3
									id="apply-modal-title"
									className="mt-1 text-lg font-semibold tracking-tight text-white"
								>
									{job.title}
								</h3>
								<p className="text-sm text-neutral-400">
									{job.company} • {job.location}
								</p>
							</div>
							<button
								type="button"
								onClick={onClose}
								className="text-neutral-500 hover:text-neutral-300"
								aria-label="Zamknij okno aplikacji"
							>
								×
							</button>
						</div>
						<form
							ref={formRef}
							className="space-y-4 mt-2"
							onSubmit={handleSubmit}
							onChange={checkFormValidity}
							onInput={checkFormValidity}
						>
							<div>
								<label
									htmlFor="apply-name"
									className="mb-1.5 block text-xs font-medium uppercase tracking-[0.06em] text-neutral-400"
								>
									Imię i nazwisko
								</label>
								<Input
									id="apply-name"
									name="name"
									type="text"
									required
									placeholder="Jan Kowalski"
									className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
								/>
							</div>
							<div>
								<label
									htmlFor="apply-email"
									className="mb-1.5 block text-xs font-medium uppercase tracking-[0.06em] text-neutral-400"
								>
									Email
								</label>
								<Input
									id="apply-email"
									name="email"
									type="email"
									required
									placeholder="jan.kowalski@firma.pl"
									className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
								/>
							</div>
							<div>
								<label
									htmlFor="apply-company"
									className="mb-1.5 block text-xs font-medium uppercase tracking-[0.06em] text-neutral-400"
								>
									Firma{" "}
									<span className="font-normal normal-case text-neutral-500">
										(opcjonalnie)
									</span>
								</label>
								<Input
									id="apply-company"
									name="company"
									type="text"
									placeholder="Nazwa firmy"
									className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
								/>
							</div>
							<div>
								<label
									htmlFor="apply-job"
									className="mb-1.5 block text-xs font-medium uppercase tracking-[0.06em] text-neutral-400"
								>
									Oferta pracy
								</label>
								<Input
									id="apply-job"
									type="text"
									value={`${job.title} – ${job.company} (${job.location})`}
									readOnly
									disabled
									className="w-full cursor-not-allowed rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2.5 text-sm text-neutral-400"
								/>
							</div>
							<div>
								<label
									htmlFor="apply-message"
									className="mb-1.5 block text-xs font-medium uppercase tracking-[0.06em] text-neutral-400"
								>
									Wiadomość
								</label>
								<Textarea
									id="apply-message"
									name="message"
									rows={4}
									required
									placeholder="Napisz kilka zdań o swoim doświadczeniu i dlaczego ta rola Cię interesuje..."
									className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 resize-none"
								/>
							</div>
							<div className="flex items-start gap-3">
								<input
									id="apply-privacy"
									name="privacy_consent"
									type="checkbox"
									required
									className="mt-1 h-4 w-4 flex-shrink-0 rounded border-neutral-600 bg-neutral-900 accent-accent-500 focus:ring-2 focus:ring-accent-500/30 focus:ring-offset-0 focus:ring-offset-neutral-950"
									aria-describedby="apply-privacy-desc"
								/>
								<label
									id="apply-privacy-desc"
									htmlFor="apply-privacy"
									className="text-xs font-normal leading-relaxed text-neutral-400"
								>
									Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
									realizacji procesu rekrutacji zgodnie z{" "}
									<Link
										to="/polityka-prywatnosci"
										target="_blank"
										rel="noopener noreferrer"
										className="text-accent-400 underline underline-offset-2 hover:text-accent-300"
									>
										polityką prywatności
									</Link>
									.
								</label>
							</div>
							<button
								type="submit"
								disabled={!isFormValid || status === "loading"}
								className={`w-full rounded-lg border px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:ring-offset-2 focus:ring-offset-neutral-950 ${
									status === "loading"
										? "border-accent-500/50 bg-accent-600 text-white opacity-60 cursor-not-allowed"
										: !isFormValid
											? "border-neutral-600 bg-neutral-700 text-neutral-500 cursor-not-allowed"
											: "border-accent-500/50 bg-accent-600 text-white hover:bg-accent-500"
								}`}
							>
								{status === "loading"
									? "Wysyłanie aplikacji..."
									: "Wyślij aplikację"}
							</button>
							{status === "error" && errorMessage && (
								<p className="text-xs font-normal text-red-400">
									{errorMessage}
								</p>
							)}
						</form>
					</div>
				)}
			</div>
		</div>
	);
}
