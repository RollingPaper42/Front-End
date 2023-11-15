import Confirm from '@/component/Modal/Confirm';
import { modalComponent } from '@/types/modalComponent';
import { SetterOrUpdater } from 'recoil';

export const confirm = (
  content: string,
  setModal: SetterOrUpdater<modalComponent | null>,
): Promise<boolean> => {
  return new Promise((resolve) => {
    setModal({
      modalComponent: Confirm({
        content: content,
        yes: () => {
          setModal(null);
          resolve(true);
        },
        no: () => {
          setModal(null);
          resolve(false);
        },
      }),
    });
  });
};
