import { motion } from "framer-motion"
import { about } from '../constants'

export default function About() {
  return (
    <section className="min-h-[65vh] bg-[#181818] py-[50px] flex flex-col items-center justify-around ">

      <h1 className="uppercase font-bold text-[45px] text-center text-white sm:text-[30px] md:text-[35px]">sobre a fot</h1>

      <p className="text-white font-bold text-center text-[20px] xl:max-w-[1100px] 2xl:max-w-[1100px]">
        Nascemos grandes, ousados e precisos. Fazemos parte de um grande grupo de empresas, que desde 2016 se posicionou como um dos maiores
        grupos de investimento a nível internacional, o que nos credenciou a crescer tão rapidamente a expandir este crescimento como corretora de FOREX,
        totalmente regulamentada. Atuamos hoje em Portugal, Chile, Argentina e Colômbia, mas em breve estaremos em toda a América Latina, Europa e EUA.
      </p>

      <div className="grid grid-cols-5 sm:grid-cols-1 md:grid-cols-1 mt-10">
        {about.map((item) => (
          <div key={item.id}>
            <img src={item.imgUrl} alt="icon" className="max-w-[42.51px] h-[50px] mx-auto" />
            <p className="text-center text-white font-bold">{item.text}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
