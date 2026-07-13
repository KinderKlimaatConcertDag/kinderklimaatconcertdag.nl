import { Box, Container, Text, Divider, Grid, GridItem } from '@chakra-ui/react'
import { Heading } from '@/components/mdx'
import Script from 'next/script'
import React from 'react'

export const Doneer = () => {
  const donorboxWidgetRef = React.useRef(null)
  const [isDonorboxReady, setIsDonorboxReady] = React.useState(false)

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.customElements?.get('dbox-widget')) {
      setIsDonorboxReady(true)
    }
  }, [])

  React.useEffect(() => {
    if (!isDonorboxReady || !donorboxWidgetRef.current) {
      return undefined
    }

    donorboxWidgetRef.current.innerHTML = '<dbox-widget campaign="kinder-klimaat-concert-dag" type="donation_form" enable-auto-scroll="true"></dbox-widget>'

    return () => {
      if (donorboxWidgetRef.current) {
        donorboxWidgetRef.current.innerHTML = ''
      }
    }
  }, [isDonorboxReady])

  return (
    <Box id={'doneer'} as='section' scrollMarginTop={'100px'}>
      <Container maxW='container.lg'>
        <Script
          src='https://donorbox.org/widgets.js'
          type='module'
          strategy='afterInteractive'
          onReady={() => setIsDonorboxReady(true)}
        />
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'minmax(0, 1fr) minmax(320px, 420px)',
          }}
          gap={{ base: 8, lg: 10 }}
          alignItems='start'
          my={8}
        >
          <GridItem>
            <Heading as='h1' size='xl' textAlign='center' color='#6f73b2'>
            Doe een donatie!
            </Heading>
            <Text as='p' textStyle={'paragraphBlock'} fontSize="xl">
              De Kinder Klimaat Concert Dag is dankbaar voor alle donaties om van het evenement een zo groot mogelijk succes te maken. Gebruik het formulier hieronder om ons te steunen met een bedrag naar keuze.
            </Text>
            <Text as='p' textStyle={'paragraphBlock'} fontSize="xl">
              Onze dank is groot!
            </Text>
          </GridItem>
          <GridItem display='flex' justifyContent='center'>
            <Box ref={donorboxWidgetRef} />
          </GridItem>
        </Grid>
        <Divider borderColor='black.200' />

      </Container>
    </Box>
  )
}
