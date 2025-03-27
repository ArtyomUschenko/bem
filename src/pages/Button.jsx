const Button = (props) => {
    console.log("props: ", props)
    return (
        <>

        <button>{ props.label}</button>
            <button>{ props.children }</button>
        </>
    )
}

export default Button