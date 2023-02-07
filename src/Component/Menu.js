const Menu = ({ setIsPopUpOpened }) => {
  return (
    <aside>
      <button
        type="button"
        id="add"
        onClick={() => {
          setIsPopUpOpened(true);
        }}
      >
        추가
      </button>
      <div>소주</div>
      <div>맥주</div>
      <div>샴페인</div>
      <div>와인</div>
      <div>럼</div>
    </aside>
  );
};

export default Menu;
