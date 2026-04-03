import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-8xl mb-6">🏯</p>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">페이지를 찾을 수 없습니다</h2>
        <p className="text-gray-500 mb-8">
          요청하신 페이지가 없거나 이동되었습니다.
        </p>
        <Link
          href="/"
          className="bg-amber-500 hover:bg-amber-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  )
}
