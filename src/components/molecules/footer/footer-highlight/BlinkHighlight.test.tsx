import {cleanup, render,screen} from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import BlinkHighlight from "./BlinkHighlight";



afterEach(cleanup);
test("Checking BlinkHighlight",()=>{
   render(<MemoryRouter> <BlinkHighlight /> </MemoryRouter>);
   expect(screen.getByTestId("blinkHighlight")).toBeInTheDocument();
});