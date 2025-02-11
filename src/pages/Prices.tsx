import PricingCard from "../components/PricingCard"
import { plans } from "../data/plans"

const Prices = () => {
	return (
		<section id="prices" className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Escolha o Plano Ideal para Impulsionar Suas Redes Sociais
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Oferecemos planos personalizados para atender às suas necessidades,
            com opções flexíveis que se ajustam ao seu orçamento e objetivos de crescimento. Veja abaixo os planos que preparamos para você!
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
	)
}

export default Prices