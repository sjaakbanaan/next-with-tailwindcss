import * as React from 'react'
import { NextPage } from 'next'
import Layout from '@components/layout/Layout'
import routes from '@utils/routes'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const IndexPage: NextPage = () => {
  return (
    <Layout title="BJ Brews" className="container py-8 max-w-xl">
      <h1 className="dark:text-gray-100 text-3xl font-bold mb-4">Welcome</h1>
      <p className="mb-4 font-light text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis urna mi, et vulputate arcu pellentesque vitae. Aliquam eu risus iaculis libero eleifend dapibus sed in urna. Nunc fermentum tellus vitae maximus ullamcorper. Morbi interdum arcu ut interdum finibus. Nulla sagittis tristique nunc, a lobortis erat laoreet blandit. Maecenas vehicula nisl a nunc luctus, ac sodales elit porta. Donec ullamcorper euismod erat eu rhoncus. Donec a orci nulla. Sed rutrum aliquet porta. Sed dignissim enim semper ipsum hendrerit, ut consectetur magna venenatis. Proin feugiat ullamcorper blandit. Mauris commodo suscipit ante, ut gravida ipsum euismod sit amet. Maecenas faucibus vel eros non vulputate. Nulla ut nunc tempor, ullamcorper dolor in, rutrum quam. Sed facilisis consectetur turpis, nec aliquet nulla ultrices eu. Integer vitae dolor sit amet ex sollicitudin commodo.
      </p>
    </Layout>
  )
}

export default IndexPage
