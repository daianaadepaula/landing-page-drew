import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from './pages/Hero';
import About from "./pages/About";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact";

const App = () => {
	return (
		<motion.div
      className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >    
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<Team />
				<Prices />
				<Contact />
			</main>
			<Footer />
		</motion.div>	
	)
}

export default App