import React, { useCallback, useState } from 'react'

function UseCallbackExample() {
  const [tasks, setTasks] = useState([])

  const addTask = useCallback(() => {
    setTasks((prev) => [...prev, 'Some task'])
  }, [setTasks])

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  )
}

const Button = React.memo(({ addTask }) => {
  console.log('button rendered')
  return (
    <div>
      <button className='btn btn-danger' onClick={addTask}>
        Add Task
      </button>
    </div>
  )
})

export default UseCallbackExample
