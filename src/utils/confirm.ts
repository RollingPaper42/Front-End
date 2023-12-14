import { SetterOrUpdater } from 'recoil';

import Confirm from '@/component/Modal/Confirm';
import { modalComponent } from '@/types/modalComponent';

export const confirm = (
  openModal: (modalComponent: JSX.Element) => void,
  closeModal: () => void,
  mainContent: string,
  subContent?: string,
): Promise<boolean> => {
  return new Promise((resolve) => {
    openModal(
      Confirm({
        mainContent: mainContent,
        subContent: subContent,
        yes: () => {
          closeModal();
          resolve(true);
        },
        no: () => {
          closeModal();
          resolve(false);
        },
      }),
    );
  });
};
