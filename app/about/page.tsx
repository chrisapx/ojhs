

const about = () => {
  return(
    <section>
      <div className="">
        <img src="/assets/van.jpg" alt="about image" className="w-full " />
      </div>
      <div className="flex justify-between">
        <h1 className="text-4xl mx-auto -mt-20 text-white">About Us</h1>
      </div>
      <div className="container mx-10">
        <p className="mt-5 text-charcoal">
          Jericho High School 
        </p>
      </div>

      <div className="mx-10 px-5 bg-about py-5">
        <div className="flex justify-between p-4">
          <h1 className="mx-auto text-4xl text-[#2f66a6]">What Drives Us</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-around gap-4">
          <div className="flex flex-col hover:bg-[#199326] rounded-[10px] hover:text-white">
            <h1 className="mx-auto p-4 text-2xl ">Our Mission</h1>
            <p className="p-3 text-charcoal hover:text-white">To provide affordable, equitable and all round education with scientific, technical and attitude so as to create useful citizens.</p>
          </div>
          <div className="flex flex-col hover:bg-[#199326] rounded-[10px] hover:text-white">
            <h1 className="mx-auto p-4 text-2xl ">Our Vision</h1>
            <p className="p-3 text-charcoal hover:text-white">To produce a society of diligent, skilled, socially responsible and useful citizens who strive for excellence.</p>
          </div>
          <div className="flex flex-col hover:bg-[#199326] hover:text-white rounded-[10px]">
            <h1 className="mx-auto p-4 text-2xl ">Our Values</h1>
            <p className="p-3 text-charcoal hover:text-white">God fearing, Responsibility, Honesty, Trustworthiness, Fairness , Humility.</p>
          </div>
        </div>
      </div>

    </section>
  )
};



export default about;
