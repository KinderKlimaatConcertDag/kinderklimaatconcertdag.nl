import fs from 'fs'
import path from 'path'
import { Fotos2026, Artwork, Fotos, Media } from '@/components'
import { Layout } from '@/components/layout'

// Photos are listed at build time, so dropping files into public/photos2026 is enough.
export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'public', 'photos2026')
  const photos = fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .sort()
    .map((file) => `/photos2026/${file}`)
  return { props: { photos } }
}

export default function Resources({ photos }) {
  return (
    <Layout
      url={`/resources`}
      title={'Kinder Klimaat Concert Dag'}
      card={
        '/assets/KKCD_Vignet-Blaadje_rgb_blauw.png'
      }
    >
      <Fotos2026 photos={photos} />
      <Media />
      <Artwork />
      <Fotos />
    </Layout>
  )
}