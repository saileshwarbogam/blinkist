import { cleanup, render,screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainFinished from "./MainFinished";
import book1 from "../../atoms/assets/book1.png"



afterEach(cleanup);
test("Checking Main Finish Rendering", () => {
  render(<MemoryRouter>
    <MainFinished
      finishedReading={[
        { image: book1, name: "Harry", author: "Potter", time: "24 minutes" ,finished:true},
      ]}
      handleReadAgain={()=>console.log("hello from card mui")}
      handleFinish={()=>console.log("hello from card mui")}
    /></MemoryRouter>
  );
  const id = screen.getByTestId("MainFinished");
  expect(id).toBeInTheDocument();
});