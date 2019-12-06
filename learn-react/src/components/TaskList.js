import React, { Component } from 'react';
import PropTypes  from "prop-types";
import { Task } from './Task';

class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      isFinish: PropTypes.bool.isRequired
    }))
  }
  render () {
    console.log('TaskList render')
    return (
      <ul>
        {
          this.props.tasks.map((it, i) => <Task
            key={i}
            {...it}
          ></Task>)
        }
      </ul>
    )
  }

}

export default TaskList;