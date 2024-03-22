 
import image1 from '../assets/2.jpg'
import image2 from '../assets/3.jpg'
import image3 from '../assets/4.jpg'
 

const journalData = [
    {
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ullam expedita ex eos qui autem`,
        img: image1
    },
    {
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ullam expedita ex eos qui autem`,
        img: image2
    },
    {
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ullam expedita ex eos qui autem`,
        img: image3
    },
]



const Journal = () => {
  return (
    <div  className='flex  bg-white flex-col items-center p-11 text-center mn:text-left scroll-auto snap-mandatory'>
        <h1 className='text-[2rem] mb-3'>Our Journal</h1>
        <p className='mb-8 text-zinc-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex itaque laboriosam quam,
        consequuntur vero officiis molestias, inventore repellendus.
        </p>
        <div className="border max-w-[32rem] mn:max-w-[50rem] lg:max-w-[69rem] ">
            <div className='grid grid-cols-1 w-full mn:grid-cols-3 '>
                {journalData.map((item,index) => {
                    return (
                        <div className={`flex w-full flex-col items-center 
                        overflow-hidden mn:h-[38rem]  mn:w-[14.5rem] lg:w-[22rem] ${index===1 ? ' mn:flex-col-reverse' : ''} `}>
                            <div className='basis-[50%]  flex flex-col justify-center mn:p-1'>
                            <p className='my-11 max-w-[20rem] text-zinc-700 text-[1.1rem]
                            mn:text-left mn:mb-4 mn:mt-5 mn:max-w-[10rem] lg:max-w-[15rem]'
                            >{item.text}</p>
                            <p className='mb-8 mn:mb-6 text-blue-400 hover:text-blue-700
                            cursor-pointer hover:scale-105 mn:text-left
                            '>Read More</p>
                            </div>
                            <img className='w-full  object-cover basis-[50%]' src={item.img} alt='nature wallpaper' />
                        </div>
                    )
                })}
            </div>
        </div>
                <p className='my-14 mn:max-w-[32rem] lg:max-w-[48rem]'
                > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam et quasi, dignissimos culpa rerum non corporis neque fuga nihil? Illo iure, nesciunt sunt fugiat vero tempora aspernatur iste, repudiandae? Molestias qui commodi, ut rerum recusandae, fugit cumque suscipit dolorem tenetur dolore, cupiditate voluptatibus. Mollitia dolorum, quae, doloribus, itaque dignissimos veritatis a amet aliquid cum veniam minus. Repudiandae, facilis, delectus?
                </p>
    </div>
  )
}

export default Journal