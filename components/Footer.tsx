import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏯</span>
              <span className="text-white font-bold text-lg">Tip2Trip 경주</span>
            </div>
            <p className="text-sm leading-relaxed">
              천년 신라의 역사를 품은 경주의 모든 것을 안내합니다.
              여행 전 꼭 확인하세요.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">여행 정보</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/attractions" className="hover:text-white transition-colors">관광명소</Link></li>
              <li><Link href="/food" className="hover:text-white transition-colors">맛집 & 음식</Link></li>
              <li><Link href="/tips" className="hover:text-white transition-colors">여행 팁</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">유용한 링크</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.gyeongju.go.kr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  경주시청 공식 홈페이지
                </a>
              </li>
              <li>
                <a href="https://www.gyeongju.go.kr/tour" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  경주 관광 정보
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          <p>© 2024 Tip2Trip 경주. 경주 여행의 모든 것.</p>
        </div>
      </div>
    </footer>
  )
}
