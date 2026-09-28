import Image from 'next/image';
import React from 'react'
import { headers } from "next/headers";



const fetchJob = async (slug, userip, userdevice, useros) => {
    let jobObj = {};
    try {
        const request = await fetch(`${process.env.DOMAIN}/publicaccess/jobs/${slug}/`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                userip,
                userdevice,
                useros
            }
        })

        if (!request.ok) {
            jobObj.error = true;
            jobObj.success = false;
            jobObj.message = request.statusText
            return jobObj;
        }
        
        const response = await request.json();
        if (response.success) {
            jobObj.success = true;
            jobObj.error = false;
            jobObj.message = "Jobs fetched"
            jobObj.data = response.data;
        }

        else {
            jobObj.success = false;
            jobObj.error = true;
            jobObj.message = response.message;
        }


    } catch (error) {
        jobObj.success = false;
        jobObj.error = true;
        jobObj.message = error.message;
    } finally {
        return jobObj;
    }
}




const page = async ({ params }) => {


    const { slug } = await params;

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



    const thisJob = await fetchJob(slug, ip, device, os);


    // console.log(thisJob)




    const metadata = {
        title: thisJob?.data?.jobTitle ?? "Job title not found",
        description: thisJob?.data?.jobDescription ?? "Job description not found",

        icons: {
            icon: thisJob?.data?.imageUrl ?? "https://jobsinkpk..online/logo.jpg",
        },

        // ✅ Social preview image (Open Graph + Twitter)
        openGraph: {
            title: thisJob?.data?.jobTitle ?? "Job title not found",
            description: thisJob?.data?.jobDescription ?? "Job description not found",
            url: `https://jobsinkpk.online/job/${slug}`,
            siteName: "JobsInKPK",
            images: [
                {
                    url: thisJob?.data?.jobImage || "https://jobsinkpk.online/logo.jpg",
                    width: 1200,
                    height: 630,
                    alt: thisJob?.data?.imageUrl ?? "Job image not found",
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: thisJob?.data?.jobTitle ?? "Job title not found",
            description: thisJob?.data?.jobDescription ?? "Job description not found",
            images: [
                thisJob?.data?.imageUrl || "https://jobsinkpk.online/logo.jpg",
            ],
        },
    }

    return (
        <main className="min-h-screen">
            <section className='hero'>
                <div className="conteiner mx-auto">
                    {!slug ? slug.length < 10 ? <h1>Job Not found</h1> : <h1>Job Not found</h1> : ""}

                    {
                        thisJob.error ? <h1>{thisJob.message}</h1> : <div className="page my-5 md:w-[80%] w-full mx-auto p-2 border-2 border-green-500 rounded-md">

                            <div className="w-full md:h-[350px] h-[200px] object-fill overflow-hidden">

                                <Image src={thisJob.data.imageUrl} width={500} height={300} alt={thisJob.data.jobTitle + ' picture - Jobsinkpk jobsinkpk.online '} className="object-cover w-full" />

                            </div>

                            <h1 className="mx-auto text-center md:text-4xl text-2xl font-bold my-1" >{thisJob.data.jobTitle??"Job title not found"}</h1>
                            <p className="text-lg text-center my-2">{thisJob.data.jobDescription}</p>

                            <div className="px-2 my-5 flex items-center justify-between flex-wrap bg-[#d9f9df80] backdrop-blur-sm p-2 rounded-md gap-2">

                                <div className=" block-category px-1 flex items-center justify-center gap-2 flex-col   my-2 md:w-auto w-full rounded-md">
                                    <h3>Category</h3>
                                    <p className="text-lg font-bold">{thisJob.data.jobCategory}</p>
                                </div>
                                <div className=" block-category px-1 flex items-center justify-center gap-2 flex-col   my-2 md:w-auto w-full rounded-md">
                                    <h3>Post Date</h3>
                                    <p className="text-lg font-bold">{`${new Date(thisJob.data.updatedAt).getDate()}-${new Date(thisJob.data.updatedAt).getMonth()}-${new Date(thisJob.data.updatedAt).getFullYear()}`}</p>
                                </div>
                                <div className=" block-category px-1 flex items-center justify-center gap-2 flex-col  my-2 md:w-auto w-full rounded-md">
                                    <h3>Last Date </h3>
                                    <p className="text-lg font-bold">{`${new Date(thisJob.data.expiryDate).getDate()}-${new Date(thisJob.data.expiryDate).getMonth()}-${new Date(thisJob.data.expiryDate).getFullYear()}`}</p>
                                </div>
                                <div className=" block-category px-1 flex items-center justify-center gap-2 flex-col  my-2 md:w-auto w-full rounded-md">
                                    <h3>Job Visitors  </h3>
                                    <p className="text-lg font-bold">{thisJob.data.totalViews || 0}</p>
                                </div>

                            </div>

                            <div className="conteint px-2" dangerouslySetInnerHTML={{ __html: thisJob.data.jobContent }}></div>

                        </div>
                    }


                </div>
            </section>
        </main>
    )
}

export default page
