export default function DropListDown({ color }: { color: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.63673 11.1138L6.63673 9.81836L17 9.81836L17 11.1138L15.7046 11.1138L15.7046 12.4092L13.7615 12.4092L13.7615 13.7046L12.4661 13.7046L12.4661 15L11.1707 15L11.1707 13.7046L9.87525 13.7046L9.87525 12.4092L7.93214 12.4092L7.93214 11.1138L6.63673 11.1138Z"
        fill={color}
      />
    </svg>
  );
}
