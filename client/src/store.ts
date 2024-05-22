import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/task-slice';
import subtasksReducer from './features/subtask-slice';
import popupReducer from './features/popup-slice';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        subtasks: subtasksReducer,
        popup: popupReducer,
    }
});
