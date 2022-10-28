import { createContext } from "react";
import { SimplePokemon } from "../../types";

type ContextProps = {
  items: SimplePokemon[];
  isLoading: boolean;
  addItem: (item: SimplePokemon) => void;
  removeItem: (id: string) => void;
  updateItem: (item: SimplePokemon) => void;
};

const ItemsContext = createContext({} as ContextProps);

export default ItemsContext;
