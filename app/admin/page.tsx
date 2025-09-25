import prisma from "@/lib/prisma";

async function getData() {
  const [data, count, test] = await Promise.all([
    prisma.project.findMany(),
    prisma.project.count(),
    prisma.project.aggregate({
      _sum: {
        // Replace 'someNumericField' with the actual numeric field(s) in your Project model
        // For example: amount: true
        // Replace 'id' with the actual numeric field in your Project model, e.g., 'budget: true'
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

  return (
    <div>
      <h1>Admin Page</h1>
      {a ? (
        <div>
          <p>Data: {JSON.stringify(a.data)}</p>
          <p>Count: {a.count}</p>
          <p>Sum: {JSON.stringify(a.test)}</p>
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
