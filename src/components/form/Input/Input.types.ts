export interface IInputProps {
  inputId: string;
  type: 'text' | 'password';
  labelText: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
