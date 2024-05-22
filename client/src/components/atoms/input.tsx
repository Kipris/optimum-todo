import { $Input } from "./input.styled";

interface InputProps {
    value: string;
    handleInputChange: (event: React.SyntheticEvent) => void;
    disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({ value, handleInputChange, disabled }) => {
    return (
        <$Input 
            type="text"
            value={value}
            disabled={disabled}
            onChange={(event) => handleInputChange(event)}
        />
    );
};
