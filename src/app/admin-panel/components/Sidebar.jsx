export default function Sidebar() {
    return (
      <div className="w-64 bg-gray-800 shadow-md h-screen p-4">
        <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="block p-2 bg-gray-700 rounded">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-900 rounded">Loan Management</a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-900 rounded">Analysis</a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-900 rounded">Settings</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
