import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl rotate-12">⛩️</div>
        <div className="absolute top-40 right-20 text-6xl -rotate-6">🌸</div>
        <div className="absolute bottom-32 left-1/4 text-7xl rotate-6">🏯</div>
        <div className="absolute bottom-20 right-10 text-5xl -rotate-12">🌙</div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl opacity-5">☀️</div>
      </div>

      {/* 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 text-amber-300 text-sm font-medium mb-8">
          <span>✨</span>
          <span>천년 신라의 고도 경주에 오신 것을 환영합니다</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          경주,
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
            역사를 걷다
          </span>
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          불국사의 석탑이 빛나는 아침부터, 동궁과 월지가 물빛으로 반짝이는 밤까지.
          신라 천년의 이야기가 살아 숨 쉬는 경주를 여행하세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/attractions"
            className="bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-amber-500/30"
          >
            관광명소 보기
          </Link>
          <Link
            href="/tips"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all"
          >
            여행 팁 확인하기
          </Link>
        </div>

        {/* 통계 */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '8개', label: '주요 관광지' },
            { value: '1천년', label: '신라의 역사' },
            { value: '2개', label: '세계문화유산' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-amber-300">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 아래 화살표 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-amber-400" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
