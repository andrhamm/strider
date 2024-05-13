import { Content, RootLayout, Sidebar } from '@/components'

import { useRef } from 'react'

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      <RootLayout>
        <Sidebar className="border-4 border-red-500">Sidebar</Sidebar>

        <Content ref={contentContainerRef} className="border-4 border-blue-500">
          Content
        </Content>
      </RootLayout>
    </>
  )
}

export default App
