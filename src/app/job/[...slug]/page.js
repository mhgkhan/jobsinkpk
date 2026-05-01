import React from 'react'




const fetchJob = async (slug) => {
    let jobObj = {};
    console.log("the slug from fucntion is ", slug)
    try {
        const request = await fetch(`https://jobsinkpkbackend.vercel.app/publicaccess/jobs/${slug}/`, {
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
        console.log(response)
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


export async function generateMetadata({ params, searchParams }, parent) {
    const slug = (await params).slug

    const thisJob = await fetchJob(slug);

    return {
        title: thisJob.data.jobTitle + " | jobsinkpk.vercel.app",
        description: thisJob.data.jobDescription,
    }
}

export const config = { amp: true };




const page = async ({ params }) => {


    const { slug } = await params;
    const thisJob = await fetchJob(slug);


    let lastDate, postDate;

    if (!thisJob.error) {
        lastDate = `${new Date(thisJob.data.expiryDate).getDate()}/ ${new Date(thisJob.data.expiryDate).getFullYear()}/${new Date(thisJob.data.expiryDate).getFullYear()}`
        postDate = `${new Date(thisJob.data.updatedAt).getDate()}/ ${new Date(thisJob.data.updatedAt).getFullYear()}/${new Date(thisJob.data.updatedAt).getFullYear()}`
    }



    return (
        <main className="min-h-screen">
            <section className='hero'>
                <div className="conteiner mx-auto">
                    {!slug ? slug.length < 10 ? <h1>Job Not found</h1> : <h1>Job Not found</h1> : ""}

                    {
                        thisJob.error ? <h1>{thisJob.message}</h1> : <div className="page my-5 md:w-[80%] w-full mx-auto p-2 border-2 border-green-500 rounded-md">

                            <h1 className="mx-auto text-center md:text-4xl text-2xl font-bold">{thisJob.data.jobTitle}</h1>
                            <p className="text-lg text-center my-2">{thisJob.data.jobDescription}</p>

                            <div className="px-2 my-5 flex items-center justify-between flex-wrap">

                                <div className=" block-category px-1 flex items-center justify-center gap-2 flex-col  border border-1 border-green-500 my-2 md:w-auto w-full rounded-md">
                                    <h3>Category</h3>
                                    <p className="text-lg font-bold">{thisJob.data.jobCategory}</p>
                                </div>
                                <div className=" block-category px-1 flex items-center justify-center gap-2 flex-col  border border-1 border-green-500 my-2 md:w-auto w-full rounded-md">
                                    <h3>Post Date</h3>
                                    <p className="text-lg font-bold">{postDate}</p>
                                </div>
                                <div className=" block-category px-1 flex items-center justify-center gap-2 flex-col  border border-1 border-green-500 my-2 md:w-auto w-full rounded-md">
                                    <h3>Last Date </h3>
                                    <p className="text-lg font-bold">{lastDate}</p>
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
