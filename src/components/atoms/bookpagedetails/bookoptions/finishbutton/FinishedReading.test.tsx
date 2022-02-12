import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import FinishReading from './FinishReading';


afterEach(cleanup)
it("Checking FinishReading for true",()=>{
    const func=()=>{
        return "hello";
    };
    render(<MemoryRouter> <FinishReading bookName="Harry Potter" btn={true} handleFinish={func} /> </MemoryRouter>)
    expect(screen.getByText("Finished Reading")).toBeInTheDocument();
})
it('Checking the FinishReading for false',()=>{
    const func=(item:string)=>{
        return "Beyond Entrepreneurship 2.0";
    };
    render(<MemoryRouter> <FinishReading bookName="Harry Potter" btn={false} handleFinish={func} /> </MemoryRouter>);

    expect(screen.getByText("Finished Reading")).toBeInTheDocument();
});
it('Checking OnClick FinishReading',()=>{
    const func=(item:string)=>{
        return "Beyond Entrepreneurship 2.0";
    };
    render(<MemoryRouter> <FinishReading bookName="Harry Potter" btn={true} handleFinish={func} /> </MemoryRouter>);
    fireEvent.click(screen.getByText("Finished Reading"));
});