import { ImQuotesLeft } from "react-icons/im";

const countriesData = [
    {
        title: "Southern countries",
        description: "Lorem ipsum dolor amet, consecte tempor incididunt ut labore et dolore tumber tur adipisicing elit."
    },
    {
        title: "Nordic countries",
        description: "Lorem ipsum dolor amet, consecte tempor incididunt ut labore et dolore tumber tur adipisicing elit."
    },
    {
        title: "African countries",
        description: "Lorem ipsum dolor amet, consecte tempor incididunt ut labore et dolore tumber tur adipisicing elit."
    },

]

const Countries = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-11">
        <div className="p-8 flex flex-col gap-7 lg:gap-14 mb-11
     mn:grid mn:grid-cols-2 mn:gap-4 mn:max-w-[47rem] lg:flex lg:flex-row lg:max-w-[90rem] self-center">
        {countriesData.map((country,index) => {
            return (
                <div className={`${index === 0 ? 'bg-teal-500' : index === 1 ? 'bg-blue-500' : 'bg-red-500 '} 
                flex flex-col justify-center max-w-[34rem] mn:w-[20.5rem] items-center text-center rounded-md p-11 gap-11`}>
                    <p className="text-white text-[1.5rem]">{country.title}</p>
                    <p className="text-white text-[1.1rem]">{country.description}</p>
                </div>
            )
        })}
        </div>
        <div className="flex flex-col">
        <p className="text-zinc-500 px-4 max-w-[30rem] mn:max-w-[40rem] lg:max-w-[50rem]  mn:text-[1.2rem] mb-6">
            <span className="mb-5 hidden  text-zinc-400 text-[2rem] mn:inline-block"><ImQuotesLeft/></span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur facilis expedita cum iste voluptate itaque doloribus molestias numquam natus voluptates, molestiae tempora praesentium ratione dicta laudantium, excepturi voluptatibus, assumenda repellendus!
        </p>

        <p className="pl-4 self-start">National geographic</p>
        </div>
    </div>
  )
}

export default Countries