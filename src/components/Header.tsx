import { useState } from "react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ label: "Główna", href: "#home" },
		{ label: "O nas", href: "#about" },
		{ label: "Usługi", href: "#services" },
		{ label: "Oferty pracy", href: "#jobs" },
		{ label: "FAQ", href: "#faq" },
		{ label: "Kontakt", href: "#contact" },
	];

	return (
		<header className="fixed top-0 left-0 right-0 bg-gray-900 shadow-md z-50 border-b border-gray-800">
			<nav className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<a href="#home" className="flex items-center gap-2">
						<div className="w-12 h-12 bg-gray-800 border-2 border-gray-700 flex items-center justify-center">
							<span className="text-xl font-bold">
								<span className="text-white">R</span>
								<span className="text-green-500">M</span>
							</span>
						</div>
						<div className="hidden sm:block">
							<div className="text-sm font-bold text-white">RECRUMATES</div>
							<div className="text-xs text-gray-400">RECRUITMENT AGENCY</div>
						</div>
					</a>

					<div className="flex items-center gap-4">
						{/* Desktop Navigation */}
						<ul className="hidden md:flex items-center gap-6">
							{navItems.map((item) => (
								<li key={item.href}>
									<a
										href={item.href}
										className="text-gray-300 hover:text-green-500 transition-colors font-medium"
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
							className="md:hidden p-2 text-gray-300"
							aria-label="Toggle menu"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
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
					<ul className="md:hidden mt-4 space-y-2 pb-4">
						{navItems.map((item) => (
							<li key={item.href}>
								<a
									href={item.href}
									onClick={() => setIsMenuOpen(false)}
									className="block py-2 text-gray-300 hover:text-green-500 transition-colors"
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
