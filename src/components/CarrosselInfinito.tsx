import { motion } from "framer-motion";
import { BiBulb, BiChart, BiEditAlt, BiSolidCamera, BiSolidCameraMovie} from "react-icons/bi";

const categories = [
  { icon: <BiSolidCameraMovie size={64} className="mr-2" />, text: "#Filmmakers" },
  { icon: <BiSolidCamera size={64} className="mr-2" />, text: "#Photographers" },
  { icon: <BiEditAlt size={64} className="mr-2" />, text: "#Designers" },
  { icon: <BiBulb size={64} className="mr-2" />, text: "#Creators" },
  { icon: <BiChart size={64} className="mr-2" />, text: "#Marketing" },
];

const CarrosselInfinito = () => {
	return (
    <div className="overflow-hidden whitespace-nowrap w-full py-8">
      <motion.div
        className="flex space-x-16 text-gray-500 text-5xl font-bold"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ 
          repeat: Infinity, 
          duration: 20, // Ajuste a velocidade do carrossel aqui
          ease: "linear" 
        }}
      >
        {[...categories, ...categories].map((item, index) => (
          <a 
            key={index} 
            href="#" 
            className="flex items-center hover:text-gray-800 dark:hover:text-gray-400"
          >
            {item.icon}
            {item.text}
          </a>
        ))}
      </motion.div>
    </div>
  );
}

export default CarrosselInfinito