const seasons = [
  {
    season: '봄',
    period: '3월 ~ 5월',
    emoji: '🌸',
    color: 'from-pink-400 to-rose-300',
    bgColor: 'bg-pink-50 border-pink-200',
    textColor: 'text-pink-800',
    highlights: ['벚꽃 명소 산책', '불국사 진입로 벚꽃', '보문호 꽃놀이'],
    advice: '경주 벚꽃 축제 기간에는 숙소 조기 예약 필수',
  },
  {
    season: '여름',
    period: '6월 ~ 8월',
    emoji: '☀️',
    color: 'from-amber-400 to-yellow-300',
    bgColor: 'bg-amber-50 border-amber-200',
    textColor: 'text-amber-800',
    highlights: ['야간 조명 행사', '보문호 물놀이', '야경 투어'],
    advice: '낮에는 덥고 혼잡하니 이른 아침과 저녁에 활동',
  },
  {
    season: '가을',
    period: '9월 ~ 11월',
    emoji: '🍂',
    color: 'from-orange-400 to-amber-300',
    bgColor: 'bg-orange-50 border-orange-200',
    textColor: 'text-orange-800',
    highlights: ['단풍 감상', '경주 역사문화축전', '토함산 트레킹'],
    advice: '여행하기 가장 좋은 계절. 10월 축제 기간 특히 추천',
  },
  {
    season: '겨울',
    period: '12월 ~ 2월',
    emoji: '❄️',
    color: 'from-blue-400 to-sky-300',
    bgColor: 'bg-blue-50 border-blue-200',
    textColor: 'text-blue-800',
    highlights: ['한적한 문화재 관람', '경주 눈꽃 축제', '온천 체험'],
    advice: '인파 없이 조용하게 역사 탐방하기 최적의 시기',
  },
]

export default function SeasonGuide() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">계절별 여행 가이드</h2>
          <p className="text-gray-600 text-lg">경주는 어느 계절에 방문해도 아름답습니다</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((s, i) => (
            <div key={i} className={`rounded-2xl border p-6 ${s.bgColor}`}>
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} mb-4`}>
                <span className="text-2xl">{s.emoji}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{s.season}</h3>
              <p className={`text-sm font-medium ${s.textColor} mb-4`}>{s.period}</p>
              <ul className="space-y-2 mb-4">
                {s.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-gray-700 flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full bg-current ${s.textColor}`} />
                    {h}
                  </li>
                ))}
              </ul>
              <p className={`text-xs italic ${s.textColor} border-t border-current/20 pt-3`}>
                💡 {s.advice}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
