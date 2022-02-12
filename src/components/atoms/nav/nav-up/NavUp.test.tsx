import {render,cleanup,screen} from '@testing-library/react';
import NavUp from './NavUp';


afterEach(cleanup);
test("Testing NavUp",()=>{
   render(<NavUp />);
   screen.getByTestId("navup")
   expect(screen.getByTestId("navup")).toBeInTheDocument();
});
