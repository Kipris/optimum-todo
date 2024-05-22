import { Task } from "../../interfaces/tasks";
import { $Select } from "./select.styled";

interface SelectProps {
    tasks: Task[];
    handleSelectTaskId: (event: React.SyntheticEvent) => void;
    selectedTaskId: string;
    disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({ tasks, handleSelectTaskId, selectedTaskId, disabled }) => {
    return (
        <$Select disabled={disabled} onChange={handleSelectTaskId} value={selectedTaskId || ''}>
            {tasks.map(({ id, name }: Task) => (
                <option key={id} value={id}>{name}</option>
            ))}
        </$Select>
    );
};
