import {render,cleanup,screen} from '@testing-library/react';
import SearchIcon from './SearchIcon';

afterEach(cleanup);
test("Testing SearchIcon",()=>{
   render(<SearchIcon />);
   expect(screen.getByTestId("SearchIcon")).toBeInTheDocument();
});