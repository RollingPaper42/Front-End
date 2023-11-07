'use client';

import Modal from '@/component/Modal';
import { useState } from 'react';

export default function Test() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setModal((prev) => !prev);
        }}
      >
        this is button
      </button>
      {modal && <Modal> modal here</Modal>}
      hi this test component
    </div>
  );
}
