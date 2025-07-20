"use server";

export async function contact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  // Simulate an API call or email sending
  try {
    // console.log({ name, email, message });
    // await sendEmail({ to: "your-email@example.com", from: email, subject: "New Contact Form Submission", text: message });
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
    if (email.includes("error")) {
      // Simulate an error for testing
      return { success: false, error: "Simulated email sending error." };
    }
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending contact form:", error);
    return {
      success: false,
      error: "Failed to send message due to an internal error.",
    };
  }
}

// "use server";

// import prisma from "@/lib/prisma";
// import z from "zod";

// const contactSchema = z.object({
//   name: z.string().min(1, "Name is required"),
//   email: z.string().email("Invalid email address"),
//   message: z.string().min(1, "Message is required"),
// });

// export const contact = async (formData: FormData) => {
//   const checkedResult = contactSchema.safeParse(
//     Object.fromEntries(formData.entries())
//   );
//   if (checkedResult.success === false) {
//     return checkedResult.error.formErrors.fieldErrors;
//   }
//   const data = checkedResult.data;

//   try {
//     // insert data to prisma database
//     const insertedData = await prisma.contactAddress.create({
//       data: {
//         name: data.name,
//         email: data.email,
//         message: data.message,
//       },
//     });
//   } catch (error) {
//     return { success: false, message: "Failed To Submit Contact Form Data" };
//   }
//   // try {
//   //   console.log(formData, "at server action");
//   //   const name = formData.get("name") as string;
//   //   const email = formData.get("email") as string;
//   //   const message = formData.get("message") as string;

//   //   // Insert data to prisma database
//   //   const data = await prisma.contactAddress.create({
//   //     data: { name, email, message },
//   //   });

//   //   console.log(data, "inserted contact data");
//   //   return {
//   //     success: true,
//   //     message: "Contact Form Submitted Successfully",
//   //     data,
//   //   };
//   // } catch (error) {
//   //   return { success: false, message: "Failed To Submit Contact Form" };
//   // }
// };
