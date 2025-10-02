import React, { useCallback } from "react";

type ImageModalProps = {
  imgSrc: string | null;
  onClose: () => void;
};

const ImageModalComponent: React.FC<ImageModalProps> = ({
  imgSrc,
  onClose,
}) => {
  const handleCloseModal = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!imgSrc) return null;

  return (
    <div className="image-modal-backdrop" onClick={handleCloseModal}>
      <div
        className="image-modal-content position-relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={imgSrc} alt="popup" className="popup-image" loading="lazy" />
        <button onClick={handleCloseModal} className="modal-close-btn">
          ✕
        </button>
      </div>
    </div>
  );
};

const ImageModal = React.memo(ImageModalComponent);

export default ImageModal;
