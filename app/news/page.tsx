import { ArrowLeft, CalendarDays, Newspaper } from 'lucide-react';

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import { newsItems, profile } from '@/data/profile';

export const metadata = {
  title: 'Updates | Wang (Steven) Liao',
  description: 'Professional updates from Wang (Steven) Liao.',
};

export default function NewsPage() {
  return (
    <main className="site-shell min-h-screen">
      <header className="border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a
            className="group inline-flex items-center gap-3 text-sm font-semibold tracking-tight text-[#10253f]"
            href="/"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-[#0b2741] text-xs font-bold tracking-[0.14em] text-white">
              WL
            </span>
            <span>{profile.name}</span>
          </a>
          <a
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-[#007c91]"
            href="/"
          >
            <ArrowLeft className="size-4" />
            Back to portfolio
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Updates</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.04em] text-[#10253f] sm:text-6xl">
            Research, teaching, and professional activity.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            New public announcements will be collected here as they become
            available.
          </p>
        </div>

        {newsItems.length ? (
          <div className="mt-14 grid gap-5">
            {newsItems.map((item) => (
              <article
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_50px_-36px_rgba(15,41,68,0.45)]"
                key={item.date + item.title}
              >
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#007c91]">
                  <CalendarDays className="size-4" />
                  <span>{item.date}</span>
                  <span className="h-1 w-1 rounded-full bg-[#4fb2bf]" />
                  <span>{item.category}</span>
                </div>
                <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight text-[#10253f]">
                  {item.title}
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <Empty className="mt-14 min-h-72 border-slate-200 bg-white/75 shadow-[0_20px_50px_-36px_rgba(15,41,68,0.45)]">
            <EmptyMedia
              className="size-12 rounded-2xl bg-cyan-50 text-[#007c91]"
              variant="icon"
            >
              <Newspaper className="size-5" />
            </EmptyMedia>
            <EmptyHeader>
              <EmptyTitle className="font-serif text-xl text-[#10253f]">
                Updates forthcoming
              </EmptyTitle>
              <EmptyDescription className="max-w-md text-base leading-7 text-slate-600">
                No public announcements were included in the supplied
                materials. This page is ready for future publications,
                presentations, and milestones.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}
      </section>
    </main>
  );
}
