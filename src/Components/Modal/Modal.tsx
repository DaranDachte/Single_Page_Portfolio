import Carousel from "../Carousel/Carousel";
const Modal = ({ closeModal, screenShots }) => {
  return (
    <div className="w-screen h-screen z-50 bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center">
      <div className="bg-white p-10 rounded-md shadow-md max-w-7xl">
        <div className="flex ">
          <button className="" onClick={closeModal}>
            X
          </button>
        </div>
        <Carousel items={screenShots} />
      </div>
    </div>
  );
};

export default Modal;
