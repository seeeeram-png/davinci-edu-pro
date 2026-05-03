/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Beaker, Globe2, BookOpen, Sparkles, GraduationCap, ChevronRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 transition-transform group-hover:scale-110">
              <GraduationCap size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-neutral-900">
              다빈치 <span className="text-indigo-600">에듀</span>
            </h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium text-neutral-600">
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">다빈치 노트</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">과학 탐구</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">사회 공부</li>
              <li className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-sm">문의하기</li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-[50%] top-0 h-[600px] w-[1000px] -translate-x-[50%] rounded-full bg-indigo-50/50 blur-3xl" />
          </div>
          <div className="mx-auto max-w-7xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                아이들의 꿈을 키우는 교육
              </span>
              <h2 className="mt-8 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl">
                다빈치 에듀에 오신 것을 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">환영합니다</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                우리 아이들의 풍부한 상상력과 논리적 사고를 키워주는 
                과학과 사회의 즐거운 세계 리 다빈치 노트가 함께합니다.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button id="cta-start" className="rounded-full bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-200 hover:bg-indigo-500 hover:-translate-y-0.5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  학습 시작하기
                </button>
                <button className="text-sm font-semibold leading-6 text-neutral-900 flex items-center gap-1 group">
                  다빈치 노트 소개 <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Subjects Grid */}
        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">학습 과목</h3>
              <p className="mt-4 text-lg leading-8 text-neutral-600">
                실험과 탐구를 통해 스스로 깨우치는 즐거움을 제공합니다.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {/* Science Card */}
              <motion.article
                whileHover={{ y: -8 }}
                className="flex flex-col items-start bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-100 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="relative w-full aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200"
                    alt="즐거운 과학 탐구"
                    className="absolute inset-0 h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-emerald-500/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white flex items-center gap-1">
                    <Beaker size={14} /> SCIENCE
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-neutral-900">🔬 즐거운 과학 탐구</h4>
                  <p className="mt-4 text-base leading-7 text-neutral-600">
                    직접 보고, 만지고, 실험하며 자연의 원리를 깨닫습니다. 아이들의 호기심을 지식으로 바꿔주는 체계적인 과학 커리큘럼을 경험해보세요.
                  </p>
                </div>
              </motion.article>

              {/* Social Studies Card */}
              <motion.article
                whileHover={{ y: -8 }}
                className="flex flex-col items-start bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-100 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="relative w-full aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
                    alt="함께하는 사회 공부"
                    className="absolute inset-0 h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-amber-500/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white flex items-center gap-1">
                    <Globe2 size={14} /> SOCIAL
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-neutral-900">🌍 함께하는 사회 공부</h4>
                  <p className="mt-4 text-base leading-7 text-neutral-600">
                    세상을 바라보는 넓은 시야를 길러줍니다. 역사부터 지리, 경제까지 우리를 둘러싼 사회의 이야기를 흥미진진하게 풀어냅니다.
                  </p>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Feature Section - Davinci Note */}
        <section className="relative isolate overflow-hidden bg-indigo-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
              <div className="lg:pr-8">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-400">교재 소개</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">다빈치 노트</p>
                  <p className="mt-6 text-lg leading-8 text-neutral-300">
                    다빈치 에듀만의 특별한 교재, 다빈치 노트를 소개합니다. 단순한 암기가 아닌, 아이들의 사고가 기록되는 공간입니다.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-neutral-400 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-white">
                        <Sparkles className="absolute left-1 top-1 h-5 w-5 text-indigo-400" />
                        창의성 중심.
                      </dt>
                      <dd className="inline"> 아이들이 스스로 질문을 던지고 답을 찾아가는 과정을 중시합니다.</dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-white">
                        <BookOpen className="absolute left-1 top-1 h-5 w-5 text-indigo-400" />
                        시각적 학습.
                      </dt>
                      <dd className="inline"> 풍부한 삽화와 도표를 통해 복잡한 개념도 한눈에 이해할 수 있습니다.</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
                      alt="다빈치 노트 교재 이미지"
                      className="w-[400px] h-[500px] object-cover rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-indigo-500/20 blur-2xl" />
                  <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-50 border-t border-neutral-200 py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md">
                <GraduationCap size={18} />
              </div>
              <span className="text-lg font-bold">다빈치 에듀</span>
            </div>
            <p className="text-sm text-neutral-500">© 2024 Davinci Edu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
