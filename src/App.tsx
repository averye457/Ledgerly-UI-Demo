import React from 'react';
import { Sidebar } from './components/Sidebar';
import { TransactionsPage } from './components/TransactionsPage';
export function App() {
  return <div className="flex w-full min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <TransactionsPage />
      </main>
    </div>;
}