'use client';

import { downloadCV } from "@/app/actions/cv";

export function DownloadButton() {
  const handleDownload = async () => {
    // Call server action for logging/analytics
    await downloadCV();
    
    // Trigger download on client side
    const link = document.createElement('a');
    link.href = '/cv.txt';
    link.download = 'CV-Lucas.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="rounded-md bg-black px-6 py-2 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
    >
      📥 Télécharger le CV
    </button>
  );
}
