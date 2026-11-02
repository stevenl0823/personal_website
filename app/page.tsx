'use client';

import { type ReactNode, useMemo, useState } from 'react';
import {
  ArrowRight, Braces, Download, ExternalLink, CodeXml as Github,
  GraduationCap, Mail, Menu, UsersRound,
} from 'lucide-react';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,
} from '@/components/ui/sheet';
import {
  education, experience, profile, researchThemes, service, teaching, workingPapers,
} from '@/data/profile';
import { capabilityGroups, selectedExperience, portfolioProjects, existingStudy, projectBriefs } from '@/data/portfolio';

const navigation = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
] as const;

const paperFilters = ['All', 'Conference ready', 'Data collection', 'In preparation'] as const;
type PaperFilter = (typeof paperFilters)[number];

function SectionHeading({ eyebrow, title, description, action }: {
  eyebrow: string; title: string; description?: string; action?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {action}
    </div>
  );
}

function NavLinks({ onNavigate, className = '' }: {
  onNavigate?: () => void; className?: string;
}) {
  return (
    <nav aria-label="Primary navigation" className={className}>
      {navigation.map((item) => (
        <a className="nav-link" href={item.href} key={item.href} onClick={onNavigate}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<PaperFilter>('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const filteredPapers = useMemo(
    () => selectedFilter === 'All'
      ? workingPapers : workingPapers.filter(paper => paper.stage === selectedFilter),
    [selectedFilter],
  );

  return (
    <main className="site-shell">
      <a className="skip-link" href="#projects">Skip to content</a>
      <header className="site-header">
        <div className="container flex items-center justify-between gap-5 py-4">
          <a className="flex min-w-0 items-center gap-3 text-[#10253f]" href="#home">
            <span className="brand-mark">WL</span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold">Wang (Steven) Liao</span>
              <span className="mt-0.5 block text-xs text-slate-500">Business, sports &amp; data analytics</span>
            </span>
          </a>
          <NavLinks className="hidden items-center gap-5 xl:flex" />
          <div className="flex items-center gap-3">
            <a className="hidden text-sm font-semibold text-[#007c91] sm:inline-flex" href={profile.github} target="_blank" rel="noreferrer">
              <Github aria-hidden="true" className="mr-2 size-4" /> GitHub
            </a>
            <a className="button-link button-dark hidden sm:inline-flex" href={profile.resumeDownload} download>
              <Download aria-hidden="true" className="size-4" /> Résumé PDF
            </a>
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger aria-label="Open navigation menu" className="grid size-11 place-items-center rounded-xl border border-slate-200 bg-white xl:hidden">
                <Menu aria-hidden="true" className="size-5" />
              </SheetTrigger>
              <SheetContent className="w-[min(23rem,90vw)] bg-[#f7fafc] p-7" side="right">
                <SheetHeader className="p-0 pr-10">
                  <SheetTitle className="font-serif text-2xl">Explore the portfolio</SheetTitle>
                  <SheetDescription>Experience, analytical skills, and academic work.</SheetDescription>
                </SheetHeader>
                <NavLinks className="mt-8 flex flex-col gap-6" onNavigate={() => setMenuOpen(false)} />
                <a className="button-link button-dark mt-8" href={profile.github} target="_blank" rel="noreferrer">
                  <Github aria-hidden="true" className="size-4" /> GitHub profile
                </a>
                <a className="text-link mt-3" href={profile.resumeDownload} download>Download résumé PDF</a>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-[#0a2540] text-white" id="home">
        <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-40" />
        <div className="container relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.45fr_0.8fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-semibold tracking-[0.1em] text-[#8ee4ed] uppercase">{profile.tagline}</p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.08] font-semibold tracking-[-0.045em] sm:text-6xl">
              Wang <span className="whitespace-nowrap">(Steven) Liao</span>
            </h1>
            <p className="mt-5 max-w-xl font-serif text-2xl leading-9 text-[#a5eaf0]">
              Quantitative research.<br />Sports business perspective.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">{profile.introduction}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button-link button-cyan" href="#projects">
                Explore projects <ArrowRight aria-hidden="true" className="size-4" />
              </a>
              <a className="button-link button-glass" href={profile.github} target="_blank" rel="noreferrer">
                <Github aria-hidden="true" className="size-4" /> GitHub
              </a>
              <a className="button-link button-glass" href={profile.linkedIn} target="_blank" rel="noreferrer">
                LinkedIn <ExternalLink aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>
          <aside className="hero-profile">
            <p className="text-sm font-semibold tracking-[0.1em] text-[#8ee4ed] uppercase">Academic foundation</p>
            <div className="mt-7">
              <GraduationCap aria-hidden="true" className="mb-4 size-7 text-[#a5eaf0]" />
              <h2 className="font-serif text-2xl leading-8 font-semibold">PhD Candidate</h2>
              <p className="mt-2 text-base text-white">Management Information Systems</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">University of Memphis<br />Expected August 2027</p>
            </div>
            <div className="mt-7 border-t border-white/15 pt-6">
              <p className="font-serif text-xl">MBA / MS in Sport Management</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">University of Massachusetts Amherst · 2022</p>
            </div>
            <div className="mt-7 border-t border-white/15 pt-6">
              <p className="text-sm leading-7 text-slate-300">Research methods, sport strategy, and venue finance inform the questions I bring to analytics.</p>
            </div>
          </aside>
        </div>
        <div className="border-t border-white/10 bg-[#071d30]/50">
          <div className="container flex flex-wrap gap-x-8 gap-y-3 py-5 text-sm font-medium text-slate-200">
            {['SQL & relational data', 'Python & R', 'Tableau & Excel', 'Statistical analysis', 'Sports business'].map(item => (
              <span className="flex items-center gap-2" key={item}><span className="size-1 rounded-full bg-[#65dbe6]" />{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="projects">
        <SectionHeading eyebrow="Analytics projects" title="Questions, methods, and evidence."
          description="An existing sports analytics study and a roadmap for future case studies in business analytics, data analytics, and data science." />
        <Tabs defaultValue="existing" className="mt-8">
          <TabsList className="project-tab-list" aria-label="Project portfolio">
            <TabsTrigger className="project-tab" value="existing">Existing study</TabsTrigger>
            <TabsTrigger className="project-tab" value="roadmap">Project roadmap · 4 briefs</TabsTrigger>
          </TabsList>
          <TabsContent value="existing" className="mt-6">
            <article className="rounded-3xl border border-[#a7d8df] bg-white p-6 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant="outline" className="h-auto whitespace-normal border-[#a7d8df] bg-cyan-50 px-3 py-1.5 text-sm text-[#00697d]">{existingStudy.status}</Badge>
                <p className="text-sm text-slate-500">{existingStudy.dates}</p>
              </div>
              <div className="mt-7 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="eyebrow">Independent study · sports analytics</p>
                  <h3 className="mt-3 font-serif text-3xl font-semibold tracking-tight">{existingStudy.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{existingStudy.description}</p>
                  <p className="mt-5 text-base font-semibold leading-7">{existingStudy.question}</p>
                  <p className="mt-4 text-base leading-7 text-slate-600">{existingStudy.contribution}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {existingStudy.tags.map(tag => <span className="skill-chip" key={tag}>{tag}</span>)}
                  </div>
                </div>
                <div className="rounded-2xl bg-[#eff6fa] p-6">
                  <h4 className="text-base font-semibold">Case-study materials to add</h4>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-7 text-slate-600">
                    {existingStudy.materials.map(item => <li key={item}>{item}</li>)}
                  </ul>
                  <p className="mt-5 text-sm leading-6 text-slate-500">Notebook, charts, and result links will appear once the original materials are available.</p>
                </div>
              </div>
            </article>
          </TabsContent>
          <TabsContent value="roadmap" className="mt-6">
            <p className="mb-6 max-w-3xl text-base leading-8 text-slate-600">These proposed project briefs describe future additions. They are not completed analyses or reported results.</p>
            <div className="grid gap-5 lg:grid-cols-2">
              {projectBriefs.map(brief => (
                <article className="work-card" key={brief.title}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="eyebrow">{brief.category}</p>
                    <Badge variant="outline" className="h-auto bg-slate-50 px-3 py-1 text-sm">Proposed project</Badge>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-semibold">{brief.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{brief.question}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {brief.tools.map(tool => <span className="skill-chip" key={tool}>{tool}</span>)}
                  </div>
                  <Accordion className="mt-5" multiple>
                    <AccordionItem value={brief.title}>
                      <AccordionTrigger className="py-3 text-base font-semibold">Evidence this case study should show</AccordionTrigger>
                      <AccordionContent className="text-base leading-7 text-slate-600">
                        <ul className="list-disc space-y-2 pl-5">{brief.materials.map(item => <li key={item}>{item}</li>)}</ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </article>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="section container border-t border-slate-200" id="work">
        <SectionHeading eyebrow="Selected work & experience" title="From research questions to business context."
          description="A selection of research, venue operations, and student consulting experience that informs my approach to analysis." />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {selectedExperience.map((item, index) => (
            <article className="work-card" key={item.title}>
              <div className="flex items-center justify-between gap-4">
                <span className="font-serif text-2xl text-[#007c91]">0{index + 1}</span>
                <Badge variant="outline" className="h-auto py-1 text-xs">{item.type}</Badge>
              </div>
              <p className="mt-8 text-sm font-semibold text-[#007c91]">{item.organization}</p>
              <h3 className="mt-3 font-serif text-2xl leading-8 font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-xs font-bold tracking-[0.08em] text-slate-500 uppercase">My contribution</p>
                <p className="mt-2 text-base leading-7 text-slate-600">{item.contribution}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {item.tags.map(tag => <span className="skill-chip" key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
        {portfolioProjects.length > 0 && (
          <div className="mt-14">
            <h3 className="font-serif text-3xl font-semibold">Analytics case studies</h3>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {portfolioProjects.map(project => (
                <article className="work-card" key={project.title}>
                  <p className="eyebrow">{project.context}</p>
                  <h4 className="mt-4 font-serif text-2xl font-semibold">{project.title}</h4>
                  <p className="mt-4 text-base leading-7 text-slate-600">{project.question}</p>
                  <p className="mt-4 text-base leading-7">{project.finding}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-500">{project.dataDisclosure}</p>
                  <div className="mt-6 flex flex-wrap gap-5">
                    {project.codeUrl && <a className="text-link" href={project.codeUrl} target="_blank" rel="noreferrer">View code <Github className="size-4" /></a>}
                    {project.dashboardUrl && <a className="text-link" href={project.dashboardUrl} target="_blank" rel="noreferrer">View dashboard <ExternalLink className="size-4" /></a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="border-y border-slate-200 bg-white" id="skills">
        <div className="section container">
          <SectionHeading eyebrow="Analytical toolkit" title="Tools supported by a research foundation."
            description="Hands-on tools and analytical methods drawn from my graduate research and professional background." />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {capabilityGroups.map(group => (
              <div className="border-t-2 border-[#007c91] pt-5" key={group.title}>
                <Braces aria-hidden="true" className="size-5 text-[#007c91]" />
                <h3 className="mt-4 font-serif text-2xl font-semibold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map(item => <span className="skill-chip" key={item}>{item}</span>)}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{group.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="experience">
        <SectionHeading eyebrow="Professional experience" title="Research rigor, business perspective."
          description="Experience across academic research, sports venue finance, and consulting." />
        <ol className="experience-timeline mt-12">
          {experience.map(position => (
            <li key={position.dates + position.title}>
              <p className="text-sm font-semibold text-[#007c91]">{position.dates}</p>
              <div>
                <h3 className="font-serif text-2xl font-semibold">{position.title}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-500">{position.organization}</p>
                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{position.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container pb-16" id="resume">
        <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Résumé</p>
            <h2 className="mt-3 font-serif text-2xl font-semibold">Experience and analytical skills, in one page.</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">A downloadable résumé covering research, sports business, data management, education, and technical methods.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a className="button-link button-dark" href={profile.resumeDownload} download><Download aria-hidden="true" className="size-4" /> Download PDF</a>
            <a className="button-link border-slate-200 bg-white text-[#007c91]" href={profile.resumeDownload} target="_blank" rel="noreferrer">View PDF <ExternalLink aria-hidden="true" className="size-4" /></a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#eaf2f8]" id="education">
        <div className="section container">
          <SectionHeading eyebrow="Education" title="Information systems, management, and sport." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {education.map(item => (
              <article className="rounded-3xl border border-slate-200 bg-white p-7" key={item.institution}>
                <p className="text-sm font-semibold text-[#007c91]">{item.date}</p>
                <h3 className="mt-6 font-serif text-2xl font-semibold leading-8">{item.credential}</h3>
                <p className="mt-4 text-base font-semibold">{item.institution}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.school}</p>
                {item.note && <p className="mt-4 text-sm leading-6 text-slate-500">{item.note}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="research">
        <SectionHeading eyebrow="Academic research" title="How technology changes decisions."
          description="Research interests connect AI ethics, consumer perceptions, sport technology, and immersive work." />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {researchThemes.map(theme => (
            <article className="rounded-2xl border border-slate-200 p-6" key={theme.number}>
              <p className="eyebrow">{theme.number} / {theme.signal}</p>
              <h3 className="mt-5 font-serif text-xl font-semibold">{theme.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{theme.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-serif text-2xl font-semibold">Working papers</h3>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter working papers">
              {paperFilters.map(filter => (
                <Button key={filter} type="button" aria-pressed={filter === selectedFilter}
                  className={filter === selectedFilter ? 'paper-filter selected' : 'paper-filter'}
                  variant="ghost" onClick={() => setSelectedFilter(filter)}>
                  {filter}
                </Button>
              ))}
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-500">Research in progress · Statuses reported in the academic CV.</p>
          <Accordion className="mt-5 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7" multiple>
            {filteredPapers.map(paper => (
              <AccordionItem className="py-2" key={paper.title} value={paper.title}>
                <AccordionTrigger className="gap-4 py-5 hover:no-underline">
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-[#007c91]">{paper.stage}</span>
                    <span className="mt-2 block font-serif text-lg leading-7">{paper.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pr-8 text-base leading-7 text-slate-600">
                  <p>{paper.collaborators}</p><p>{paper.status}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white" id="teaching">
        <div className="section container">
          <SectionHeading eyebrow="Teaching" title="Making technical ideas understandable."
            description="Classroom experience in information systems, database design, human resources, and finance." />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {teaching.map(role => (
              <article className="rounded-3xl border border-slate-200 p-7" key={role.institution}>
                <p className="text-sm font-semibold text-[#007c91]">{role.institution}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold">{role.role}</h3>
                <p className="mt-3 text-sm text-slate-500">{role.dates}</p>
                {role.courses.map(course => (
                  <div className="mt-6 border-t border-slate-100 pt-5" key={course.code}>
                    <p className="text-sm font-semibold text-[#007c91]">{course.code}</p>
                    <h4 className="mt-1 text-base font-semibold">{course.title}</h4>
                    <p className="mt-2 text-base leading-7 text-slate-600">{course.detail}</p>
                  </div>
                ))}
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:gap-10" id="service">
            <div className="shrink-0"><UsersRound aria-hidden="true" className="size-5 text-[#007c91]" /><h3 className="mt-3 font-serif text-xl font-semibold">Service &amp; affiliations</h3></div>
            <div className="grid flex-1 gap-5 md:grid-cols-3">
              {service.map(item => (
                <div key={item.year + item.role} className="border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold text-[#007c91]">{item.year} · {item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.organization}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a2540] text-white" id="contact">
        <div className="section container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.1em] text-[#8ee4ed] uppercase">Contact</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight">Let’s talk analytics.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">For analytics opportunities, research collaboration, or professional inquiries, reach me by email or connect on LinkedIn.</p>
            <a className="mt-5 inline-block text-base text-[#a5eaf0] underline underline-offset-4" href={'mailto:' + profile.email}>{profile.email}</a>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a className="button-link button-cyan" href={'mailto:' + profile.email}><Mail aria-hidden="true" className="size-4" /> Email Steven</a>
            <a className="button-link button-glass" href={profile.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" className="size-4" /> GitHub</a>
            <a className="button-link button-glass" href={profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn <ExternalLink aria-hidden="true" className="size-4" /></a>
          </div>
        </div>
      </section>

      <footer className="bg-[#071d30] text-slate-400">
        <div className="container flex flex-col gap-4 py-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Wang (Steven) Liao</p>
          <div className="flex flex-wrap gap-5">
            <a className="hover:text-white" href="#home">Back to top</a>
            <a className="hover:text-white" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-white" href={profile.sourceCode} target="_blank" rel="noreferrer">Website source</a>
            <a className="hover:text-white" href={profile.resumeDownload} download>Résumé PDF</a>
            <a className="hover:text-white" href={profile.cvDownload} download>Academic CV</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
