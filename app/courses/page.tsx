import { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import CourseExportButtons from '@/components/CourseExportButtons'

export const metadata: Metadata = {
  title: '추천 드라이브 코스 | Tip2Trip 경주',
  description: '경주 벚꽃 드라이브 코스를 네이버지도, 카카오맵, 티맵으로 바로 내보내세요.',
}

const CHERRY_BLOSSOM_COURSE = [
  { lat: 35.8436, lng: 129.2326, name: '보문호', emoji: '🌸', desc: '벚꽃 명소, 드라이브 출발지' },
  { lat: 35.8345, lng: 129.2189, name: '대릉원', emoji: '⛰️', desc: '신라 고분군, 천마총' },
  { lat: 35.8295, lng: 129.2245, name: '반월성', emoji: '🏰', desc: '신라 왕궁터' },
  { lat: 35.7901, lng: 129.3323, name: '불국사', emoji: '🏯', desc: '유네스코 세계문화유산' },
]

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        title="추천 드라이브 코스"
        subtitle="경주의 아름다운 드라이브 코스를 네비게이션 앱으로 바로 내보내세요"
        breadcrumb={[{ label: '홈', href: '/' }, { label: '드라이브 코스' }]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* 코스 카드 */}
        <div className="bg-gradient-to-br from-pink-50 to-amber-50 rounded-3xl p-8 mb-8 border border-pink-100">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🌸</span>
            <h2 className="text-2xl font-bold text-gray-900">벚꽃 드라이브 코스</h2>
          </div>
          <p className="text-gray-600 mb-1">총 거리 약 30km · 예상 소요시간 1시간 30분~2시간</p>
          <p className="text-sm text-gray-500 mb-6">봄철 벚꽃 시즌(3월 말~4월 초)에 특히 아름다운 코스입니다.</p>

          {/* 경유지 목록 */}
          <div className="flex flex-col gap-0 mb-8">
            {CHERRY_BLOSSOM_COURSE.map((stop, index) => (
              <div key={stop.name} className="flex items-stretch gap-4">
                {/* 타임라인 */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  {index < CHERRY_BLOSSOM_COURSE.length - 1 && (
                    <div className="w-0.5 bg-amber-200 flex-1 my-1 min-h-[2rem]" />
                  )}
                </div>

                {/* 내용 */}
                <div className={`pb-6 ${index === CHERRY_BLOSSOM_COURSE.length - 1 ? 'pb-0' : ''}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{stop.emoji}</span>
                    <span className="font-bold text-gray-900 text-lg">{stop.name}</span>
                    {index === 0 && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">출발</span>
                    )}
                    {index === CHERRY_BLOSSOM_COURSE.length - 1 && (
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">도착</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5">{stop.desc}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    좌표: {stop.lat}, {stop.lng}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 전체 코스 내보내기 버튼 */}
          <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-1">전체 코스 내보내기</h3>
            <p className="text-sm text-gray-500 mb-4">
              네비게이션 앱으로 전체 경유지를 한 번에 내보냅니다. 앱이 설치되어 있으면 앱으로, 없으면 웹으로 열립니다.
            </p>
            <CourseExportButtons waypoints={CHERRY_BLOSSOM_COURSE} />
          </div>
        </div>

        {/* 각 관광지 개별 길찾기 */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">경유지별 개별 길찾기</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CHERRY_BLOSSOM_COURSE.map((stop) => (
            <div key={stop.name} className="bg-white rounded-2xl p-5 border border-stone-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{stop.emoji}</span>
                <span className="font-bold text-gray-900">{stop.name}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <NavBtn
                  label="네이버"
                  color="bg-[#03C75A] hover:bg-[#02b350] text-white"
                  lat={stop.lat}
                  lng={stop.lng}
                  name={stop.name}
                  app="naver"
                />
                <NavBtn
                  label="카카오"
                  color="bg-[#FEE500] hover:bg-[#f0d800] text-[#3C1E1E]"
                  lat={stop.lat}
                  lng={stop.lng}
                  name={stop.name}
                  app="kakao"
                />
                <NavBtn
                  label="티맵"
                  color="bg-[#E8173C] hover:bg-[#d01535] text-white"
                  lat={stop.lat}
                  lng={stop.lng}
                  name={stop.name}
                  app="tmap"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
          >
            ← 홈으로 돌아가기
          </Link>
        </div>
      </section>
    </>
  )
}

// 서버 컴포넌트에서 렌더링되는 링크 버튼 (href 기반, JS 불필요)
function NavBtn({
  label,
  color,
  lat,
  lng,
  name,
  app,
}: {
  label: string
  color: string
  lat: number
  lng: number
  name: string
  app: 'naver' | 'kakao' | 'tmap'
}) {
  const enc = (s: string) => encodeURIComponent(s)
  let href = '#'
  if (app === 'naver') {
    href = `https://map.naver.com/p/directions/-/${lng},${lat},${enc(name)}/-/car`
  } else if (app === 'kakao') {
    href = `https://map.kakao.com/link/to/${enc(name)},${lat},${lng}`
  } else if (app === 'tmap') {
    href = `https://play.google.com/store/apps/details?id=com.skt.tmap.ku`
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 ${color} font-semibold px-3 py-1.5 rounded-lg transition-colors text-xs`}
    >
      🗺 {label}
    </a>
  )
}
