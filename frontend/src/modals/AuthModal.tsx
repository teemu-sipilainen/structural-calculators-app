import { useState } from 'react';
import CustomModal from './CustomModal';
import Login from '../components/Login';
import Register from '../components/Register';

interface AuthModalProps {
  isOpen: boolean;
  authModalType: string;
  contentLabel?: string;
  onCloseButtonClick: () => void;
  onRequestClose: () => void;
  onSuccess: () => void;
}

const AuthModal = ({ isOpen, authModalType = "login", contentLabel, onCloseButtonClick, onRequestClose, onSuccess }: AuthModalProps) => {
  const [hasInput, setHasInput] = useState(false);

  return (
    <CustomModal
      isOpen={isOpen}
      canClose={!hasInput}
      contentLabel={contentLabel || "Login"}
      showTopRightCloseButton={true}
      showBottomCloseButton={true}
      onTopRightCloseButtonClick={onCloseButtonClick}
      onBottomCloseButtonClick={onCloseButtonClick}
      onRequestClose={onRequestClose}
    >
      {authModalType === 'login' ? (
        <Login onSuccess={onSuccess} onFormChange={setHasInput} />
      ) : (
        <Register />
      )}
    </CustomModal >
  );
};

export default AuthModal;