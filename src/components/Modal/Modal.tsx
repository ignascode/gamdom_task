import React from 'react';
import { ModalProps } from './Modal.types';
import * as S from './Modal.styled';

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
	loading,
	loadingComponent,
}) => {
	const handleClose = () => {
		onClose();
	};

	return (
		<>
			{isOpen && (
				<S.ModalOverlay onClick={handleClose}>
					<S.ModalContent
						onClick={(e) => e.stopPropagation()}
					>
						{loading ? loadingComponent : children}
					</S.ModalContent>
				</S.ModalOverlay>
			)}
		</>
	);
};

export default Modal;
