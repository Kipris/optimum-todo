import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Task } from '../interfaces/tasks';
import { TaskState } from '../interfaces/state';

const initialState: TaskState = {
    tasks: [],
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            const newTask = action.payload;
            state.tasks.push(newTask);
        },
        editTask: (state, action: PayloadAction<{ id: string; name?: string; isCompleted?: boolean }>) => {
            const { id, name, isCompleted } = action.payload;
            state.tasks = state.tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        ...(name !== undefined && { name: name }),
                        ...(isCompleted !== undefined && { isCompleted: isCompleted })
                    };
                }
                return task;
            });
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
    }
});

export const {
    addTask,
    editTask,
    deleteTask,
} = taskSlice.actions;

export default taskSlice.reducer;
