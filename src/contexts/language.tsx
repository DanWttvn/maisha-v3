import React, { FC, PropsWithChildren, useState } from 'react';
import { Language } from 'models';

interface State {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = React.createContext<State>({
  lang: 'ES',
  setLang: () => undefined,
});

export const LanguageContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [lang, setLang] = useState<Language>('ES');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
