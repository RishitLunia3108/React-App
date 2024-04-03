import React, { createContext, useContext, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const ThemeContext = createContext(null);

const lightTheme = {
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
};

const darkTheme = {
  backgroundColor: '#1a1a1a',
  textColor: '#FFFFFF',
};

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
`;

const Container = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  padding: 20px;
`;

export default function MyApp() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={theme}>
        <Container>
          <Form />
          <ToggleButton onClick={toggleTheme}>
            {theme === 'light' ? 'Switch to Khushal Mode' : 'Switch to Light Mode'}
          </ToggleButton>
        </Container>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

const Button = styled.button`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  margin-right: 10px;
`;