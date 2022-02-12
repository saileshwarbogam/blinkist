import  React, { useState } from "react";
import MyLibHeading from "./components/atoms/mylibrary/mylibrary-heading/MyLibHeading";
import ToolBarHeader from "./components/organisms/header/toolbar-header/ToolBarHeader";
import ReadingTabs from "./components/organisms/tabs/ReadingTabs";

import book1 from "../src/components/atoms/assets/book1.png";
import book2 from "../src/components/atoms/assets/book2.png";
import book3 from "../src/components/atoms/assets/book3.png";
import book4 from "../src/components/atoms/assets/book4.png";
import book5 from "../src/components/atoms/assets/book5.png";
import book6 from "../src/components/atoms/assets/book6.png";
import book7 from "../src/components/atoms/assets/book7.png";
import book8 from "../src/components/atoms/assets/book8.png";
import book9 from "../src/components/atoms/assets/book9.png";
import bookimage from "../src/components/atoms/assets/bookimage.png";
import FooterMain from "./components/molecules/footer/footer-main/FooterMain";
import ExploreMenu from "./components/molecules/explore-items/explore-grid/ExploreMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainBanner from "./components/molecules/banner-items/main-banner/MainBanner";
import MainSearch from "./components/organisms/main/MainSearch";
import Heading from "./components/atoms/headings/Heading";
import EntrepreneurReading from "./components/templates/entrepreneur-books/EntrepreneurReading";
import KeyIdeas from "./components/atoms/keyideas/KeyIdeas";
import BookDetailsGrid from "./components/organisms/bookdetailsgrid/BookDetailsGrid";
import BookDetailsTabs from "./components/molecules/bookdetailstabs/BookDetailsTabs";
import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@mui/material";
import LogInToView from "./components/atoms/logintoview/LogInToView";


let readingBooks = [
  {
    image: bookimage,
    name: "Beyond Entrepreneurship 2.0",
    author: "Erica Keswin",
    time: "13-minute read",
    finished: false,
  },
  {
    image: book1,
    name: "Bring Your Human to Work",
    author: "Erica Keswin",
    time: "13-minute read",
    finished: false,
  },
  {
    image: book2,
    name: "Employee to Entrepreneur",
    author: "Steve Glaveski",
    time: "15-minute read",
    finished: false,
  },
  {
    image: book3,
    name: "Doesn't Hurt to Ask",
    author: "Trey Gowdy",
    time: "13-minute read",
    finished: false,
  },
  {
    image: book4,
    name: "The Fate of Food",
    author: "Amanda Little",
    time: "12-minute read",
    finished: false,
  },
  {
    image: book5,
    name: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    time: "13-minute read",
    finished: false,
  },
];

let finishedBooks = [
  {
    image: book6,
    name: "Loving Your Business",
    author: "Debbie King",
    time: "13-minute read",
    finished: true,
  },
  {
    image: book7,
    name: "The Lonely Century",
    author: "Noreena Hertz",
    time: "15-minute read",
    finished: true,
  },
  {
    image: book8,
    name: "Eat Better, Feel Better",
    author: "Giada De Laurentiis",
    time: "13-minute read",
    finished: true,
  },
  {
    image: book9,
    name: "Dropshipping",
    author: "James Moore",
    time: "12-minute read",
    finished: true,
  },
];
const bookList = [
  "Beyond Entrepreneurship 2.0",
  "Bring Your Human to Work",
  "Employee to Entrepreneur",
  "Doesn't Hurt to Ask",
  "The Fate of Food",
  "Lives of the Stoics",
  "Loving Your Business",
  "The Lonely Century",
  "Eat Better, Feel Better",
  "Dropshipping",
];
function App() {
  const [btn, setBtn] = useState(false);

  const handleFinish = (item: string) => {
    if (bookList.includes(item)) {
      let temp;
      temp = readingBooks.find((e) => e.name === item);
      if (temp === undefined) {
        temp = { image: "", name: "", author: "", time: "", finished: false };
      }
      temp.finished = true;
      const a = readingBooks.filter((e) => e.name != item);
      readingBooks = a;
      finishedBooks.push(temp);
      setBtn(!btn);
    }
  };

  const handleReadAgain = (item: string) => {
    if (bookList.includes(item)) {
      let temp;
      temp = finishedBooks.find((e) => e.name === item);
      if (temp === undefined) {
        temp = { image: "", name: "", author: "", time: "", finished: false };
      }
      temp.finished = false;
      const a = finishedBooks.filter((e) => e.name !== item);
      finishedBooks = a;
      readingBooks.push(temp);
      setBtn(!btn);
    }
  };
  const [visible, setVisible] = useState(false);
  const [icon, setIcon] = useState(false);
  const [search, setSearch] = useState("");
  const handleChange = () => {
    setVisible(!visible);
    setIcon(!icon);
  };

  let comp = visible ? <ExploreMenu handleChange={handleChange} /> : undefined


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { isAuthenticated } = useAuth0();

  return (
    <BrowserRouter>
      <ToolBarHeader 
        icon={icon}
        handleChange={handleChange} 
        handleClick = {handleClick}

        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        isAuthenticated={isAuthenticated}
        />
      {
        isAuthenticated ? 
        <>
          {comp}
      <Routes>
      <Route
            path="/explore"
            element={
              <>
                <MainBanner />
                <MainSearch search ={setSearch}/>
                <Heading/>
                <EntrepreneurReading value={search} />
              </>
            }
          ></Route>
      <Route
        path = "/bookdetails"
        element = {
          <>
            <KeyIdeas />
            <BookDetailsGrid btn={btn} handleFinish={handleFinish} />
            <BookDetailsTabs/>
          </>
        }
      >
      </Route>
      <Route
        path="/"
        element={
          <>
            <MyLibHeading />
            <ReadingTabs
              currentReading={readingBooks}
              finishedReading={finishedBooks}
              handleReadAgain={handleReadAgain}
              handleFinish={handleFinish}
            />
          </>
        }
      >
      </Route>
      </Routes>
        </>
       : <LogInToView/>}
      <FooterMain />
    </BrowserRouter>
  );
}

export default App;
