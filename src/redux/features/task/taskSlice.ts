import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "All" | "Low" | "Medium" | "High";
}
const initialState: InitialState = {
  tasks: [
    {
      id: "101",
      title: "Initialize frontend",
      description: " Create home page and routig",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "105",
      title: "Init github repo",
      description: " Create repo",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Medium",
    },
  ],
  filter: "All",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export default taskSlice.reducer;
