import { AddTask } from "@/components/module/task/AddTask";
import TaskCard from "@/components/module/task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { ITask } from "@/types";
// import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";

const Tasks = () => {
  // const tasks = useAppSelector(selectTasks);
  // const dispatch = useAppDispatch();
  // console.log(tasks);
  const { data, isLoading, isError } = useGetTasksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  console.log({ data, isLoading, isError });
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center gap-5">
        <h1 className="">Tasks</h1>
        <Tabs defaultValue="All">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Low">Low</TabsTrigger>
            <TabsTrigger value="Medium">Medium</TabsTrigger>
            <TabsTrigger value="High">High</TabsTrigger>
          </TabsList>
        </Tabs>

        <AddTask></AddTask>
      </div>

      <div
        className="space-y-5 border p-4 mt-4"
        style={{ maxHeight: "calc(5 * 120px)", overflowY: "auto" }}
      >
        {!isLoading && data.tasks.length === 0
          ? "no tasks added yet"
          : data.tasks.map((task: ITask) => (
              <TaskCard key={task.id} task={task}></TaskCard>
            ))}
      </div>
    </div>
  );
};
export default Tasks;
