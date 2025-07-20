import Phtoto from "@/components/Phtoto";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FileDownIcon } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row  justify-between items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl mb-9 pb-9 ">Junior Web Developer</span>
            <h1 className="text-[48px] xl:text-[80px] font-semibold ">
              Hello, I'm <br />
              <span className="text-green-500">HTOO MYAT NYI NYI</span>
            </h1>
            <p className="max-w-[500px] mb-9 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              quae necessitatibus fuga voluptas veritatis aperiam sint rerum
              quasi quo consequatur distinctio quos, voluptatibus esse
              reiciendis ullam inventore rem sapiente. Architecto!
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FileDownIcon className="text-xl" />
              </Button>
              <div>Socials</div>
            </div>
          </div>
          <div className="order-1 xl:order-none  mb-8 xl:mb-0">
            <Phtoto />
          </div>
        </div>
        <Stats />
      </div>
    </div>
  );
};

export default Home;
// import Phtoto from "@/components/Phtoto";
// import Stats from "@/components/Stats";
// import { Button } from "@/components/ui/button";
// import { FileDownIcon, Mail, Phone } from "lucide-react";
// import Link from "next/link";
// import React from "react";
// import { BsFacebook, BsLine } from "react-icons/bs";

// const Home = () => {
//   return (
//     <div className="h-full">
//       <div className="container mx-auto h-full">
//         <div className="flex flex-col xl:flex-row  justify-between items-center xl:pt-8 xl:pb-24">
//           <div className="text-center xl:text-left order-2 xl:order-none ">
//             <span className="text-xl mb-9 pb-9 ">
//               Travel & General Services
//             </span>
//             <h1 className="text-[48px] xl:text-[80px] font-semibold ">
//               Hello, I'm <br />
//               <span className="text-green-500">David Tun</span>
//             </h1>
//             <p className="max-w-[500px] mb-9 ">
//               Travel and general services provider in Thailand. I offer a wide
//               range of services to make your travel experience smooth and
//               enjoyable.
//             </p>
//             <div className="flex flex-col xl:flex-row items-center gap-8">
//               {/* <Button
//                 variant={"outline"}
//                 className="uppercase flex items-center gap-2"
//               >
//                 <span>Download CV</span>
//                 <FileDownIcon className="text-xl" />
//               </Button> */}
//               <div className="flex items-center justify-center mt-4 xl:mt-0">
//                 <Link href="tel:+66 0814152515">
//                   <Phone className="ml-4 text-xl" />
//                 </Link>
//                 <Link href="mailto:htoomyatnyinyi@gmail.com">
//                   <Mail className="ml-4 text-xl" />
//                 </Link>
//                 <Link href="https://www.facebook.com/">
//                   <BsFacebook className="ml-4 text-xl" />
//                 </Link>
//                 <Link href="https://line.me/evertruststravel">
//                   <BsLine className="ml-4 text-xl" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="order-1 xl:order-none  mb-8 xl:mb-0">
//             <Phtoto />
//           </div>
//         </div>
//         <Stats />
//       </div>
//     </div>
//   );
// };

// export default Home;
