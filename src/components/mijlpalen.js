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


export const Mijlpalen = () => {
  return (
    <Box
      id={'mijlpalen'}
      as='section'
      scrollMarginTop={'80px'}
      backgroundImage="url('/assets/KKCD_Site_Schets_018.png')"
      backgroundSize='cover'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
    >
      <Container maxW='container.lg'>

        <Box display='flex' alignItems='center' justifyContent='center' gap={4} pt={10} mb={4}>
          <Image
            src='/assets/KKCD_Site_Schets_016.png'
            alt=''
            h={{ base: '40px', md: '50px' }}
          />
          <Heading as='h1' size='2xl' mt={0} mb={0} color='#eec216' lineHeight='1'>
            Mijlpalen
          </Heading>
        </Box>
        <Divider borderColor='#eec216' />

        <UnorderedList
          fontSize={'lg'}
          pb={5}
          styleType={'none'}
          ml={0}
          display='grid'
          gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }}
          gap={4}
          color='white'
          textAlign='center'
          mt = {8}
        >
          <ListItem borderTop='10px solid white' pt={3}>
            <Text as='h3' fontFamily='heading' fontWeight='bold' fontSize='2xl' color='#eec216' mb={1}>
              Juli 2023
            </Text>
            Pitch “de Kinder Klimaat Concert Dag” wint de Prinses Christina Concours Academy.
          </ListItem>
          <ListItem borderTop='10px solid white' pt={3}>
            <Text as='h3' fontFamily='heading' fontWeight='bold' fontSize='2xl' color='#eec216' mb={1}>
              14 mei 2025
            </Text>
            Oprichting van de <Link as={NextLink} href='/stichting'>Stichting Kinder Klimaat Concert Dag</Link>.
          </ListItem>
          <ListItem borderTop='10px solid white' pt={3}>
            <Text as='h3' fontFamily='heading' fontWeight='bold' fontSize='2xl' color='#eec216' mb={1}>
              Najaar 2025
            </Text>
            <Link isExternal href='https://www.voordekunst.nl/projecten/20033-kinder-klimaat-concert-dag'>Crowdfunding bij platform Voordekunst</Link> is een groot succes.
          </ListItem>
          <ListItem borderTop='10px solid white' pt={3}>
            <Text as='h3' fontFamily='heading' fontWeight='bold' fontSize='2xl' color='#eec216' mb={1}>
              December 2025
            </Text>
            Pitch en optreden als Jonge Helden in Podium Klassiek.
          </ListItem>
          <ListItem borderTop='10px solid white' pt={3}>
            <Text as='h3' fontFamily='heading' fontWeight='bold' fontSize='2xl' color='#eec216' mb={1}>
              December 2025
            </Text>
            Het team wordt uitgebreid met marketeer <Link href='overons#tim-treffers'>Tim Treffers</Link> en fondsenwerver <Link href='overons#maartje-valk'>Maartje Valk</Link>.
          </ListItem>
          <ListItem borderTop='10px solid white' pt={3}>
            <Text as='h3' fontFamily='heading' fontWeight='bold' fontSize='2xl' color='#eec216' mb={1}>
              Januari 2026
            </Text>
            Nominatie voor de <Link isExternal href='https://youngimpact.nl/nominees/donna-luna-van-leeuwen/'>Young Impact Award 2026</Link> in de categorie Klimaat.
          </ListItem>
          <ListItem borderTop='10px solid white' pt={3}>
            <Text as='h3' fontFamily='heading' fontWeight='bold' fontSize='2xl' color='#eec216' mb={1}>
              April 2026
            </Text>
            Winst van de <Link href='resources#young-impact-award-2026'>Young Impact Award 2026</Link> in de categorie Klimaat.
          </ListItem>
        </UnorderedList>

      </Container>
    </Box>
  )
}