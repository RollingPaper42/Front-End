export default function Back({ color }: { color: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 3H14V4H13V5H12V6H11V7H10V8H9V9H8V10H7V11H6V13H7V14H8V15H9V16H10V17H11V18H12V19H13V20H14V21H16V19H15V18H14V17H13V16H12V15H11V14H10V13H9V12V11H10V10H11V9H12V8H13V7H14V6H15V5H16V3Z"
        fill={color}
      />
    </svg>
  );
}
