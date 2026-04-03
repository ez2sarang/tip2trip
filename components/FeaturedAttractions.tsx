import Link from 'next/link'

const featured = [
  {
    emoji: '🏯',
    name: '불국사',
    desc: '유네스코 세계문화유산. 신라 불교 건축의 정수.',
    badge: '세계유산',
    badgeColor: 'bg-emerald-100 text-emerald-800',
  },
  {
    emoji: '🌙',
    name: '동궁과 월지',
    desc: '밤이 더 아름다운 신라의 왕실 연못.',
    badge: '야경 명소',
    badgeColor: 'bg-indigo-100 text-indigo-800',
  },
  {
    emoji: '🌌',
    name: '첨성대',
    desc: '동양 최고의 천문대. 일몰 후 조명이 환상적.',
    badge: '무료 입장',
    badgeColor: 'bg-green-100 text-green-800',
  },
  {
    emoji: '⛩️',
    name: '석굴암',
    desc: '토함산 정상의 신비로운 석굴 사원.',
    badge: '세계유산',
    badgeColor: 'bg-emerald-100 text-emerald-800',
  },
  {
    emoji: '🏘️',
    name: '황리단길',
    desc: '한옥과 현대가 만나는 경주의 힙한 거리.',
    badge: '카페 거리',
    badgeColor: 'bg-orange-100 text-orange-800',
  },
  {
    emoji: '🏛️',
    name: '국립경주박물관',
    desc: '신라 유물의 보고. 입장료 무료.',
    badge: '무료 입장',
    badgeColor: 'bg-green-100 text-green-800',
  },
]

export default function FeaturedAttractions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">인기 관광 명소</h2>
          <p className="text-gray-600 text-lg">경주 방문 시 꼭 들러야 할 핵심 명소들을 소개합니다</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <div
              key={i}
              className="group bg-stone-50 hover:bg-amber-50 rounded-2xl p-6 transition-all duration-300 border border-stone-100 hover:border-amber-200 hover:shadow-md cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/attractions"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            모든 관광명소 보기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
