import { motion } from "framer-motion";

const defaultTransition = {
	duration: 0.45,
	ease: [0.25, 0.1, 0.25, 1],
};

const defaultViewport = {
	once: true,
	margin: "-40px 0px -40px 0px",
	amount: 0.15,
};

type AnimatedSectionProps = React.ComponentProps<typeof motion.section>;

export default function AnimatedSection({
	children,
	className,
	transition = defaultTransition,
	viewport = defaultViewport,
	...props
}: AnimatedSectionProps) {
	return (
		<motion.section
			initial={{ opacity: 0, y: 14 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={viewport}
			transition={transition}
			className={className}
			{...props}
		>
			{children}
		</motion.section>
	);
}
