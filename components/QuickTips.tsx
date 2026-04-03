import Link from 'next/link'

const tips = [
  {
    icon: '🚆',
    title: 'KTX 신경주역',
    desc: '서울에서 약 2시간. 고속버스도 편리합니다.',
  },
  {
    icon: '🗓️',
    title: '최적 방문 시기',
    desc: '봄 벚꽃(4월), 가을 단풍(10~11월)이 최고.',
  },
  {
    icon: '💳',
    title: '통합 관람권',
    desc: '불국사+석굴암 함께 구매 시 할인 혜택.',
  },
  {
    icon: '🎒',
    title: '여행 코스',
    desc: '1박 2일: 불국사→석굴암→첨성대→동궁과월지',
  },
]

export default function QuickTips() {
  return (
    <section className="py-20 bg-amber-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">빠른 여행 정보</h2>
          <p className="text-amber-100 text-lg">경주 여행 전에 알아두면 좋은 핵심 정보</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <span className="text-4xl mb-4 block">{tip.icon}</span>
              <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
              <p className="text-amber-100 text-sm leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/tips"
            className="inline-flex items-center gap-2 bg-white text-amber-600 font-semibold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors"
          >
            더 많은 여행 팁 보기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
