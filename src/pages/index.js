import { Concert, HeroBanner, HoeHetBegon, Partners } from '@/components'

import { Layout } from '@/components/layout'
import { Media } from '@/components/media'

export default function IndexPage() {
  return (
    <Layout
      url={`/`}
      title={'Kinder Klimaat Concert Dag'}
      card={
        '/assets/KKCD_Vignet-Blaadje_rgb_blauw.png'
      }
      // enableBanner
    >
      <HeroBanner />
      <Concert />
      <HoeHetBegon />
      {/* <Media /> */}
      <Partners />
    </Layout>
  )
}
