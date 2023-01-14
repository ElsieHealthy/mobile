import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {ArticlesService} from '../services/ArticlesService';

type ContextState = {
  articles: Article[];
  loading: boolean;
  error: Error | null;
  getById: (id: Article['id']) => Article | null;
};

const ArticlesContext = createContext<ContextState>({
  articles: [],
  loading: false,
  error: null,
  getById: () => null,
});

export const ArticlesProvider = ({...rest}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsub = ArticlesService.subscribe((_error, _articles) => {
      setArticles(_articles);
      setError(_error);
      setLoading(false);
    });
    return unsub;
  }, []);

  const getById = useCallback(
    (id: Article['id']) => {
      const article = articles.find(a => a.id === id);
      return article || null;
    },
    [articles],
  );

  const value = useMemo(
    () => ({articles, loading, error, getById}),
    [articles, loading, error, getById],
  );

  return <ArticlesContext.Provider value={value} {...rest} />;
};

export const useArticles = () => {
  const context = React.useContext(ArticlesContext);
  if (context === undefined) {
    throw new Error('useArticles must be used within an ArticlesProvider');
  }
  return context;
};
