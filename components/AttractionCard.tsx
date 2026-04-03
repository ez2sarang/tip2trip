import Link from 'next/link'
import { Attraction } from '@/app/data/attractions'

export default function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <Link
      href={`/attractions/${attraction.id}`}
      className="group bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow block"
    >
      <div className="bg-gradient-to-br from-amber-50 to-stone-100 p-10 flex items-center justify-center">
        <span className="text-7xl">{attraction.image}</span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
              {attraction.name}
            </h3>
            <span className="text-xs text-amber-700 font-medium">{attraction.category}</span>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
            <span className="text-amber-500">★</span>
            <span className="text-sm font-bold text-gray-800">{attraction.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{attraction.description}</p>

        <div className="space-y-2 text-sm mb-4">
          <div className="flex items-start gap-2">
            <span className="text-gray-400 w-4 flex-shrink-0">📍</span>
            <span className="text-gray-700">{attraction.address}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-gray-400 w-4 flex-shrink-0">🕐</span>
            <span className="text-gray-700">{attraction.hours}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-gray-400 w-4 flex-shrink-0">💰</span>
            <span className="text-gray-700">{attraction.fee}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-gray-400 w-4 flex-shrink-0">⏱️</span>
            <span className="text-gray-700">예상 소요 시간: {attraction.duration}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {attraction.tags.map((tag) => (
            <span key={tag} className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        <div className="bg-amber-50 rounded-xl p-3">
          <p className="text-xs text-amber-800">
            <span className="font-semibold">💡 팁: </span>{attraction.tips}
          </p>
        </div>
      </div>
    </Link>
  )
}
