import { Box, Container, Image, Text } from '@chakra-ui/react'
import { Heading } from '@/components/mdx'

export const Team = () => {
  return (
    <Box id={'team'} as='section' scrollMarginTop={'80px'}  bg='#EEEEEE'>
      <Container maxW='container.lg' pt={10} pb={10}>
        <Heading as='h1' size='2xl' textAlign={'center'}>
          Team
        </Heading>
        <Box py={5}>
          <Box display='flex' flexDirection={{ base: 'column', md: 'row-reverse' }} alignItems='flex-start' gap={6}>
            <Image
              src='/team/LunavanLeeuwen.jpeg'
              alt='Luna van Leeuwen'
              w={{ base: '100%', md: '220px' }}
              maxW={{ base: '320px', md: '220px' }}
              borderRadius='lg'
              boxShadow='md'
              flexShrink={0}
            />
            <Box>
              <Heading as='h2' size='xl' pb={0} pt={0} mt={0} id='luna-van-leeuwen'>
                Luna van Leeuwen
              </Heading>
              <Heading as='h3' size='l'>
                Oprichter
              </Heading>
              <Text as='span' textStyle={'paragraphBlock'}>
                Luna, 22 jaar, heeft een passie voor muziek en wil deze passie ook inzetten voor een goed doel. Ze won met haar viool nationale en internationale concoursen en trad al meermalen op in de Grote Zaal van het Concertgebouw. Ze speelde als solist met orkesten in binnen -en buitenland en was al vaak te zien op TV. Na haar Gymnasium Diploma combineerde ze een rechten en een conservatorium studie. Ze werd opgenomen in het nationale Talent Empowerment traject, speciaal voor jonge topmusici en topsporters.
              </Text>
              <Text as='span' textStyle={'paragraphBlock'}>
                Ze woont in Berlijn, waar ze viool studeert aan de prestieuze Hanns Eisler Hochschule für Musik. Daar is ze ook actief in de studentenraad.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box py={5}>
          <Box display='flex' flexDirection={{ base: 'column', md: 'row-reverse' }} alignItems='flex-start' gap={6}>
            <Image
              src='/team/DonnavanLeeuwen.jpeg'
              alt='Donna van Leeuwen'
              w={{ base: '100%', md: '220px' }}
              maxW={{ base: '320px', md: '220px' }}
              borderRadius='lg'
              boxShadow='md'
              flexShrink={0}
            />
            <Box>
              <Heading as='h2' size='xl' pb={0} pt={0} mt={0} id='donna-van-leeuwen'>
                Donna van Leeuwen
              </Heading>
              <Heading as='h3' size='l'>
                Oprichter
              </Heading>
              <Text as='span' textStyle={'paragraphBlock'}>
                Donna, 19 jaar heeft een passie voor muziek en wetenschap. Met haar cello won ze prijzen op diverse concoursen en was ze live op tv te zien tijdens het Kinderprinsengrachtconcert. Ook speelde ze op de Nationale Kinderdodenherdenking.  Ze is aanvoerder van de cello groep in het Jeugd Orkest Nederland.
              </Text>
              <Text as='span' textStyle={'paragraphBlock'}>
                Donna woont en studeert in Rotterdam. Daar is ze bezig met een Bachelor economie aan Erasmus University College. Ze heeft plezier in wetenschappelijke uitdagingen en volgde tijdens haar middelbare school het U-talentprogramma van de Universiteit Utrecht.
              </Text>
              <Text as='span' textStyle={'paragraphBlock'}>
                Al jong was ze gegrepen door van alles wat er voorbij kwam in het nieuws, zoals het klimaat, maar ook de vluchtelingencrisis. Toen ze 9 was schreef ze daarover een boek over de reis van een kind dat moet vluchten.
              </Text>
            </Box>
          </Box>
        </Box>

        <Heading as='h2' size='xl' id='maartje-valk'>
            Maartje Valk
        </Heading>
        <Heading as='h3' size='l'>
          Zakelijk advies en fondsenwerving
        </Heading>
        <Text as='span' textStyle={'paragraphBlock'}>
          Maartje geeft zakelijk advies en is verantwoordelijk voor fondsenwerving van de Kinder Klimaat Concert Dag 2026. Daarnaast is ze zakelijk leider van het Bachfestival Dordrecht en programmamanager van het Blockbusterfonds.
        </Text>
        <Heading as='h2' size='xl' id='tim-treffers'>
            Tim Treffers
        </Heading>
        <Heading as='h3' size='l'>
          Communicatie
        </Heading>
        <Text as='span' textStyle={'paragraphBlock'}>
          Tim is verantwoordelijk voor communicatie rond de Kinder Klimaat Concert Dag 2026.
        </Text>

      </Container>
    </Box>

  )
}
