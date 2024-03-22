import { FaArrowRight } from "react-icons/fa"
import plane from '../assets/plane.png'
import train from '../assets/train.png'

const Travel = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 mt-11">
        <p className="text-[1.7rem] mb-11">We offer different ways to travel</p>
        <div className="md:flex gap-11">

        <div className="flex flex-col text-center max-w-[30rem]">
            <img className="w-full rounded-md mb-11" src={plane}/>
            <p className="font-semibold mb-3 text-[1.3rem]"
            >Travel by air</p>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate est eveniet.</p>
            <p className="text-teal-500 mb-14 cursor-pointer hover:text-teal-400"
            >Read More <span><FaArrowRight className="inline-block" /></span></p>
        </div>
        <div className="flex flex-col text-center  max-w-[30rem]">
            <img 
                className="w-full rounded-md mb-11"
                src={train}/>
            <p className="font-semibold mb-3 text-[1.3rem]">Travel by train</p>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate est eveniet.</p>
            <p className="text-teal-500 mb-14 cursor-pointer hover:text-teal-400">Read More <span><FaArrowRight className="inline-block" /></span></p>
        </div>
        </div>
    </div>
  )
}

export default Travel