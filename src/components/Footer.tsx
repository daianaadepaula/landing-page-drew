import { BiLogoDribbble, BiLogoFacebookCircle, BiLogoGithub, BiLogoInstagramAlt, BiLogoLinkedinSquare, BiLogoTwitter } from "react-icons/bi"
import FooterSection from "./FooterSection";
import { FooterFollowUs, FooterInfo, FooterLinks } from "./FooterSection";
import LogoDark from "../assets/logo-dark.svg";
import LogoLight from "../assets/logo-light.svg";


const Footer = () => {
	return (
		<footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl pt-3 pb-3">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <div className="w-32 h-auto">
								<img src={LogoLight} className="block dark:hidden" alt="Drew Logo Light" />
								<img src={LogoDark} className="hidden dark:block" alt="Drew Logo Dark" />
							</div>
            </a>
          </div>
					<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
						<FooterSection title="Saiba mais" links={FooterLinks} />
						<FooterSection title="Siga-nos" links={FooterFollowUs} />
						<FooterSection title="Informações" links={FooterInfo} />            
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© {new Date().getFullYear()} Grew. Todos os direitos reservados.
					</span>
					<div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <BiLogoFacebookCircle size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <BiLogoInstagramAlt size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <BiLogoTwitter size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <BiLogoGithub size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <BiLogoDribbble size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <BiLogoLinkedinSquare size={24} />
            </a>
					</div>
        </div>
      </div>
    </footer>
	)
}

export default Footer