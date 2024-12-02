import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setSearchQuery } from '../../store/taskSlice';
import { RootState } from '../../store/store';
import { Search, ListFilter } from 'lucide-react';

export default function TaskFilters() {
  const dispatch = useDispatch();
  const { filter, searchQuery } = useSelector((state: RootState) => state.tasks);

  return (
    <div className="bg-[#232430] rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="w-full pl-10 pr-4 py-2 bg-[#2f3349] text-white border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <ListFilter className="h-5 w-5 text-gray-400" />
          <select
            value={filter}
            onChange={(e) => dispatch(setFilter(e.target.value as any))}
            className="px-4 py-2 bg-[#2f3349] text-white border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>
      </div>
    </div>
  );
}