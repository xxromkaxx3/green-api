interface Props {
  onClickHandler: () => void;
}

export const SendMessageButton: React.FC<Props> = ({ onClickHandler }) => {
  return (
    <button onClick={onClickHandler} className="send-message-button">
      send
    </button>
  );
};
