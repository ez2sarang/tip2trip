'use client'

interface NavigationButtonsProps {
  lat: number
  lng: number
  name: string
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

export default function NavigationButtons({ lat, lng, name }: NavigationButtonsProps) {
  const encodedName = encodeURIComponent(name)

  const openNaver = () => {
    const appUrl = `nmap://route/car?slat=&slng=&sname=내+위치&elat=${lat}&elng=${lng}&ename=${encodedName}&appname=tip2trip`
    const webUrl = `https://map.naver.com/p/directions/-/-/${lng},${lat},${encodedName}/-/car`
    openWithFallback(appUrl, webUrl)
  }

  const openKakao = () => {
    const appUrl = `kakaomap://route?ep=${lat},${lng}&by=CAR`
    const webUrl = `https://map.kakao.com/link/to/${encodedName},${lat},${lng}`
    openWithFallback(appUrl, webUrl)
  }

  const openTmap = () => {
    const appUrl = `tmap://route?goalx=${lng}&goaly=${lat}&goalname=${encodedName}`
    // Tmap 앱이 없으면 앱 스토어로 안내
    const webUrl = `https://play.google.com/store/apps/details?id=com.skt.tmap.ku`
    openWithFallback(appUrl, webUrl)
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={openNaver}
        className="inline-flex items-center gap-2 bg-[#03C75A] hover:bg-[#02b350] text-white font-semibold px-4 py-2.5 rounded-xl transition-colors text-sm"
      >
        <span>🗺</span> 네이버 지도
      </button>
      <button
        onClick={openKakao}
        className="inline-flex items-center gap-2 bg-[#FEE500] hover:bg-[#f0d800] text-[#3C1E1E] font-semibold px-4 py-2.5 rounded-xl transition-colors text-sm"
      >
        <span>🗺</span> 카카오맵
      </button>
      <button
        onClick={openTmap}
        className="inline-flex items-center gap-2 bg-[#E8173C] hover:bg-[#d01535] text-white font-semibold px-4 py-2.5 rounded-xl transition-colors text-sm"
      >
        <span>🗺</span> 티맵
      </button>
    </div>
  )
}
