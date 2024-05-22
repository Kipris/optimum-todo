import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "../../features/selectors";
import { addSubtask } from "../../features/subtask-slice";
import { SubmitButton } from "../atoms/submit-button";
import { Input } from "../atoms/input";
import { Select } from "../atoms/select";
import { $Container, $ErrorMessage, $Form } from "./form.styled";

export const SubtaskForm: React.FC = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);
    const [subtaskName, setSubtaskName] = useState('');
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    const todoTasks = tasks.filter((task) => !task.isCompleted);
    const isFormDisabled = !todoTasks.length;

    useEffect(() => {
        if (todoTasks.length > 0 && !selectedTaskId) {
            setSelectedTaskId(todoTasks[0].id);
        }
        if (!todoTasks.length) {
            setSelectedTaskId('');
        }
    }, [tasks, todoTasks, selectedTaskId]);

    const handleInputChange = (event: React.SyntheticEvent) => {
        const target = event.target as HTMLInputElement;
        setSubtaskName(target.value);
        if (errorMessage) {
            setErrorMessage('');
        }
    }

    const handleSelectTaskId = (event: React.SyntheticEvent) => {
        const target = event.target as HTMLSelectElement;
        setSelectedTaskId(target.value);
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (subtaskName.trim().length < 2) {
            setErrorMessage('Name must be at least 2 characters');
            return;
        }
        const newSubtask = {
            id: uuidv4(),
            taskId: selectedTaskId,
            name: subtaskName,
            isCompleted: false,
            createdAt: new Date().toISOString(),
        };
        dispatch(addSubtask(newSubtask));
        setSubtaskName('');
        setErrorMessage('');
    }

    return (
        <$Container>
            Add subtask:
            <$Form onSubmit={handleSubmit}>
                <Select
                    disabled={isFormDisabled}
                    tasks={todoTasks}
                    handleSelectTaskId={handleSelectTaskId}
                    selectedTaskId={selectedTaskId}
                />
                <Input
                    disabled={isFormDisabled}
                    value={subtaskName}
                    handleInputChange={handleInputChange}
                />
                <SubmitButton disabled={isFormDisabled} />
            </$Form>
            {errorMessage && <$ErrorMessage>{errorMessage}</$ErrorMessage>}
        </$Container>
    );
};
