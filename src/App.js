import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Tracker from './components/Tracker/Tracker';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh'
  },
  header: {
    margin: '100px'
  }
})

function App() {
  const styles = useStyles();

  return (
    <Container classes={{ root: styles.root }}>
      <Typography variant='h2' classes={{ root: styles.header }}>Tracker</Typography>
      <Tracker />
    </Container>
  );
}

export default App;
