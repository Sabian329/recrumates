import { useState } from "react";
import logoSign from "../assets/LOGO+SIGN.svg";
import logoSignMobile from "../assets/BASELOGO.svg";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ label: "Główna", href: "#home" },
		{ label: "Kim jesteśmy", href: "#company" },
		{ label: "O nas", href: "#about" },
		{ label: "Zespół", href: "#team" },
		{ label: "Usługi", href: "#services" },
		{ label: "Oferty pracy", href: "#jobs" },
		{ label: "Kontakt", href: "#contact" },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200/80 dark:border-neutral-800/80">
			<nav
				className="container mx-auto px-4 py-3 md:py-4"
				aria-label="Główna nawigacja strony RecruMates"
			>
				<div className="flex items-center justify-between">
					{/* Logo */}
					<a href="#home" className="" aria-label="RecruMates – strona główna">
						<img
							src={logoSignMobile}
							alt="RecruMates"
							className="h-14 w-auto object-contain lg:hidden mx-auto"
						/>
						<img
							src={logoSign}
							alt="RecruMates"
							className="h-12 w-auto object-contain hidden lg:block"
						/>
					</a>

					<div className="flex items-center gap-4">
						{/* Desktop Navigation */}
						<ul className="hidden md:flex items-center gap-8">
							{navItems.map((item) => (
								<li key={item.href}>
									<a
										href={item.href}
										className="text-xs lg:text-sm text-neutral-600  text-nowrap dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors font-medium"
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
									className="block py-2.5 text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors font-medium"
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
