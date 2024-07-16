

const about = () => {
  return(
    <section>
      
      <div style={{ backgroundImage: 'src(/assets/aerial.jpg)'}} className="bg-pink h-[78vh] flex items-center justify-center">
        {/* <img src="/assets/aerial.jpg" alt="about image" className="w-full h-[400px]" /> */}
        <h1 className="text-4xl mx-auto -mt-20 text-red">About US</h1>
      </div>

      <div className="mx-10 px-5 bg-about py-5">
        <div className="flex justify-between p-4">
          <h1 className="mx-auto text-4xl text-[#2f66a6]">What Drives Us</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-around gap-4">
          <div className="flex flex-col shadow-md hover:bg-[#199326] rounded-[10px] hover:text-white cursor-pointer hover:shadow-md">
            <h1 className="mx-auto p-4 text-2xl ">Our Mission</h1>
            <p className="p-3 text-charcoal hover:text-white">To provide affordable, equitable and all round education with scientific, technical and attitude so as to create useful citizens.</p>
          </div>
          <div className="flex flex-col shadow-md hover:bg-[#199326] rounded-[10px] hover:text-white cursor-pointer hover:shadow-md">
            <h1 className="mx-auto p-4 text-2xl ">Our Vision</h1>
            <p className="p-3 text-charcoal hover:text-white">To produce a society of diligent, skilled, socially responsible and useful citizens who strive for excellence.</p>
          </div>
          <div className="flex flex-col shadow-md hover:bg-[#199326] hover:text-white rounded-[10px] cursor-pointer hover:shadow-md">
            <h1 className="mx-auto p-4 text-2xl ">Our Values</h1>
            <p className="p-3 text-charcoal hover:text-white">God fearing, Responsibility, Honesty, Trustworthiness, Fairness , Humility.</p>
          </div>
        </div>
      </div>

    </section>
  )
};



export default about;
