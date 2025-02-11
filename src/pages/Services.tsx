import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

const Services = () => {
  return (
    <section id="services" className="bg-white dark:bg-gray-900">
      <div className="py-12 px-6 mx-auto max-w-screen-xl">
        
        {/* Título e descrição */}
        <div className="text-center mb-12">
          <span className="text-blue-700 dark:text-blue-500 text-lg font-semibold block">
            Nossos serviços
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2">
            Criado para marcas que querem crescer
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400 mt-4">
            Somos especialistas em transformar produtos e serviços em experiências visuais impactantes, criando conteúdos de alta qualidade para destacar sua marca e alavancar seus resultados.
          </p>
        </div>

        {/* Cards de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
