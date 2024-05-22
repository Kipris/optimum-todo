import { Subtask } from "./subtasks";
import { Task } from "./tasks";

export interface PopupState {
    isPopupOpened: boolean;
    popupData: Task,
}

export interface SubtaskState {
    subtasks: Subtask[];
}

export interface TaskState {
    tasks: Task[];
}

export interface RootState {
    tasks: TaskState;
    subtasks: SubtaskState;
    popup: PopupState;
}
