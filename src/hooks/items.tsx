import React, {
  createContext,
  useCallback,
  useState,
  useContext,
} from 'react';

import { IItemsData } from '../components/SearchItem';

interface ItemsContextData {
  items: IItemsData[];
  paginatedItems: IItemsData[];
  page: number;
  toPage(page: number):void;
  setNewItems(items: IItemsData[]): void
  offset: number
}
const ItemsContext = createContext<ItemsContextData>({} as ItemsContextData);

const ItemsProvider: React.FC = ({ children }) => {
  const offset = 12;
  const [items, setItems] = useState<IItemsData[]>([] as IItemsData[]);
  const [paginatedItems, setPaginatedItems] = useState<IItemsData[]>([] as IItemsData[]);
  const [page, setPage] = useState(1);

  const toPage = useCallback((newPage: number) => {
    setPage(newPage);

    const newPaginatedItems = items.slice((newPage - 1) * offset, offset * newPage);

    setPaginatedItems(newPaginatedItems);
  }, [items]);

  const setNewItems = useCallback(async (newItems: IItemsData[]) => {
    const newPaginatedItems = newItems.slice(0, offset * page);
    setPaginatedItems(newPaginatedItems);

    setItems(() => newItems);
  }, [page]);
  return (
    <ItemsContext.Provider value={{
      items, setNewItems, page, toPage, paginatedItems, offset,
    }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

function useItems(): ItemsContextData {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { ItemsProvider, useItems };
