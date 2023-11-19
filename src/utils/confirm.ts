import { SetterOrUpdater } from 'recoil';
import Confirm from '@/component/Modal/Confirm';
import { modalComponent } from '@/types/modalComponent';

export const confirm = (
  content: string,
  openModal: (modalComponent: JSX.Element) => void,
  closeModal: () => void,
): Promise<boolean> => {
  return new Promise((resolve) => {
    openModal(
      Confirm({
        content: content,
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
