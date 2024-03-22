import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <ul className="flex justify-between items-center">
          <li>
            <Link to="/" className="text-white font-bold text-lg">Home</Link>
          </li>
          <li>
            <Link to="/signup" className="text-white font-bold text-lg">Signup</Link>
          </li>
          <li>
            <Link to="/login" className="text-white font-bold text-lg">Login</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
