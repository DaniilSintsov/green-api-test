export interface IModalProps {
  children: React.ReactNode;
  show: boolean;
  closable?: boolean;
  setIsModalOpen?: (isOpen: boolean) => void;
}
