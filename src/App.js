import "./App.css";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Contents from "./Component/Contents";
import AddPopup from "./Component/Addpopup";
import { useState } from "react";

function App() {
  const [isPopUpOpened, setIsPopUpOpened] = useState(false);
  const [contentList, setContentList] = useState([]);
  console.log(contentList);
  return (
    <div className="App">
      <div id="wrap">
        <Header />
        <div className="body">
          <AddPopup
            isPopUpOpened={isPopUpOpened}
            setIsPopUpOpened={setIsPopUpOpened}
            setContentList={setContentList}
          ></AddPopup>
          <Menu setIsPopUpOpened={setIsPopUpOpened} />
          <Contents contentList={contentList} />
        </div>
      </div>
    </div>
  );
}

export default App;
