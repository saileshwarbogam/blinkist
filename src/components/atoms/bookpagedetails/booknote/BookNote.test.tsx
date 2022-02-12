import { render ,screen} from "@testing-library/react";
import BookNote from "./BookNote";

it("Testing BannerOne",()=>{
    render(<BookNote></BookNote>);
    expect(screen.getByText("Turning Your Business into an Enduring Great Company")).toBeInTheDocument();
})