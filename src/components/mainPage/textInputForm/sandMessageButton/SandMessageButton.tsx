
interface Props{
    onClickHandler: ()=>void
}

export const SandMessageButton:React.FC<Props> = ({onClickHandler})=> {
    return <button onClick={onClickHandler} className="sand-message-button">sand</button>
}