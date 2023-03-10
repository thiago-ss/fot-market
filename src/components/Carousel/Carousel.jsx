import "./Carousel.css";

import { motion } from "framer-motion";

import EmblaCarousel from "./EmblaCarousel";
import { tutorials1, tutorials2 } from "../../constants";
import { textVariant, fadeIn, zoomIn } from "../../utils/motion";

const OPTIONS = { inViewThreshold: 0, dragFree: true };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Carousel = () => (
	<section className="bg-[#181818] font-poppins p-5 min-h-[750px] pb-[50px] sm:min-h-[1100px] md:min-h-[730px] lg:min-h-[720px]">
		<motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}>
			<motion.h1 variants={textVariant(0.5)} className="text-white font-bold text-[45px] text-center mt-[30px] sm:text-[30px]">
				TUTORIAIS
			</motion.h1>

			<motion.div variants={zoomIn(0.8, 1)} className="sandbox mt-20">
				<div className="sandbox__carousel">
					<EmblaCarousel slides={SLIDES} options={OPTIONS} />
				</div>
			</motion.div>
			<div className="container mx-auto">
				<div className="grid grid-cols-3 gap-4 mt-10 sm:grid-cols-1 md:grid-cols-3 ">
					{tutorials1.map((item) => (
						<motion.div variants={textVariant(1.1)} key={item.id}>
							<img src={item.imgUrl} className="w-[45px] mx-auto" />
							<p className="text-center text-[15px] font-bold text-white max-w-[174px] ml-auto mr-auto mt-5 md:text-[13px]">{item.text}</p>
						</motion.div>
					))}
				</div>
				<div className="grid grid-cols-3 gap-4 mt-10 sm:grid-cols-1 md:grid-cols-3 ">
					{tutorials2.map((item) => (
						<motion.div variants={textVariant(1.4)} key={item.id}>
							<img src={item.imgUrl} className="w-[45px] mx-auto" />
							<p className="text-center text-[15px] font-bold text-white max-w-[174px] ml-auto mr-auto mt-5 md:text-[13px]">{item.text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	</section>
);

export default Carousel;
