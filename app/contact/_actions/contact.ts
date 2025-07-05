"use server";

import prisma from "@/lib/prisma";
import z from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export const contact = async (formData: FormData) => {
  const checkedResult = contactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (checkedResult.success === false) {
    return checkedResult.error.formErrors.fieldErrors;
  }
  const data = checkedResult.data;

  try {
    // insert data to prisma database
    const insertedData = await prisma.contactAddress.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    });
  } catch (error) {
    return { success: false, message: "Failed To Submit Contact Form Data" };
  }
  // try {
  //   console.log(formData, "at server action");
  //   const name = formData.get("name") as string;
  //   const email = formData.get("email") as string;
  //   const message = formData.get("message") as string;

  //   // Insert data to prisma database
  //   const data = await prisma.contactAddress.create({
  //     data: { name, email, message },
  //   });

  //   console.log(data, "inserted contact data");
  //   return {
  //     success: true,
  //     message: "Contact Form Submitted Successfully",
  //     data,
  //   };
  // } catch (error) {
  //   return { success: false, message: "Failed To Submit Contact Form" };
  // }
};
