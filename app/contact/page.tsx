// import prisma from "@/lib/prisma";
import { BsMailbox, BsTelephone } from "react-icons/bs";
import ContactForm from "./_components/ContactForm";

const Contact = async () => {
  // If you want to fetch data from DB:
  // const data = await prisma.contactAddress.findMany({
  //   select: { name: true, email: true, message: true, createdAt: true },
  // });
  // console.log(data, "contact data at server action");

  return (
    <section id="contact" className="py-16 ">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:gap-16">
          {/* Left Text */}
          <div className="text-center xl:text-left max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
            <p className="text-gray-600 mb-8">
              If you have any questions or would like to get in touch, feel free
              to reach out!
            </p>
            <ContactForm />
          </div>

          {/* Optional: Extra contact info */}
          <div className="mt-12 xl:mt-0 w-full max-w-md">
            <div className="p-6  rounded-xl shadow space-y-4">
              <h3 className="text-lg font-semibold">Get in touch</h3>
              <p className="text-gray-400 text-sm">
                I usually reply within 24 hours. For faster response, connect
                via my social links below.
              </p>
              <ul className="text-gray-500 space-y-2 text-sm">
                <li>
                  <BsMailbox />
                  <span className="font-medium">htoomyatnyinyi@gmail.com</span>
                </li>
                <li>
                  <BsTelephone />
                  <span className="font-medium">+66 0814152515</span>
                </li>
                <li>
                  <BsMailbox />
                  <span className="font-medium">Bangkok, Thailand</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// // import prisma from "@/lib/prisma";
// import ContactForm from "./_components/ContactForm";
// const Contact = async () => {
//   // const data = await prisma.contactAddress.findMany();
//   // const data = await prisma.contactAddress.findMany({
//   //   select: {
//   //     name: true,
//   //     email: true,
//   //     message: true,
//   //     createdAt: true,
//   //   },
//   // });

//   // console.log(data, "contact data at server action");

//   return (
//     <div className="h-full">
//       <div className="container mx-auto h-full">
//         <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
//           <div className="text-center xl:text-left">
//             <h1 className="text-[48px] xl:text-[80px] font-semibold">
//               Contact Me
//             </h1>
//             <p className="max-w-[500px] mb-9">
//               If you have any questions or would like to get in touch, feel free
//               to reach out!
//             </p>
//             <ContactForm />
//             {/* <div>{data.map((e) => e.name)}</div> */}
//           </div>
//           <div className="pt-12  mb-8 xl:mb-0">
//             {/* Placeholder for contact form or details */}
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full p-2 border rounded"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full p-2 border rounded"
//                 required
//               />
//               <textarea
//                 placeholder="Your Message"
//                 className="w-full p-2 border rounded"
//                 rows={4}
//                 required
//               ></textarea>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
