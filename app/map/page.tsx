import { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import MapboxMapWrapper from '@/components/MapboxMapWrapper'
import { attractions } from '@/app/data/attractions'

export const metadata: Metadata = {
  title: '경주 관광지 지도 | Tip2Trip 경주',
  description: '경주 주요 관광명소를 지도에서 한눈에 확인하세요.',
}

export default function MapPage() {
  return (
    <>
      <PageHeader
        title="경주 관광지 지도"
        subtitle="핀을 클릭하면 관광지 상세 정보를 확인할 수 있습니다"
        breadcrumb={[{ label: '홈', href: '/' }, { label: '지도' }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Map */}
          <div className="lg:flex-1 h-[500px] lg:h-[680px]">
            <MapboxMapWrapper />
          </div>

          {/* Sidebar: attraction list */}
          <div className="lg:w-72 flex flex-col gap-3 overflow-y-auto lg:max-h-[680px]">
            <p className="text-sm text-gray-500 font-medium px-1">총 {attractions.length}개 명소</p>
            {attractions.map((a) => (
              <Link
                key={a.id}
                href={`/attractions/${a.id}`}
                className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-stone-100 hover:border-amber-300 hover:shadow-md transition-all"
              >
                <span className="text-2xl flex-shrink-0">{a.image}</span>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-sm truncate">{a.name}</p>
                  <p className="text-xs text-amber-700">{a.category}</p>
                  <p className="text-xs text-gray-500">★ {a.rating} · {a.duration}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
