interface Props {
  onClickHandler: () => void;
}

export const AddDestinationButton: React.FC<Props> = ({ onClickHandler }) => {
  return <button onClick={onClickHandler}>save</button>;
};
