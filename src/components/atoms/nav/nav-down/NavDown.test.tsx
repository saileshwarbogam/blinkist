import {render,cleanup,screen} from '@testing-library/react';
import NavDown from './NavDown';


afterEach(cleanup);
test("Testing NavDown",()=>{
   render(<NavDown />);
   expect(screen.getByTestId("navdown")).toBeInTheDocument();
});