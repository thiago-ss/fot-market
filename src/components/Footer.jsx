import logo from '/logo.png'

export default function Footer() {
  return (
    <section className="min-h-[80vh] bg-[#181818] py-[50px]">
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <a href="">
          <img src={logo} className="w-" alt="FOT Markets logo" />
        </a>
        <div className='w-[1100px] h-[1px] bg-white'/>
        <h2 className='uppercase text-white font-bold text-[25px]'>fale conosco</h2>
      </div>
      <div className='flex gap-[180px]'>
        <div className='flex'>
          <img src="/phone-icon.svg" alt="Phone icon" />
        </div>
        <div className='flex'>
          <img src="/chat-icon.svg" alt="Chat icon" />
        </div>
      </div>
    </section>
  )
}
