import  { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {

      const [navMobile, setNavMobile] = useState(false)
 
      const [header,setHeader] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
  })


 
 

  return (
    <div className={`self-end fixed w-full  md:px-6 
    ${header ? 'bg-blue-500 z-50 py-7 md:bg-blue-500 md:py-0'  : 
    ' '}`}>
        <div onClick={() => setNavMobile(!navMobile)} className='md:hidden '>
      {!navMobile && <AiOutlineMenu className='text-slate-100 fixed top-4 right-4 hover:scale-105 w-12 h-8 cursor-pointer' />}
      
      {navMobile && <AiOutlineClose className='text-slate-100 fixed top-4 right-4 z-10 hover:scale-105 w-12 h-8 cursor-pointer' />}
      </div>
      <div className={`${
        navMobile ? 'top-0 max-h-[188px]' : '-top-full max-h-[188px] '
        } fixed w-full bg-blue-500 md:hidden left-0 h-full overflow-hidden transition-all duration-500 ease-in-out`}
        >
            <nav className='flex flex-col gap-2  py-5 text-white font-500 tracking-widest
            text-[1.1rem] '
            >
                <a href='#home'
                    className='hover:border-b mx-auto border-[#49cdd1]'
                >Home</a>
                <a href='#journal'
                    className='hover:border-b mx-auto border-[#49cdd1]'
                >Journal</a>
                <a href='#articles'
                    className='hover:border-b mx-auto border-[#49cdd1]'
                >Articles</a>
                <a href='#blog'
                    className='hover:border-b mx-auto border-[#49cdd1]'
                >Blog</a>
                <a href='#contact'
                    className='hover:border-b mx-auto border-[#49cdd1]'
                >Contact</a>
            </nav>
              
      </div>
      <nav className='hidden md:flex md:float-end gap-11  py-5 text-white font-500 tracking-widest
            text-[1.2rem] lg:text-[1.3rem]'
            >
                <a href='#home'
                    className='hover:border-b mx-auto border-[#49cdd1]'
                >Home</a>
                <a href='#journal'
                    className='hover:border-b mx-auto border-[#49cdd1]'
                >Journal</a>
                <a href='#articles'
                    className='hover:border-b mx-auto border-[#49cdd1]'
                >Articles</a>
                <a href='#blog'
                    className='hover:border-b mx-auto border-[#49cdd1]'
                >Blog</a>
                <a href='#contact'
                    className='hover:border-b mx-auto border-[#49cdd1]'
                >Contact</a>
                <button 
                    className={`rounded-md tracking-widest 
                    px-6 text-[1.2rem] text-gray-700
                 hover:bg-teal-200   bg-teal-300 h-9 -mt-1`}
                    
                    >Buy now 
               </button>
            </nav>
    </div>
    
  )
}

export default Header