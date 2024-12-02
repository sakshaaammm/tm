import React from 'react';
import TaskStats from './TaskStats';
import TaskList from '../tasks/TaskList';
import TaskForm from '../tasks/TaskForm';
import TaskFilters from '../tasks/TaskFilters';

export default function TaskDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TaskStats />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <TaskForm />
          <TaskList />
        </div>
        <div>
          <TaskFilters />
        </div>
      </div>
    </div>
  );
}