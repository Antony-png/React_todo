class State { 
  data = {
    list1: [
      {
        name: 'Create task list1',
        due_date: '2022-12-22',
        task_id: 1,
        list_id: 1
      },
      {
        name: 'Create task2 list 1',
        due_date: '2021-11-21',
        task_id: 2,
        list_id: 1
      }
    ],
    list2: [
      {
        name: 'Create task list 2',
        due_date: '2022-12-22',
        task_id: 1,
        list_id: 2
      },
      {
        name: 'Create task2 list 2',
        due_date: '2021-11-21',
        task_id: 2,
        list_id: 2
      }
    ]
  }
  createTask(taskValue) {
    [...this.data, taskValue]
  }
}




export default data