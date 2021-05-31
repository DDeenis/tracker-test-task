import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Tracker from './components/Tracker/Tracker';

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
  const tracks = [{ title: 'aaa', duration: 100 }, { title: 'bbb', duration: 1000 }, { title: 'ccc', duration: 10000 }];

  return (
    <Container classes={{ root: styles.root }}>
      <Typography variant='h2' classes={{ root: styles.header }}>Tracker</Typography>
      <Tracker tracks={tracks} />
    </Container>
  );
}

export default App;
