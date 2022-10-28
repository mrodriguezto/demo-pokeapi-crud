import { createContext } from "react";
import { SimplePokemon } from "../../types";

type ContextProps = {
  items: SimplePokemon[];
};

const ItemsContext = createContext({} as ContextProps);

export default ItemsContext;
