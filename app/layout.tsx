import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tip2Trip 경주 | 천년 고도 경주 여행 가이드',
  description: '신라 천년의 역사를 품은 경주의 매력적인 여행지, 맛집, 숙소, 여행 팁을 한눈에 확인하세요.',
  keywords: '경주 여행, 경주 관광, 불국사, 석굴암, 첨성대, 경주 맛집, 신라',
  openGraph: {
    title: 'Tip2Trip 경주 | 천년 고도 경주 여행 가이드',
    description: '신라 천년의 역사를 품은 경주의 매력적인 여행지, 맛집, 숙소를 소개합니다.',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-stone-50 text-gray-900 font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
