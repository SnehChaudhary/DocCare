import ContextAPI  from "./ContextAPI";

const ContextProps = (props) => {

    console.log(props);

    const name = {
        id: "Khanjan"
    };

    // const get = () => {
    //     console.log("hei");
    // }

    return (
        <ContextAPI.Provider value={{name}} >
        {props.children}
        </ContextAPI.Provider>
    )
}

export default ContextProps;