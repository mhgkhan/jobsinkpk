import Image from 'next/image';
import React from 'react'
import { headers } from "next/headers";



const fetchJob = async (slug) => {
    let jobObj = {};
    try {
        const request = await fetch(`${process.env.DOMAIN}/publicaccess/jobs/${slug}/`, {
            method: "GET",
            headers: { "content-type": "application/json" }
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


const ipRequest = async (ip, os, device, slug) => {
  let obj = {};

  try {
    const request = await fetch(`${process.env.DOMAIN}/fromclient/job/${slug}`, {
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




const page = async ({ params }) => {


    const { slug } = await params;
    const thisJob = await fetchJob(slug);


    
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
    
      const resIp = await ipRequest(ip, os, device, slug);





    const metadata = {
        title: thisJob.data.jobTitle,
        description: thisJob.data.jobDescription,

        icons: {
            icon: thisJob.data.imageUrl,
        },

        // ✅ Social preview image (Open Graph + Twitter)
        openGraph: {
            title: thisJob.data.jobTitle,
            description: thisJob.data.jobDescription,
            url: `https://jobsinkpk.vercel.app/job/${slug}`,
            siteName: "JobsInKPK",
            images: [
                {
                    url: thisJob.data.jobImage || "https://jobsinkpk.vercel.app/default-preview.jpg",
                    width: 1200,
                    height: 630,
                    alt: thisJob.data.imageUrl,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: thisJob.data.jobTitle,
            description: thisJob.data.jobDescription,
            images: [
                thisJob.data.imageUrl || "https://jobsinkpk.vercel.app/default-preview.jpg",
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

                            <h1 className="mx-auto text-center md:text-4xl text-2xl font-bold my-1" >{thisJob.data.jobTitle}</h1>
                            <p className="text-lg text-center my-2">{thisJob.data.jobDescription}</p>
                            {/* <p className="text-lg text-center my-2">Visitors: {resIp.data.allVisitor??"00+"}</p> */}

                            <div className="px-2 my-5 flex items-center justify-between flex-wrap">

                                <div className=" block-category px-1 flex items-center justify-center gap-2 flex-col  border border-1 border-green-500 my-2 md:w-auto w-full rounded-md">
                                    <h3>Category</h3>
                                    <p className="text-lg font-bold">{thisJob.data.jobCategory}</p>
                                </div>
                                <div className=" block-category px-1 flex items-center justify-center gap-2 flex-col  border border-1 border-green-500 my-2 md:w-auto w-full rounded-md">
                                    <h3>Post Date</h3>
                                    <p className="text-lg font-bold">{`${new Date(thisJob.data.updatedAt).getDate()}-${new Date(thisJob.data.updatedAt).getMonth()}-${new Date(thisJob.data.updatedAt).getFullYear()}`}</p>
                                </div>
                                <div className=" block-category px-1 flex items-center justify-center gap-2 flex-col  border border-1 border-green-500 my-2 md:w-auto w-full rounded-md">
                                    <h3>Last Date </h3>
                                    <p className="text-lg font-bold">{`${new Date(thisJob.data.expiryDate).getDate()}-${new Date(thisJob.data.expiryDate).getMonth()}-${new Date(thisJob.data.expiryDate).getFullYear()}`}</p>
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
