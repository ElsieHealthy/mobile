import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {DoctorsService} from '../services/DoctorsService';

type ContextState = {
  doctors: Doctor[];
  loading: boolean;
  error: Error | null;
  getById: (id: Doctor['id']) => Doctor | null;
};

const DoctorContext = createContext<ContextState>({
  doctors: [],
  loading: false,
  error: null,
  getById: () => null,
});

export const DoctorsProvider = ({...rest}) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsub = DoctorsService.subscribe((_error, _doctors) => {
      setDoctors(_doctors);
      setError(_error);
      setLoading(false);
    });
    return unsub;
  }, []);

  const getById = useCallback(
    (id: Doctor['id']) => {
      const article = doctors.find(a => a.id === id);
      return article || null;
    },
    [doctors],
  );

  const value = useMemo(
    () => ({doctors, loading, error, getById}),
    [doctors, loading, error, getById],
  );

  return <DoctorContext.Provider value={value} {...rest} />;
};

export const useDoctors = () => {
  const context = React.useContext(DoctorContext);
  if (context === undefined) {
    throw new Error('useDoctors must be used within an DoctorsProvider');
  }
  return context;
};
