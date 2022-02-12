import { render ,screen} from "@testing-library/react";
import BlinkImage from "./BlinkImage";

it("Testing BannerOne",()=>{
    render(<BlinkImage></BlinkImage>);
    expect(screen.getByAltText("appname")).toBeInTheDocument();
})