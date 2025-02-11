import Header from "./components/Header";
import Hero from './pages/Hero';
import About from "./pages/About";
import Features from "./pages/Features";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Prices from "./pages/Prices";

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
				<Features />
				<Team />
				<Prices />
			</main>
			<Footer />
		</motion.div>	
	)
}

export default App