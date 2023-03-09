import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"

export default function News() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="h-[500px] font-poppins flex justify-around pt-[50px] bg-[#EBEDEE] sm:h-[465px] md:h-[480px]"
    >
      <div className="gradient-5" />
      <motion.div
        variants={fadeIn('down', 'tween', 0.2, 1.2)}
        className="flex flex-col gap-[70px]"
      >
        <div className="flex flex-col gap-[30px] lg:px-[20px]">
          <h1 className="uppercase font-bold text-[45px] text-[#C6AA0E] sm:ml-[10px] sm:text-[30px] md:ml-[10px] md:text-[30px] lg:text-[40px]">notícias</h1>
          <p className="text-[20px] font-bold max-w-[467px] sm:ml-[10px] sm:text-[16px] md:ml-[10px] md:text-[17px] lg:text-[18px]">
            Acompanhe as notícias e o calendário econômico e fique informado das ocorrências, índices e
            relatórios influenciadores do comportamento do mercado, através do nosso portal de notícias.
          </p>
        </div>
        <a className="py-[20px] bg-[#C6AA0E] text-white rounded-lg text-center font-bold w-[200px] sm:ml-[10px] md:ml-[10px] lg:ml-[20px]">Money Now News</a>
      </motion.div>
      <img src="/bg-news.png" alt="Smartphone" className='h-[450px] w-[400px] sm:hidden md:hidden block' />
    </motion.section>
  )
}
