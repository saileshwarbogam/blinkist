import { cleanup, render ,screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import book1 from "../../atoms/assets/book1.png"
import MainReading from "./MainReading";


afterEach(cleanup);
test("Checking main Reading Rendering", () => {
  render(<MemoryRouter>
    <MainReading

      currentReading={[
        { image: book1, name: "Harry", author: "Potter", time: "24 minutes" ,finished:true},
      ]}
      handleReadAgain={()=>console.log("hello from main reading")}
      handleFinish={()=>console.log("hello main reading")}
    /></MemoryRouter>
  );
  const id = screen.getByTestId("MainReading");
  expect(id).toBeInTheDocument();
});