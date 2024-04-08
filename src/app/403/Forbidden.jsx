import { Link } from "react-router-dom";

const Forbidden = () => {
  return (
    <main className="h-screen grid place-content-center text-center space-y-3">
      <div>
        <h1 className="text-[150px] font-bold text-gray-500">403</h1>
        <h1 className="text-3xl font-medium text-gray-500">Access forbidden</h1>
      </div>
      <p className="text-gray-500 py-4">
        You don&apos;t have permission to access this page
      </p>
      <Link to="/">
        <button className="px-2 py-4 uppercase text-gray-500 font-medium border-2 bg-transparent border-gray-400 rounded-md hover:bg-gray-400 hover:delay-200 hover:text-white hover:duration-300 focus:ring focus:ring-neutral-500 focus:text-white focus:bg-gray-400 focus:border-none">
          Go to homepage
        </button>
      </Link>
    </main>
  );
};

export default Forbidden;
