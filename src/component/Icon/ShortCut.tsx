interface Props {
  color: string;
}

export default function ShortCut({ color }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="none">
      <g fill={color} filter="url(#a)">
        <path
          fill-rule="evenodd"
          d="M31 7h10v1h4v1h2v1h2v1h2v1h1v1h1v1h1v1h1v1h1v1h1v2h1v1h1v2h1v3h1v14h-1v3h-1v2h-1v2h-1v1h-1v2h-1v1h-1v1h-1v1h-2v1h-1v1h-2v1h-2v1h-3v1H29v-1h-3v-1h-2v-1h-1v-1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-2h-1v-2h-1v-2h-1v-4h-1V27h1v-3h1v-3h1v-2h1v-1h1v-1h1v-2h1v-1h1v-1h1v-1h2v-1h1v-1h2V9h3V8h3V7Zm10 49v-1h4v-1h2v-1h2v-1h1v-1h1v-1h2v-1h1v-2h1v-1h1v-1h1v-2h1v-2h1v-4h1V27h-1v-3h-1v-2h-1v-2h-1v-2h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-1v-1h-2v-1h-3V9h-4V8h-6v1h-4v1h-2v1h-2v1h-2v1h-1v1h-2v1h-1v1h-1v2h-1v1h-1v2h-1v2h-1v2h-1v4h-1v6h1v4h1v3h1v2h1v1h1v2h1v1h1v1h1v1h1v1h1v1h2v1h2v1h2v1h3v1h10Z"
          clip-rule="evenodd"
        />
        <path d="M31 32v-1h2v-2h2v12h2V29h2v2h2v1h2v-3h-2v-2h-2v-2h-1v-1h-1v-1h-2v1h-1v1h-1v2h-2v2h-2v3h2Z" />
      </g>
      <defs>
        <filter
          id="a"
          width="72"
          height="72"
          x="0"
          y="0"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2587_43195"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="3"
            result="effect2_dropShadow_2587_43195"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend
            in2="effect1_dropShadow_2587_43195"
            result="effect2_dropShadow_2587_43195"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_2587_43195"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
