// Reviewed by T. S. on July 8, 2025

import CustomModal from './CustomModal';
import Loader from '../components/Loader';

interface LoadingModalProps {
  isOpen: boolean;
}

const LoadingModal = ({ isOpen }: LoadingModalProps) => {
  return (
    <CustomModal
      isOpen={isOpen}
      canClose={false}
      contentLabel="Loading"
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
    >
      <Loader />
    </CustomModal >
  );
};

export default LoadingModal;