import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colors: {
    black: {
      main: '#000000',
      light: '',
      dark: '',
    },
    white: {
      main: '#FFFFFF',
      light: '',
      dark: '',
    },
    gray: {
      main: '#C2C9D1',
      light: '',
      dark: `linear-gradient(
        rgba(0, 0, 0, .3),
        rgba(0, 0, 0, .3)
      ),
      linear-gradient(
        #C2C9D1,
        #C2C9D1
      )`,
    },
    success: {
      main: '#3CC13B',
      light: `linear-gradient(
        rgba(255, 255, 255, .75),
        rgba(255, 255, 255, .75)
      ),
      linear-gradient(
        #3CC13B,
        #3CC13B
      )`,
      dark: '',
    },
    error: {
      main: '#F03738',
      light: `linear-gradient(
        rgba(255, 255, 255, .75),
        rgba(255, 255, 255, .75)
      ),
      linear-gradient(
        #F03738,
        #F03738
      )`,
      dark: '',
    },
    warning: {
      main: '#F3BB1C',
      light: `linear-gradient(
        rgba(255, 255, 255, .75),
        rgba(255, 255, 255, .75)
      ),
      linear-gradient(
        #F3BB1C,
        #F3BB1C
      )`,
      dark: '',
    },
    client: {
      main: '#5F6CAD',
      light: `linear-gradient(
        rgba(255, 255, 255, .75),
        rgba(255, 255, 255, .75)
      ),
      linear-gradient(
        #5F6CAD,
        #5F6CAD
      )`,
      dark: `linear-gradient(
        rgba(0, 0, 0, .3),
        rgba(0, 0, 0, .3)
      ),
      linear-gradient(
        #5F6CAD,
        #5F6CAD
      )`,
    },
    productOwner: {
      main: '#20063B',
      light: `linear-gradient(
        rgba(255, 255, 255, .75),
        rgba(255, 255, 255, .75)
      ),
      linear-gradient(
        #20063B,
        #20063B
      )`,
      dark: `linear-gradient(
        rgba(0, 0, 0, .3),
        rgba(0, 0, 0, .3)
      ),
      linear-gradient(
        #20063B,
        #20063B
      )`,
    },
    developer: {
      main: '#ED7D3A',
      light: `linear-gradient(
        rgba(255, 255, 255, .75),
        rgba(255, 255, 255, .75)
      ),
      linear-gradient(
        #ED7D3A,
        #ED7D3A
      )`,
      dark: `linear-gradient(
        rgba(0, 0, 0, .3),
        rgba(0, 0, 0, .3)
      ),
      linear-gradient(
        #ED7D3A,
        #ED7D3A
      )`,
    },
    admin: {
      main: '#A30015',
      light: `linear-gradient(
        rgba(255, 255, 255, .75),
        rgba(255, 255, 255, .75)
      ),
      linear-gradient(
        #A30015,
        #A30015
      )`,
      dark: `linear-gradient(
        rgba(0, 0, 0, .3),
        rgba(0, 0, 0, .3)
      ),
      linear-gradient(
        #A30015,
        #A30015
      )`,
    },
  },
};
