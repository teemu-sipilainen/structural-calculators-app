import { useState } from 'react';
import Modal from 'react-modal';

interface AuthModalProps {
  isOpen: boolean;
  onAfterOpen: () => void;
  onRequestClose: () => void;
}

const AuthModal = (isOpen, onAfterOpen, onRequestClose): AuthModalProps => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>

    </div>
  );
};

export default AuthModal;