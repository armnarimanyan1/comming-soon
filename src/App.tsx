import React from 'react';
import useLocalStorage from 'use-local-storage';
import { Layout } from 'antd';
import GlobalStyle from './styles/global';
import Navbar from './components/organisms/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';
import HomePage from './components/pages/homepage';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Layout className="App" data-theme={theme}>
      <GlobalStyle />
      <ThemeContext.Provider value={theme}>
        <Navbar switchTheme={switchTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeContext.Provider>
    </Layout>
  );
}

export default App;
