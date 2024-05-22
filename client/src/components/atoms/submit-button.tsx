interface SubmitButtonProps {
    disabled?: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ disabled }) => {
    return (
        <button type="submit" disabled={disabled}>&#x2b;</button>
    );
};
