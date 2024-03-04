interface Props {
  Logo: React.FC;
  DrawerClose: React.FC;
  handleHome: () => void;
  drawerSlowClose: () => void;
}

export const DrawerHeader = ({
  Logo,
  DrawerClose,
  handleHome,
  drawerSlowClose,
}: Props) => {
  return (
    <div className="flex h-[70px] w-full px-[24px] py-[22px]">
      <div onClick={handleHome}>
        <Logo />
      </div>
      <div className="absolute right-[24px]">
        <div
          className="flex h-[24px] w-[24px] items-center justify-center"
          onClick={drawerSlowClose}
        >
          <DrawerClose />
        </div>
      </div>
    </div>
  );
};
