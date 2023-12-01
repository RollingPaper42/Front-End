import Error from '@/component/Modal/Error';
import ExportSuccess from '@/component/Modal/ExportSuccess';
import useModal from '@/hooks/useModal';

const [openModal, closeModal] = useModal();
const handleCopyClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    openModal(
      <ExportSuccess
        content="스트링캣이 저장되었습니다!"
        handleModalClose={closeModal}
      />,
    );
  } catch (error) {
    openModal(
      <Error content="복사 실패하였습니다." handleModalClose={closeModal} />,
    );
  }
};

export const handleShare = async (params: string) => {
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
    handleCopyClipBoard(url);
  }
};
