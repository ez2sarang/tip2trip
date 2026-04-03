import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeaderProps {
  title: string
  subtitle: string
  breadcrumb: BreadcrumbItem[]
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-stone-900 to-amber-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 브레드크럼 */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-amber-300 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-amber-300">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-gray-300 text-lg max-w-2xl">{subtitle}</p>
      </div>
    </div>
  )
}
