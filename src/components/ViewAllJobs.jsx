import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <section className="m-auto w-44 my-10 px-2">
      <Link
        to="/jobs"
        className="block bg-black text-white text-center py-4 px-2 rounded-xl
         hover:bg-red-800 transition duration-500 ease-in-out"
      >
        View All Jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
