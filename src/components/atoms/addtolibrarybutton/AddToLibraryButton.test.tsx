import { cleanup, render ,screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddToLibraryButton from "./AddToLibraryButton";


afterEach(cleanup);
it("Testing AddToLibraryButton",()=>{
    render(<MemoryRouter><AddToLibraryButton></AddToLibraryButton></MemoryRouter>);
    expect(screen.getByTestId("AddToLibrary")).toBeInTheDocument();
})