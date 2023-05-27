
interface Props {
    onAuthorizedChange: ()=>void,
}


export const SandFormButton: React.FC<Props> = ({onAuthorizedChange})=>{

    return <button onClick={onAuthorizedChange}>save</button>
}