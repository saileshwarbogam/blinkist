import { cleanup, render,screen } from "@testing-library/react";
import MainSearchIcon from "./MainSearchIcon";

afterEach(cleanup);
test("Testing SearchIcon",()=>{
   render(<MainSearchIcon />);
   expect(screen.getByTestId("MainSearchIcon")).toBeInTheDocument();
});