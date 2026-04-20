import { Box, Container, Divider, Text } from '@chakra-ui/react'
import { Heading, Image } from '@/components/mdx'

export const Editie2026 = () => {
  return (
    <Box id={'editie2026'} as='section' scrollMarginTop={'80px'} bg='#F7EFE7' overflow='hidden' position='relative'>
      <Image
        src='/assets/KKCD_Site_Schets_015.png'
        alt=''
        position='absolute'
        left={{ base: '-80px', md: '-100px' }}
        top='60%'
        w={{ base: '150px', md: '200px' }}
        transform='translateY(-60%) rotate(60deg)'
        zIndex={0}
        display={{ base: 'none', xl: 'block' }}
      />
      <Container maxW='container.lg' position='relative' zIndex={1}>
        <Heading as='h1' size='2xl' mt={0} pt={10} mb={4} textAlign='center'>
          Editie 2026
        </Heading>
        <Divider borderColor='black.200' />

        <Box display='flex' flexDirection={{ base: 'column', md: 'row' }} gap={{ base: 4, md: 8 }} py={5}>
          <Box flex={1}>
            <Heading as='h2' size='xl' mt={0} mb={4} color='#6f73b2'>
              Avondvoorstelling
            </Heading>
            <Text as='span' textStyle={'paragraphBlock'}>
              Tijdens de avondvoorstelling “Behoud onze seizoenen!” zorgen muziek en kunst van kinderen en jongeren voor een bruisende, ontroerende en virtuoze reis langs de vier seizoenen: van winterkou tot zwoele zomer en wervelende herfst.
            </Text>
            <Text as='span' textStyle={'paragraphBlock'}>
              Vragen van jongeren over het klimaat, vooraf verzameld met de KlimaatHelpdesk, vormen de rode draad. Kinderen stellen deze live aan wetenschappers van de Universiteit Utrecht, zodat hun belevingswereld en wetenschappelijke kennis elkaar direct ontmoeten.
            </Text>
            <Text as='span' textStyle={'paragraphBlock'}>
              Basisschoolleerlingen tekenen hun favoriete seizoen; een selectie vormt als projectie een visuele laag bij het concert.
            </Text>
          </Box>
          <Box flex={1}>
            <Heading as='h2' size='xl' mt={0} mb={4} color='#6f73b2'>
              Onderzoek
            </Heading>
            <Text as='span' textStyle={'paragraphBlock'}>
              Na afloop presenteren middelbare scholieren uit de regio Utrecht via U-Talent hun onderzoek naar klimaatvraagstukken en gaan in gesprek met beleidsmakers, wetenschappers en publiek.
            </Text>
            <Text as='span' textStyle={'paragraphBlock'}>
              De Kinder Klimaat Concert Dag verbindt zo generaties rond luisteren, ontmoeten en reflectie.
            </Text>
          </Box>
        </Box>

      </Container>
    </Box>
  )
}
