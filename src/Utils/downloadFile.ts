export const downloadResumePdf = (srcLink: string) => {
    const name = srcLink.split("/").pop()
    const link = document.createElement("a");
    link.href = srcLink;
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    link.download = name || "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
