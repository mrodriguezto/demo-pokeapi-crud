import { useState } from "react";
import ItemsContext from "./ItemsContext";
import { SimplePokemon } from "../../types";

const ItemsProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<SimplePokemon[]>([]);

  return (
    <ItemsContext.Provider value={{ items }}>{children}</ItemsContext.Provider>
  );
};

export default ItemsProvider;
