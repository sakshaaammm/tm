import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Sidebar from './components/layout/Sidebar';
import TaskDashboard from './components/dashboard/TaskDashboard';

function App() {
  return (
    <Provider store={store}>
      <div className="flex min-h-screen bg-[#1a1b23]">
        <Sidebar />
        <main className="flex-1 p-6">
          <TaskDashboard />
        </main>
      </div>
    </Provider>
  );
}

export default App;