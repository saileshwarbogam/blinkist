import {render,cleanup,screen} from '@testing-library/react';
import Timer from './Timer';

afterEach(cleanup);
test("Testing Timer",()=>{
   render(<Timer />);
   expect(screen.getByTestId("Timer")).toBeInTheDocument();
});