import {
    type Dispatch,
    type ReactNode,
    type SetStateAction,
    createContext,
    useState,
  } from "react";
  
  type ComponentProps = {
    children: ReactNode;
  };
  
  type Context = {
    setState: Dispatch<SetStateAction<number>>;
    state: number;
  };
  
  const context = createContext<Context | null>(null);
  
  const ContextProvider = ({ children }: ComponentProps) => {
    const [state, setState] = useState(1);
  
    return (
      <context.Provider value={{ state, setState }}>{children}</context.Provider>
    );
  };