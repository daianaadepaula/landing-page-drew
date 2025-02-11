import { BiCheck } from "react-icons/bi";

interface List {
  title: string;
  price: string;
  description: string;
  features: string[]; // Agora 'features' é um array de strings corretamente tipado
}

const PricingCard = ({ title, price, description, features }: List) => {
  return (
    <div className="flex flex-col justify-between h-full p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
			<div>
				<h3 className="mb-4 text-2xl font-semibold">{title}</h3>
				<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
			</div>

			<div>
				<div className="flex justify-center items-baseline my-8">
					<span className="mr-2 text-5xl font-extrabold">{price}</span>
					<span className="text-gray-500 dark:text-gray-400">/mês</span>
				</div>
				<ul role="list" className="mb-8 space-y-4 text-left">
					{features.map((feature, index) => (
						<li key={index} className="flex items-center space-x-3">
							<BiCheck size={24} className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
							<span>{feature}</span>
						</li>
					))}
				</ul>
  		</div>

  		{/* Botão fixado no final */}
			<div className="mt-auto">
				<button
					type="button"
					className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700"
				>
					Começar
				</button>
			</div>
		</div>

  );
};

export default PricingCard;
