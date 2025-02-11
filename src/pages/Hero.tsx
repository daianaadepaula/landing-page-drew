import { motion } from "framer-motion";
import { BiBulb, BiRightArrowAlt, BiSolidCameraMovie, BiChevronRight } from "react-icons/bi";
import CarrosselInfinito from "../components/CarrosselInfinito";

const Hero = () => {
  return (
    <section id="home" className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        {/* Alerta */}
        <a
          href="#"
          className="inline-flex items-center py-1 px-4 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <BiBulb size={24} className="mr-1" />
					<span className="text-sm font-medium mr-6">Mostre suas ideias para o mundo</span>
					<BiChevronRight size={24} className="mr-2" />
        </a>

        {/* Título */}

				<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
					Conheça nossas soluções <br />
					para a{" "}
					<motion.span
						className="text-blue-700 dark:text-blue-500 inline-block"
						whileHover={{
							x: [-5, 5, -5],  // Movimento na diagonal horizontal
							y: [-5, 5, -5],  // Movimento na diagonal vertical
							transition: { 
								duration: 2,         // Tempo da animação (aumentado para 2 segundos)
								repeat: Infinity,    // Repete indefinidamente
								repeatType: "reverse", 
								ease: "easeInOut",   // Suaviza o movimento
							},
						}}
					>
						sua marca
					</motion.span>
				</h1>

        {/* Descrição */}
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Conecte-se, compartilhe e inspire – aqui, sua voz ganha alcance e suas ideias criam conexões que transformam!
        </p>

        {/* Botões */}
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex items-center py-3 px-5 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            aria-label="Conhecer nossas soluções"
          >
            Conhecer
            <BiRightArrowAlt size={24} className="ml-2" />
          </a>
          <a
            href="#"
            className="inline-flex items-center py-3 px-5 text-base font-medium text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            aria-label="Assistir vídeo"
          >
            <BiSolidCameraMovie size={24} className="mr-2" />
            Assistir vídeo
          </a>
        </div>

        {/* Hashtags */}
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-12 pt-8">
          <CarrosselInfinito />
        </div>
      </div>
    </section>
  );
};

export default Hero;
