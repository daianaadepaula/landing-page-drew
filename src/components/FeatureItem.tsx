interface FeatureItemProps {
	title: string;
	description: string;
}

const FeatureItem =  ({title, description}: FeatureItemProps) => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-lg">
			<h3 className="text-xl font-bold text-gray-800">{title}</h3>
			<p className="mt-4 text-gray-600">{description}</p>
		</div>
	)
}

export default FeatureItem