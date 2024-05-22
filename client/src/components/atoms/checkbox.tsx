import { $Checkbox } from "./checkbox.styled";

interface CheckboxProps {
    checked: boolean;
    disabled: boolean;
    clickHandler: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, disabled, clickHandler }) => {
    return (
        <$Checkbox
            type="checkbox" 
            onChange={clickHandler}
            disabled={disabled}
            checked={checked}
        />
    );
};
