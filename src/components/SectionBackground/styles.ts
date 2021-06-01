import styled, { css, DefaultTheme } from 'styled-components';

const containerBackgroundActivate = (theme: DefaultTheme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

type Backgrond = {
  background: boolean;
};

export const Container = styled.div<Backgrond>`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
