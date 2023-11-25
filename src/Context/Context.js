import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [textColor, setTextColor] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedTextColor = localStorage.getItem('textColor');

    setTheme(savedTheme || 'light');
    setTextColor(savedTextColor || 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const toggleTextColor = () => {
    const newTextColor = textColor === 'dark' ? 'light' : 'dark';
    localStorage.setItem('textColor', newTextColor);
    setTextColor(newTextColor);
  };

  const data = {
    textColor,
    theme,
    setTheme: toggleTheme,
    setTextColor: toggleTextColor,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;
