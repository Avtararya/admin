import Sidebar from '../../components/admin/admin-sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-3/4">This is Home</div>
    </div>
  );
};
export default Dashboard;
