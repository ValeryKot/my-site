import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    title: 'Центр не в центр',
    excerpt: 'Пишу для себя. Пришлось решить задачу со скроллом блока, в котором содержимое должно было быть отцентрировано. С помощью этого решения все центрировалось как надо.',
    date: '2024-12-15',
    readTime: '5 min',
    category: 'CSS',
    slug: 'center-not-in-center',
  },
  {
    title: 'Точка, точка, запятая',
    excerpt: 'Попросили представить баланс криптовалюты в формате, аналогичном валюте USD. Проблема состоит в том, что минимальный номинал криптовалюты...',
    date: '2024-11-28',
    readTime: '8 min',
    category: 'JavaScript',
    slug: 'dot-dot-comma',
  },
  {
    title: 'Дас ист Цустанд',
    excerpt: 'Немного про инструмент для управления состоянием под названием Zustand. В нашем проекте для разных таблиц используются свои состояния...',
    date: '2024-10-20',
    readTime: '6 min',
    category: 'React',
    slug: 'zustand-state-management',
  },
  {
    title: 'В каждой строчке только точки',
    excerpt: 'Была интересная задача. Мы использовали библиотеку "react-middle-ellipsis" для того, чтобы сократить строку с хэш-кодом до разумных пределов...',
    date: '2024-09-15',
    readTime: '4 min',
    category: 'React',
    slug: 'ellipsis-in-lines',
  },
  {
    title: 'И снова здравствуйте',
    excerpt: 'Как это часто бывает, череда различных ситуаций увлекает и не оставляет времени на то, чтобы написать пару строк. Работы тоже было много...',
    date: '2024-08-10',
    readTime: '7 min',
    category: 'General',
    slug: 'hello-again',
  },
  {
    title: 'Сайт закончен',
    excerpt: 'https://my-site-valerykot.vercel.app/ История продолжается. Я буду продолжать писать о своих успехах и промахах на пути специалиста по веб разработке...',
    date: '2024-07-01',
    readTime: '3 min',
    category: 'Personal',
    slug: 'website-completed',
  },
];

export default function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Blog cards animation
      gsap.fromTo(
        gridRef.current?.querySelectorAll('.blog-card') || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#101010] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-white/[0.02] to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="text-[#707070] text-sm tracking-[0.3em] uppercase">
              My Thoughts
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2">
              Latest <span className="text-gradient">Blog Posts</span>
            </h2>
          </div>
          
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#707070] hover:text-white transition-colors group"
          >
            View All Posts
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Blog Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="blog-card group"
            >
              <a href={`#blog/${post.slug}`} className="block">
                <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 text-xs bg-white/10 text-white rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-[#707070] mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center gap-4 text-xs text-[#707070]">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('ru-RU', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Read more */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="inline-flex items-center gap-2 text-sm text-white group-hover:text-gradient transition-all">
                      Read More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
