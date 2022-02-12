import { cleanup, render ,screen} from "@testing-library/react";
import AvatarLogin from "./AvatarLogin";


afterEach(cleanup);
it("Testing AvatarLogin",()=>{
    render(<AvatarLogin></AvatarLogin>);
    expect(screen.getByTestId("AvatarLogin")).toBeInTheDocument();
})