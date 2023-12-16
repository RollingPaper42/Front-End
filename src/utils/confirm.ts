import Confirm from '@/component/Modal/Confirm';

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
