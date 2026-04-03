'use client'

interface Waypoint {
  lat: number
  lng: number
  name: string
}

interface CourseExportButtonsProps {
  waypoints: Waypoint[]
}

function openWithFallback(appUrl: string, webUrl: string) {
  const start = Date.now()
  window.location.href = appUrl
  setTimeout(() => {
    if (Date.now() - start < 2000) {
      window.open(webUrl, '_blank')
    }
  }, 1500)
}

export default function CourseExportButtons({ waypoints }: CourseExportButtonsProps) {
  if (waypoints.length < 2) return null

  const start = waypoints[0]
  const end = waypoints[waypoints.length - 1]
  const vias = waypoints.slice(1, -1)

  const openNaver = () => {
    const enc = (s: string) => encodeURIComponent(s)
    const viaParams = vias
      .map((w, i) => `v${i + 1}lat=${w.lat}&v${i + 1}lng=${w.lng}&v${i + 1}name=${enc(w.name)}`)
      .join('&')
    const appUrl = `nmap://route/car?slat=${start.lat}&slng=${start.lng}&sname=${enc(start.name)}&elat=${end.lat}&elng=${end.lng}&ename=${enc(end.name)}${viaParams ? '&' + viaParams : ''}&appname=tip2trip`
    const webUrl = `https://map.naver.com/p/directions/${start.lng},${start.lat},${enc(start.name)}/${end.lng},${end.lat},${enc(end.name)}/-/car`
    openWithFallback(appUrl, webUrl)
  }

  const openKakao = () => {
    // 카카오맵은 출발지+목적지만 지원 (경유지 없음)
    const enc = (s: string) => encodeURIComponent(s)
    const appUrl = `kakaomap://route?sp=${start.lat},${start.lng}&ep=${end.lat},${end.lng}&by=CAR`
    const webUrl = `https://map.kakao.com/link/to/${enc(end.name)},${end.lat},${end.lng}`
    openWithFallback(appUrl, webUrl)
  }

  const openTmap = () => {
    const enc = (s: string) => encodeURIComponent(s)
    const viaParams = vias
      .map((w, i) => `via${i + 1}x=${w.lng}&via${i + 1}y=${w.lat}&vianame${i + 1}=${enc(w.name)}`)
      .join('&')
    const appUrl = `tmap://route?goalx=${end.lng}&goaly=${end.lat}&goalname=${enc(end.name)}&startx=${start.lng}&starty=${start.lat}&startname=${enc(start.name)}${viaParams ? '&' + viaParams : ''}`
    const webUrl = `https://play.google.com/store/apps/details?id=com.skt.tmap.ku`
    openWithFallback(appUrl, webUrl)
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={openNaver}
        className="inline-flex items-center gap-2 bg-[#03C75A] hover:bg-[#02b350] text-white font-semibold px-5 py-3 rounded-xl transition-colors"
      >
        <span>🗺</span> 네이버 지도로 코스 내보내기
      </button>
      <button
        onClick={openKakao}
        className="inline-flex items-center gap-2 bg-[#FEE500] hover:bg-[#f0d800] text-[#3C1E1E] font-semibold px-5 py-3 rounded-xl transition-colors"
      >
        <span>🗺</span> 카카오맵으로 내보내기
      </button>
      <button
        onClick={openTmap}
        className="inline-flex items-center gap-2 bg-[#E8173C] hover:bg-[#d01535] text-white font-semibold px-5 py-3 rounded-xl transition-colors"
      >
        <span>🗺</span> 티맵으로 내보내기
      </button>
    </div>
  )
}
