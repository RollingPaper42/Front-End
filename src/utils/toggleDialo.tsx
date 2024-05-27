import { Dispatch, SetStateAction } from 'react';

import ToggleDialog from '@/component/ToggleDialog';

export const toggleDialog = (
  openModal: (modalComponent: JSX.Element) => void,
  closeModal: () => void,
  title: string,
  description: string,
): Promise<boolean> => {
  return new Promise((resolve) => {
    openModal(
      <ToggleDialog
        closeModal={() => {
          closeModal();
        }}
        resolve={resolve}
        title={title}
        description={description}
      />,
    );
  });
};
