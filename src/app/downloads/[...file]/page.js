import Link from "next/link";

export default async function ({ params }) {

    const filename = await params;




    if (!filename) {
        return <div className="text-xl text-center flex flex-col gap-10">
            <h1 className="text-2xl text-center mx-auto"> Your Requested Page Not Found</h1>
            <br />
            <Link className="block text-center mx-auto" href="/">Back to Home</Link>
        </div>
    }


    return <>

        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center"> Download <br />  {filename.file.toString().split("_").join(" ").toString().toUpperCase()} </h1>

            <p className="text-lg text-center mx-auto my-5 "> Download your file below. Click the download button to securely save {filename.file.toString().split("_").join(" ").toString().toUpperCase()} to your device and access it whenever you need.  </p>


            <div className="preview w-[90%]  h-auto block mx-auto my-10">
                <iframe src={`/files/${filename.file}.pdf`} width="100%" height="600px" className="border border-1 border-gray-400 rounded-md shadow-md shadow-gray-200" title="Download Preview"></iframe>
            </div>

            <Link href={`/files/${filename.file}.pdf`} target="_blank" className="button my-5 w-full text-center bg-blue-500 block p-2 font-bold text-white text-lg ">Download File</Link>

        </div>

    </>
}