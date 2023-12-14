export const focusToHighlight = (
  ref: React.MutableRefObject<HTMLHeadingElement | null>,
) => {
  if (!ref.current) return;
  ref.current.focus();
  const windowHeight = window.innerHeight;
  const targetDivHeight = ref.current.clientHeight;
  const offset = windowHeight * 0.4 - targetDivHeight / 2;

  window.scrollTo({
    top: ref.current.offsetTop - offset,
    behavior: 'smooth',
  });
};
