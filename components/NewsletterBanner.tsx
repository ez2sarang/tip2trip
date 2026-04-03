export default function NewsletterBanner() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border border-amber-100 p-12">
          <span className="text-5xl mb-6 block">🏯</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            경주 여행을 계획 중이신가요?
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            경주의 숨겨진 명소, 계절별 이벤트, 실시간 여행 팁을 알려드립니다.
            경주 여행 전 반드시 확인하세요!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
            />
            <button className="bg-amber-500 hover:bg-amber-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap">
              구독하기
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            스팸 메일은 발송하지 않습니다. 언제든지 구독 취소 가능합니다.
          </p>
        </div>
      </div>
    </section>
  )
}
