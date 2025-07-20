import { Global, css } from '@emotion/react';
import React from 'react';

interface GlobalStylesProps {
  children: React.ReactNode;
}

export const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
  return (
    <>
      <Global
        styles={(theme) => css`
          body {
            margin: 0;
            background: ${theme.colors.background};
            color: ${theme.colors.text};
            font-family: sans-serif;
            transition: background 0.2s ease;
          }
        `}
      />
      <div
        css={css`
          min-height: 100vh;
        `}
      >
        {children}
      </div>
    </>
  );
};
