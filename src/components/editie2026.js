import { Box, Container, Divider, Link, Text } from '@chakra-ui/react'
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
        <Text as='span' textStyle={'paragraphBlock'} mt={4}>
          De eerste kinderklimaat concert dag wordt afgetrapt met <Text as='strong' fontWeight='bold'>de wervelende middagvoorstelling</Text>
        </Text>
        <Heading as='h2' size='xl' mt={8} mb={4} color='#6f73b2' textAlign='center'>
          "Behoud onze seizoenen"
        </Heading>
        <Box display='flex' flexDirection={{ base: 'column', md: 'row' }} gap={{ base: 4, md: 8 }} py={5}>
          <Box flex={1}>
            <Heading as='h2' size='xl' mt={0} mb={4} color='#6f73b2'>
              Concert
            </Heading>
            <Text as='span' textStyle={'paragraphBlock'}>
              <Text as='strong' fontWeight='bold'>Meer dan 80 toptalenten</Text> brengen op het podium de 4 seizoenen tot leven. Dansend, zingend en trommelend. Van ontroerende Piazzolla tot swingende jazz en van virtuoze Vivaldi tot de première van het nieuwste stuk van de kindercomponist des vaderland. <Text as='strong' fontWeight='bold'>Meer dan 500 kinderen</Text> zorgen voor een kleurrijk beeld met de tekeningen die zij maakten over de seizoenen.
            </Text>
            <Text as='span' textStyle={'paragraphBlock'}>
              Als inleiding op elk seizoen stellen kinderen vragen op het podium die hen bezighoudt. Zij krijgen op begrijpelijke wijze uitleg van Professor Erik van Sebille van de Universiteit Utrecht.
            </Text>
            <Text as='span' textStyle={'paragraphBlock'}>
              <Text as='strong' fontWeight='bold'>De sfeer is optimistisch met een urgente ondertoon!</Text>
            </Text>
            <Text as='span' textStyle={'paragraphBlock'}>
              <Text as='strong' fontWeight='bold'>Een belevenis voor iedereen van 7 tot 107.</Text>
            </Text>
          </Box>
          <Box flex={1}>
            <Heading as='h2' size='xl' mt={0} mb={4} color='#6f73b2'>
              Foyer
            </Heading>
            <Text as='span' textStyle={'paragraphBlock'}>
              Na afloop is er ruimte voor <Text as='strong' fontWeight='bold'>ontmoeting en gesprek</Text>. Tussen het publiek en de kinderen op het podium, tussen generaties en tussen stakeholders uit de energietransitie en wetenschappers.
              Onder de gasten worden mensen uit het bankwezen, bedrijfsleven, politiek, bestuur en universiteiten verwacht.
            </Text>
            <Text as='span' textStyle={'paragraphBlock'}>
              Middelbare scholieren uit het <Text as='strong' fontWeight='bold'>U-talent programma</Text> (bèta-excellentie programma van de Universiteit Utrecht) presenteren hun eigen onderzoek waarbij het klimaat een rol speelt.
            </Text>
            <Text as='span' textStyle={'paragraphBlock'}>
              Stel ze vooral de vragen die je hebt!
            </Text>
            <Text as='span' textStyle={'paragraphBlock'}>
              Kinderen kunnen met stickers aan de slag in een project van een student van de UU.
            </Text>
            <Text as='span' textStyle={'paragraphBlock'}>
              <Text as='em' fontStyle='italic'>En er is nog meer te doen!</Text>
            </Text>
          </Box>
        </Box>
        <Heading as='h2' size='xl' mt={0} mb={4} color='#6f73b2'>
          Wie treden er op?
        </Heading>
        <Text as='span' textStyle={'paragraphBlock'}>
          Met onze partners is er een selectie van prijswinnaars van diverse nationale concoursen gemaakt die in verschillende ensembles optreden. Ook treden er (ballet) leerlingen op van de School voor Jong Talent van het Koninklijk Conservatorium: Een slagwerkgroep, hele jonge strijkers en harpisten en een jazz combo. Kindercomponist der Nederlanden Kobus Jansen maakte speciaal voor deze dag een compositie over de lente, met een bijzondere rol voor de contrabas vertolkt door Sasha Witteveen.
        </Text>
        <Text as='span' textStyle={'paragraphBlock'}>
          Kinderen met een vluchtachtergond van <Text as='strong' fontWeight='bold'>Sounds for Freedom</Text> laten zich horen met een eigen <Text as='strong' fontWeight='bold'>Climate Song</Text>.
        </Text>
        <Text as='span' textStyle={'paragraphBlock'}>
          En natuurlijk hoor je Luna (viool) en Donna (cello) zelf!
        </Text>


      </Container>
    </Box>
  )
}
