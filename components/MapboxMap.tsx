'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { attractions } from '@/app/data/attractions'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''
const MAPBOX_CSS = 'https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css'
const MAPBOX_JS = 'https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js'

declare global {
  interface Window {
    mapboxgl: any
  }
}

export default function MapboxMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const router = useRouter()

  useEffect(() => {
    if (!MAPBOX_TOKEN) return

    // Inject Mapbox CSS
    if (!document.querySelector(`link[href="${MAPBOX_CSS}"]`)) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = MAPBOX_CSS
      document.head.appendChild(link)
    }

    const initMap = () => {
      if (!mapContainerRef.current || mapRef.current) return

      const mapboxgl = window.mapboxgl
      mapboxgl.accessToken = MAPBOX_TOKEN

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [129.2194, 35.8347],
        zoom: 12,
      })

      mapRef.current = map

      map.addControl(new mapboxgl.NavigationControl(), 'top-right')

      map.on('load', () => {
        attractions.forEach((attraction) => {
          // Custom marker element
          const el = document.createElement('div')
          el.className = 'mapbox-marker'
          el.style.cssText = `
            background: #d97706;
            color: white;
            border-radius: 20px;
            padding: 4px 10px;
            font-size: 12px;
            font-weight: 700;
            white-space: nowrap;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0,0,0,0.25);
            border: 2px solid #b45309;
            display: flex;
            align-items: center;
            gap: 4px;
            max-width: 140px;
          `
          el.innerHTML = `<span style="font-size:16px">${attraction.image}</span><span style="overflow:hidden;text-overflow:ellipsis">${attraction.name}</span>`

          el.addEventListener('click', () => {
            router.push(`/attractions/${attraction.id}`)
          })

          el.addEventListener('mouseenter', () => {
            el.style.background = '#b45309'
            el.style.transform = 'scale(1.05)'
          })
          el.addEventListener('mouseleave', () => {
            el.style.background = '#d97706'
            el.style.transform = 'scale(1)'
          })

          new mapboxgl.Marker({ element: el, anchor: 'bottom' })
            .setLngLat([attraction.lng, attraction.lat])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<div style="padding:8px;font-family:sans-serif">
                  <p style="font-weight:700;margin:0 0 4px;font-size:14px">${attraction.name}</p>
                  <p style="font-size:12px;color:#666;margin:0 0 2px">${attraction.category}</p>
                  <p style="font-size:12px;color:#444;margin:0">★ ${attraction.rating} · ${attraction.duration}</p>
                </div>`
              )
            )
            .addTo(map)
        })
      })
    }

    if (window.mapboxgl) {
      initMap()
    } else {
      const script = document.createElement('script')
      script.src = MAPBOX_JS
      script.onload = initMap
      document.head.appendChild(script)
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [router])

  if (!MAPBOX_TOKEN) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-amber-50 rounded-2xl text-center p-8">
        <span className="text-5xl mb-4">🗺️</span>
        <h3 className="text-lg font-bold text-gray-800 mb-2">지도를 불러올 수 없습니다</h3>
        <p className="text-sm text-gray-500">
          Vercel 환경 변수에 <code className="bg-stone-100 px-1 rounded">NEXT_PUBLIC_MAPBOX_TOKEN</code>을 설정해주세요.
        </p>
      </div>
    )
  }

  return <div ref={mapContainerRef} className="w-full h-full rounded-2xl overflow-hidden" />
}
