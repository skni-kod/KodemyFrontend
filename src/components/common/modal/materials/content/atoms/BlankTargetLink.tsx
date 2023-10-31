import Link from 'next/link';

const BlankTargetLink = ({ href, className }: { href: string; className?: string }) => {
	return (
		<Link href={href} passHref legacyBehavior>
			<a target="_blank" rel="noopener noreferrer" className={`${className}`}>
				{href}
			</a>
		</Link>
	);
};

export default BlankTargetLink;
