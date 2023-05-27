import { SandFormButton } from './sandFormButton'
import { IdInstanceInput } from './idInstanceInput'
import { ApiTokenInstanceInput } from './apiTokenInstanceInput'
import { ChangeEvent } from 'react'
import { User } from '../../App'

interface Props {
    onAuthorizedChange: ()=>void,
    onUserChangeHandler: (event:ChangeEvent<HTMLInputElement>)=>void,
    value: User
}

export const RegistrationForm: React.FC<Props> = ({onAuthorizedChange, onUserChangeHandler, value})=>{
    return <div style={{display:"grid"} }>
    <IdInstanceInput value={value} onChangeHandler={onUserChangeHandler}/>
    <ApiTokenInstanceInput value={value} onChangeHandler={onUserChangeHandler}/>
    <SandFormButton onAuthorizedChange={onAuthorizedChange}/>
    </div>
}