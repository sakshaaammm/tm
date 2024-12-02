import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { isAfter, parseISO } from 'date-fns';

export default function TaskStats() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const stats = {
    total: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    overdue: tasks.filter(task => 
      !task.completed && 
      task.dueDate && 
      isAfter(new Date(), parseISO(task.dueDate))
    ).length,
  };

  const cards = [
    {
      title: 'Total Tasks',
      value: stats.total,
      icon: <Clock className="text-blue-500" />,
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-500',
    },
    {
      title: 'Completed',
      value: stats.completed,
      icon: <CheckCircle className="text-green-500" />,
      bgColor: 'bg-green-500/10',
      textColor: 'text-green-500',
    },
    {
      title: 'Overdue',
      value: stats.overdue,
      icon: <AlertCircle className="text-red-500" />,
      bgColor: 'bg-red-500/10',
      textColor: 'text-red-500',
    },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <div key={index} className="bg-[#232430] rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400">{card.title}</p>
              <h3 className={`text-3xl font-semibold mt-2 ${card.textColor}`}>
                {card.value}
              </h3>
            </div>
            <div className={`p-3 rounded-lg ${card.bgColor}`}>
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}