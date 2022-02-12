import {cleanup, render,screen} from '@testing-library/react';
import AvatarDrop from './AvatarDrop';
import React from 'react';
import "@testing-library/jest-dom"
afterEach(cleanup);
it('Checking the Avatar Drop',()=>{
    render(<AvatarDrop
        isAuthenticated = {true}
        handleClick = {(event: React.MouseEvent<HTMLElement>)=>console.log("Testing")}
        />);
    expect(screen.getByTestId("avatarDrop")).toBeInTheDocument();
});