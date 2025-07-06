import CustomModal from './CustomModal';
import Loader from '../components/Loader';

interface LoadingModalProps {
  isOpen: boolean;
  shouldCloseOnCloseButton?: boolean;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
}

const LoadingModal = ({ isOpen, shouldCloseOnCloseButton, shouldCloseOnEsc, shouldCloseOnOverlayClick }: LoadingModalProps) => {
  return (
    <CustomModal
      isOpen={isOpen}
      contentLabel="Loading"
      shouldCloseOnCloseButton={shouldCloseOnCloseButton}
      shouldCloseOnEsc={shouldCloseOnEsc}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    >
      <Loader />
    </CustomModal >
  );
};

export default LoadingModal;