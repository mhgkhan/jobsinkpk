import Image from "next/image";
import Link from "next/link";



const fetchJobs = async () => {
  let jobsObj = {};
  try {
    const request = await fetch(`https://jobsinkpkbackend.vercel.app/publicaccess/jobs`, {
      method: "GET",
      headers: { "content-type": "application/json" },
      next: { revalidate: 7200 }
    })

    if (!request.ok) {
      jobsObj.error = true;
      jobsObj.success = false;
      jobsObj.message = request.statusText
      return jobsObj;
    }

    const response = await request.json();
    if (response.success) {
      jobsObj.success = true;
      jobsObj.error = false;
      jobsObj.message = "Jobs fetched"
      jobsObj.data = response.data;
    }

    else {
      jobsObj.success = false;
      jobsObj.error = true;
      jobsObj.message = response.message;
    }


  } catch (error) {
    jobsObj.success = false;
    jobsObj.error = true;
    jobsObj.message = error.message;
  } finally {
    return jobsObj;
  }
}


export default async function Home() {

  const allJobs = await fetchJobs();



  return (
    <main className="min-h-screen">
      <section className="hero">

        <div className="container mx-auto md:py-20 py-10">
          <h1 className="my-2 text-3xl text-left font-bold md:w-[50%] w-full">Latest Jobs in Pakistan 2026</h1>
          <p className="my-2 text-lg md:w-[50%] w-full">
            Find the latest jobs in Pakistan 2026 with daily updates on government, private, and online opportunities. Jobsinkpk helps you explore verified job listings, apply easily, and stay ahead in your career journey.
          </p>
        </div>
      </section>
      <section className="md:my-5 my-2">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold"> Today Latest Jobs </h2>
          <table className="my-5 w-full border border-1 border-gray-300">
            <thead>
              <tr className="my-1 border-b border-gray-400 rounded-md">
                <th className=" py-2 px-1 border-r border-gray-400 text-left">S.No</th>
                <th className="md:w-[50%] w-autoo py-2 px-1 border-r border-gray-400 text-left">Title</th>
                <th className=" py-2 px-1 border-r border-gray-400 text-left">Last Date</th>
                <th className=" py-2 px-1 border-r border-gray-400 text-left">Job Details </th>
              </tr>
            </thead>
            <tbody>
              {
                allJobs.error ? <tr><td colSpan={4} className="text-red-600 text-lg text-center my-5">{allJobs.message}</td></tr> : allJobs.data.length < 1 ?
                  <tr><td colSpan={4} className="text-red-600 text-lg text-center my-5">{"No Jobs found"}</td></tr> : allJobs?.data?.map((ele, ind) => {
                    return <tr key={ind} className="my-1 border-b border-gray-400 rounded-md">
                      <th className="py-2 px-1 border-r border-gray-400 text-left">{ind + 1}</th>
                      <th className="md:w-[50%] w-autoo py-2 px-1 border-r border-gray-400 text-left">{ele.jobTitle}</th>
                      <th className="py-2 px-1 border-r border-gray-400 text-left">{ele.expiryDate}</th>
                      <th className="py-2 px-1 border-r border-gray-400 text-left"> <Link href={`/job/${ele.slug}`} className="w-full text-blue-600 p-2 rounded-lg font-bold">Job Details</Link> </th>
                    </tr>
                  }
                  )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

