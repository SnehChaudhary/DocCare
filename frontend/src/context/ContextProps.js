import ContextAPI  from "./ContextAPI";

const ContextProps = (props) => {

    // const 

    return (
        <ContextAPI.Provider value={0} >
        {props.children}
        </ContextAPI.Provider>
    )
}

export default ContextProps;