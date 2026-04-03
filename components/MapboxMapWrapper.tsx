'use client'

import dynamic from 'next/dynamic'

const MapboxMap = dynamic(() => import('@/components/MapboxMap'), { ssr: false })

export default function MapboxMapWrapper() {
  return <MapboxMap />
}
