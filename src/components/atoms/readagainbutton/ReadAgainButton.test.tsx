import {render,cleanup, screen,fireEvent} from '@testing-library/react';
import ReadAgainButton from './ReadAgainButton';
import React from 'react';
afterEach(cleanup);
test("Testing ReadAgainButton",()=>{
    const func=()=>{
        console.log("fake func");
    };
   render(<ReadAgainButton name="Harry" handleReadAgain={func} />);
   const test=screen.getByText("Read Again");
   expect(test).toBeInTheDocument();
});
test("Testing Click of ReadAgainButton",()=>{
    const func=()=>{
        console.log("fake func");
    };
   render(<ReadAgainButton name="Harry" handleReadAgain={func} />);
   fireEvent.click(screen.getByText("Read Again"));
});