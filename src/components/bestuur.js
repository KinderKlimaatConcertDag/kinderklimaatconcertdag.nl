import { Badge, Box, Container, Image, Text, Link } from '@chakra-ui/react'
import { Heading } from '@/components/mdx'

export const Bestuur = () => {
  return (
    <Box id={'bestuur'} as='section' scrollMarginTop={'80px'}  bg='#EEEEEE'>
      <Container maxW='container.lg' pt={10} pb={10}>

        <Heading as='h1' size='2xl' textAlign={'center'}>
          Het bestuur
        </Heading>
        <Box py={5}>
          <Box display='flex' flexDirection={{ base: 'column', md: 'row-reverse' }} alignItems='flex-start' gap={6}>
            <Image
              src='/team/HenkvanderMeulen.jpg'
              alt='Henk van der Meulen'
              w={{ base: '100%', md: '220px' }}
              maxW={{ base: '320px', md: '220px' }}
              borderRadius='lg'
              boxShadow='md'
              flexShrink={0}
            />
            <Box>
              <Heading as='h2' size='xl' pt={0} mt={0} id='henk-van-de-meulen'>
                  Henk van der Meulen
              </Heading>
              <Heading as='h3' size='l'>
                Voorzitter
              </Heading>
              <Text as='span' textStyle={'paragraphBlock'}>
                Henk van der Meulen is componist, was hoofd van afdeling Muziek en Dans van de NPS televisie, directeur van het Koninklijk Conservatorium en Voorzitter van het College van  Bestuur van de Hogeschool der Kunsten Den Haag. Hij is actief als bestuurder, toezichthouder en adviseur in de wereld van kunst en cultuur.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box py={5}>
          <Box display='flex' flexDirection={{ base: 'column', md: 'row-reverse' }} alignItems='flex-start' gap={6}>
            <Image
              src='/team/ErikdeRuijtervanSteveninck.png'
              alt='Erik de Ruijter van Steveninck'
              w={{ base: '100%', md: '220px' }}
              maxW={{ base: '320px', md: '220px' }}
              borderRadius='lg'
              boxShadow='md'
              flexShrink={0}
            />
            <Box>
              <Heading as='h2' size='xl' pt={0} mt={0} id='erik-de-ruijter-van-steveninck'>
                  Erik de Ruijter van Steveninck
              </Heading>
              <Heading as='h3' size='l'>
                Secretaris
              </Heading>
              <Text as='span' textStyle={'paragraphBlock'}>
                Erik heeft als marien ecoloog bij het IHE Delft mede bijgedragen aan het opzetten en wereldwijd verzorgen van cursussen op het gebied van klimaatadaptatie in het waterbeheer. Hij is amateur fluitist en penningmeester bij de Stichting Muziekfestival Utrechtse Heuvelrug.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box py={5}>
          <Box display='flex' flexDirection={{ base: 'column', md: 'row-reverse' }} alignItems='flex-start' gap={6}>
            <Image
              src='/team/AtzeSytsma.jpeg'
              alt='Atze Sytsma'
              w={{ base: '100%', md: '220px' }}
              maxW={{ base: '320px', md: '220px' }}
              borderRadius='lg'
              boxShadow='md'
              flexShrink={0}
            />
            <Box>
              <Heading as='h2' size='xl' pt={0} mt={0} id='atze-sytsma'>
                Atze Sytsma
                <Link isExternal href='https://www.linkedin.com/in/atze-sytsma-4a5682/' _hover={{ textDecoration: 'none' }} display='inline-block' mb={0} ml={3}>
                  <Badge bg='#eec216' color='black' textTransform='none' borderRadius='full' px={3} py={1} mb={0}>
                    LinkedIn
                  </Badge>
                </Link>
              </Heading>
              <Heading as='h3' size='l'>
                Penningmeester
              </Heading>
              <Text as='span' textStyle={'paragraphBlock'}>
                Atze was o.a. directeur van concertzalen, symfonieorkesten, een museum, een bibliotheekorganisatie en het VSBfonds. Hij was ook voorzitter van het Nationaal JeugdOrkest en was en is toezichthouder en bestuurder bij non-profitorganisaties.
              </Text>
            </Box>
          </Box>
        </Box>


        <Box py={5}>
          <Box display='flex' flexDirection={{ base: 'column', md: 'row-reverse' }} alignItems='flex-start' gap={6}>
            <Image
              src='/team/IlonkaKolthof.jpg'
              alt='Ilonka Kolthof'
              w={{ base: '100%', md: '220px' }}
              maxW={{ base: '320px', md: '220px' }}
              borderRadius='lg'
              boxShadow='md'
              flexShrink={0}
            />
            <Box>
              <Heading as='h2' size='xl' pt={0} mt={0} id='ilonka-kolthof'>
                Ilonka Kolthof
                <Link isExternal href='https://www.linkedin.com/in/ilonkakolthof/' _hover={{ textDecoration: 'none' }} display='inline-block' mb={0} ml={3}>
                  <Badge bg='#eec216' color='black' textTransform='none' borderRadius='full' px={3} py={1} mb={0}>
                    LinkedIn
                  </Badge>
                </Link>
              </Heading>
              <Heading as='h3' size='l'>
                Bestuurslid
              </Heading>
              <Text as='span' textStyle={'paragraphBlock'}>
                Ilonka Kolthof is communicatieprofessional in de culturele sector en momenteel hoofd marketing en communicatie van Bachfestival Dordrecht. Eerder werkte zij onder meer als senior communicatieadviseur en woordvoerder bij de Raad voor Cultuur en als marketeer voor organisaties als Amare en het Prinses Christina Concours. Ilonka heeft een achtergrond als klassiek fluitist.
              </Text>
            </Box>
          </Box>
        </Box>

        <Heading as='h1' size='2xl' textAlign={'center'}>
          Adviseurs
        </Heading>
        <Box py={5}>
          <Box display='flex' flexDirection={{ base: 'column', md: 'row-reverse' }} alignItems='flex-start' gap={6}>
            <Image
              src='/team/ErikvanSebille.png'
              alt='Erik van Sebille'
              w={{ base: '100%', md: '220px' }}
              maxW={{ base: '320px', md: '220px' }}
              borderRadius='lg'
              boxShadow='md'
              flexShrink={0}
            />
            <Box>
              <Heading as='h2' size='xl' pt={0} mt={0} id='erik-van-sebille'>
                  Erik van Sebille
                <Link isExternal href='https://www.linkedin.com/in/erikvansebille/' _hover={{ textDecoration: 'none' }} display='inline-block' mb={0} ml={3}>
                  <Badge bg='#eec216' color='black' textTransform='none' borderRadius='full' px={3} py={1} mb={0}>
                    LinkedIn
                  </Badge>
                </Link>
              </Heading>
              <Text as='span' textStyle={'paragraphBlock'}>
                Erik is hoogleraar oceanografie en wetenschapscommunicatie aan de <Link isExternal href='https://www.uu.nl/staff/EvanSebille'>Universiteit Utrecht</Link>. Hij is gespecialiseerd in oceaanstromingen en de verspreiding van microplastics in de oceanen. Hij heeft een grote passie voor het klimaat en is een veelgevraagd spreker over klimaatverandering en de rol van de oceanen.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box py={5}>
          <Box display='flex' flexDirection={{ base: 'column', md: 'row-reverse' }} alignItems='flex-start' gap={6}>
            <Image
              src='/team/AnjaVolk.jpeg'
              alt='Anja Volk'
              w={{ base: '100%', md: '220px' }}
              maxW={{ base: '320px', md: '220px' }}
              borderRadius='lg'
              boxShadow='md'
              flexShrink={0}
            />
            <Box flex={1}>
              <Heading as='h2' size='xl' pt={0} mt={0} id='anja-volk'>
                  Anja Volk
                <Link isExternal href='https://www.linkedin.com/in/anja-volk-54439724/' _hover={{ textDecoration: 'none' }} display='inline-block' mb={0} ml={3}>
                  <Badge bg='#eec216' color='black' textTransform='none' borderRadius='full' px={3} py={1} mb={0}>
                    LinkedIn
                  </Badge>
                </Link>
              </Heading>
              <Text as='span' textStyle={'paragraphBlock'}>
                Anja is hoogleraar Music Information Computing aan de <Link isExternal href='https://www.uu.nl/staff/AVolk'>Universiteit Utrecht</Link>. Ze verbindt haar liefde voor muziek en informatica om de fundamentele rol van muziek in ons leven te ontsluiten. Als lid van de programmacommissie van <Link isExternal href='https://www.uu.nl/onderzoek/dynamics-of-youth'>Dynamics of Youth</Link> onderzoekt ze de rol van muziek voor de ontwikkeling van kinderen en jeugd.
              </Text>
            </Box>
          </Box>
        </Box>

      </Container>
    </Box>

  )
}
