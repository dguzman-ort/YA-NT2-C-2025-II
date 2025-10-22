import { createContext, useState, useContext } from 'react';

const CronometroContext = createContext();

export function CronometroProvider({ children }) {
  const [isRunning, setIsRunning] = useState(false);
  const [isWorking, setIsWorking] = useState(true);

  return (
    <CronometroContext.Provider value={{ 
      isRunning, 
      setIsRunning, 
      isWorking, 
      setIsWorking 
    }}>
      {children}
    </CronometroContext.Provider>
  )

}

export const useCronometro = () => {
  const useCronometro = useContext(CronometroContext);
  if (!useCronometro) {
    throw new Error('useCronometro must be used within a CronometroProvider');
  }
  return useCronometro;
}