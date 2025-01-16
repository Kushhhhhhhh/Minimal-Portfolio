import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import Link from "next/link"
import { myProjects, workExperience, skills } from "@/data/data"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Home() {

  return (
    <main className="min-h-screen bg-[#111111] text-gray-300 p-6 md:p-12 font-mono antialiased">
      <div className="max-w-3xl mx-auto space-y-16">
        <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <h1 className="text-3xl font-semibold text-white tracking-tight">
            Hi, I&apos;m Kush Sharma
          </h1>
          <nav className="flex items-center gap-6">
            <Link
              href="https://linkedin.com/in/kushsharma738"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/Kushhhhhhhh"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://x.com/KushSha06747704?mx=2"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="mailto:fullstack.kush@gmail.com"
              className="text-gray-400 hover:text-white transition-colors group flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
            </Link>

          </nav>
        </header>

        <section className="space-y-4">
          <div className="space-y-2 text-gray-300 leading-relaxed">
            <p className="flex gap-2">
              <span className="text-gray-500">•</span>
              <span>I&apos;m a Full-stack Developer from India, passionate about building impactful web applications.</span>
            </p>
            <p className="flex gap-2">
              <span className="text-gray-500">•</span>
              <span>
                Experienced in creating real-world applications that solve problems.{" "}
                <Link
                  href="https://linkedin.com/in/kushsharma738"
                  className="text-blue-400 underline underline-offset-4 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </Link>
              </span>
            </p>
            <p className="flex gap-2">
              <span className="text-gray-500">•</span>
              <span>I love connecting with the tech community and growing together.</span>
            </p>
            <p className="flex gap-2">
              <span className="text-gray-500">•</span>
              <span>Let&apos;s collaborate on exciting projects!</span>
            </p>
          </div>
        </section>

        <Separator className="bg-gray-800" />

        <section>
          <h2 className="text-xl font-semibold text-white mb-6">My Best Projects</h2>
          <div className="space-y-4">
            {myProjects.map((project, index) => (
              <Card
                key={index}
                className="flex justify-between items-baseline p-4 bg-[#1a1a1a] border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="space-x-2">
                  <span className="text-gray-500">{index + 1}.</span>
                  <Link
                    href={project.link}
                    className="text-blue-400 hover:underline underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </Link>
                  <span className="text-gray-400 text-sm">{" : "}{project.description}</span>
                </div>
                {project.users && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-400">{project.users}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  </div>
                )}
              </Card>
            ))}
          </div>
          <div className='p-2 mt-4'>
            <Link
              href="https://github.com/Kushhhhhhhh"
              className="text-blue-400 underline underline-offset-4 hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </Link>
          </div>
        </section>

        <Separator className="bg-gray-800" />

        <section>
          <h2 className="text-xl font-semibold text-white mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <Separator className="bg-gray-800" />

        <section>
          <h2 className="text-xl font-semibold text-white mb-6">Work Experience</h2>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <Card
                key={index}
                className="p-6 bg-[#1a1a1a] border-gray-800 hover:border-gray-700 transition-colors"
              >
                <h3 className="text-lg font-medium text-white mb-2">{job.role} at <span className='text-blue-400'>{job.company}</span></h3>
                <p className="text-sm text-gray-400 mb-4">{job.duration}</p>
                <ul className="list-disc list-inside text-gray-300 leading-relaxed">
                  {job.work.split('•').map((point, i) => (
                    point.trim() && <li key={i}>{point.trim()}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}