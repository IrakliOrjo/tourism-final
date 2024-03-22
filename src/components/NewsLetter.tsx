 

const NewsLetter = () => {
  return (
    <div className='h-[340px] bg-hero-fuji bg-cover object-cover bg-fixed bg-no-repeat 
    bg-blend-darken bg-black/30 w-full border flex flex-col justify-center items-center'>
        <p className="text-[2.4rem] mn:text-[2.8rem] shadow-inner font-semibold mb-4 text-white">Do you want to go?</p>
        <div
          className='flex flex-col mn:flex-row'
        >

        <input 
        type='email' 
        className='bg-slate-150 px-6 py-2 mb-2 rounded-sm mn:rounded-r-none mn:rounded-md outline-none mn:py-3 mn:mb-0 mn:w-[25rem]'
        placeholder='Email Adress..'
        />
        <button
          className='px-6 py-2 w-[13.3rem] rounded-sm mn:h-[3rem] mn:rounded-l-none mn:rounded-md
            bg-teal-300 hover:bg-teal-400'
          >I want!</button>
          </div>
    </div>
  )
}

export default NewsLetter