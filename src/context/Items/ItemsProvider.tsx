import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ItemsContext from "./ItemsContext";
import { SimplePokemon } from "../../types";

const ItemsProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<SimplePokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      try {
        const prevItems = (await AsyncStorage.getItem("@created")) || "[]";

        setItems([...JSON.parse(prevItems)]);
      } catch (e) {
        console.log("An error occurred while saving to storage");
      }
    };

    initialize();
  }, []);

  useEffect(() => {
    const updateStorage = async () => {
      setIsLoading(true);
      try {
        await AsyncStorage.setItem("@created", JSON.stringify(items));
      } catch (e) {
        console.log("An error occurred while saving to storage");
      } finally {
        setIsLoading(false);
      }
    };

    updateStorage();
  }, [items]);

  const addItem = async (item: SimplePokemon) => {
    try {
      const prevItems = (await AsyncStorage.getItem("@created")) || "[]";

      setItems([...JSON.parse(prevItems), item]);
    } catch (e) {
      console.log("An error occurred while saving to storage");
    }
  };

  const removeItem = async (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (item: SimplePokemon) => {
    setItems((listItems) =>
      listItems.map((listItem) => {
        if (listItem.id === item.id) return item;
        else return listItem;
      })
    );
  };

  return (
    <ItemsContext.Provider
      value={{ items, isLoading, addItem, removeItem, updateItem }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
