export interface IInputProps {
  inputId: string;
  type: 'text' | 'password' | 'tel';
  labelText: string;
  value: string;
  pattern?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
