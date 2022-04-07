import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  const dashBoardItems = [
    {
      title: 'Home',
      icon: 'fa-solid fa-house',
      link: '/admin',
    },
    {
      title: 'Add User',
      icon: 'fa-solid fa-user',
      link: '/admin/add-user',
    },
    {
      title: 'User Feedback',
      icon: 'fa-solid fa-comment',
      link: '/admin/feedback',
    },
    {
      title: 'Blogs',
      icon: 'fa-solid fa-circle-plus',
      link: '/admin/blogs',
    },
  ];

  return (
    <div className="w-1/4 h-screen flex flex-col justify-between bg-bg-admin-sidebar">
      <div className="flex justify-between bg-bg-admin-sidebar-top py-2 px-4">
        <Link href="/admin">
          <h1 className="cursor-pointer text-sidebar-title text-2xl font-bold">
            Sadhna
          </h1>
        </Link>
        <button className="flex justify-center items-center bg-bg-sidebar-button py-1 px-2 text-sm font-medium rounded-lg">
          Varun <i className="fa-solid fa-caret-down ml-1"></i>
        </button>
      </div>
      <div className="p-3 mt-8 h-full">
        <ul className="cursor-pointer">
          {dashBoardItems.map((item) => {
            return (
              <Link href={item.link}>
                <li
                  className={`${
                    router.pathname === item.link
                      ? 'bg-sidebar-item-bg rounded-3xl mx-5 py-2 px-3 my-2'
                      : ''
                  }hover:bg-sidebar-item-bg-hover hover:rounded-3xl mx-5 py-2 px-3 my-2`}
                >
                  <span>
                    <i className={item.icon} />
                  </span>
                  <span className="ml-2">{item.title}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="bg-bg-admin-sidebar-top">
        <button className="bg-transparent px-3 py-1 border-2 border-gray-600 my-2 mx-5 hover:bg-gray-600">
          Logout
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
