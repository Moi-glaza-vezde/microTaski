import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';

export type todolistsType = {
   id: string;
   title: string;
   filter: FilterValuesType;
};
export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {
   // let [tasks, setTasks] = useState([
   //     {id: v1(), title: "HTML&CSS", isDone: true},
   //     {id: v1(), title: "JS", isDone: true},
   //     {id: v1(), title: "ReactJS", isDone: false},
   //     {id: v1(), title: "Rest API", isDone: false},
   //     {id: v1(), title: "GraphQL", isDone: false},
   // ]);
   // let [filter, setFilter] = useState<FilterValuesType>("all");

   let todolistID1 = v1();
   let todolistID2 = v1();

   let [todolists, setTodolists] = useState<Array<todolistsType>>([
      { id: todolistID1, title: 'What to learn', filter: 'all' },
      { id: todolistID2, title: 'What to buy', filter: 'all' },
   ]);

   let [tasks, setTasks] = useState({
      [todolistID1]: [
         { id: v1(), title: 'HTML&CSS', isDone: true },
         { id: v1(), title: 'JS', isDone: true },
         { id: v1(), title: 'ReactJS', isDone: false },
         { id: v1(), title: 'Rest API', isDone: false },
         { id: v1(), title: 'GraphQL', isDone: false },
      ],
      [todolistID2]: [
         { id: v1(), title: 'Milk', isDone: true },
         { id: v1(), title: 'Bread', isDone: true },
         { id: v1(), title: 'Tomato', isDone: false },
         { id: v1(), title: 'Whoter', isDone: false },
         { id: v1(), title: 'Chocolate', isDone: false },
      ],
   });

   function removeTask(todoListId: string, id: string) {
      setTasks({ ...tasks, [todoListId]: tasks[todoListId].filter((t) => t.id !== id) });
   }

   function addTask(todoListId: string, title: string) {
      let newTask = { id: v1(), title: title, isDone: false };

      setTasks({ ...tasks, [todoListId]: [newTask, ...tasks[todoListId]] });
   }

   function changeStatus(todoListId: string, taskId: string, isDone: boolean) {
      // setTasks({
      setTasks({
         ...tasks,
         [todoListId]: tasks[todoListId].map((t) =>
            t.id === taskId ? { ...t, isDone: isDone } : t
         ),
      });

      //    ...tasks,
      //    [todoListId]: tasks[todoListId].map((t) => {
      //       return { ...tasks };
      //    }),
      // });
      // setTasks();
      // let task = tasks.find((t) => t.id === taskId);
      // if (task) {
      //    task.isDone = isDone;
      // }
      // setTasks([...tasks]);
   }

   // let tasksForTodolist = tasks;

   function changeFilter(value: FilterValuesType, todoListId: string) {
      setTodolists(todolists.map((t) => (t.id === todoListId ? { ...t, filter: value } : t)));
   }

   return (
      <div className="App">
         {todolists.map((t) => {
            let tasksForTodolist = tasks[t.id];
            if (t.filter === 'active') {
               tasksForTodolist = tasks[t.id].filter((t) => t.isDone === false);
            }
            if (t.filter === 'completed') {
               tasksForTodolist = tasks[t.id].filter((t) => t.isDone === true);
            }
            return (
               <Todolist
                  todoListId={t.id}
                  key={t.id}
                  title={t.title}
                  tasks={tasksForTodolist}
                  removeTask={removeTask}
                  changeFilter={changeFilter}
                  addTask={addTask}
                  changeTaskStatus={changeStatus}
                  filter={t.filter}
               />
            );
         })}
      </div>
   );
}

export default App;
