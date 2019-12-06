import React, { Component } from 'react';
import TaskList from './TaskList';
import AddTask from './Addtask';

class TaskContainer extends Component {

  state = {
    tasks: []
  }
  componentDidMount(){
    const ts = [];
    for(var i = 0; i < 10; i ++){
      ts.push({
        name: 'task' + i,
        isFinish: Math.random() > 0.5
      })
    }
    this.setState({
      tasks: ts
    })
  }
  handleAdd = (newTask) => {
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }
  render () {
    console.log('TaskContainer render', this.state.tasks)
    return (
      <div>
        <AddTask onAdd={this.handleAdd}></AddTask>
        <TaskList tasks={this.state.tasks}></TaskList>
      </div>
    )
  }

}

export default TaskContainer;