// import prisma from "@/lib/prisma";

// async function getData() {
//   const [data, count, test] = await Promise.all([
//     prisma.project.findMany(),
//     prisma.project.count(),
//     prisma.project.aggregate({
//       _sum: {
//         // Replace 'someNumericField' with the actual numeric field(s) in your Project model
//         // For example: amount: true
//         // Replace 'id' with the actual numeric field in your Project model, e.g., 'budget: true'
//         id: true,
//       },
//     }),
//   ]);
//   console.log(data, count, test, "at get data");
//   return { data, count, test };
// }

// const Admin = async () => {
//   const a = await getData();
//   console.log(a, "at Admin page");
//   return (
//     <div>
//       <h1>Admin Page</h1>
//       <p>Data: {JSON.stringify(a.data)}</p>
//       <p>Count: {a.count}</p>
//       <p>Sum: {JSON.stringify(a.test)}</p>
//     </div>
//   );
// };

// export default Admin;

const page = () => {
  return <div>page</div>;
};

export default page;
