import { ChangeEvent } from "react"
import { User } from "../../../App"

interface Props {
    value:User,
    onChangeHandler:(value:ChangeEvent<HTMLInputElement>)=>void
}

export const ApiTokenInstanceInput: React.FC<Props> = (({value, onChangeHandler})=>{
    return <input placeholder="ApiTokenInstance" className="api-token-instance-input" type="text" onChange={onChangeHandler} value={value.apiTokenInstance}/>
})