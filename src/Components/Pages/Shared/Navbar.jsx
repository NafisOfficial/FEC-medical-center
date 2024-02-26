

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-blue-950">
        <div className="flex-1">
          <a className="text-lg font-bold text-white">FEC MEDICAL CENTER</a>
        </div>
        <div className="flex-none">
          <div className="flex gap-4 me-5">
            <a href=""  className="text-white font-semibold">Home</a><a href=""  className="text-white font-semibold">Purces</a><a href=""  className="text-white font-semibold">Doctors Info</a>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
