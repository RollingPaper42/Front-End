import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import React from 'react';

import PhotoModal from './Modal/PhotoModal';
import PhotoPreview from './PhotoPreview';
import { bodyFontState } from '@/recoil/font/body';
import { captionFontState } from '@/recoil/font/caption';
import { themeState } from '@/recoil/theme';
import { content } from '@/types/content';
import { observeContent } from '@/types/observe';
import { focusToHighlight } from '@/utils/focusToHighlight';
import { defaultState } from '@/utils/theme/default';

interface props {
  content: content;
  observe: observeContent;
  theme: themeState;
  addContent: number;
  setAddContent: Dispatch<SetStateAction<number>>;
  setObserve: Dispatch<SetStateAction<observeContent>>;
  openModal: (modalComponent: JSX.Element) => void;
  closeModal: () => void;
}

const ObserveContent = ({
  content,
  observe,
  setObserve,
  theme,
  addContent,
  setAddContent,
  openModal,
  closeModal,
}: props) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const handleClickPhoto = () => {
    openModal(
      <PhotoModal
        photoUrl={content.photoUrl}
        closeModal={closeModal}
        text={content.text}
        writer={content.writer}
        theme={theme}
      />,
    );
  };

  useEffect(() => {
    if (addContent === content.id) {
      focusToHighlight(ref);
      setAddContent(0);
    }
  }, [addContent]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) {
            setObserve(() => ({
              contentId: content.id,
              photoUrl: content.photoUrl,
              writer: content.writer,
            }));
          }
        });
      },
      {
        rootMargin: '-40% 0% -60% 0%',
        threshold: [0],
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      {observe.contentId === content.id && observe.photoUrl !== '' && (
        <PhotoPreview
          photoUrl={content.photoUrl}
          color={theme.bgTheme.highlight}
          handleClickPhoto={handleClickPhoto}
        />
      )}
      <div
        className={`inline cursor-pointer select-none pb-[4px] pt-[3px] ${
          bodyFontState.boardBody
        } leading-[31px] tracking-[-0.36px]
      ${
        observe.contentId === content.id
          ? `${theme.bgTheme.highlight} ${theme.textTheme.highlight} animate-textFadeIn`
          : `${defaultState.descriptionText} opacity-[0.15]`
      }
    `}
        onClick={() => focusToHighlight(ref)}
      >
        {content.text}
      </div>
      {observe.contentId === content.id && (
        <div
          className={`cursor-default select-none text-right transition-all ${theme.textTheme.writer} ${captionFontState.writer}`}
        >{`From: ${
          observe.writer.length ? observe.writer : '익명의 스트링캣'
        } `}</div>
      )}
    </div>
  );
};

export default React.memo(ObserveContent);
