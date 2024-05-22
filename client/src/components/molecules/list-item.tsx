import { Subtask } from "../../interfaces/subtasks";
import { Task } from "../../interfaces/tasks";
import { Input } from "../atoms/input";
import { $Container, $Box, $Name } from "./list-item.styled";
import { Checkbox } from "../atoms/checkbox";
import { $ErrorMessage } from "../organisms/form.styled";
import { useState } from "react";

interface ListItemProps {
    item: Task | Subtask;
    editText: string;
    isEditMode: boolean;
    handleToggleCompletedStatus: (item: Task | Subtask) => void;
    handleInitEdit: (item: Task | Subtask) => void;
    handleEdit: (id: string) => void;
    handleEditText: (text: string) => void;
    handleDelete: (id: string) => void;
    handleShowPopup?: (item: Task) => void;
}

export const ListItem: React.FC<ListItemProps> = ({
    item, editText, isEditMode, handleToggleCompletedStatus, handleInitEdit, handleEdit, handleEditText, handleDelete, handleShowPopup,
}) => {
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event: React.SyntheticEvent) => {
        const target = event.target as HTMLInputElement;
        handleEditText(target.value);
    }

    const handleEditName = (id: string) => {
        if (editText.trim().length < 2) {
            setErrorMessage('Name must be at least 2 characters');
            return;
        }
        setErrorMessage('');
        handleEdit(id);
    }

    return (
        <$Container key={item.id}>
            <$Box>
                <Checkbox
                    clickHandler={() => handleToggleCompletedStatus(item)}
                    disabled={isEditMode}
                    checked={item.isCompleted}
                />
                {isEditMode ? (
                    <>
                        <Input
                            value={editText}
                            handleInputChange={handleInputChange}
                        />
                        <button type="button" onClick={() => handleEditName(item.id)}>&#x1f4be;</button>
                    </>
                ) : (
                    <$Name $isCompleted={item.isCompleted}>{item.name}</$Name>
                )}
                {handleShowPopup ? <button onClick={() => handleShowPopup(item)}>&#x2139;</button> : null}
                <button
                    type="button"
                    onClick={() => handleInitEdit(item)}
                    disabled={item.isCompleted || isEditMode}
                >
                    &#x270E;
                </button>
                <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    disabled={item.isCompleted || isEditMode}
                >
                    &#x292B;
                </button>
            </$Box>
            {errorMessage && <$ErrorMessage>{errorMessage}</$ErrorMessage>}
        </$Container>
    );
};
