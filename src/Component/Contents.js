const Contents = ({ contentList }) => {
  return (
    <section>
      <div className="container">
        <div className="item">
          <img src="images/soju.png" alt="소주" />
          <span>저는 소주를 안 좋아해요!</span>
        </div>
        <div className="item">
          <img src="images/beer.jpg" alt="맥주" />
          <span>애플퐉스같은 맛있는 맥주가 좋아요.</span>
        </div>
        <div className="item">
          <img src="images/champagne.jpg" alt="샴페인" />
          <span>샴페인 좋아요~샴페인 좋아요~</span>
        </div>
        <div className="item">
          <img src="images/wine.jpg" alt="와인" />
          <span>와인의 매력을 아직 깨닫지 못했어요.</span>
        </div>
        <div className="item">
          <img src="images/rum.jpg" alt="럼" />
          <span>먹어본 적이 없을 무!</span>
        </div>

        {contentList.map((item) => (
          <div className="item">
            <img src={item.img} alt={item.name} />
            <span>{item.content}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contents;
