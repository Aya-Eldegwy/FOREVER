
const NewsLetterBox = () => {
    const submithanler= (event)=>{
        event.preventDefault()
    }
    return (
    <div className='text-center'>
        <p className="text-2xl font-medium text-gray-800 ">Buy now & get 20% off</p>
        <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing</p>
        <form  onSubmit={submithanler} className="w-full sm:w-1/2 flex items-center gap-2 m-auto my-6 border pl-3 ">
            <input type="email" className="w-full sm:flex-1 outline-none" placeholder='Enter your email'required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 '>Send</button>
        </form>
    </div>
    )
}

export default NewsLetterBox