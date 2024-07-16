import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"



const contact = () => {
  return(
    <section>
      
      <div style={{ backgroundImage: 'src(/assets/aerial.jpg)'}} className="bg-pink h-[78vh] flex items-center justify-center">
        {/* <img src="/assets/aerial.jpg" alt="about image" className="w-full h-[400px]" /> */}
        <div className="text-4xl mx-auto text-red">School News</div>
      </div>

      <div className="flex my-5 py-3"><h1 className="mx-auto text-3xl text-[#2f66a6]">Do You Have Any Questions?</h1></div>
      <div className="flex flex-col md:flex-row md:items-center py-16 ">

        <div className="flex-1 flex flex-col mx-[10vw]">
          <h1 className=" text-charcoal flex gap-4 items-center">
            We are a feedback based institution, we value our clients so much by the fact that we love to build on what pains our clients.
            We are available to offer what is required other than what we think is required. Kindly reach out if you have any concerns
          </h1>
            
        </div>
        <div className="flex-1 flex flex-col mx-[10%] p-5 shadow-2xl rounded-md">
          <h1 className="mx-auto py-2 text-[#2f66a6]">Leave A Message</h1>
          <form className="w-full max-w-lg mx-auto">
            <div className="my-3"><Input placeholder="Name" /></div>
            <div className="my-3"><Input type="email" placeholder="Email" /></div>
            <div className="my-3"><Textarea placeholder="Message" /></div>
            <Button type="submit" className="bg-[#d5181a] w-full text-white">Send</Button>
          </form>
        </div>
      </div>
    </section>

  )
}


export default contact;
