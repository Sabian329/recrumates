import { useState } from "react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ label: "Główna", href: "#home" },
		{ label: "Kim jesteśmy", href: "#company" },
		{ label: "O nas", href: "#about" },
		{ label: "Usługi", href: "#services" },
		{ label: "Oferty pracy", href: "#jobs" },
		{ label: "FAQ", href: "#faq" },
		{ label: "Kontakt", href: "#contact" },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200/80 dark:border-neutral-800/80">
			<nav className="container mx-auto px-4 py-3 md:py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<a href="#home" className="flex items-center gap-2.5">
						<div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border border-neutral-200/80 dark:border-neutral-700/80">
							<span className="text-lg font-semibold tracking-tight">
								<span className="text-neutral-800 dark:text-neutral-100">R</span>
								<span className="text-teal-600 dark:text-teal-400">M</span>
							</span>
						</div>
						<div className="hidden sm:block">
							<div className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">RECRUMATES</div>
							<div className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">Recruitment Agency</div>
						</div>
					</a>

					<div className="flex items-center gap-4">
						{/* Desktop Navigation */}
						<ul className="hidden md:flex items-center gap-8">
							{navItems.map((item) => (
								<li key={item.href}>
									<a
										href={item.href}
										className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>

						{/* Mobile Menu Button */}
						<button
							type="button"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden p-2 text-neutral-600 dark:text-neutral-400"
							aria-label="Toggle menu"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<title>Menu</title>
								{isMenuOpen ? (
									<path d="M6 18L18 6M6 6l12 12" />
								) : (
									<path d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<ul className="md:hidden mt-4 space-y-1 pb-4 border-t border-neutral-200/80 dark:border-neutral-800 pt-4">
						{navItems.map((item) => (
							<li key={item.href}>
								<a
									href={item.href}
									onClick={() => setIsMenuOpen(false)}
									className="block py-2.5 text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				)}
			</nav>
		</header>
	);
}
