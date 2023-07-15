import { createContext,useEffect,useState} from "react";

export  const Context = createContext();

const AppContext = ({children}) => {
     
    const [select,setSelect] = useState([])
    
     const handleSelect = (proposal) =>{
        localStorage.setItem('selectedproposal', proposal);
        setSelect(proposal);
             
     }
    
    return (
        <Context.Provider value={{handleSelect,select}}>
            {children}
        </Context.Provider>);
}

export default AppContext;
