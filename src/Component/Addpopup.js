import { useState } from "react";

const Addpopup = ({ isPopUpOpened, setIsPopUpOpened, setContentList }) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");

  return (
    <div
      id="formBG"
      className="form-background"
      style={{ display: isPopUpOpened ? "block" : "none" }}
    >
      <form
        id="form"
        onSubmit={(event) => {
          event.preventDefault();
          setContentList((prev) => {
            return [...prev, { name: name, img: img, content: content }];
          });
        }}
      >
        <span
          id="form-X"
          className="cancel"
          onClick={() => {
            setIsPopUpOpened(false);
          }}
        >
          X
        </span>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          required=""
          maxLength={15}
          type="text"
          placeholder="What your name?"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="image">이미지</label>
        <input
          id="image"
          required=""
          placeholder="URL"
          type="text"
          onChange={(event) => {
            setImg(event.target.value);
          }}
        />
        <label htmlFor="content">내용</label>
        <input
          id="content"
          required=""
          placeholder="Please enter the contents"
          type="text"
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default Addpopup;
