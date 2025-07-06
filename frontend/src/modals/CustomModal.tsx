import { type ReactNode } from 'react';
import Modal from 'react-modal';

interface CustomModalProps {
  isOpen: boolean;
  contentLabel?: string;
  shouldCloseOnCloseButton?: boolean;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  children?: ReactNode;
  className?: string;
  overlayClassName?: string;
  onCloseButtonClick?: () => void;
  onRequestClose?: () => void;
}

const CustomModal = ({
  isOpen,
  contentLabel = 'Structural Calculators App',
  shouldCloseOnCloseButton = true,
  shouldCloseOnEsc = true,
  shouldCloseOnOverlayClick = true,
  children,
  className,
  overlayClassName,
  onCloseButtonClick,
  onRequestClose,
}: CustomModalProps) => {
  const defaultClassName = 'modal-content';
  const defaultOverlayClassName = 'modal-overlay';

  return (
    <Modal
      isOpen={isOpen}
      contentLabel={contentLabel}
      shouldCloseOnEsc={shouldCloseOnEsc}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      className={`${defaultClassName} ${className}`}
      overlayClassName={`${defaultOverlayClassName} ${overlayClassName}`}
      onRequestClose={onRequestClose}
    >
      <div className="space-y-4">
        {children}
        {shouldCloseOnCloseButton && (
          <button
            type="button"
            className="w-full"
            onClick={onCloseButtonClick}
          >
            Close
          </button>
        )}
      </div>
    </Modal >
  );
};

export default CustomModal;