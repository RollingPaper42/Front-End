export const handleBackground = (
  e: React.MouseEvent<HTMLDivElement>,
  callback: () => void,
) => {
  if (e.target !== e.currentTarget) return;
  close();
};
