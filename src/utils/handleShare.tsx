import Error from '@/component/Modal/Error';
import ExportSuccess from '@/component/Modal/ExportSuccess';

const handleCopyClipBoard = async (
  text: string,
  openModal: (modalComponent: JSX.Element) => void,
  closeModal: () => void,
) => {
  try {
    await navigator.clipboard.writeText(text);
    openModal(
      <ExportSuccess
        content="스트링캣이 복사되었습니다!"
        handleModalClose={closeModal}
      />,
    );
  } catch (error) {
    openModal(
      <Error content="복사 실패하였습니다." handleModalClose={closeModal} />,
    );
  }
};

export const handleShare = async (
  params: string,
  openModal: (modalComponent: JSX.Element) => void,
  closeModal: () => void,
) => {
  const url = `https://strcat.me${params}`;
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'strcat',
        text: '더 많은 글을 써서 strcat을 끊임없이 달아주세요!',
        url: url,
      });
    } catch (err) {
      openModal(
        <Error content="복사 실패하였습니다." handleModalClose={closeModal} />,
      );
    }
  } else {
    handleCopyClipBoard(url, openModal, closeModal);
  }
};
