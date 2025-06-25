const AllItems = () => {
  // Replace with actual data
  const items = [
    { id: 1, name: "Item One", price: "$10" },
    { id: 2, name: "Item Two", price: "$20" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Items</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={item.id}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItems;
