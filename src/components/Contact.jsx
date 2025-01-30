

  const Contact = () => {
  return (
    <div className=' max-w-screen-2xl container mz-auto px-4 md:px-20 my-16'>
            <h1 className='text-3xl font-blold mb-4'>Contect me</h1>
            <span>Please fill out the form below to ontect me</span>
            <div className="flex flex-col items-center justify-center mt-5">
                <form action='https://getform.io/f/apjjwxla'
                method="POST"
                className=" bg-slate-950  px-8 py-6 border rounded-xl ">
                    <h1 className="text-xl font-semibold mb-4 px-8 py-6 rounded-r-xl">Send Your Message</h1>
                    <div className="flex flex-col mb-4">
                        <label 
                        className = "block text-white-700 ">Full Name</label>
                    <input className="shadow rounded-lg appearance-none border rounded-lg py-2 px-3 text-white-700 leading-tigh focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your Name">
                    
                    </input>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label 
                        className = "block text-white-700 ">E-mail Address</label>
                    <input className="shadow rounded-lg appearance-none border rounded-lg py-2 px-3 text-white-700 leading-tigh focus:outline-none focus:shadow-outline"
                    id="name"
                    name="email"
                    type="text"
                    placeholder="E-mail address">
                    
                    </input>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label 
                        className = "block text-white-700 ">Message</label>
                    
                    <textarea className="shadow rounded-lg appearance-none border rounded-lg py-2 px-3 text-white-700 leading-tigh focus:outline-none focus:shadow-outline "
                    id="name"
                    name="message"
                    type="text"
                    placeholder="Enter your Query">
                    
                    </textarea>
                   
                    </div>
                    <button type="submit" className=" bg-white text-black rounded-xl px-3 py-2 hover:bg-indigo-950 duration-100">
                        Send
                    </button>
                </form>
            </div>
    </div>
 );
};
export default Contact;
