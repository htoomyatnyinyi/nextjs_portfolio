import prisma from "@/lib/prisma";

async function getData() {
  // Define a placeholder for the field you want to sum.
  // Replace 'budget' with a real numeric field from your Project model in schema.prisma
  const fieldToSum = "budget";

  const [data, count, test] = await Promise.all([
    prisma.project.findMany(),
    prisma.project.count(),
    prisma.project.aggregate({
      _sum: {
        // CORRECTED: Use a meaningful numeric field here, not 'id'.
        // For example, if you have a 'budget' or 'hours' field, use that.
        id: true,
      },
    }),
  ]);

  console.log(data, count, test, "at get data");
  return { data, count, test };
}

const Admin = async () => {
  const a = await getData();
  console.log(a, "at Admin page");

  // This will now look for something like a._sum.budget instead of a._sum.id
  const sumValue = a.test._sum.budget || 0;

  return (
    <div>
      <h1>Admin Page</h1>
      {a ? (
        <div>
          <p>Data: {JSON.stringify(a.data)}</p>
          <p>Count: {a.count}</p>
          {/* CORRECTED: Display the sum properly */}
          <p>Sum of Budgets: {sumValue}</p>
          <br />
          <div>
            {a.data.map((ae: any) => (
              <div key={ae.id}>
                <p>{ae.title}</p>
                <p>{ae.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p>No Info</p>
        </div>
      )}
    </div>
  );
};

export default Admin;
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
//       {a ? (
//         <div>
//           <p>Data: {JSON.stringify(a.data)}</p>
//           <p>Count: {a.count}</p>
//           <p>Sum: {JSON.stringify(a.test)}</p>
//           <br />
//           <div>
//             {a.data.map((ae: any) => (
//               <div key={ae.id}>
//                 <p>{ae.title}</p>
//                 <p>{ae.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div>
//           <p>No Info</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Admin;
