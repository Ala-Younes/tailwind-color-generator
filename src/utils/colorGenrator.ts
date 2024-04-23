const generateRandomColors = (size: number) => {
  // const x = twMerge(`bg-${"red"}-${"500"}`); //! does not work

  const colorPalette = [
    `bg-red-100`,
    `bg-red-200`,
    `bg-red-300`,
    `bg-red-400`,
    `bg-red-500`,
    "bg-yellow-100",
    "bg-yellow-200",
    "bg-yellow-300",
    "bg-yellow-400",
    "bg-yellow-500",
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
    "bg-orange-100",
    "bg-orange-200",
    "bg-orange-300",
    "bg-orange-400",
    "bg-orange-100",
    "bg-orange-200",
    "bg-orange-300",
    "bg-orange-400",
    "bg-orange-500",
    "bg-gray-500",
    "bg-green-500",
  ];

  const generatedColors = Array.from(
    { length: size },
    () => colorPalette[Math.floor(Math.random() * colorPalette.length)]
  );
  return generatedColors;
};

export { generateRandomColors };
