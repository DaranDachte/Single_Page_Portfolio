const Modal = ({ closeModal, screenShots }) => {
  return (
    <div className="w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center">
      <div className="bg-white p-10 rounded-md shadow-md">
        <button onClick={closeModal}>X</button>
        <div>
          {console.log(screenShots)}
          {screenShots.map((screenShot) => (
            <img src={screenShot} alt="screenShot" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
