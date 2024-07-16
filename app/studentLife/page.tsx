const studentLife = () => {
  return(
    <section className="">
      <div style={{ backgroundImage: 'src(/assets/aerial.jpg)'}} className="bg-pink h-[78vh] flex items-center justify-center">
        {/* <img src="/assets/aerial.jpg" alt="about image" className="w-full h-[400px]" /> */}
        <h1 className="text-4xl mx-auto -mt-20 text-red">Students&apos; Life</h1>
      </div>

      <h1 className="text-3xl mt-5 pt-3 text-[#2f66a6] text-center mb-4 ">UNIFORM</h1>
      <div className="mx-5 px-3 text-sm grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
        <div className="p-6 shadow-md">
          <p className="my-2 py-2 text-charcoal">All students of Jericho High School wear a white short sleeved shirt with a badge of jericho High school.</p>
          <p className="my-2 py-2 text-charcoal">The students come to school dressed in clean full school uniform.</p>
        </div>
        <div className="p-6 shadow-md">
          <p className="my-1 py-2 text-charcoal">S.1 and S.2 wear grey shorts/skirts</p>
          <p className="my-1 py-2 text-charcoal">S.3 and S.4 wear grey trousers/skirts</p>
          <p className="my-1 py-2 text-charcoal">S.5 and S.6 wear nevi blue trousers/skirts</p>
          <p className="my-1 py-2 text-charcoal">For certain days and co-curricular activities, students may wear the official school T-shirts.</p>
          <p className="my-1 py-2 text-charcoal">House T-shirts</p>
          <p className="my-1 py-2 text-charcoal">Sapphire T-shirts</p>
          <p className="my-1 py-2 text-charcoal">Club T-shirts</p>
        </div>
        <p className="text-charcoal p-6 shadow-md">All students here are provided with a grey school sweater for O-level and nevi blue school sweater for A-level, the students wear black, plain leather short heeled shoes only.  O-level boys wear grey striped socks and the girls wear plain white socks.
            A-level boys wear plain grey socks and the girls wear white socks</p>

      </div>
    </section>

  )
}


export default studentLife;
