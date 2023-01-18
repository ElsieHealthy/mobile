import React, {createContext, useMemo, useState} from 'react';

type ContextState = {
  name: string;
  setName: (name: string) => void;
  dateOfBirth: Date | null;
  setDateOfBirth: (date: Date | null) => void;
  typicalCycle: number;
  setTypicalCycle: (noOfDates: number) => void;
  periodLength: number;
  setPeriodLength: (length: number) => void;
  lastPeriodDate: Date | null;
  setLastPeriodDate: (date: Date | null) => void;
};

export const OnboardingContext = createContext<ContextState>({
  name: '',
  setName: () => {},
  dateOfBirth: null,
  setDateOfBirth: () => {},
  typicalCycle: 0,
  setTypicalCycle: () => {},
  periodLength: 0,
  setPeriodLength: () => {},
  lastPeriodDate: null,
  setLastPeriodDate: () => {},
});

export const OnboardingProvider = ({...rest}) => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [typicalCycle, setTypicalCycle] = useState<number>(0);
  const [periodLength, setPeriodLength] = useState<number>(0);
  const [lastPeriodDate, setLastPeriodDate] = useState<Date | null>(null);

  const values = useMemo(
    () => ({
      name,
      setName,
      dateOfBirth,
      setDateOfBirth,
      typicalCycle,
      setTypicalCycle,
      periodLength,
      setPeriodLength,
      lastPeriodDate,
      setLastPeriodDate,
    }),
    [
      name,
      setName,
      dateOfBirth,
      setDateOfBirth,
      typicalCycle,
      setTypicalCycle,
      periodLength,
      setPeriodLength,
      lastPeriodDate,
      setLastPeriodDate,
    ],
  );
  return <OnboardingContext.Provider value={values} {...rest} />;
};

export const useOnboarding = () => {
  const context = React.useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
