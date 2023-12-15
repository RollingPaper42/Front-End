import { SetterOrUpdater } from 'recoil';

export const drawerOpen = (setDrawer: SetterOrUpdater<boolean>) => {
  setDrawer(true);
  document.body.style.overflow = 'hidden';
};
