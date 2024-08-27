import { useState, useEffect } from 'react';
import Calculator from './components/Calculator';

type ThemeMode = 'light' | 'dark';

const App = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  useEffect(() => {
    const themeMode: ThemeMode = localStorage.getItem('themeMode') as ThemeMode || 'light';
    changeThemeMode(themeMode);
  }, [themeMode]);

  const changeThemeMode = (themeMode: ThemeMode) => {
    setThemeMode(themeMode);
    localStorage.setItem('themeMode', themeMode);
    const html = document.querySelector('html');
    if (html) {
      html.classList.remove('light', 'dark');
      html.classList.add(themeMode);
    }
  };

  return (
    <div className="App">
      <Calculator
        themeMode={themeMode}
        changeThemeMode={changeThemeMode}
      />
    </div>
  );
}

export default App;
