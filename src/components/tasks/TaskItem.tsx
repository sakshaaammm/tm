import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskComplete, updateTask } from '../../store/taskSlice';
import { Task } from '../../types/task';
import { Trash2, Edit2, Check, X, Save } from 'lucide-react';
import { format, parseISO } from 'date-fns';

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);

  const handleSave = () => {
    dispatch(updateTask({
      ...task,
      title: editedTitle,
      description: editedDescription,
      dueDate: editedDueDate,
    }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(task.id));
    }
  };

  return (
    <div className={`bg-[#232430] rounded-lg shadow-md p-6 ${task.completed ? 'opacity-75' : ''}`}>
      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full px-4 py-2 bg-[#2f3349] text-white border-gray-700 rounded-lg"
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="w-full px-4 py-2 bg-[#2f3349] text-white border-gray-700 rounded-lg h-24"
          />
          <input
            type="date"
            value={editedDueDate}
            onChange={(e) => setEditedDueDate(e.target.value)}
            className="w-full px-4 py-2 bg-[#2f3349] text-white border-gray-700 rounded-lg"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              <Save className="h-4 w-4" />
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              <X className="h-4 w-4" />
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <button
                onClick={() => dispatch(toggleTaskComplete(task.id))}
                className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center
                  ${task.completed ? 'bg-green-500 border-green-500' : 'border-gray-400'}`}
              >
                {task.completed && <Check className="h-4 w-4 text-white" />}
              </button>
              <div>
                <h3 className={`text-lg font-semibold text-white ${task.completed ? 'line-through text-gray-400' : ''}`}>
                  {task.title}
                </h3>
                <p className="text-gray-400 mt-1">{task.description}</p>
                {task.dueDate && (
                  <p className="text-sm text-gray-500 mt-2">
                    Due: {format(parseISO(task.dueDate), 'PPP')}
                  </p>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg"
              >
                <Edit2 className="h-5 w-5" />
              </button>
              <button
                onClick={handleDelete}
                className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}