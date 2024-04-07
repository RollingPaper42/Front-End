export default function PhotoPreviewIcon({ color }: { color: string }) {
  return (
    <svg
      width="44"
      height="50"
      viewBox="0 0 44 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_4414_20027" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.6 0C4.74578 0 0 4.74578 0 10.6V33.4C0 37.8007 2.68167 41.575 6.5 43.178L6.5 50L18.5 44H33.4C39.2542 44 44 39.2542 44 33.4V10.6C44 4.74578 39.2542 0 33.4 0H10.6Z"
        />
      </mask>
      <path
        d="M6.5 43.178L7.97222 43.178L7.97222 42.1993L7.06987 41.8205L6.5 43.178ZM6.5 50L5.02778 50L5.02778 52.3821L7.1584 51.3168L6.5 50ZM18.5 44V42.5278H18.1525L17.8416 42.6832L18.5 44ZM1.47222 10.6C1.47222 5.55887 5.55887 1.47222 10.6 1.47222V-1.47222C3.9327 -1.47222 -1.47222 3.93269 -1.47222 10.6H1.47222ZM1.47222 33.4V10.6H-1.47222V33.4H1.47222ZM7.06987 41.8205C3.77897 40.4389 1.47222 37.1871 1.47222 33.4H-1.47222C-1.47222 38.4142 1.58436 42.711 5.93013 44.5354L7.06987 41.8205ZM7.97222 50L7.97222 43.178L5.02778 43.178L5.02778 50L7.97222 50ZM17.8416 42.6832L5.8416 48.6832L7.1584 51.3168L19.1584 45.3168L17.8416 42.6832ZM33.4 42.5278H18.5V45.4722H33.4V42.5278ZM42.5278 33.4C42.5278 38.4411 38.4411 42.5278 33.4 42.5278V45.4722C40.0673 45.4722 45.4722 40.0673 45.4722 33.4H42.5278ZM42.5278 10.6V33.4H45.4722V10.6H42.5278ZM33.4 1.47222C38.4411 1.47222 42.5278 5.55887 42.5278 10.6H45.4722C45.4722 3.9327 40.0673 -1.47222 33.4 -1.47222V1.47222ZM10.6 1.47222H33.4V-1.47222H10.6V1.47222Z"
        fill={getColor(color)}
        mask="url(#path-1-inside-1_4414_20027)"
      />
    </svg>
  );
}

const getColor = (color: string) => {
  if (color === 'bg-strcat-sul') return '#82CBFF';
  if (color === 'bg-strcat-night') return '#FDFFB0';
  if (color === 'bg-strcat-peach') return '#FFC8B0';
  if (color === 'bg-strcat-lilac') return '#D7C4FF';
  if (color === 'bg-strcat-chris') return '#246F50';
  if (color === 'bg-strcat-mas') return '#DE6565';
  if (color === 'bg-strcat-spring') return '#FFBACF';
};
