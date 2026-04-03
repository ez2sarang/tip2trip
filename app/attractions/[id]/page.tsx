import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { attractions } from '@/app/data/attractions'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return attractions.map((a) => ({ id: String(a.id) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const attraction = attractions.find((a) => a.id === Number(id))
  if (!attraction) return {}
  return {
    title: `${attraction.name} | Tip2Trip 경주`,
    description: attraction.description,
  }
}

export default async function AttractionDetailPage({ params }: Props) {
  const { id } = await params
  const attraction = attractions.find((a) => a.id === Number(id))
  if (!attraction) notFound()

  const currentIndex = attractions.findIndex((a) => a.id === attraction.id)
  const prev = currentIndex > 0 ? attractions[currentIndex - 1] : null
  const next = currentIndex < attractions.length - 1 ? attractions[currentIndex + 1] : null

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-amber-600 transition-colors">홈</Link>
        <span>/</span>
        <Link href="/attractions" className="hover:text-amber-600 transition-colors">관광명소</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{attraction.name}</span>
      </nav>

      {/* Hero card */}
      <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-3xl p-12 flex items-center justify-center mb-8">
        <span className="text-9xl">{attraction.image}</span>
      </div>

      {/* Title & meta */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
            {attraction.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mt-3">{attraction.name}</h1>
        </div>
        <div className="flex items-center gap-2 bg-white border border-amber-200 rounded-xl px-4 py-2 shadow-sm">
          <span className="text-amber-500 text-xl">★</span>
          <span className="text-2xl font-bold text-gray-900">{attraction.rating}</span>
        </div>
      </div>

      <p className="text-gray-700 text-lg leading-relaxed mb-8">{attraction.description}</p>

      {/* Info grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <InfoCard icon="📍" label="위치" value={attraction.address} />
        <InfoCard icon="🕐" label="운영시간" value={attraction.hours} />
        <InfoCard icon="💰" label="입장료" value={attraction.fee} />
        <InfoCard icon="⏱️" label="예상 소요시간" value={attraction.duration} />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {attraction.tags.map((tag) => (
          <span
            key={tag}
            className="text-sm bg-stone-100 text-stone-700 px-3 py-1.5 rounded-full font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Tip */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
        <p className="text-amber-900 leading-relaxed">
          <span className="font-bold text-amber-700">💡 여행 팁 </span>
          {attraction.tips}
        </p>
      </div>

      {/* Map link */}
      <div className="flex flex-wrap gap-3 mb-10">
        <Link
          href="/map"
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors"
        >
          🗺️ 지도에서 보기
        </Link>
        <Link
          href="/attractions"
          className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-gray-700 font-semibold px-5 py-2.5 rounded-xl border border-stone-200 transition-colors"
        >
          ← 목록으로
        </Link>
      </div>

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <div className="border-t border-stone-100 pt-8 grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/attractions/${prev.id}`}
              className="flex flex-col bg-white rounded-xl p-4 border border-stone-100 hover:border-amber-300 hover:shadow-md transition-all"
            >
              <span className="text-xs text-gray-400 mb-1">← 이전</span>
              <span className="text-2xl mb-1">{prev.image}</span>
              <span className="font-semibold text-gray-800 text-sm">{prev.name}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/attractions/${next.id}`}
              className="flex flex-col items-end text-right bg-white rounded-xl p-4 border border-stone-100 hover:border-amber-300 hover:shadow-md transition-all"
            >
              <span className="text-xs text-gray-400 mb-1">다음 →</span>
              <span className="text-2xl mb-1">{next.image}</span>
              <span className="font-semibold text-gray-800 text-sm">{next.name}</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      )}
    </div>
  )
}

function InfoCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-stone-100 shadow-sm">
      <div className="flex items-center gap-2 mb-1">
        <span>{icon}</span>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</span>
      </div>
      <p className="text-gray-800 text-sm leading-relaxed">{value}</p>
    </div>
  )
}
