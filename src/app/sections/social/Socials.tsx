import Input from "@/components/input";
import Card from "./Card";

function Social() {
  return (
    <div id="input" className="flex gap-3 lg:gap-[3.75rem] w-full lg:rounded-twc-mid-lg lg:shadow-twc-md mt-12 mb-16 lg:mt-[5.75rem] lg:mb-[8.81rem] lg:py-16 lg:px-24 max-w-7xl mx-auto">
      <Input />
      <div className=" w-full">
     <p className="text-lg"> Have you lost your bag, or have you found someone else&apos;s? Don&apos;t worry—we&apos;re here to help! Follow these simple steps to get started:
     </p>
<br/>
<p className=""><span className=" font-bold">Select Your Option: </span>Use the dropdown menu to indicate whether you &apos;Found&apos; or &apos;Lost&apos; a bag.</p>
<p className=""><span className=" font-bold">Upload an Image: </span>Attach an image of the bag. Make sure the photo is clear and shows any distinctive features.</p>
<p className=""><span className=" font-bold">Describe the Bag: </span>Provide a detailed description of the bag. Mention the color, brand, size, and any unique characteristics that could help identify it.</p>
<p className=""><span className=" font-bold">Provide your deatails: </span>Provide a detailed description of your self to connect people with you.</p>
<p className=""><span className=" font-bold">Submit: </span>Once you&apos;ve filled out the information, hit the &apos;Submit&apos; button.</p>
<p className=""><span className=" font-bold"></span></p>




      </div>
      </div>
  );
}

export default Social;
