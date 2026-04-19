import {
  Box,
  Container,
  Divider,
  ListIcon,
  ListItem,
  Link,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { Heading, Image } from '@/components/mdx'
import { CheckCircleIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'


export const HoeHetBegon = () => {
  return (
    <Box id={'hoehetbegon'} as='section' scrollMarginTop={'80px'}>
      <Container maxW='container.lg'>
        <Heading as='h1' size='2xl' mt={0} pt={10} mb={4} textAlign='center'>
          Hoe het begon
        </Heading>
        <Divider borderColor='black.200' />
        <Box display='flex' flexDirection={{ base: 'column', md: 'row' }} gap={6} alignItems={{ base: 'center', md: 'flex-start' }}>
          <Box flex={1}>
          <Heading as='h2' size='xl' mt={2} mb={4} color='#6f73b2'>
            Van keukentafel idee tot de eerste nationale Kinder Klimaat Concert Dag.
          </Heading>
        <Text>
          <Text as='span' textStyle={'paragraphBlock'}  fontWeight='bold'>
            Al vanaf heel jonge leeftijd merkten wij, <Link as={NextLink} href='/overons#luna-van-leeuwen'>Luna</Link> (viool) en <Link as={NextLink} href='/overons#donna-van-leeuwen'>Donna</Link> (cello), dat we tijdens concerten die wij gaven mensen konden ontroeren.
            We vroegen ons af: kunnen we deze kracht niet inzetten om iets te bereiken wat ons al jaren bezighoudt: klimaatverandering.
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            Dit is een nog onopgelost probleem waarin de belangrijkste uitdaging is: hoe overtuig je mensen, dat zij nu iets moeten veranderen om voor ons toekomstige klimaat te zorgen. Lukt dat met alleen cijfers en tabellen of helpt het als je via muziek ook emotie gebruikt? Zouden kinderen, die muziek maken, en vragen: “wil je alsjeblieft iets voor mijn toekomst doen?”, een nieuwe snaar kunnen raken?
          </Text>
          <Text as='span' textStyle={'paragraphBlock'}>
            In 2023 en 2024 hebben we ons idee voorgelegd aan diverse directies van culturele instellingen. We spraken met directies van de NTR, NPO klassiek, Nationale Jeugdorkesten Nederland, Het Concertgebouw, de Kindermuziekweek, de Universiteit Utrecht en diverse fondsen. We kregen zoveel aanmoedigingen dat we besloten dat we ermee door moesten gaan. Na een zorgvuldig proces waarin we het doel, de toon en onze aanpak uitwerkten, bereikten we al deze hoogtepunten!
          </Text>
        </Text>
          </Box>
          <Image
            src='/assets/KKCD_Site_Schets_017.png'
            alt=''
            w={{ base: '70%', md: '400px' }}
            flexShrink={0}
          />
        </Box>

      </Container>
    </Box>
  )
}
