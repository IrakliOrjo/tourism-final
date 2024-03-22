
import { FaArrowRight } from "react-icons/fa";
import '../index.css'
import Header from "./Header";
 
import useScrollPosition from "../hooks/useScrollPosition";
 
const Banners = () => {
 

 
 const pos = useScrollPosition(0.5); //scrollY * 0.5
 console.log(pos)
  return (
    <div>

    <div  id="home"  style={{ backgroundPositionY: pos }}
    className="min-h-screen relative flex flex-col overflow-y-auto  bg-emerald-800/15 
    bg-blend-darken items-center   bg-hero-pattern  text-center bg-cover">
        <Header />
        <div   className="flex flex-col  my-auto items-center">

        <h1     className="text-zinc-800 drop-shadow-2xl  font-bold text-[2.7rem]"
        >Travel With Us</h1>
        <p  
        className="text-white drop-shadow-2xl mb-8 text-[1.6rem]"
        >Explore the world in any direction</p>
        <div className="flex gap-11 "> 
            <button 
            className="rounded-md tracking-widest py-3 
            px-6 text-[.9rem] text-gray-700 md:text-[1.1rem]
            hover:bg-teal-200  bg-teal-300"
            
            >Buy now 
        <span className="">

          <FaArrowRight className="arrow-icon" />
        </span>
        
      </button>
            <button className="rounded-md tracking-widest py-3 px-6  border-[#5eead4] 
            hover:bg-teal-300 hover:text-gray-700 md:text-[1.1rem] text-teal-100 border hover:tracking-[0.2rem]">Ways to travel</button>
        </div>
            </div>
    </div>
    </div>
  )
}

export default Banners