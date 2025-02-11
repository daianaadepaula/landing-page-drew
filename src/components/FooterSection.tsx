interface Link {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  links: Link[]; // Agora 'links' é um array do tipo Link[]
}

export const FooterLinks = [
	{ label: "Serviços", href: "#servicos" },
	{ label: "Sobre nós", href: "#sobre" },
];

export const FooterFollowUs = [
	{ label: "Instagram", href: "https://instagram.com/" },
	{ label: "LinkedIn", href: "https://linkedin.com/" },
];

export const FooterInfo = [
	{ label: "Política de Privacidade", href: "#privacidade" },
	{ label: "Termos de Serviço", href: "#termos" },
];

const FooterSection = ({ title, links }: FooterSectionProps) => {
	return (
		<div>
			<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
				{title}
			</h2>
			<ul className="text-gray-600 dark:text-gray-400">
				{links.map((link) => (
					<li key={link.href} className="mb-4">
						<a
							href={link.href}
							className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
						>
							{link.label}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default FooterSection