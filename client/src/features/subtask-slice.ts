import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Subtask } from '../interfaces/subtasks';
import { SubtaskState } from '../interfaces/state';

const initialState: SubtaskState = {
    subtasks: [],
};

export const subtaskSlice = createSlice({
    name: 'subtask',
    initialState,
    reducers: {
        addSubtask: (state, action: PayloadAction<Subtask>) => {
            const newSubtask = action.payload;
            state.subtasks.push(newSubtask);
        },
        editSubtask: (state, action: PayloadAction<{ id: string; name?: string; isCompleted?: boolean }>) => {
            const { id, name, isCompleted } = action.payload;
            state.subtasks = state.subtasks.map(subtask => {
                if (subtask.id === id) {
                    return {
                        ...subtask,
                        ...(name !== undefined && { name: name }),
                        ...(isCompleted !== undefined && { isCompleted: isCompleted })
                    };
                }
                return subtask;
            });
        },
        toggleSubtaskStatusByTaskId: (state, action: PayloadAction<string>) => {
            const taskId = action.payload;
            state.subtasks = state.subtasks.map(subtask => {
                if (subtask.taskId === taskId) {
                    return {
                        ...subtask,
                        isCompleted: !subtask.isCompleted,
                    };
                }
                return subtask;
            });
        },
        deleteSubtask: (state, action: PayloadAction<string>) => {
            state.subtasks = state.subtasks.filter(subtask => subtask.id !== action.payload);
        },
        deleteSubtasksByTaskId: (state, action: PayloadAction<string>) => {
            state.subtasks = state.subtasks.filter(subtask => subtask.taskId !== action.payload);
        },
    }
});

export const {
    addSubtask,
    editSubtask,
    toggleSubtaskStatusByTaskId,
    deleteSubtask,
    deleteSubtasksByTaskId,
} = subtaskSlice.actions;

export default subtaskSlice.reducer;
