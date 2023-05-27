import { ChangeEvent } from "react";
import { AddDestinationButton } from "./addDestinationButton";
import { AddDestinationInput } from "./addDestinationInput";

interface Props {
    onChangeHandler: (value: ChangeEvent<HTMLInputElement>)=>void,
    onClickHandler: ()=>void
    value: string
}

export const AddDestinationForm: React.FC<Props> = ({onChangeHandler, onClickHandler, value})=>{
    return <div style={{display:"grid"} }>
        <AddDestinationInput onChangeHandler={onChangeHandler} value={value}/>
        <AddDestinationButton onClickHandler={onClickHandler}/>
    </div>
}