import React from 'react';
import { TagIcon, MoreHorizontalIcon, PlusIcon } from 'lucide-react';
interface TransactionListProps {
  filterType: 'all' | 'untagged';
}
export function TransactionList({
  filterType
}: TransactionListProps) {
  // Mock transaction data with some untagged transactions
  const allTransactions = [{
    id: 7,
    date: 'Oct 1, 2023',
    description: 'Canva Pro Subscription',
    amount: -12.99,
    category: 'Software',
    tagged: false
  }, {
    id: 8,
    date: 'Sep 30, 2023',
    description: 'Fiverr - Thumbnail Design',
    amount: -35.0,
    category: 'Outsourcing',
    tagged: false
  }, {
    id: 9,
    date: 'Sep 28, 2023',
    description: 'Instagram Ad Spend',
    amount: -60.0,
    category: 'Advertising',
    tagged: false
  }, {
    id: 10,
    date: 'Sep 27, 2023',
    description: 'Twitch Payout',
    amount: 320.5,
    category: 'Income',
    tagged: false
  }, {
    id: 11,
    date: 'Sep 26, 2023',
    description: 'Notion Subscription',
    amount: -8.0,
    category: 'Software',
    tagged: false
  }, {
    id: 12,
    date: 'Sep 25, 2023',
    description: 'PayPal Fee',
    amount: -4.32,
    category: 'Bank Fees',
    tagged: true
  }, {
    id: 13,
    date: 'Sep 24, 2023',
    description: 'Client Payment - Brand Deal',
    amount: 1500.0,
    category: 'Income',
    tagged: true
  }, {
    id: 14,
    date: 'Sep 22, 2023',
    description: 'Tripod Purchase - Amazon',
    amount: -129.99,
    category: 'Equipment',
    tagged: true
  }, {
    id: 15,
    date: 'Sep 21, 2023',
    description: 'Zoom Pro Subscription',
    amount: -14.99,
    category: 'Software',
    tagged: true
  }, {
    id: 16,
    date: 'Sep 20, 2023',
    description: 'YouTube Ad Revenue',
    amount: 412.8,
    category: 'Income',
    tagged: true
  }, {
    id: 17,
    date: 'Sep 18, 2023',
    description: 'LinkedIn Premium',
    amount: -39.99,
    tagged: false
  }, {
    id: 18,
    date: 'Sep 17, 2023',
    description: 'Lighting Kit - B&H Photo',
    amount: -299.0,
    category: 'Equipment',
    tagged: true
  }, {
    id: 19,
    date: 'Sep 15, 2023',
    description: 'Airbnb - Conference Travel',
    amount: -215.75,
    category: 'Travel',
    tagged: true
  }, {
    id: 20,
    date: 'Sep 13, 2023',
    description: 'Uber - Client Meeting',
    amount: -23.5,
    category: 'Travel',
    tagged: true
  }, {
    id: 21,
    date: 'Sep 12, 2023',
    description: 'Gumroad Payment',
    amount: 87.0,
    category: 'Income',
    tagged: true
  }, {
    id: 22,
    date: 'Sep 10, 2023',
    description: 'Domain Renewal - GoDaddy',
    amount: -19.99,
    category: 'Hosting',
    tagged: true
  }, {
    id: 23,
    date: 'Sep 9, 2023',
    description: 'Dropbox Subscription',
    amount: -9.99,
    category: 'Software',
    tagged: true
  }, {
    id: 24,
    date: 'Sep 7, 2023',
    description: 'TikTok Promotion',
    amount: -45.0,
    category: 'Advertising',
    tagged: true
  }, {
    id: 25,
    date: 'Sep 5, 2023',
    description: 'Merch Sales - Shopify',
    amount: 290.0,
    category: 'Income',
    tagged: true
  }, {
    id: 26,
    date: 'Sep 3, 2023',
    description: 'Hootsuite Subscription',
    amount: -49.0,
    category: 'Software',
    tagged: true
  }, {
    id: 27,
    date: 'Sep 2, 2023',
    description: 'Client Payment - Social Media Package',
    amount: 980.0,
    category: 'Income',
    tagged: true
  }, {
    id: 28,
    date: 'Sep 1, 2023',
    description: 'Lunch - Meeting with Collaborator',
    amount: -37.65,
    category: 'Meals & Entertainment',
    tagged: true
  }, {
    id: 29,
    date: 'Aug 30, 2023',
    description: 'Rode Microphone',
    amount: -199.99,
    category: 'Equipment',
    tagged: true
  }, {
    id: 30,
    date: 'Aug 29, 2023',
    description: 'Editor Payment - Freelance',
    amount: -250.0,
    category: 'Outsourcing',
    tagged: true
  }, {
    id: 31,
    date: 'Aug 27, 2023',
    description: 'iCloud Storage',
    amount: -2.99,
    category: 'Software',
    tagged: false
  }, {
    id: 32,
    date: 'Aug 26, 2023',
    description: 'Client Payment - Product Photos',
    amount: 540.0,
    category: 'Income',
    tagged: true
  }, {
    id: 33,
    date: 'Aug 24, 2023',
    description: 'Livestream Software License',
    amount: -79.99,
    category: 'Software',
    tagged: true
  }, {
    id: 34,
    date: 'Aug 23, 2023',
    description: 'Facebook Ad Spend',
    amount: -120.0,
    category: 'Advertising',
    tagged: true
  }, {
    id: 35,
    date: 'Aug 21, 2023',
    description: 'Printer Ink',
    amount: -35.0,
    category: 'Office Supplies',
    tagged: true
  }, {
    id: 36,
    date: 'Aug 20, 2023',
    description: 'Coffee with Potential Partner',
    amount: -7.5,
    category: 'Meals & Entertainment',
    tagged: true
  }, {
    id: 37,
    date: 'Aug 18, 2023',
    description: 'WiFi Bill',
    amount: -55.0,
    category: 'Utilities',
    tagged: true
  }, {
    id: 38,
    date: 'Aug 16, 2023',
    description: 'Client Refund',
    amount: -100.0,
    category: 'Refunds',
    tagged: true
  }, {
    id: 39,
    date: 'Aug 15, 2023',
    description: 'Merch Supplier Invoice',
    amount: -420.0,
    category: 'Cost of Goods Sold',
    tagged: true
  }, {
    id: 40,
    date: 'Aug 14, 2023',
    description: 'Google Workspace Subscription',
    amount: -12.0,
    category: 'Software',
    tagged: true
  }, {
    id: 41,
    date: 'Aug 12, 2023',
    description: 'Video Editing Course',
    amount: -149.0,
    category: 'Education',
    tagged: true
  }, {
    id: 42,
    date: 'Aug 10, 2023',
    description: 'Hard Drive - Backup',
    amount: -89.99,
    category: 'Equipment',
    tagged: true
  }, {
    id: 43,
    date: 'Aug 9, 2023',
    description: 'Client Payment - TikTok Campaign',
    amount: 1250.0,
    category: 'Income',
    tagged: true
  }, {
    id: 44,
    date: 'Aug 7, 2023',
    description: 'Freelancer - Animation Work',
    amount: -300.0,
    category: 'Outsourcing',
    tagged: true
  }, {
    id: 45,
    date: 'Aug 5, 2023',
    description: 'Phone Bill',
    amount: -85.0,
    category: 'Utilities',
    tagged: true
  }, {
    id: 46,
    date: 'Aug 4, 2023',
    description: 'Stock Photo Purchase',
    amount: -15.0,
    category: 'Media',
    tagged: true
  }, {
    id: 47,
    date: 'Aug 2, 2023',
    description: 'Patreon Support',
    amount: -10.0,
    category: 'Donations',
    tagged: false
  }, {
    id: 48,
    date: 'Aug 1, 2023',
    description: 'Client Payment - YouTube Sponsorship',
    amount: 890.0,
    category: 'Income',
    tagged: true
  }, {
    id: 49,
    date: 'Jul 30, 2023',
    description: 'Miro Subscription',
    amount: -16.0,
    category: 'Software',
    tagged: true
  }, {
    id: 50,
    date: 'Jul 28, 2023',
    description: 'Laptop Repair',
    amount: -180.0,
    category: 'Maintenance',
    tagged: true
  }, {
    id: 51,
    date: 'Jul 26, 2023',
    description: 'Monthly Accounting Service',
    amount: -120.0,
    category: 'Professional Services',
    tagged: true
  }, {
    id: 52,
    date: 'Jul 25, 2023',
    description: 'YouTube Music Subscription',
    amount: -10.99,
    tagged: false
  }, {
    id: 53,
    date: 'Jul 23, 2023',
    description: 'LinkedIn Ad Spend',
    amount: -72.0,
    category: 'Advertising',
    tagged: true
  }, {
    id: 54,
    date: 'Jul 22, 2023',
    description: 'Consultation - Marketing Strategy',
    amount: -200.0,
    category: 'Professional Services',
    tagged: true
  }, {
    id: 55,
    date: 'Jul 20, 2023',
    description: 'Freelancer Payment - Voiceover',
    amount: -150.0,
    category: 'Outsourcing',
    tagged: true
  }];
  // Filter transactions based on the filterType
  const transactions = filterType === 'all' ? allTransactions : allTransactions.filter(transaction => !transaction.tagged);
  // Helper function to determine if a category is income (revenue) or expense
  const isCategoryIncome = (category: string) => {
    return category === 'Income' || category === 'Revenue';
  };
  return <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map(transaction => <tr key={transaction.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {transaction.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {transaction.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {transaction.tagged ? <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${isCategoryIncome(transaction.category) ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {transaction.category}
                  </span> : <button className="flex items-center text-gray-400 hover:text-gray-600 border border-dashed border-gray-300 rounded px-2 py-0.5 hover:bg-gray-50">
                    <PlusIcon size={12} className="mr-1" />
                    <span className="text-xs">Add category</span>
                  </button>}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right text-gray-900">
                {transaction.amount >= 0 ? '+' : '-'}$
                {Math.abs(transaction.amount).toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                {!transaction.tagged ? <button className="text-blue-600 hover:text-blue-900 mr-3">
                    <TagIcon size={16} />
                  </button> : <button className="text-gray-400 hover:text-gray-600 mr-3">
                    <TagIcon size={16} />
                  </button>}
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontalIcon size={16} />
                </button>
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>;
}