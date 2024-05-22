import { useDispatch, useSelector } from "react-redux";
import { selectSubtasksByTaskId } from "../../features/selectors";
import { deleteSubtask, editSubtask } from "../../features/subtask-slice";
import { useState } from "react";
import { Subtask } from "../../interfaces/subtasks";
import { ListItem } from "../molecules/list-item";
import { $Container } from "./subtask-list.styled";
import { RootState } from "../../interfaces/state";

interface SubtaskListProps {
    taskId: string;
}

export const SubtaskList: React.FC<SubtaskListProps> = ({ taskId }) => {
    const dispatch = useDispatch();
    const subtasks = useSelector((state: RootState) => selectSubtasksByTaskId(state, taskId));
    const [editId, setEditId] = useState<string | null>(null);
    const [editText, setEditText] = useState('');

    const sortedSubtasks = [...subtasks].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    const handleToggleCompletedStatus = (subtask: Subtask) => {
        dispatch(editSubtask({ id: subtask.id, isCompleted: !subtask.isCompleted }));
    }

    const handleInitEdit = (subtask: Subtask) => {
        setEditId(subtask.id);
        setEditText(subtask.name);
    }

    const handleEdit = (id: string) => {
        dispatch(editSubtask({ id, name: editText }));
        setEditId(null);
    }

    const handleEditText = (text: string) => {
        setEditText(text);
    }

    const handleDelete = (id: string) => {
        dispatch(deleteSubtask(id));
    }

    return !!subtasks.length ? (
        <$Container>
            {sortedSubtasks.map((subtask: Subtask) => (
                <div key={subtask.id}>
                    <ListItem 
                        item={subtask} 
                        isEditMode={editId === subtask.id} 
                        editText={editText}
                        handleToggleCompletedStatus={handleToggleCompletedStatus}
                        handleInitEdit={handleInitEdit}
                        handleEdit={handleEdit}
                        handleEditText={handleEditText}
                        handleDelete={handleDelete}
                    />
                </div>
            ))}
        </$Container>
    ) : null;
};
