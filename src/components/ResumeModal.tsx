import { useEffect } from "react";
import { createPortal } from "react-dom";
import { MdClose, MdDownload } from "react-icons/md";
import "./styles/ResumeModal.css";

import { smoother } from "./Navbar";

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      if (smoother) smoother.paused(true);
    } else {
      if (smoother) smoother.paused(false);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (smoother) smoother.paused(false);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="resume-overlay" onClick={onClose}>
      <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <span className="resume-modal-title">Resume</span>
          <div className="resume-modal-actions">
            <a
              href="/my-portfolio/resume.pdf"
              download="Vishmit_Agrawal_Resume.pdf"
              className="resume-download-btn"
              data-cursor="disable"
            >
              <MdDownload />
              Download
            </a>
            <button
              className="resume-close-btn"
              onClick={onClose}
              data-cursor="disable"
            >
              <MdClose />
            </button>
          </div>
        </div>
        <div className="resume-modal-body">
          <iframe
            src="/my-portfolio/resume.pdf"
            title="Resume"
            className="resume-iframe"
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ResumeModal;
