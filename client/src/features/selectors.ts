import { RootState } from "../interfaces/state";
import { Subtask } from "../interfaces/subtasks";
import { Task } from "../interfaces/tasks";

export const selectTasks = (state: RootState): Task[] => {
    return state.tasks.tasks;
}

export const selectSubtasksByTaskId = (state: RootState, taskId: string): Subtask[] => {
    return state.subtasks.subtasks.filter((subtask: Subtask) => subtask.taskId === taskId);
}

export const selectPopupData = (state: RootState): Task => {
    return state.popup.popupData;
}

export const selectIsPopupOpened = (state: RootState): boolean => {
    return state.popup.isPopupOpened;
}
