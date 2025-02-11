import { motion } from "framer-motion";
import Filmaker from "../assets/filmaker.jpg";
import Photographer from "../assets/photographer.jpg";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        {/* Texto da seção */}
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <span className="text-blue-700 dark:text-blue-500">Sobre nós</span>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Sua empresa Online
          </h2>
          <p className="mb-4">
            Somos especialistas em transformar produtos em histórias visuais que conquistam. Nossa missão é cuidar de toda a presença digital da sua marca:
            desde a fotografia e filmagem dos seus produtos até o design estratégico para mídias sociais. Planejamos, criamos e gerenciamos seu conteúdo,
            focados em engajar o público e alavancar suas vendas.
          </p>
          <p>
            Combinamos criatividade, estratégia e inovação para garantir que sua marca brilhe e alcance o destaque que merece.
          </p>
        </div>

        {/* Imagens da seção com animações ao passar o mouse */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          {/* Primeira imagem - efeito de escala e rotação */}
          <motion.img
            className="w-full rounded-lg"
            src={Filmaker}
            alt="Filmagem de conteúdo no escritório"
            whileHover={{ scale: 1.1, rotate: 5 }} // Efeito ao passar o mouse
            transition={{ type: "spring", stiffness: 300 }}
          />

          {/* Segunda imagem - efeito de salto */}
          <motion.img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={Photographer}
            alt="Fotografia de produtos no escritório"
            whileHover={{ y: -10 }} // Efeito de salto ao passar o mouse
            transition={{ type: "spring", stiffness: 200 }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
