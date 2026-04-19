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
              Tijdens de avondvoorstelling “Behoud onze seizoenen!” zorgen muziek en kunst gemaakt door kinderen en jongeren voor een bruisende, ontroerende en virtuoze avond.
            </Text>
            <Text as='span' textStyle={'paragraphBlock'}>
              Je wordt meegenomen van de bittere kou in de winter naar de eerste zonnige lentedag, en van een zwoele zomeravond naar de wervelende herfstwind. Diverse stijlen en bezettingen wisselen elkaar af en zorgen voor een veelzijdig en toegankelijk programma.
            </Text>
            <Text as='span' textStyle={'paragraphBlock'}>
              Een bijzondere rol is weggelegd voor de vragen van jongeren. In samenwerking met de KlimaatHelpdesk worden deze vooraf verzameld en vormen ze de inhoudelijke rode draad van de voorstelling. Tijdens het concert worden geselecteerde vragen live gesteld door kinderen en beantwoord door wetenschappers van de Universiteit Utrecht. Zo ontstaat een directe ontmoeting tussen de belevingswereld van jongeren en wetenschappelijke kennis.
            </Text>
            <Text as='span' textStyle={'paragraphBlock'}>
              Ook beeldende kunst maakt deel uit van het programma. Via onze tekenwedstrijd worden basisschoolleerlingen gevraagd hun favoriete seizoen te tekenen. Een selectie van deze tekeningen wordt tijdens het concert geprojecteerd en vormt een visuele laag die de muziek versterkt.
            </Text>
          </Box>
          <Box flex={1}>
            <Heading as='h2' size='xl' mt={0} mb={4} color='#6f73b2'>
              Onderzoek
            </Heading>
            <Text as='span' textStyle={'paragraphBlock'}>
              Na afloop verplaatst het programma zich naar foyer De Punt. Hier presenteren middelbare scholieren uit de regio Utrecht, via U-Talent, hun eigen onderzoek naar klimaatvraagstukken. In deze informele setting gaan zij in gesprek met beleidsmakers, wetenschappers en andere aanwezigen.
            </Text>
            <Text as='span' textStyle={'paragraphBlock'}>
              De Kinder Klimaat Concert Dag brengt zo verschillende generaties en perspectieven samen in een gedeelde ervaring waarin luisteren, ontmoeten en reflectie centraal staan.
            </Text>
          </Box>
        </Box>

      </Container>
    </Box>
  )
}
