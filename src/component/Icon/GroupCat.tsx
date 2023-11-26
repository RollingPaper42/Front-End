interface Props {
  bodyColor: string;
  eyeColor: string;
}

export default function GroupCat({ bodyColor, eyeColor }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" fill="none">
      <path
        fill={bodyColor}
        fill-rule="evenodd"
        d="M16.998 0h-.872v.436h-.436V2.18h.436v.435h.436v.436h.436v.436h.436v.436h.436v.434h.435v.873h-.435v.435h-.436v.436h-1.308v.435H8.281V5.227h-.436v1.309V4.79H7.41v-.87h-.435V2.612h-2.18v.436H3.051v-.436H.87v1.309H.437v5.664h.436v2.181h13.51H1.309v.873h.435v3.487h.436v.436h.872v-.436h.436V14.38H5.23v2.617h.436v.436h.872v-.436h.435V14.38h3.487v2.18h.436v.436h.872v-.435h.436v-2.18h2.179v.438h.872v2.615h.435v.436h.872v-.436h.436V8.715h-.436V8.28h-.436v-.434h1.308v-.436h.871v-.437h.872v-.434h.436v-.436h.436V3.922h-.436v-.436h-.436v-.434h-.436v-.437h-.436V2.18h-.435v-.436h-.436V.436h-.436V0ZM1.743.87h-.435v.435h.435V.87Zm.436.872v-.436h-.871v.436h.871Zm-1.307 0h1.307v.434h.436v.436H.872v-.87ZM6.102.87h.436v.435h-.436V.87Zm-.436.872v-.436h.872v.436h-.872Zm1.308 0H5.666v.434H5.23v.436h1.744v-.87ZM0 5.227h.436v3.487H0V5.227Z"
        clip-rule="evenodd"
      />
      <path
        fill={eyeColor}
        fill-rule="evenodd"
        d="M3.05 5.229h-.87V6.1h.87V5.23Zm2.18 0h-.872V6.1h.872V5.23Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
