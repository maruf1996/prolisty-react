import React from "react";

const ImageModal = ({ imgSrc, onClose }) => {
  if (!imgSrc) return null;

  return (
    <div
      className="image-modal-backdrop"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        className="image-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative" }}
      >
        <img
          src={imgSrc}
          alt="popup"
          style={{ maxHeight: "80vh", maxWidth: "90vw", borderRadius: "4px" }}
        />
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            background: "#fff",
            borderRadius: "50%",
            border: "none",
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
