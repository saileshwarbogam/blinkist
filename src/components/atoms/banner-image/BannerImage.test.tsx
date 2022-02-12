import { cleanup, render ,screen} from "@testing-library/react";
import BannerImage from "./BannerImage";


afterEach(cleanup);
it("Testing AvatarLogin",()=>{
    render(<BannerImage/>);
    expect(screen.getByTestId("BannerImage")).toBeInTheDocument();
})