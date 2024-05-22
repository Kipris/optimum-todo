import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "../../features/selectors";
import { deleteTask, editTask } from "../../features/task-slice";
import { useState } from "react";
import { Task } from "../../interfaces/tasks";
import { SubtaskList } from "./subtask-list";
import { ListItem } from "../molecules/list-item";
import { openPopup } from "../../features/popup-slice";
import { deleteSubtasksByTaskId, toggleSubtaskStatusByTaskId } from "../../features/subtask-slice";
import { $Container } from "./task-list.styled";

export const TaskList: React.FC = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);
    const [editId, setEditId] = useState<string | null>(null);
    const [editText, setEditText] = useState('');

    const sortedTasks = [...tasks].sort((a, b) => {
        if (a.isCompleted !== b.isCompleted) {
            return a.isCompleted ? 1 : -1;
        }
        
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    const handleToggleCompletedStatus = (task: Task) => {
        dispatch(editTask({ id: task.id, isCompleted: !task.isCompleted }));
        dispatch(toggleSubtaskStatusByTaskId(task.id));
    }

    const handleInitEdit = (task: Task) => {
        setEditId(task.id);
        setEditText(task.name);
    }

    const handleEdit = (id: string) => {
        dispatch(editTask({ id, name: editText }));
        setEditId(null);
    }

    const handleDelete = (id: string) => {
        dispatch(deleteSubtasksByTaskId(id));
        dispatch(deleteTask(id));
    }

    const handleEditText = (text: string) => {
        setEditText(text);
    }

    const handleShowPopup = (task: Task) => {
        dispatch(openPopup(task));
    }

    return (
        <$Container>
            {sortedTasks && sortedTasks.map((task: Task) => (
                <div key={task.id}>
                    <ListItem
                        item={task}
                        isEditMode={editId === task.id}
                        editText={editText}
                        handleToggleCompletedStatus={handleToggleCompletedStatus}
                        handleInitEdit={handleInitEdit}
                        handleEdit={handleEdit}
                        handleEditText={handleEditText}
                        handleDelete={handleDelete}
                        handleShowPopup={handleShowPopup}
                    />
                    <SubtaskList taskId={task.id} />
                </div>
            ))}
        </$Container>
    );
};
