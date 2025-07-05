// import prisma from "@/lib/prisma";
import ContactForm from "./_components/ContactForm";
const Contact = async () => {
  // const data = await prisma.contactAddress.findMany();
  // const data = await prisma.contactAddress.findMany({
  //   select: {
  //     name: true,
  //     email: true,
  //     message: true,
  //     createdAt: true,
  //   },
  // });

  // console.log(data, "contact data at server action");

  return (
    <div className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <h1 className="text-[48px] xl:text-[80px] font-semibold">
              Contact Me
            </h1>
            <p className="max-w-[500px] mb-9">
              If you have any questions or would like to get in touch, feel free
              to reach out!
            </p>
            <ContactForm />
            {/* <div>{data.map((e) => e.name)}</div> */}
          </div>
          <div className="pt-12  mb-8 xl:mb-0">
            {/* Placeholder for contact form or details */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border rounded"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
