import { User } from "../../App"
import { ChatWindow } from "./chatWindow"
import { TextInputForm } from "./textInputForm"
import { ChangeEvent, useState, useEffect } from 'react'

interface Props {
    user: User
    destinationId: string
}

export interface ChatMessageItem {
    message: string,
    isMine: boolean,
    id: string
}

interface ResponseType {
    receiptId:string
    body:{
        idMessage: string,
        senderData:{
            chatId: string
        }
        messageData:{
            textMessageData:{
                textMessage:string
            }
        }
    }
    
    
}

export const MainPage: React.FC<Props> = ({user, destinationId})=> {
    
    const [textInputValue, setTextInputValue] = useState('')
    const [chatMessageList, setChatMessageList] = useState<ChatMessageItem[]>([])

    function onChangeHandler (event:ChangeEvent<HTMLInputElement>){
        setTextInputValue(event.target.value)
    }

    
    async function fetchMessage() {
        try {
            const response =  await fetch(`https://api.green-api.com/waInstance${user.idInstance}/receiveNotification/${user.apiTokenInstance}`)
            const result:ResponseType = await response.json()
            
            if (result && result.body.senderData.chatId === `7${destinationId}@c.us`){
                const textMessage = result.body.messageData.textMessageData.textMessage
                const newMessage = {
                    message: textMessage,
                    isMine: false,
                    id: result.body.idMessage
                }
                setChatMessageList(prev => [...prev, newMessage])
                await fetch(`https://api.green-api.com/waInstance${user.idInstance}/deleteNotification/${user.apiTokenInstance}/${result.receiptId}`,{
                    method: "DELETE"
                })
            }
            await fetchMessage()
        } catch (e){
            console.log(e)
        } 
    }


    useEffect(()=>{fetchMessage()},[])

    async function onSandMessageHandler (){
        try{
            if (!textInputValue) return
            const response = await fetch(`https://api.green-api.com/waInstance${user.idInstance}/sendMessage/${user.apiTokenInstance}`,{
                method:'POST',
                body: JSON.stringify({
                    chatId: `7${destinationId}@c.us`,
                    message: textInputValue
                })
            })
            const result:{idMessage:string} = await response.json()
            if (result) {
                const newMessage = {
                    message: textInputValue,
                    isMine: true,
                    id: result.idMessage
                }
                setChatMessageList([...chatMessageList, newMessage])
                setTextInputValue('')
            }
        } catch(e){
            console.log(e)
        }
        
    }

    return <div className="main-page">
        <ChatWindow chatMessageList={chatMessageList}/>
        <TextInputForm onSandMessageHandler={onSandMessageHandler} onChangeHandler={onChangeHandler} value={textInputValue}/>
    </div>
}