import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [themeControl, setThemeControl] = useState("light");


  const handleThemeControl = () => {
    const newTheme = themeControl === "light" ? "dark" : "light";
    setThemeControl(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    < >
    
      <div className="md:navbar hidden  bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          <img
            className="w-auto h-[48px]"
            src="https://i.postimg.cc/8kxSTFKv/360-F-122726698-wz-Zycyye8-YAOlt-WUZf3f-KO0-H4-YB4cjx-O.jpg"
            alt=""
          />
          <span className="font-bold">Alternative</span>
        </Link>
      </div>
      <div>
      <div  onClick={handleThemeControl}>
      <label className="flex cursor-pointer gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
     </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Queries">Queries</Link>
          </li>
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
            
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div className="justify-between">Recommendations For Me</div>
              </li>
              <li>
                <Link to='/OwnQures'>My Queries</Link>
              </li>
              <li>
                <div>My recommendations </div>
              </li>
              
              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
      <div className="md:hidden navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          <img
            className="w-auto h-[48px]"
            src="https://i.postimg.cc/8kxSTFKv/360-F-122726698-wz-Zycyye8-YAOlt-WUZf3f-KO0-H4-YB4cjx-O.jpg"
            alt=""
          />
          <span className="font-bold">Alternative</span>
        </Link>
      </div>
      <div>
      <div  onClick={handleThemeControl}>
      <label className="flex cursor-pointer gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
     </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Queries">Queries</Link>
          </li>
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
            
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div className="justify-between">Recommendations For Me</div>
              </li>
              <li>
                <Link to='/OwnQures'>My Queries</Link>
              </li>
              <li>
                <div>My recommendations </div>
              </li>
              
              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Navbar;
