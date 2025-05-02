import React, { useState } from 'react';
import { ZapIcon, RefreshCwIcon } from 'lucide-react';
import { TransactionList } from './TransactionList';
export function TransactionsPage() {
  const [filter, setFilter] = useState<'all' | 'untagged'>('all');
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Transactions</h1>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
            <RefreshCwIcon size={16} className="mr-2" />
            Sync
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-blue-700">
            <ZapIcon size={16} className="mr-2" />
            Tag with AI
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium text-gray-800">
                {filter === 'all' ? 'All Transactions' : 'Untagged Transactions'}
              </h2>
              <p className="text-sm text-gray-500">
                {filter === 'all' ? 'Showing all transactions from your accounts' : "Transactions that haven't been matched to a GL account"}
              </p>
            </div>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button onClick={() => setFilter('all')} className={`px-4 py-1.5 text-sm font-medium rounded-md ${filter === 'all' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                All
              </button>
              <button onClick={() => setFilter('untagged')} className={`px-4 py-1.5 text-sm font-medium rounded-md ${filter === 'untagged' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                Untagged
              </button>
            </div>
          </div>
        </div>
        <TransactionList filterType={filter} />
      </div>
    </div>;
}