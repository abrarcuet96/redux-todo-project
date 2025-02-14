// import { RootState } from "@/redux/store";
// import { ITask } from "@/types";
// import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
// import { removeUser } from "../user/userSlice";
// interface InitialState {
//   tasks: ITask[];
//   filter: "All" | "Low" | "Medium" | "High";
// }
// const initialState: InitialState = {
//   tasks: [],
//   filter: "All",
// };

// type DraftTask = Pick<
//   ITask,
//   "title" | "description" | "dueDate" | "priority" | "assignedTo"
// >;

// const createTask = (taskData: DraftTask): ITask => {
//   return {
//     ...taskData,
//     id: nanoid(),
//     isCompleted: false,
//     assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
//   };
// };
// const taskSlice = createSlice({
//   name: "task",
//   initialState,
//   reducers: {
//     addTask: (state, action: PayloadAction<DraftTask>) => {
//       const taskData = createTask(action.payload);
//       state.tasks.push(taskData);
//     },
//     toggleCompleteState: (state, action: PayloadAction<string>) => {
//       state.tasks.forEach((task) =>
//         task.id === action.payload
//           ? (task.isCompleted = !task.isCompleted)
//           : task
//       );
//     },
//     deleteTask: (state, action: PayloadAction<string>) => {
//       state.tasks = state.tasks.filter((task) => task.id != action.payload);
//     },
//     updateFilter: (
//       state,
//       action: PayloadAction<"All" | "Low" | "Medium" | "High">
//     ) => {
//       state.filter = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(removeUser, (state, action) => {
//       state.tasks.forEach((task) =>
//         task.assignedTo === action.payload ? (task.assignedTo = null) : task
//       );
//     });
//   },
// });

// export const selectTasks = (state: RootState) => {
//   const filter = state.todo.filter;
//   if (filter === "Low") {
//     return state.todo.tasks.filter((task) => task.priority === "Low");
//   } else if (filter === "Medium") {
//     return state.todo.tasks.filter((task) => task.priority === "Medium");
//   } else if (filter === "High") {
//     return state.todo.tasks.filter((task) => task.priority === "High");
//   } else {
//     return state.todo.tasks;
//   }
// };
// export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
//   taskSlice.actions;
// export default taskSlice.reducer;
