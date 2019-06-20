import * as React from 'react';
import { makeStyles, createStyles} from '@material-ui/styles';
import { Theme, AppBar, InputBase,Box, InputAdornment, Typography, Toolbar, Link, IconButton, Badge } from '@material-ui/core';
import { Search, Settings } from '@material-ui/icons';
import classnames from 'classnames';

interface ISearchBarProps {
}

const SearchBar: React.FunctionComponent<ISearchBarProps> = (props) => {
  const useStyles = makeStyles ( ( theme: Theme ) => createStyles({
    root:{
      verticalAlign: 'middle',
      backgroundColor: theme.palette.primary.dark,
      height: theme.spacing(10)
    },
    logoContainer: {
      height: theme.spacing(6),
      width: theme.spacing(6),
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
      backgroundColor: theme.palette.common.white
    },
    searchInput: {
      width: '75%',
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.main,
      height: theme.spacing(6),
      marginLeft: theme.spacing(3)
    },
    inputIcon: {
      marginLeft: theme.spacing(2)
    },
    trialCountdownText: {
      color: theme.palette.primary.light,
      fontStyle: 'italic',
      fontFamily: 'Lato',
      fontSize: 14
    },
    appBarRight:{
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'flex-end'    
    },
    grow: {
      display: 'flex',
      flexGrow: 2
    },
    margin: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    whiteText: {
      color: theme.palette.common.white
    }

  }));

  const classes = useStyles();
  return (
    <AppBar position="relative" className={ classes.root }>
      <Toolbar className={classes.root}>
        <div className={ classes.grow }>
          <div className={classes.logoContainer} />
          <InputBase 
              className={ classes.searchInput }
              startAdornment={
                <InputAdornment position="start">
                  <Search className={ classes.inputIcon }/>
                </InputAdornment>
              }/>
          </div>
        <div className={ classes.appBarRight }>
          <Typography variant='h5' className={ classnames(classes.trialCountdownText, classes.margin) }>
            10 days left 
          </Typography>
          <Link underline='always' variant={ 'h5' } className={ classnames(classes.margin, classes.whiteText) }>
              Upgrade
          </Link>
          {/* <IconButton>
            <Badge>
              <Settings/>
            </Badge>
          </IconButton> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SearchBar;