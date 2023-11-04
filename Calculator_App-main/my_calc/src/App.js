import "./App.css";
import About from "./components/About";
import Heading from "./components/Heading";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
   < Router>
    <>
      <Navbar />
        <Routes>
          <Route
            exact
            path="/about"
            element={
              <div className="flex flex-col gap-5 w-screen">
                <Heading title="About Developer" />

              <div className="md:flex md:justify-center md:w-[50%] md:h-[50%] md:mt-14 md:ml-[25%]">
                <div className="flex">
                  <About
                    className="row-start-1 row-end-2"
                    name="Aman Baranwal"
                    about="This app is made by me with the help of my collegues and mentors which will help me enhance my profile."
                    image="https://scontent.fdel9-1.fna.fbcdn.net/v/t39.30808-6/358472646_1297471310870353_7121861236933846852_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=cjCVYWj51LwAX9fKjgA&_nc_ht=scontent.fdel9-1.fna&oh=00_AfAqRbf7-waH4FZaIme4zQClz5_ruWEyPCV9Szs0M--VJA&oe=65083E4A"
                  />
                </div>
                </div>
              </div>
            }
          ></Route>

          <Route
            exact
            path="/home"
            element={
              <div>
                <Heading title="Calculator" />
                <Main />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              <div>
                <Heading title="Calculator" />
                <Main />
              </div>
            }
          ></Route>
        </Routes>
    </>
    </ Router>
  );
}

export default App;
