import { footerContent1, footerContent2, footerContent3, footerContent4, getInTouch1, getInTouch2 } from '../constants'
import logo from '/logo.png'

export default function Footer() {
  return (
    <section className="min-h-[650px] bg-[#181818] py-[50px] flex flex-col px-[14%] sm:px-[10px] sm:min-h-[1080px] md:px-[10px] md:min-h-[1080px] lg:min-h-[760px]">
      <div className="lg:flex lg:flex-col lg:justify-center xl:flex xl:flex-col xl:justify-center 
        2xl:flex 2xl:flex-col 2xl:justify-center items-center gap-[20px]">
        <a href="">
          <img src={logo} alt="FOT Markets logo" />
        </a>
        <div className='footer-line' />
        <h2 className='uppercase text-white font-bold text-[25px] mb-[30px] sm:mt-[10px] md:mt-[10px]'>fale conosco</h2>
        <div className='grid grid-cols-2 gap-[60px] text-[18px] font-bold font-poppins mb-[20px] sm:grid-cols-1 md:grid-cols-1 lg:gap-[190px]'>
          <div className='grid grid-cols-1 gap-[40px]'>
            {getInTouch1.map((item) => (
              <div key={item.id} className='flex gap-[10px]'>
                <img src={item.imgUrl} />
                <p className='text-white'>{item.label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-[40px]">
            {getInTouch2.map((item) => (
              <div key={item.id} className='flex gap-[10px]'>
                <img src={item.imgUrl} />
                <p className='text-white'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-line" />
      </div>
      <div className="flex flex-col font-montserrat font-bold mt-[20px] mb-[10px]">
        <h1 className='text-white text-[25px]'>REGULAMENTAÇÃO</h1>
        <p className='text-[14px] text-[#7B7B7B]'>
          Estamos regulamentados pela comissão de serviços
          financeiros sob o número de licença 00000000000000
        </p>
      </div>
      <div className="lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between font-poppins font-bold text-white">
        <div className='grid grid-cols-1 max-w-[250px] gap-5 lg:max-w-[260px]'>
          {footerContent1.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <div className='grid grid-cols-1 max-w-[250px] gap-5 lg:max-w-[260px]'>
          {footerContent2.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <div className='grid grid-cols-1 max-w-[250px] gap-5 lg:max-w-[260px] mb-[45px]'>
          {footerContent3.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div className="footer-line" />
      <div className='flex flex-col gap-[15px] max-w-[450px] text-[#7b7b7b] font-bold mx-auto text-center mt-[20px]'>
        {footerContent4.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </section>
  )
}
