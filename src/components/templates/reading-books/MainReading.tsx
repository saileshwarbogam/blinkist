import React from 'react';
import CardMui from '../../organisms/cards/card-mui/CardMui';

interface Books {
    currentReading : {
        image : string;
        name: string;
        author: string;
        time: string;
        finished:boolean,
    }[];
    handleReadAgain:(item:string)=>void;
    handleFinish:(item:string)=>void;
}

const MainReading = (props : Books) => {
  return (
      <div data-testid="MainReading">
          <CardMui handleReadAgain={props.handleReadAgain} handleFinish={props.handleFinish}  details = {props.currentReading}/>
      </div>
  );
};


export default MainReading;