import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    device: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      gray50: string;
      gray100: string;
      gray200: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
      background: string;
      text: string;
      primary100: string;
      primary200: string;
      primary300: string;
    };
    typography: {
      [key: string]: {
        [key: string]: {
          fontFamily: string;
          fontSize: string;
          lineHeight: string;
          fontWeight: string | number;
        };
      };
    };
  }
}