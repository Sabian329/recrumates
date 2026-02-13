import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import baseLogo from "../assets/LOGO+SIGN.svg";

const proseComponents = {
	h1: ({ children }: { children?: React.ReactNode }) => (
		<h1 className="mb-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
			{children}
		</h1>
	),
	h2: ({ children }: { children?: React.ReactNode }) => (
		<h2 className="mt-12 mb-4 text-xl font-semibold text-white md:mt-14 md:text-2xl">
			{children}
		</h2>
	),
	h3: ({ children }: { children?: React.ReactNode }) => (
		<h3 className="mt-8 mb-3 text-base font-semibold text-neutral-100 md:text-lg">
			{children}
		</h3>
	),
	h4: ({ children }: { children?: React.ReactNode }) => (
		<h4 className="mt-6 mb-2 text-sm font-semibold text-neutral-200 md:text-base">
			{children}
		</h4>
	),
	p: ({ children }: { children?: React.ReactNode }) => (
		<p className="mb-4 text-[15px] leading-[1.7] text-neutral-300">
			{children}
		</p>
	),
	ul: ({ children }: { children?: React.ReactNode }) => (
		<ul className="mb-6 ml-4 list-disc space-y-2 pl-4 text-neutral-300">
			{children}
		</ul>
	),
	ol: ({ children }: { children?: React.ReactNode }) => (
		<ol className="mb-6 ml-4 list-decimal space-y-2 pl-4 text-neutral-300">
			{children}
		</ol>
	),
	li: ({ children }: { children?: React.ReactNode }) => (
		<li className="text-[15px] leading-[1.7]">{children}</li>
	),
	a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="text-accent-400 underline underline-offset-2 transition-colors hover:text-accent-300"
		>
			{children}
		</a>
	),
	strong: ({ children }: { children?: React.ReactNode }) => (
		<strong className="font-semibold text-neutral-200">{children}</strong>
	),
};

export default function PrivacyPolicy() {
	const [content, setContent] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch("/terms.md")
			.then((res) => {
				if (!res.ok) throw new Error("Failed to load");
				return res.text();
			})
			.then(setContent)
			.catch(() => setError("Nie udało się załadować polityki prywatności."));
	}, []);

	return (
		<div className="min-h-screen bg-neutral-950 text-neutral-100">
			{/* Sticky document header */}
			<header className="sticky top-0 z-40 border-b border-neutral-800/80 bg-neutral-950/95 backdrop-blur-xl">
				<div className="container mx-auto flex h-16 items-center justify-between px-4">
					<Link
						to="/"
						className="flex items-center gap-3 text-neutral-400 transition-colors hover:text-white"
						aria-label="Powrót na stronę główną"
					>
						<span className="text-neutral-500">←</span>
						<span className="text-sm font-medium">Powrót na stronę główną</span>
					</Link>
					<Link
						to="/"
						className="opacity-90 transition-opacity hover:opacity-100"
						aria-label="RecruMates"
					>
						<img
							src={baseLogo}
							alt="RecruMates"
							className="h-10 w-auto object-contain"
						/>
					</Link>
				</div>
			</header>

			{/* Document content */}
			<article className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
				{error && (
					<p className="rounded-lg bg-red-950/30 px-4 py-3 text-red-300">
						{error}
					</p>
				)}
				{!content && !error && (
					<div className="flex flex-col gap-4">
						<div className="h-8 w-48 animate-pulse rounded bg-neutral-800" />
						<div className="h-4 w-full animate-pulse rounded bg-neutral-800" />
						<div className="h-4 w-4/5 animate-pulse rounded bg-neutral-800" />
					</div>
				)}
				{content && (
					<div className="privacy-prose">
						<ReactMarkdown
							remarkPlugins={[remarkGfm]}
							components={proseComponents}
						>
							{content}
						</ReactMarkdown>
					</div>
				)}
			</article>
		</div>
	);
}
