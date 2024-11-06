import { HiMiniBars4, HiOutlineBell, HiMagnifyingGlass } from "react-icons/hi2";
import { useGlobalState } from "../utils/GlobalStateContext";

const Header = ({ setSidebarOpen }) => {
  const { firstName, lastName } = useGlobalState();
  const displayName =
    firstName || lastName ? `${firstName} ${lastName}` : "No Name";

  return (
    <div className="sticky top-0 z-40 w-full flex h-16 shrink-0 items-center gap-x-4 bg-white px-4 border-b sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <HiMiniBars4 className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="relative flex flex-1" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <HiMagnifyingGlass
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
            aria-hidden="true"
          />
          <input
            id="search-field"
            className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:ring-offset-0 sm:text-sm"
            placeholder="Search..."
            type="search"
            name="search"
          />
        </form>
        <div className="flex flex-1 justify-end items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">View notifications</span>
            <HiOutlineBell className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div
            className="h-6 w-px bg-gray-900/10 lg:hidden"
            aria-hidden="true"
          />

          <div className="relative">
            <div className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full bg-gray-50"
                src={`https://ui-avatars.com/api/?name=${displayName.replace(
                  " ",
                  "+"
                )}&background=random&size=40`}
                alt=""
              />
              <span className="hidden lg:flex lg:items-center">
                <span
                  className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                  aria-hidden="true"
                >
                  {displayName}
                </span>
              </span>
            </div>
          </div>
          {/* Profile dropdown */}
        </div>
      </div>
    </div>
  );
};

export default Header;
