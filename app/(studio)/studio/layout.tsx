import '@/app/globals.css'

export const metadata = {
  title: 'Sanity Studio',
  description: 'Content management for Raleigh AI Solutions',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}