export interface DropdownProps {
	onSelect: (e: string) => void;
	options: string[];
	selected?: string;
}
