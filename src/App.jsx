import Carousel from "./components/Carousel/Carousel";
import Header from "./components/Header";
import Analysis from "./sections/Analysis";
import Hero from "./sections/Hero";
import Negotiation from "./sections/Negotiation";
import Platforms from "./sections/Platforms";
import Webinarios from "./sections/Webinarios";
import News from "./sections/News";
import About from "./sections/About";
import Faq from "./sections/Faq";
import Footer from "./components/Footer";
import StaticTable from "./components/StaticTable";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function App() {
	return (
		<div className="overflow-hidden">
			<Header />
			<Hero />
			<Platforms />
			<Webinarios />
			<Analysis />
			<Carousel slides={SLIDES} options={OPTIONS} />
			<Negotiation />
			<News />
			<About />
			<Faq />
			<StaticTable />
			<Footer />
		</div>
	);
}

export default App;
