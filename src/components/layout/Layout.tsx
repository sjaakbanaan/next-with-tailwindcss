import * as React from 'react'
import clsx from 'clsx'
import Head from 'next/head'
import AppHeader from '@components/layout/AppHeader'

export interface Props {
  title?: string
  className?: string | Record<string, unknown>
}

const Layout: React.FC<Props> = ({
  title = '',
  className,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <AppHeader />
        <main className={clsx('flex-grow', className)}>{children}</main>
        <footer className="text-xs text-center text-gray-600 py-4 px-3">
          Ripped with ♥ by sjaakbanaan
        </footer>
      </div>
    </>
  )
}

export default Layout
