import { Team, SteunOns } from '@/components'
import { Contact } from '@/components/contact'

import { Layout } from '@/components/layout'
import { Media } from '@/components/media'
import { Stichting } from '@/components/stichting'

export default function OverOns() {
  return (
    <Layout
      url={`/overons`}
      title={'Kinder Klimaat Concert Dag'}
      card={
        '/assets/KKCD_Vignet-Blaadje_rgb_blauw.png'
      }
    >
      <Team />
      <Stichting />
      <SteunOns />
      <Contact />
    </Layout>
  )
}
