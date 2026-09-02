import { Box, Container, Image, Text } from '@chakra-ui/react'
import { Heading } from '@/components/mdx'
import React from 'react'

export const Media= () => {
  const [isPlayerLoaded, setIsPlayerLoaded] = React.useState(false)

  return (
    <Box id={'media'} as='section' scrollMarginTop={'80px'} bg='#eeeeee'>
      <Container maxW='container.lg'  pt={10} pb={10}>
        <Heading as='h1' size='2xl' textAlign={'center'}>
          Media
        </Heading>
        <Heading as='h2' size='xl' pb={0} pt={20} mt={0} id='young-impact-award-2026' textAlign={'center'}>
          We hebben de Young Impact Award 2026 gewonnen!
        </Heading>
        <Text  as='span' textStyle={'paragraphBlock'}>
          Een bijzondere erkenning voor ons idee en de maatschappelijke impact die we willen maken met de Kinder Klimaat Concert Dag. Tijdens de Awards op 2 april mochten we een pitch geven voor de 500 aanwezigen en partners van Young Impact, en kregen we de kans om nieuwe connecties te maken met verschillende bedrijven en organisaties die zich inzetten voor maatschappelijke impact.
        </Text>

        <Box mt={8} w='100%'>
          <Image
            src='/media/YoungImpactAwards2026.jpeg'
            sizes='100vw'
            alt='Young Impact Award 2026'
            w='100%'
            maxW='100%'
            borderRadius='lg'
            boxShadow='md'
          />
        </Box>

      </Container>
    </Box>
  )
}
