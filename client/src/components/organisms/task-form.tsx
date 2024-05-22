import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { addTask } from "../../features/task-slice";
import { Input } from "../atoms/input";
import { SubmitButton } from "../atoms/submit-button";
import { $Container, $ErrorMessage, $Form } from "./form.styled";

export const TaskForm: React.FC = () => {
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event: React.SyntheticEvent) => {
        const target = event.target as HTMLInputElement;
        setTaskName(target.value);
        if (errorMessage) {
            setErrorMessage('');
        }
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (taskName.trim().length < 2) {
            setErrorMessage('Name must be at least 2 characters');
            return;
        }
        const newTask = {
            id: uuidv4(),
            name: taskName,
            isCompleted: false,
            createdAt: new Date().toISOString(),
        };
        dispatch(addTask(newTask));
        setTaskName('');
        setErrorMessage('');
    };

    return (
        <$Container>
            Add task:
            <$Form onSubmit={handleSubmit}>
                <Input 
                    value={taskName}
                    handleInputChange={handleInputChange}
                />
                <SubmitButton />
            </$Form>
            {errorMessage && <$ErrorMessage>{errorMessage}</$ErrorMessage>}
        </$Container>
    );
};
