import { useDispatch, useSelector } from "react-redux";
import { selectPopupData, selectIsPopupOpened } from "../../features/selectors";
import { closePopup } from "../../features/popup-slice";
import { $Backdrop, $Container } from "./preview-popup.styled";
import { $Separator } from "../app.styled";

export const PreviewPopup: React.FC = () => {
    const dispatch = useDispatch();
    const task = useSelector(selectPopupData);
    const isPopupOpened = useSelector(selectIsPopupOpened);

    const handleClosePopup = () => {
        dispatch(closePopup());
    }

    return isPopupOpened ? (
        <$Backdrop>
            <$Container>
                <div>Task Name: {task.name}</div>
                <div>Creation Date: {new Date(task.createdAt).toLocaleString('en-US')}</div>
                <div>Status: {task.isCompleted ? 'Done' : 'In progress'}</div>
                <$Separator />
                <button type="button" onClick={handleClosePopup}>Close</button>
            </$Container>
        </$Backdrop>
    ) : null;
};
