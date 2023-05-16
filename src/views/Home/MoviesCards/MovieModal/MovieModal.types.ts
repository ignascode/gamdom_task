export interface MovieModalProps {
	isOpen: boolean;
	onClose: () => void;
	imdbId: string | undefined;
}
