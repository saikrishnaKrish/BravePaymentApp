import React, { createContext, useState, ReactNode } from 'react';

type AnalyticsData = {
  category: string;
  amount: number;
};

type AnalyticsContextType = {
  analyticsData: AnalyticsData[];
  setAnalyticsData: (data: AnalyticsData[]) => void;
};

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider = ({ children }: { children: ReactNode }) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);

  return (
    <AnalyticsContext.Provider value={{ analyticsData, setAnalyticsData }}>
      {children}
    </AnalyticsContext.Provider>
  );
};
