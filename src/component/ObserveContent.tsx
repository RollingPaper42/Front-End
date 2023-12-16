import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import React from 'react';

import PhotoModal from './Modal/PhotoModal';
import PhotoPreview from '@/app/personal/[id]/PhotoPreview';
import { defaultState } from '@/recoil/newtheme/default';
import { themeState } from '@/recoil/newtheme/theme';
import { content } from '@/types/content';
import { observeContent } from '@/types/observe';
import { focusToHighlight } from '@/utils/focusToHighlight';

interface props {
  content: content;
  observe: observeContent;
  theme: themeState;
  setObserve: Dispatch<SetStateAction<observeContent>>;
  openModal: (modalComponent: JSX.Element) => void;
  closeModal: () => void;
}

const ObserveContent = ({
  content,
  observe,
  setObserve,
  theme,
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
      />,
    );
  };

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
          handleClickPhoto={handleClickPhoto}
        />
      )}
      <div
        className={`inline pt-[3px] pb-[4px] leading-[31px] text-body-size1 tracking-[-0.36px] font-medium
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
          className={`text-right transition-all ${theme.textTheme.writer} text-body-size2`}
        >{`From: ${
          observe.writer.length ? observe.writer : '익명의 스트링캣'
        } `}</div>
      )}
    </div>
  );
};

export default React.memo(ObserveContent);
