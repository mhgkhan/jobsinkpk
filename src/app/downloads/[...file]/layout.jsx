
export async function generateMetadata({ params }) {
    const filename = await params;

    const title = filename.file.toString()
        .split("_")
        .join(" ")
        .toUpperCase();

    return {
        title: `${title} Download`,
        description: `Download ${title} in PDF format. Access essential forms, applications, and documents for your convenience. Click the download button to securely save the file to your device and access it whenever you need.`,
        keywords: [
            title,
            "Download",
            "PDF",
            "Forms",
            "Applications",
            "Documents",
        ],
    };
}

export default function DownloadRootLayout({ children }) {
    return <>{children}</>;
}