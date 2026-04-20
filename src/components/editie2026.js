import { Box, Container, Text, UnorderedList, ListItem, ListIcon } from '@chakra-ui/react'
import { Heading, Image } from '@/components/mdx'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Editie2026 = () => {
  return (
    <Box id={'editie2026'} as='section' scrollMarginTop={'80px'} bg='#72a9c9'>
      <Container maxW='container.lg'>
        <Heading as='h1' size='2xl' mt={0} pt={10} textAlign='center'>
          Editie 2026
        </Heading>
        <Text>
          <Text as='span'
            textStyle={'paragraphBlock'}
            fontWeight='bold'
            fontSize='2xl'
            ml={0}
            bg='#cd5b1c'
            p={3}
            borderRadius='md'
            textAlign='center'
          >
            De eerste Kinder Klimaat Concert Dag vindt plaats op zondag 27 september 2026 in TivoliVredenburg in Utrecht.
          </Text>
        </Text>
        <Box py={5} position='relative'>
          <Box>
          <Box pr={{ base: 0, md: '430px' }}>
          <Text as='span' textStyle={'paragraphBlock'}>
            Tijdens de avondvoorstelling “Behoud onze seizoenen!” zorgen muziek en kunst van kinderen en jongeren voor een bruisende, ontroerende en virtuoze reis langs de vier seizoenen: van winterkou tot zwoele zomer en wervelende herfst.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Vragen van jongeren over het klimaat, vooraf verzameld met de KlimaatHelpdesk, vormen de rode draad. Kinderen stellen deze live aan wetenschappers van de Universiteit Utrecht, zodat hun belevingswereld en wetenschappelijke kennis elkaar direct ontmoeten.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Basisschoolleerlingen tekenen hun favoriete seizoen; een selectie vormt als projectie een visuele laag bij het concert.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Na afloop presenteren middelbare scholieren uit de regio Utrecht via U-Talent hun onderzoek naar klimaatvraagstukken en gaan in gesprek met beleidsmakers, wetenschappers en publiek.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            De Kinder Klimaat Concert Dag verbindt zo generaties rond luisteren, ontmoeten en reflectie.
          </Text>
        </Box>
        </Box>
          <Image
            src='/posters/KKCD_Posters_A4_10-md.jpg'
            srcSet='/posters/KKCD_Posters_A4_10-sm.jpg 424w, /posters/KKCD_Posters_A4_10-md.jpg 636w, /posters/KKCD_Posters_A4_10.jpg 848w'
            sizes='(max-width: 48em) 100vw, 400px'
            alt='Kinder Klimaat Concert Dag poster'
            position={{ base: 'static', md: 'absolute' }}
            top={0}
            right={0}
            w={{ base: '100%', md: '400px' }}
            maxW={{ md: '400px' }}
            mt={{ base: 4, md: 0 }}
            mb={{ base: 0, md: 0 }}
            borderRadius='lg'
            boxShadow='md'
          />
        </Box>

      </Container>
    </Box>
  )
}
