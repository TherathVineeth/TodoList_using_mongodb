function Input(prop){
    return(
        <div onClick={() => prop.deletes(prop.id)}>
            <li>{prop.Text}</li>
        </div>
    )
}
export default Input;