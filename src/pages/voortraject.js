import { VoortrajectText } from '@/components'
import { Layout } from '@/components/layout'

export default function Voortraject() {
  return (
    <Layout
      url={`/voortraject`}
      title={'Kinder Klimaat Concert Dag'}
      card={
        '/assets/KKCD_Vignet-Blaadje_rgb_blauw.png'
      }
    >
      <VoortrajectText />
    </Layout>
  )
}