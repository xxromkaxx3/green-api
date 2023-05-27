import { SandMessageButton } from "./sandMessageButton"
import { TextInput } from "./textInput"
import { ChangeEvent } from 'react'


interface Props {
    value: string,
    onChangeHandler: (value:ChangeEvent<HTMLInputElement>)=>void
    onSandMessageHandler: ()=>void
}

export const TextInputForm: React.FC<Props> = ({value, onChangeHandler, onSandMessageHandler})=> {
    return <div className="text-input-form">
        <TextInput onChangeHandler={onChangeHandler} value={value} />
        <SandMessageButton onClickHandler={onSandMessageHandler}/>
    </div>
}