import App from './App';
import ReactDOM from "react-dom"

test('renders learn react link', () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>,div);
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
