import { useDispatch, useSelector } from "react-redux";
import "./Modal.scss";
import { IStoreState } from "../../types";
import { toggleModal } from "../../redux/action-creators/ui-action_creators";

export const Modal = () => {
  const text = useSelector((state: IStoreState) => state.ui.modalInfo?.text);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(toggleModal({ text: "", showModal: false }));
  };
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h3 className="modal__title">{text}</h3>
        <button className="modal__btn" onClick={handleCloseModal}>
          Закрыть
        </button>
      </div>
    </div>
  );
};
