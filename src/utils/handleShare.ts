const handleCopyClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);

    alert('strcat주소가 복사되었습니다! 친구에게 공유해보세요');
  } catch (error) {
    alert('복사 실패하였습니다');
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
      alert('공유 실패하였습니다');
    }
  } else {
    handleCopyClipBoard(url);
  }
};
