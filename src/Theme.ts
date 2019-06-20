import { createMuiTheme } from '@material-ui/core/styles';
import { fontWeight } from '@material-ui/system';
import { Theme } from '@material-ui/core';

export const theme: Theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2918f6',
        dark: '#010239',
        light: '#8c80f7'
      },
      secondary: {
        main: '#4737f7',
        light: '#eceffe',
      },
  
    },

    typography: {
      fontFamily: [
        'Roboto',
        'Lato'
      ].join(','),
      body1: {
        fontSize: 16,
        fontFamily: 'Roboto'
      },
      body2:{
        fontSize: 12,
        fontFamily: 'roboto'
      },
      h1: {
        fontSize: 40,
        fontFamily: 'roboto'
      },
      h2:{ 
        fontSize: 22,
        fontFamily: 'roboto'
      },
      h3:{
        fontFamily: 'Lato',
        fontWeight: 600,
        fontSize: 18
      },
      h5:{
        fontFamily: 'roboto',
        fontSize: 12
      },
      h6: {
        fontFamily: 'roboto',
        fontSize: 10
      },
      subtitle1: {
        fontFamily: 'Lato',
        fontSize: 24,
        fontStyle: 'italic'
      }
      
    }
  });