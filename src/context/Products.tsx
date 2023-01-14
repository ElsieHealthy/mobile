import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {ProductsService} from '../services/ProductsService';

type ContextState = {
  products: Product[];
  loading: boolean;
  error: Error | null;
  getById: (id: Product['id']) => Product | null;
};

const ProductContext = createContext<ContextState>({
  products: [],
  loading: false,
  error: null,
  getById: () => null,
});

export const ProductsProvider = ({...rest}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsub = ProductsService.subscribe((_error, _products) => {
      setProducts(_products);
      setError(_error);
      setLoading(false);
    });
    return unsub;
  }, []);

  const getById = useCallback(
    (id: Product['id']) => {
      const article = products.find(a => a.id === id);
      return article || null;
    },
    [products],
  );

  const value = useMemo(
    () => ({products, loading, error, getById}),
    [products, loading, error, getById],
  );

  return <ProductContext.Provider value={value} {...rest} />;
};

export const useProducts = () => {
  const context = React.useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within an ProductsProvider');
  }
  return context;
};
