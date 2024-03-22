import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col py-11 bg-teal-50 text-center mn:text-left 
    items-center justify-center gap-9 mn:grid mn:grid-cols-2 mn:gap-11 mn:px-14
    lg:flex lg:flex-row"
    >
        <div>
        <p className="text-[1.4rem] font-bold mb-7 mn:mb-3">The Journey Starts Here!</p>
                <p className="text-[1.2rem] font-semibold mb-2">Adress:</p>
            <div>
                <p className="text-zinc-700">1234 Street Name</p>
                <p className="text-zinc-700">City, 9999</p>
            </div>
        </div>
        <div>
                <p className="text-[1.2rem] font-semibold mb-2">Phone:</p>
            <div>
                <p className="text-zinc-700">Office :</p>
                <p className="text-zinc-700">+1 (0) 000 0000 001</p>
            </div>
        </div>
        <div>
                <p className="text-[1.2rem] font-semibold mb-2">Email:</p>
            <div>
                <p className="text-zinc-700">info@travelexample.com</p>
   
            </div>
        </div>
        <div className="mn:flex mn:gap-7 ">
                <p className="text-[1.2rem] font-semibold mb-2">Social:</p>
            <div className="flex gap-6">
                <div>
                    <FaFacebook className="text-[1.3rem] cursor-pointer text-sky-700" />
                </div>
                <div>
                    <FaTwitter className="text-[1.3rem] cursor-pointer text-sky-400" />
                </div>
                <div>
                    <FaInstagramSquare className="text-[1.3rem] cursor-pointer text-rose-700" />
                </div>
   
            </div>
        </div>
    </div>
  )
}

export default Footer