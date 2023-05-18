export interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	loading?: boolean;
	loadingComponent: React.ReactNode;
}
