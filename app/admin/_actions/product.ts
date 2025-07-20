// "use server";

// import prisma from "@/lib/prisma";
// import { revalidatePath } from "next/cache";

// // import { redirect } from "next/navigation";

// export const addProject = async (formData: FormData) => {
//   console.log(formData, "at server action");
//   // redirect("/admin/projects");
//   try {
//     const title = formData.get("title") as string;
//     const description = formData.get("description") as string;
//     console.log(title, description);
//     // insert data to prisma database

//     const data = await prisma.project.create({
//       data: { title, description },
//     });

//     // Revalidate relevant paths/tags
//     revalidatePath("/admin/projects"); // Assuming your project list is here
//     revalidatePath("/projects"); // If you have a public projects list

//     // Optional: Redirect after success (often better done on the client with router.push)
//     // redirect('/admin/projects');

//     console.log(data, "inserted");
//     return {
//       success: true,
//       message: "Item Create Successfully",
//       // data,
//     };
//   } catch (error) {
//     return { success: false, message: "Failed To Add Project" };
//   }
// };
