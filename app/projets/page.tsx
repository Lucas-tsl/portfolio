import Link from "next/link";
import { getGitHubRepos } from "@/app/actions/github";

export const metadata = {
  title: "Projets - Portfolio",
  description: "Mes projets et contributions sur GitHub",
};

export default async function ProjetsPage() {
  const repos = await getGitHubRepos();

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
          >
            ← Retour à l'accueil
          </Link>
          <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white">
            Mes Projets
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Découvrez mes projets et contributions sur GitHub
          </p>
        </div>

        {/* Projects Grid */}
        {repos.length === 0 ? (
          <div className="text-center text-zinc-600 dark:text-zinc-400">
            Aucun projet trouvé
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <article
                key={repo.id}
                className="flex flex-col rounded-lg border border-zinc-200 p-6 transition-all hover:border-zinc-400 hover:shadow-lg dark:border-zinc-800 dark:hover:border-zinc-600"
              >
                <div className="flex-1 space-y-3">
                  <h2 className="text-xl font-semibold text-black dark:text-white">
                    {repo.name}
                  </h2>
                  
                  {repo.description && (
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {repo.description}
                    </p>
                  )}

                  {/* Language and Stats */}
                  <div className="flex flex-wrap gap-3 text-sm text-zinc-500 dark:text-zinc-500">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="h-3 w-3 rounded-full bg-blue-500" />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        ⭐ {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        🔀 {repo.forks_count}
                      </span>
                    )}
                  </div>

                  {/* Topics */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {repo.topics.slice(0, 5).map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Links */}
                <div className="mt-4 flex gap-3">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-md border border-zinc-300 px-4 py-2 text-center text-sm font-medium text-black transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
                  >
                    Voir sur GitHub
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-md bg-black px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
