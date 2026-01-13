"use client";

import { useState } from "react";
import NoticeForm from "../../../../components/NoticeForm";
import Modal from "../../../../components/Modal";

export default function CreateNoticePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-gray-50">
      <NoticeForm />

      {showModal && (
        <Modal
          message="Notice Published Successfully"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
