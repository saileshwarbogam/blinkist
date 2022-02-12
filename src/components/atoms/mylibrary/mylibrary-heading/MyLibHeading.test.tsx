import {cleanup, render,screen} from "@testing-library/react";
import MyLibHeading from "./MyLibHeading";

afterEach(cleanup);
test("Checking MyLibraryHeading",()=>{
   render(<MyLibHeading />);
   expect(screen.getByText("My Library")).toBeInTheDocument();
});