import SimpleDashboard from "@/components/SimpleDashboard";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";




export const fetchJobs = async () => {
  let jobsObj = {};
  try {
    const request = await fetch(`${process.env.DOMAIN}/publicaccess/jobs`, {
      method: "GET",
      headers: { "content-type": "application/json" },
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




const ipRequest = async (ip, os, device) => {
  let obj = {};

  try {
    const request = await fetch(`${process.env.DOMAIN}/fromclient/visitor/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        userIp: ip,
        userOs: os,
        userDevice: device
      })
    })

    const response = await request.json();
    // console.log(response)


    if (response.error) {
      obj.error = true;
      obj.success = false;
      obj.message = response.message;
    }


    else {

      obj.error = false;
      obj.message = response.message;
      obj.success = true;
      obj.data = response.data;
    }


  } catch (error) {
    obj.error = true;
    obj.success = false;
    obj.message = error.message;
  }
  finally {
    return obj;
  }
}


export default async function Home() {

  const allJobs = await fetchJobs();


  const userHeaders = await headers();

  const ip = userHeaders.get("x-forwarded-for")?.split(",")[0] || userHeaders.get("x-real-ip") || "Unknown";
  const ua = userHeaders.get("user-agent") || "Unknown";

  let os = "Unknown OS";
  if (/Windows/i.test(ua)) os = "Windows";
  else if (/Macintosh/i.test(ua)) os = "MacOS";
  else if (/Linux/i.test(ua)) os = "Linux";
  else if (/Android/i.test(ua)) os = "Android";
  else if (/iPhone|iPad/i.test(ua)) os = "iOS";

  const device = /Mobile/i.test(ua) ? "Mobile" : "Desktop";

  const resIp = await ipRequest(ip, os, device);



  return (
    <main className="min-h-screen ">
      <section className="hero relative block h-[50vh] ">
        <div className="hero-x w-full h-full relative object-cover">
          <Image src="/hero.png" alt="job in kpk hero picture" width="800" height="400" className="w-full h-full object-cover" />
        </div>
        <div className="hero-y w-full md:h-full h-[150%] absolute inset-0 bg-[#d9f9df80] backdrop-blur-sm px-2">
          <div className="container mx-auto md:py-5 py-5 flex items-center justify-center md:flex-row flex-col md:gap-5 gap-2">

            <div className="headings md:w-[50%] ">
              <h1 className="my-2 text-3xl text-left font-bold md:w-[90%] w-full">Latest Jobs in Pakistan 2026</h1>
              <p className="my-3 text-lg w-full">
                Find the latest jobs in Pakistan 2026 with daily updates on government, private, and online opportunities. Jobsinkpk helps you explore verified job listings, apply easily, and stay ahead in your career journey.
              </p>
              <button><Link href="https://www.facebook.com/profile.php?id=61580530301647" className=" flex items-center justify-center gap-2 p-2 rounded-md text-white font-bold text-lg my-2 bg-blue-700 w-auto" ><FaFacebook className="text-3xl" /> Follow Page </Link></button>
            </div>

            <SimpleDashboard visitors={resIp.error ? "1000" : resIp.data.visitors} jobs={resIp.error ? "1000" : resIp.data.jobs} />

          </div>
        </div>

      </section>
      <section className="md:my-5 mt-50 md:px-0 px-2">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold"> Today Latest Jobs </h2>
          <table className="my-5 w-full border border-1 border-gray-300 md:text-auto text-sm">
            <thead>
              <tr className=" text-xl my-1 border-b border-gray-400 rounded-md">
                <th className=" rounded-md  py-2 px-1 border-r border-gray-400 text-center wrap-anywhere">No</th>
                <th className=" rounded-md md:w-[50%] w-autoo py-2 px-1 border-r border-gray-400 text-center">Title</th>
                {/* <th className=" rounded-md py-2 px-1 border-r border-gray-400 text-centert wrap-anywhere">Advertisement </th> */}
                <th className=" rounded-md py-2 px-1 border-r border-gray-400 text-center ">Last Date</th>
                <th className=" rounded-md  py-2 px-1 border-r border-gray-400 text-center">Job Details </th>
              </tr>
            </thead>
            <tbody>
              {
                allJobs.error ? <tr><td colSpan={4} className="text-red-600 text-lg text-center my-5">{allJobs.message}</td></tr> : allJobs.data.length < 1 ?
                  <tr><td colSpan={4} className="text-red-600 text-lg text-center my-5">{"No Active Advertaisments"}</td></tr> : allJobs?.data?.reverse().map((ele, ind) => {
                    return <tr key={ind} className="my-1 border-b border-gray-400 rounded-md even:bg-[#b6f8e8e1]">
                      <th className="rounded-md text-center py-2 px-1   ">{ind + 1}</th>
                      <th className="rounded-md  text-center md:w-[50%] w-autoo py-2 px-1    text-left">{ele.jobTitle}</th>
                      {/* <th className="rounded-md text-center py-2 px-1    wrap-anywhere"><Link href={ele.imageUrl} target="_blank" className="w-full text-blue-600 p-2 wrap-anywhere rounded-lg font-bold">Advertisement</Link></th> */}
                      <th className="rounded-md text-center py-2 px-1   wrap-anywhere">{new Date(ele.expiryDate).toLocaleDateString()}</th>
                      <th className="rounded-md text-center py-2 px-1   "> <Link href={`/job/${ele.slug}`} className="w-full text-blue-600 p-2 rounded-lg font-bold">Job Details</Link> </th>
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

