interface Props {
  onAuthorizedChange: () => void;
}

export const SendFormButton: React.FC<Props> = ({ onAuthorizedChange }) => {
  return <button onClick={onAuthorizedChange}>save</button>;
};
