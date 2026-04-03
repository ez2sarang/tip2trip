import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: '경주 여행 팁 | Tip2Trip 경주',
  description: '경주 여행을 더욱 알차게 즐길 수 있는 실용적인 여행 팁과 정보를 제공합니다.',
}

const tipCategories = [
  {
    icon: '🚌',
    title: '교통편',
    tips: [
      '서울 → 경주: KTX 신경주역 이용 (약 2시간), 동대구 경유 무궁화호도 편리합니다.',
      '부산 → 경주: 무궁화호 약 1시간. 동해선 전철로도 접근 가능합니다.',
      '경주 시내 이동: 시내버스, 택시, 자전거 대여 활용. 대부분의 관광지는 버스로 연결됩니다.',
      '렌터카: 황리단길, 불국사 인근 주차 공간이 협소합니다. 주말에는 대중교통 이용을 권장합니다.',
      '경주 시티투어버스: 주요 관광지를 하루에 둘러볼 수 있는 순환 투어버스가 운행합니다.',
    ],
  },
  {
    icon: '📅',
    title: '방문 시기',
    tips: [
      '봄 (3~4월): 벚꽃 시즌으로 경주 전역이 아름답습니다. 특히 보문호 주변과 불국사 진입로가 절경입니다.',
      '여름 (6~8월): 야간 조명 행사가 많아 야경이 특히 아름답습니다. 낮에는 덥고 혼잡합니다.',
      '가을 (9~11월): 단풍 시즌. 불국사와 토함산의 단풍이 장관입니다. 여행하기 가장 좋은 계절.',
      '겨울 (12~2월): 인파가 적고 조용히 문화재를 감상하기 좋습니다. 경주 눈꽃 축제도 있습니다.',
      '경주 벚꽃 축제 (4월), 경주 역사문화축전 (10월)은 특히 인기 있는 행사입니다.',
    ],
  },
  {
    icon: '💰',
    title: '예산 계획',
    tips: [
      '통합 관람권: 불국사+석굴암을 함께 구매하면 할인 혜택이 있습니다.',
      '경주 여행 1박 2일 기준: 숙박 5~8만원, 식비 3~5만원, 관람료 2~3만원 예상.',
      '첨성대, 황리단길, 교촌마을은 무료 관람 가능합니다.',
      '국립경주박물관은 상설전시관 무료입니다.',
      '경주 여행 카드: 경주 지역 내 교통, 관광지 할인을 제공하는 패스를 활용하세요.',
    ],
  },
  {
    icon: '🏨',
    title: '숙박',
    tips: [
      '보문관광단지: 경주 최대 호텔 밀집 지역. 부대시설이 잘 갖춰져 있고 관광지와 가깝습니다.',
      '황리단길 인근: 한옥 게스트하우스, 감성 숙소들이 많습니다. 도심 관광에 편리합니다.',
      '불국사 인근: 조용한 환경에서 쉬기 좋습니다. 아침 일찍 불국사 관람이 편리합니다.',
      '민박·게스트하우스: 저예산 여행자에게 추천. 인근 주민들의 따뜻한 인심을 느낄 수 있습니다.',
      '주말과 연휴에는 미리 예약하는 것이 필수입니다. 특히 벚꽃·단풍 시즌엔 몇 달 전부터 마감됩니다.',
    ],
  },
  {
    icon: '📸',
    title: '사진 촬영 팁',
    tips: [
      '동궁과 월지: 해 질 무렵~야간 (조명 점등 후)이 가장 아름답습니다.',
      '불국사: 이른 아침 안개가 낀 날 방문하면 몽환적인 분위기를 포착할 수 있습니다.',
      '첨성대: 해 질 무렵 실루엣 사진이 인기입니다.',
      '황리단길: 오전 10시 이전이나 오후 5시 이후에 방문하면 인파 없이 사진 찍기 좋습니다.',
      '대릉원: 봄철 벚꽃과 함께 찍는 고분 사진이 SNS에서 인기입니다.',
    ],
  },
  {
    icon: '🎭',
    title: '체험 활동',
    tips: [
      '한복 체험: 황리단길, 교촌마을 인근 한복 대여점에서 저렴하게 한복을 빌릴 수 있습니다.',
      '전통 공예 체험: 신라 시대 공예를 직접 체험할 수 있는 프로그램이 있습니다.',
      '자전거 투어: 경주 시내는 자전거로 이동하기 좋습니다. 여러 곳에서 자전거 대여가 가능합니다.',
      '야간 걷기 투어: 조명이 아름다운 경주의 밤을 걸어서 탐방하는 코스를 추천합니다.',
      '도자기 체험: 신라 토기 문화를 이어받은 도자기 체험 프로그램도 인기입니다.',
    ],
  },
]

export default function TipsPage() {
  return (
    <>
      <PageHeader
        title="경주 여행 팁"
        subtitle="경주 여행을 더욱 스마트하게 즐기기 위한 실용적인 정보를 모았습니다"
        breadcrumb={[{ label: '홈', href: '/' }, { label: '여행 팁' }]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tipCategories.map((category, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.tips.map((tip, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">•</span>
                    <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 긴급 정보 */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-amber-900 mb-4">📞 유용한 연락처</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: '경주시 관광안내', phone: '054-779-6080' },
              { name: '경주역 안내', phone: '1588-7788' },
              { name: '경주 택시 콜', phone: '054-742-2222' },
              { name: '국립경주박물관', phone: '054-740-7500' },
              { name: '불국사', phone: '054-746-9913' },
              { name: '긴급 신고', phone: '112 / 119' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-amber-100">
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                <p className="text-amber-700 font-bold">{item.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
