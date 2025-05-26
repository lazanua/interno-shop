import ButtonCircle from "../ButtonCircle/Button";

const Room = ({ title, img, height }) => {
  return (
    <div className="room flex flex-col">
      <div className="room__img">
        <img
          src={`${img}`}
          alt=""
          style={{ height: `${height}px` }}
          className="w-[596px] object-cover"
        />
      </div>
      <div className="room__wrapper flex justify-between mt-[22px]">
        <div className="room__info">
          <div className="room__title subtitle mb-[4px]">{title}</div>
          <div className="room__subtitle text">Decor / Artchitecture</div>
        </div>
        <ButtonCircle></ButtonCircle>
      </div>
    </div>
  );
};

export default Room;
