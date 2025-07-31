"use server";
import nodemailer from "nodemailer";

async function sendEmail({
  to,
  from,
  subject,
  text,
}: {
  to: string;
  from: string;
  subject: string;
  text: string;
}) {
  // Simulate sending an email (replace with actual implementation)
  if (!to || !from || !subject || !text) {
    throw new Error("All email fields are required.");
  }
  if (!/\S+@\S+\.\S+/.test(from)) {
    throw new Error("Invalid email format.");
  }

  // // Simulate email sending logic
  // // In a real application, you would use an email service like SendGrid, Nodemailer, etc.
  // // For this example, we'll just log the email details to the console.
  // // Replace this with actual email sending logic.
  // // Example: await emailService.send({ to, from, subject, text });
  // // For now, we will just log the email details.
  // // This is a placeholder for actual email sending logic.
  // // In a real application, you would use an email service like Nodemailer, SendGrid
  // console.log(
  //   `Sending email to ${to} from ${from} with subject "${subject}" and text: ${text}`
  // );

  // 🔐 Use environment variables in production!
  const transporter = nodemailer.createTransport({
    service: "gmail", // or "hotmail", "outlook", etc.
    auth: {
      user: process.env.EMAIL_USER, // e.g. your Gmail address
      pass: process.env.EMAIL_PASS, // App password or real password (use App Password!)
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    text,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("Email sent:", info.response);
  return Promise.resolve();
}

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
    // console.log({ name, email, message }, "check email");
    await sendEmail({
      to: "htoomyatnyinyi@gmail.com",
      from: email,
      subject: `${name} ${email} - New Contact Form`,
      text: message,
    });

    // await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate delay

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
