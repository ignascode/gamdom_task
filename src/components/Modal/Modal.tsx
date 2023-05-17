import React from 'react';
import { ModalProps } from './Modal.types';
import * as S from './Modal.styled';

const Modal: React.FC<ModalProps> = (p) => {
	const handleClose = () => {
		p.onClose();
	};

	return (
		<>
			{p.isOpen && (
				<S.ModalOverlay onClick={handleClose}>
					<S.ModalContent
						onClick={(e) => e.stopPropagation()}
					>
						{p.loading
							? p.loadingComponent
							: p.children}
					</S.ModalContent>
				</S.ModalOverlay>
			)}
		</>
	);
};

export default Modal;
