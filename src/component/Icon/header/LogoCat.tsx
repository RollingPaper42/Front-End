interface Props {
  bodyColor: string;
  eyeColor: string;
}

export default function LogoCat({ bodyColor, eyeColor }: Props) {
  return (
    <svg
      width="89"
      height="39"
      viewBox="0 0 89 39"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0H3V1V2H2V3V4V5V6V7H1V8V9V10H0V18H1V20H2V25H3V27H4V31V35H5V36H7V35H8V31H12V37H13V38H15V37H16V31H23V35H24V36H26V35H27V31H31V37H32V38H34V37H35V31H43V36H44V37H46V36H47V31H52V32H54V38H55V39H57V38H58V32V31V30V24V18H57V17H56V16H88V15H89V14H88V13H56H54H19V10H18V9H17V8V7H16V6V5V4V3V2H15V1V0H14V1H13V2V3H12V4H11V5H7V4H6V3H5V2V1H4V0Z"
        fill={bodyColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 10H5V12H7V10ZM12 10H10V12H12V10Z"
        fill={eyeColor}
      />
    </svg>
  );
}
