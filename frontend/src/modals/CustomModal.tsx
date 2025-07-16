import { useEffect, type ReactNode } from 'react';
import Modal from 'react-modal';

interface CustomModalProps {
  isOpen: boolean;
  canClose?: boolean;
  contentLabel?: string;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  children?: ReactNode;
  className?: string;
  overlayClassName?: string;

  showTopRightCloseButton?: boolean;
  onTopRightCloseButtonClick?: () => void;

  showBottomCloseButton?: boolean;
  bottomCloseButtonText?: string;
  onBottomCloseButtonClick?: () => void;

  onRequestClose?: () => void;
}

const CustomModal = ({
  isOpen,
  canClose = true,
  contentLabel = 'Structural Calculators App',
  shouldCloseOnEsc = true,
  shouldCloseOnOverlayClick = true,
  children,
  className,
  overlayClassName,

  showTopRightCloseButton = false,
  onTopRightCloseButtonClick,

  showBottomCloseButton = false,
  bottomCloseButtonText = "Close",
  onBottomCloseButtonClick,

  onRequestClose,
}: CustomModalProps) => {

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  const defaultClassName = 'modal-content';
  const defaultOverlayClassName = 'modal-overlay';

  const handleRequestClose = () => {
    if (canClose && onRequestClose) {
      onRequestClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel={contentLabel}
      shouldCloseOnEsc={canClose && shouldCloseOnEsc}
      shouldCloseOnOverlayClick={canClose && shouldCloseOnOverlayClick}
      ariaHideApp={false}
      className={`${defaultClassName} ${className}`}
      overlayClassName={`${defaultOverlayClassName} ${overlayClassName}`}
      onRequestClose={handleRequestClose}
    >
      <div>
        {canClose && showTopRightCloseButton && onTopRightCloseButtonClick && (
          <button
            type="button"
            onClick={onTopRightCloseButtonClick}
            aria-label="Close modal"
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
          >
            &times;
          </button>
        )}
        {children}
        {canClose && showBottomCloseButton && onBottomCloseButtonClick && (
          <button
            type="button"
            className="btn-green w-full my-4"
            onClick={onBottomCloseButtonClick}
          >
            {bottomCloseButtonText}
          </button>
        )}
      </div>
    </Modal >
  );
};

export default CustomModal;