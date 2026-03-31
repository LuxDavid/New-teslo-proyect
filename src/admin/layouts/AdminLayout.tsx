import { useState } from 'react'
import { AdminSidebar } from '../components/AdminSidebar';
import { AdminHeader } from '../components/AdminHeader';

export const AdminLayout = () => {

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return (
  <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar 
        isCollapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
    <div className="flex-1 flex flex-col">
        <AdminHeader />
        
        <main className="flex-1 p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome back, John! 👋
            </h1>
            <p className="text-gray-600">
              Here's what's happening with your business today.
            </p>
          </div>
          </main>
    </div>

  </div>
  )
}

export default AdminLayout;
