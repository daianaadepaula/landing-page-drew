interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }:ServiceCardProps) => {
	return (
    <div>
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-500 lg:h-12 lg:w-12 dark:bg-blue-600">
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default ServiceCard