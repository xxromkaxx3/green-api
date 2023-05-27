import { ChatMessageItem } from "../../MainPage"

interface Props {
    messageItem: ChatMessageItem,
}

export const MessageItem: React.FC<Props> = ({messageItem})=>{
    return <li className="message-item" style={{alignSelf: messageItem.isMine? 'end':'start' }}>{messageItem.message}</li>
}