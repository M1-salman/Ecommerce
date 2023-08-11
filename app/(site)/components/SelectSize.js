const SelectSize = () => {
  const MySize = [
    {
      id: 1,
      size: "UK 5.5",
    },
    {
      id: 2,
      size: "UK 6",
    },
    {
      id: 3,
      size: "UK 6.5",
    },
    {
      id: 4,
      size: "UK 7",
    },
    {
      id: 6,
      size: "UK 7.5",
    },
    {
      id: 7,
      size: "UK 8",
    },
    {
      id: 8,
      size: "UK 8.5",
    },
    {
      id: 9,
      size: "UK 9",
    },
    {
      id: 10,
      size: "UK 9.5",
    },
    {
      id: 11,
      size: "UK 10",
    },
    {
      id: 12,
      size: "UK 10.5",
    },
    {
      id: 13,
      size: "UK 11",
    },
    {
      id: 14,
      size: "UK 11.5",
    },
    {
      id: 15,
      size: "UK 12",
    },
    {
      id: 16,
      size: "UK 12.5",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-1.5 w-72 mt-2 max-[320px]:w-64">
      {MySize.map((CurElem) => (
        <button
          className="border-2 border-slate-200  rounded text-center text-gray-900 hover:border-gray-900 p-2 cursor-pointer"
          key={CurElem.id}
        >
          {CurElem.size}
        </button>
      ))}
    </div>
  );
};

export default SelectSize;
