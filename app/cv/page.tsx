import Link from "next/link";
import { DownloadButton } from "./download-button";

export const metadata = {
  title: "CV - Portfolio",
  description: "Mon curriculum vitae",
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
          >
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white">
            Curriculum Vitae
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Développeur Web Full-Stack
          </p>
        </div>

        {/* CV Content */}
        <div className="space-y-8">
          {/* Download Section */}
          <section className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-semibold text-black dark:text-white">
                  Télécharger mon CV
                </h2>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Version complète au format PDF
                </p>
              </div>
              <DownloadButton />
            </div>
          </section>

          {/* Skills Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Compétences
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="mb-2 font-semibold text-black dark:text-white">
                  Frontend
                </h3>
                <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Next.js 15 & React 19</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• HTML5 / CSS3</li>
                </ul>
              </div>
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="mb-2 font-semibold text-black dark:text-white">
                  Backend & Tools
                </h3>
                <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Node.js</li>
                  <li>• Server Actions</li>
                  <li>• Git & GitHub</li>
                  <li>• Vercel</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Expérience
            </h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Développeur Web Full-Stack
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Développement d&apos;applications web modernes avec Next.js, React et TypeScript.
                  Création d&apos;interfaces utilisateur responsives et performantes.
                  Intégration d&apos;APIs et services tiers.
                </p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Formation
            </h2>
            <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Développement Web et Applications
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Formation spécialisée en développement web moderne et technologies JavaScript
              </p>
            </div>
          </section>

          {/* Projects Link */}
          <section className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 text-center dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Mes Projets
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Découvrez mes réalisations et contributions
            </p>
            <Link
              href="/projets"
              className="mt-4 inline-block rounded-md bg-black px-6 py-2 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Voir mes projets
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
