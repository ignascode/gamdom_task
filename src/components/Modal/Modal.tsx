import React from 'react';
import { ModalProps } from './Modal.types';
import * as S from './Modal.styled';
import CardLoading from 'components/CardLoading/CardLoading';

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
	loading,
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
						{loading ? <CardLoading /> : children}
					</S.ModalContent>
				</S.ModalOverlay>
			)}
		</>
	);
};

export default Modal;
