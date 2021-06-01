import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import TrackerContainer from './components/Tracker/TrackerContainer';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
      <TrackerContainer />
    </Container>
  );
}

export default App;
