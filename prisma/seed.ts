import prisma from "@/lib/prisma";

async function main() {
  console.log("Starting seeding...");

  const projects = [
    {
      title: "Personal Website",
      description:
        "A personal portfolio website built with Next.js and Tailwind CSS.",
      imageUrl: "https://example.com/images/personal-website.jpg",
      link: "https://example.com",
    },
    {
      title: "Task Manager App",
      description: "A task management application with React and Node.js.",
      imageUrl: "https://example.com/images/task-manager.jpg",
      link: "https://example.com/task-manager",
    },
    {
      title: "E-commerce Platform",
      description: "An e-commerce platform with payment integration.",
      imageUrl: "https://example.com/images/ecommerce.jpg",
    },
  ];

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    });
    console.log(`Created project: ${project.title}`);
  }

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
