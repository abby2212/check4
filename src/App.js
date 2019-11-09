import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './Wrapper';
import Photo from './Photo';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <Wrapper>

        <Photo src="./profile.png" />

        <Title style={{

          color: 'red'

        }}>My Name here </Title>

        <Title small>My job here</Title>


      </Wrapper>
    </div >
  );
}

export default App;
