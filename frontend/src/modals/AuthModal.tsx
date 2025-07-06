import CustomModal from './CustomModal';
import Login from '../components/Login';

interface AuthModalProps {
  isOpen: boolean;
  contentLabel?: string;
  onCloseButtonClick: () => void;
  onRequestClose: () => void;
  onSuccess: () => void;
}

const AuthModal = ({ isOpen, contentLabel, onCloseButtonClick, onRequestClose, onSuccess }: AuthModalProps) => {
  return (
    <CustomModal
      isOpen={isOpen}
      contentLabel={contentLabel || "Login"}
      onCloseButtonClick={onCloseButtonClick}
      onRequestClose={onRequestClose}
    >
      <Login onSuccess={onSuccess} />
    </CustomModal >
  );
};

export default AuthModal;