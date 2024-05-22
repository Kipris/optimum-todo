import { createPortal } from 'react-dom';
import { PreviewPopup } from './organisms/preview-popup';
import { SubtaskForm } from './organisms/subtask-form';
import { TaskForm } from './organisms/task-form';
import { TaskList } from './organisms/task-list';
import { $Container, $Box, $FormContainer, $Separator } from './app.styled';
import { ExternalData } from './organisms/external-data';

export const App: React.FC = () => {
    return (
        <$Container>
            <$Box>
            <$FormContainer>
                <TaskForm />
                <SubtaskForm />        
            </$FormContainer>
            <$Separator />
            <TaskList />
            <ExternalData />
            {createPortal(
                <PreviewPopup />,
                document.body
            )}
            </$Box>
        </$Container>
    );
};
