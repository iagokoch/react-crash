import { useParams, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return (
    <>
      <section>
        <div className="container  m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-red-500 hover:text-red-700 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-#B9BAA3 mb-4">{job.type}</div>
                <h1 className=" text-black text-3xl font-bold mb-4">
                  {job.title}
                </h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-red-700 mr-1" />
                  <p className="text-red-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-gray-200 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-red-700 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className=" text-black mb-4">{job.description}</p>

                <h3 className="text-red-700 text-lg font-bold mb-2">Salary</h3>

                <p className=" text-black mb-4">{job.salary} / Year</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-xl text-black font-bold mb-6">
                  Company Info
                </h3>

                <h2 className=" text-black text-2xl">{job.company.name}</h2>

                <p className=" text-black my-2">{job.company.description}</p>

                <hr className="my-4" />

                <h3 className=" text-black text-xl">Contact Email:</h3>

                <p className="my-2 bg-red-50 p-2 font-bold rounded-xl">
                  {job.company.contactEmail}
                </p>

                <h3 className=" text-black text-xl">Contact Phone:</h3>

                <p className="my-2 bg-red-50 p-2 font-bold rounded-xl">
                  {" "}
                  {job.company.contactPhone}
                </p>
              </div>

              <div className="bg-gray-200 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl text-black font-bold mb-6">
                  Manage Job
                </h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-2 px-2   rounded-full w-60 focus:outline-none focus:shadow-outline mt-4 mx-auto block"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded-full w-60 focus:outline-none focus:shadow-outline mt-4 mx-auto block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
