import FeatureItem from "../components/FeatureItem";

const featuresData = [
  { title: "Feature One", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Feature Two", description: "Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus." },
  { title: "Feature Three", description: "Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet." }
];

const Features = () => {
	return (
		<section id="features" className="py-16 bg-gray-100">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-semibold text-gray-800">Our Amazing Features</h2>
				<p className="mt-4 text-lg text-gray-600">
					Check out the features that make our service stand out.</p>
				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{featuresData.map((feature, index) => (
						<FeatureItem key={index} title={feature.title} description={feature.description} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Features