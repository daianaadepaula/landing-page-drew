import { BiLogoDribbble, BiLogoFacebookCircle, BiLogoGithub, BiLogoTwitter } from "react-icons/bi"
import { teamMembers } from "../data/teamMembers";

const Team = () => {
	return (
		<section id="team" className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Nossa Equipe
                    </h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Nossa equipe é composta por profissionais apaixonados e experientes que trabalham juntos para transformar suas redes sociais e ajudar seu negócio a crescer. Conheça os especialistas que farão tudo acontecer.
                    </p>
                </div>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={member.image} alt={`${member.name} Avatar`} />
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {member.name}
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">{member.role}</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{member.description}</p>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li><a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><BiLogoFacebookCircle size={24} /></a></li>
                                    <li><a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><BiLogoTwitter size={24} /></a></li>
                                    <li><a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><BiLogoGithub size={24} /></a></li>
                                    <li><a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><BiLogoDribbble size={24} /></a></li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
	)
}

export default Team