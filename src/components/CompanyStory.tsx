const paragraphs = [
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
	"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
];

export default function CompanyStory() {
	return (
		<section
			id="story"
			className="py-20 md:py-28 px-4 bg-neutral-900 dark:bg-neutral-950 text-neutral-100"
		>
			<div className="container mx-auto max-w-6xl">
				<div className="mx-auto max-w-3xl">
					<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
						O firmie
					</p>
					<h2 className="mb-2 text-3xl font-semibold tracking-tight text-white md:text-4xl md:tracking-widest">
						Kilka słów o nas
					</h2>
					<div className="mb-8 h-px w-12 bg-accent-500/80" aria-hidden />
					<div className="space-y-6 text-base font-normal leading-relaxed text-neutral-300 md:text-lg">
						{paragraphs.map((text) => (
							<p key={text.slice(0, 24)}>{text}</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
