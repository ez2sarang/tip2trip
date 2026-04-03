import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: '경주 맛집 & 음식 | Tip2Trip 경주',
  description: '경주의 대표 음식과 추천 맛집을 소개합니다. 황남빵, 경주 쌈밥, 한정식 등 지역 음식 정보.',
}

const foods = [
  {
    name: '황남빵',
    category: '간식·디저트',
    description: '70년 전통의 경주 명물 빵. 팥 앙금이 가득한 납작한 모양의 빵으로 경주를 대표하는 특산품입니다.',
    recommend: '황남빵 본점',
    price: '10개 7,000원',
    image: '🥐',
    tip: '경주 어디서나 구매 가능하지만 황남빵 본점의 맛이 가장 오리지널합니다.',
  },
  {
    name: '경주 쌈밥',
    category: '한식',
    description: '각종 채소와 함께 즐기는 쌈밥 정식. 건강하고 푸짐한 경주 전통 식사로 관광객들에게 인기.',
    recommend: '교촌쌈밥',
    price: '1인 15,000원~',
    image: '🥬',
    tip: '교촌마을 인근에 쌈밥 맛집이 많습니다. 점심 시간에는 대기 시간이 길 수 있습니다.',
  },
  {
    name: '한우 구이',
    category: '고기·구이',
    description: '경상북도 청정 한우를 활용한 고기 요리. 경주 근교에서 키운 신선한 한우를 즐길 수 있습니다.',
    recommend: '경주 한우마을',
    price: '1인 30,000원~',
    image: '🥩',
    tip: '저녁 시간대가 가장 붐비므로 예약을 권장합니다.',
  },
  {
    name: '경주 교동법주',
    category: '전통주',
    description: '경주 최부자댁에서 대대로 전해 내려오는 전통 청주. 지역 특산물로 선물용으로도 인기입니다.',
    recommend: '교동법주 판매점',
    price: '750ml 30,000원~',
    image: '🍶',
    tip: '교촌마을에서 구매 가능합니다. 직접 양조장 방문 시 시음도 가능합니다.',
  },
  {
    name: '콩국수',
    category: '면요리',
    description: '경주 지역에서 사랑받는 여름 별미. 신선한 콩으로 만든 고소한 국물이 특징입니다.',
    recommend: '황리단길 콩국수 전문점',
    price: '1인 10,000원~',
    image: '🍜',
    tip: '여름 방문 시 꼭 먹어보아야 할 음식입니다.',
  },
  {
    name: '전복죽',
    category: '죽·건강식',
    description: '경주 인근 바다에서 잡은 신선한 전복으로 만든 건강 죽. 해장 음식으로도 인기 있습니다.',
    recommend: '경주 전통시장 인근 죽 전문점',
    price: '1인 12,000원~',
    image: '🍵',
    tip: '아침 식사로 즐기기 좋습니다.',
  },
]

export default function FoodPage() {
  return (
    <>
      <PageHeader
        title="경주 맛집 & 음식"
        subtitle="경주에서만 맛볼 수 있는 특별한 음식과 추천 맛집을 소개합니다"
        breadcrumb={[{ label: '홈', href: '/' }, { label: '맛집 & 음식' }]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foods.map((food, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 flex items-center justify-center">
                <span className="text-6xl">{food.image}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{food.name}</h3>
                  <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                    {food.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{food.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-medium w-14 flex-shrink-0">추천:</span>
                    <span className="text-gray-700">{food.recommend}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 font-medium w-14 flex-shrink-0">가격:</span>
                    <span className="text-gray-700">{food.price}</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                  <p className="text-xs text-amber-800">
                    <span className="font-semibold">💡 팁: </span>{food.tip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
