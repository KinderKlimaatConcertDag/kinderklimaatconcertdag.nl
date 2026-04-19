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
            Tijdens de avondvoorstelling “Behoud onze seizoenen!” zorgen muziek en kunst gemaakt door kinderen en jongeren voor een bruisende, ontroerende en virtuoze avond. Je wordt meegenomen van de bittere kou in de winter naar de eerste zonnige lentedag, en van een zwoele zomeravond naar de wervelende herfstwind. Diverse stijlen en bezettingen wisselen elkaar af en zorgen voor een veelzijdig en toegankelijk programma.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Een bijzondere rol is weggelegd voor de vragen van jongeren. In samenwerking met de KlimaatHelpdesk worden deze vooraf verzameld en vormen ze de inhoudelijke rode draad van de voorstelling. Tijdens het concert worden geselecteerde vragen live gesteld door kinderen en beantwoord door wetenschappers van de Universiteit Utrecht. Zo ontstaat een directe ontmoeting tussen de belevingswereld van jongeren en wetenschappelijke kennis.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Ook beeldende kunst maakt deel uit van het programma. Via onze tekenwedstrijd worden basisschoolleerlingen gevraagd hun favoriete seizoen te tekenen. Een selectie van deze tekeningen wordt tijdens het concert geprojecteerd en vormt een visuele laag die de muziek versterkt.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Na afloop verplaatst het programma zich naar foyer De Punt. Hier presenteren middelbare scholieren uit de regio Utrecht, via U-Talent, hun eigen onderzoek naar klimaatvraagstukken. In deze informele setting gaan zij in gesprek met beleidsmakers, wetenschappers en andere aanwezigen.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            De Kinder Klimaat Concert Dag brengt zo verschillende generaties en perspectieven samen in een gedeelde ervaring waarin luisteren, ontmoeten en reflectie centraal staan.
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
