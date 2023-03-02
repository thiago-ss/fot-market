import { footerContent1, footerContent2, footerContent3, getInTouch1, getInTouch2 } from '../constants'
import logo from '/logo.png'

export default function Footer() {
  return (
    <section className="h-[650px] bg-[#181818] py-[50px] flex flex-col px-[14%]">
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <a href="">
          <img src={logo} alt="FOT Markets logo" />
        </a>
        <div className='footer-line' />
        <h2 className='uppercase text-white font-bold text-[25px] mb-[30px]'>fale conosco</h2>
        <div className='flex gap-[60px] text-[18px] font-bold font-poppins mb-[20px]'>
          <div className='flex flex-col gap-[40px]'>
            {getInTouch1.map((item) => (
              <div key={item.id} className='flex gap-[10px]'>
                <img src={item.imgUrl} />
                <p className='text-white'>{item.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[40px]">
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
      <div className="flex justify-between font-poppins font-bold text-white">
        <div className='flex flex-col max-w-[250px] gap-5'>
          {footerContent1.map((item, index) => (
            <p>{item}</p>
          ))}
        </div>

        <div className='flex flex-col max-w-[250px] gap-5'>
          {footerContent2.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <div className='flex flex-col max-w-[250px] gap-5'>
          {footerContent3.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
