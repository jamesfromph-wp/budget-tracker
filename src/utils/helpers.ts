export const getRandomColor = (index: number) => {
  const colors = ["#B2DFDB", "#B7E0E5", "#F0F4C3", "#FFD3B6", "#C9E6FF"];

  if (index >= 0 && index <= 5) return colors[index];

  return "#EEEEEE";
};
