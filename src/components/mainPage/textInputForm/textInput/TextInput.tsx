import { ChangeEvent } from 'react'


interface Props {
    value: string,
    onChangeHandler: (event:ChangeEvent<HTMLInputElement>)=>void
}

export const TextInput: React.FC<Props> = ({value, onChangeHandler})=> {
    return <input type="text" onChange={onChangeHandler} value={value} className="text-input"/>
}