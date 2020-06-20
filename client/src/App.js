import React from 'react';
import './App.css';
import configureStore from './store';
import { Provider } from "react-redux";
import MainContainer from './containers/MainContainer';
import RoomContainer from './containers/Rooms/RoomContainer';

function App() {
  return (
    <Provider store={configureStore()}>
      <RoomContainer />
      {/* <MainContainer /> */}
    </Provider>
  );
}

export default App;
