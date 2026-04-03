import { Metadata } from 'next'
import AttractionCard from '@/components/AttractionCard'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import { attractions } from '@/app/data/attractions'

export const metadata: Metadata = {
  title: '경주 관광명소 | Tip2Trip 경주',
  description: '불국사, 석굴암, 첨성대, 동궁과월지 등 경주의 주요 관광명소를 소개합니다.',
}

export default function AttractionsPage() {
  return (
    <>
      <PageHeader
        title="경주 관광명소"
        subtitle="천년 신라의 숨결을 느낄 수 있는 경주의 주요 명소를 소개합니다"
        breadcrumb={[{ label: '홈', href: '/' }, { label: '관광명소' }]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-end mb-6">
          <Link
            href="/map"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-4 py-2 rounded-xl transition-colors text-sm"
          >
            🗺️ 지도로 보기
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
        </div>
      </section>
    </>
  )
}
