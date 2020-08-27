import * as React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Dropdown from '@components/Dropdown'
import routes from '@utils/routes'
import { FiMoreHorizontal } from 'react-icons/fi'
import { AiOutlineFontColors } from 'react-icons/ai'
import { MdFeaturedPlayList } from 'react-icons/md'

const ThemeSwitch = dynamic(() => import('@components/layout/ThemeSwitch'), {
  ssr: false,
})

export interface Props {
  className?: string | Record<string, unknown>
}

const AppHeader: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={clsx(
        'bg-white dark:bg-gray-800 py-2 px-3 flex items-center sticky top-0',
        className
      )}
    >
      <div className="mr-auto flex items-center">
        <Link {...routes.INDEX}>
          <a
            title="home"
            className="flex-grow text-xl font-bold text-black dark:text-white dark:hover:text-black"
          >
            BJ Brews
          </a>
        </Link>
      </div>
      <div className="flex items-center">        
        <ul className="py-2 text-sm flex items-center">
          <li className="mr-3">
            <Link {...routes.COMPONENTS}>
              <a className="dark:text-gray-100 hover:underline" title="components">
                Beers
              </a>
            </Link>
          </li>
          <li className="mr-3">
            <Link {...routes.TYPOGRAPHY}>
              <a className="dark:text-gray-100 hover:underline" title="Typography">
                Philosophy
              </a>
            </Link>
          </li>            
        </ul>
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default AppHeader
