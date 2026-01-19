import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-12">
          {/* Hero Section */}
          <section className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white">
              Bienvenue sur mon Portfolio
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Développeur passionné par les technologies web modernes
            </p>
          </section>

          {/* Navigation Cards */}
          <section className="grid gap-6 md:grid-cols-2">
            <Link
              href="/projets"
              className="group rounded-lg border border-zinc-200 p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <h2 className="mb-2 text-2xl font-semibold text-black dark:text-white">
                Mes Projets →
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Découvrez mes projets GitHub et réalisations
              </p>
            </Link>

            <Link
              href="/cv"
              className="group rounded-lg border border-zinc-200 p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <h2 className="mb-2 text-2xl font-semibold text-black dark:text-white">
                Mon CV →
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Consultez et téléchargez mon curriculum vitae
              </p>
            </Link>
          </section>

          {/* About Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              À propos
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Développeur web spécialisé dans les technologies modernes comme Next.js, React, 
              TypeScript et Tailwind CSS. Passionné par la création d'expériences utilisateur 
              exceptionnelles et le développement d'applications performantes.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
