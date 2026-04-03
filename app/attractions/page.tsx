import { Metadata } from 'next'
import AttractionCard from '@/components/AttractionCard'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: '경주 관광명소 | Tip2Trip 경주',
  description: '불국사, 석굴암, 첨성대, 동궁과월지 등 경주의 주요 관광명소를 소개합니다.',
}

const attractions = [
  {
    id: 1,
    name: '불국사',
    category: '세계문화유산',
    description: '신라시대에 건립된 국보급 사찰로, 유네스코 세계문화유산에 등재된 경주의 대표 명소입니다. 다보탑과 석가탑 등 국보급 문화재를 품고 있습니다.',
    address: '경북 경주시 진현동 15-1',
    hours: '07:00 ~ 18:00 (계절마다 상이)',
    fee: '성인 6,000원 / 청소년 4,000원 / 어린이 3,000원',
    tips: '아침 일찍 방문하면 인파가 적어 한적하게 관람할 수 있습니다.',
    tags: ['세계유산', '불교문화', '포토스팟'],
    image: '🏯',
    rating: 4.9,
    duration: '2~3시간',
  },
  {
    id: 2,
    name: '석굴암',
    category: '세계문화유산',
    description: '토함산 중턱에 위치한 국보 제24호. 8세기 통일신라 시대에 만들어진 화강암 석굴 사원으로 본존불의 웅장함이 압도적입니다.',
    address: '경북 경주시 진현동 999',
    hours: '07:00 ~ 18:00 (계절마다 상이)',
    fee: '성인 6,000원 / 청소년 4,000원 / 어린이 3,000원',
    tips: '불국사와 함께 패키지 관람권을 구매하면 할인됩니다. 매표소에서 셔틀버스 이용 가능.',
    tags: ['세계유산', '불교문화', '국보'],
    image: '⛩️',
    rating: 4.8,
    duration: '1~2시간',
  },
  {
    id: 3,
    name: '첨성대',
    category: '역사유적',
    description: '7세기 선덕여왕 때 건립된 동양에서 가장 오래된 천문대. 362개의 돌로 쌓인 원통형 건물로 신라의 과학 수준을 엿볼 수 있습니다.',
    address: '경북 경주시 인왕동 839-1',
    hours: '24시간 개방',
    fee: '무료',
    tips: '야간에 조명이 켜지는 첨성대가 특히 아름답습니다. 일몰 후 방문을 추천합니다.',
    tags: ['역사유적', '야경', '무료입장'],
    image: '🌌',
    rating: 4.7,
    duration: '30분~1시간',
  },
  {
    id: 4,
    name: '동궁과 월지 (안압지)',
    category: '역사유적',
    description: '통일신라시대의 별궁과 인공 연못. 야경이 특히 아름다워 경주 야경 명소 1위로 손꼽힙니다. 발굴된 유물들은 국립경주박물관에서 볼 수 있습니다.',
    address: '경북 경주시 원화로 102',
    hours: '09:00 ~ 22:00 (야간 조명 운영)',
    fee: '성인 3,000원 / 청소년 2,000원 / 어린이 1,000원',
    tips: '해 질 무렵부터 야간 조명 시간대가 가장 인기 있습니다. 주말에는 줄이 길어질 수 있으니 평일 방문을 권장합니다.',
    tags: ['야경명소', '포토스팟', '역사유적'],
    image: '🌙',
    rating: 4.9,
    duration: '1~2시간',
  },
  {
    id: 5,
    name: '국립경주박물관',
    category: '박물관',
    description: '신라 천년의 유물을 한자리에서 볼 수 있는 국립박물관. 성덕대왕 신종(에밀레종), 금관, 토우 등 귀중한 문화재를 소장하고 있습니다.',
    address: '경북 경주시 일정로 186',
    hours: '10:00 ~ 18:00 (월요일 휴관)',
    fee: '상설전시관 무료 / 특별전시 별도',
    tips: '무료 해설 프로그램을 이용하면 더욱 풍부한 관람이 가능합니다. 오디오 가이드도 대여 가능합니다.',
    tags: ['박물관', '무료입장', '문화재'],
    image: '🏛️',
    rating: 4.6,
    duration: '2~3시간',
  },
  {
    id: 6,
    name: '황리단길',
    category: '카페·쇼핑',
    description: '경주 도심의 핫플레이스. 한옥을 개조한 카페, 음식점, 소품숍이 즐비한 거리로 젊은 여행객들에게 특히 인기입니다.',
    address: '경북 경주시 포석로 일대',
    hours: '매장마다 상이 (대부분 10:00 ~ 22:00)',
    fee: '무료 입장',
    tips: '주말 낮에는 매우 혼잡합니다. 평일이나 이른 오전 방문을 추천합니다. 인근 대릉원과 함께 둘러보세요.',
    tags: ['카페거리', '쇼핑', '포토스팟'],
    image: '🏘️',
    rating: 4.5,
    duration: '1~3시간',
  },
  {
    id: 7,
    name: '대릉원 (천마총)',
    category: '역사유적',
    description: '신라 왕과 귀족들의 무덤이 모인 광대한 고분군. 천마총 내부를 공개하고 있어 신라 왕릉의 구조를 직접 확인할 수 있습니다.',
    address: '경북 경주시 황남동 일대',
    hours: '09:00 ~ 22:00',
    fee: '성인 3,000원 / 청소년 2,000원 / 어린이 1,000원',
    tips: '황리단길과 인접해 있어 함께 둘러보기 좋습니다. 봄에는 벚꽃이 만발해 더욱 아름답습니다.',
    tags: ['역사유적', '고분군', '포토스팟'],
    image: '⛰️',
    rating: 4.5,
    duration: '1~2시간',
  },
  {
    id: 8,
    name: '경주 교촌마을',
    category: '전통마을',
    description: '조선시대 경주 향교를 중심으로 형성된 전통 한옥마을. 최부자댁, 경주 향교, 교촌한옥체험마을이 모여 있는 역사 문화 공간입니다.',
    address: '경북 경주시 교동 일대',
    hours: '24시간 개방 (일부 시설 별도)',
    fee: '무료 (체험 프로그램 별도)',
    tips: '한복 대여 서비스를 이용하면 한결 더 특별한 사진을 남길 수 있습니다. 전통주 체험도 인기입니다.',
    tags: ['전통마을', '한옥', '체험활동'],
    image: '🏠',
    rating: 4.4,
    duration: '1~2시간',
  },
]

export default function AttractionsPage() {
  return (
    <>
      <PageHeader
        title="경주 관광명소"
        subtitle="천년 신라의 숨결을 느낄 수 있는 경주의 주요 명소를 소개합니다"
        breadcrumb={[{ label: '홈', href: '/' }, { label: '관광명소' }]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
        </div>
      </section>
    </>
  )
}
