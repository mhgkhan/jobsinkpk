import Image from "next/image";
import Link from "next/link";

export default function Downloads() {




    return <>

        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-left my-5 mx-2">
                Downloads & Forms
            </h1>
            <p className="text-lg my-3 text-justify text-italic mx-2">
                Find and download essential forms, applications, government documents, books, and other useful resources—all in one place. Browse job application forms, local government forms, civil registration documents, educational materials, and more.
            </p>


            <div className="all flex items-center justify-between gap-5 flex-wrap p-1 mx-2">

                {
                    Array.from(
                        [
                            { name: " ATS Friendly Resume Template  ", link: `/downloads/ats_friendly_resume_tempelate`, screenshot: "/files/screenshots/Screenshot_30-9-2026_31748_.jpeg" },
                            { name: " FC Teaching Hospital Job Application Form ", link: "/downloads/fc_teaching_hospital_job_application_form", screenshot: "/files/screenshots/Screenshot_30-9-2026_31810_.jpeg" },
                            { name: "Simple Job Application Form", link: "/downloads/job_application_form", screenshot: "/files/screenshots/Screenshot_30-9-2026_31821_.jpeg" },
                            { name: "Low Income Poverty Certificate Form", link: "/downloads/low_income_poverty_certificate", screenshot: "/files/screenshots/lowincome.jpeg" },
                            { name: "Birth Registration Certificate Form", link: "/downloads/Birth_Registration_Form", screenshot: "/files/screenshots/birthregistrationform.jpeg" },
                            { name: "Death Registration Certificate Form", link: "/downloads/Death_Registration_Form", screenshot: "/files/screenshots/deathregistrationform.jpeg" },
                            { name: "Nikah (Marrage) Registration Certificate Form", link: "/downloads/Nikkaah_Registration_Form", screenshot: "/files/screenshots/nikahregistration.jpeg" },
                        ]
                    ).map((ele, ind) => {
                        return <div key={ind + 1} className="download-block w-[400px] max-h-[550px] border border-1 border-gray-400 rounded-md shadow-md shadow-gray-200">
                            <div className="preview w-full h-[200px] overflow-auto rounded-md shadow-md shadow-gray-300 overflow-hidden">
                                <Image src={`${ele.screenshot}`} width={400} height={200} alt="preview" className="w-full h-auto object-cover" />
                            </div>

                            <h3 className="text-xl text-left font-bold my-5 mx-2">{ele.name}</h3>
                            <Link href={`${ele.link}`} target="_blank" className="text-blue-600 w-full text-center mx-auto  text-left mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block">
                                Download Now
                            </Link>
                        </div>

                    })
                }


            </div>
        </div>

    </>
}