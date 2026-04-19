import { Box, Container, Stack, Text } from '@chakra-ui/react'
import { Image } from '@/components/mdx'

export const HeroBanner = () => {
  return (
    <Box as='section' bg='#EEEEEE'>
      <Box w='100%' pt={'60px'}>
        <Box position='relative'>
          <Image
            src={'/assets/KKCD_Site_Schets_01.png'}
            alt='Kinder Klimaat Concert Dag'
            w='100%'
            objectFit='cover'
          />
          <Text
            position='absolute'
            top='50%'
            left='50%'
            transform='translate(-50%, -50%)'
            fontSize={{ base: 'xl', sm: '2xl', md: '5xl', lg: '7xl' }}
            fontFamily={'heading'}
            fontWeight='bold'
            color='white'
            textAlign='center'
            px={4}
            w='100%'
            lineHeight={1.1}
          >
            Luister,<br />voor onze<br />toekomst
          </Text>
        </Box>
      </Box>
      <Container maxW='container.lg' pb={12}>
        <Box display='flex' justifyContent='flex-start' gap={{ base: 4, md: 8 }} mt={{ base: '-40px', md: '-60px' }} position='relative' zIndex={1} alignItems='flex-start'>
          <Image
            src='/assets/KKCD_Site_Schets_014.png'
            alt='Kinder Klimaat Concert Dag'
            w={{ base: '300px', md: '400px' }}
            mt = {{ base: '60px', md: '80px' }}
          />
          <Image
            src='/assets/KKCD_Site_Schets_012.png'
            alt='EDITIE #1 - ZO 27 SEP 2026 - TivoliVredenburg Utrecht'
            w={{ base: '200px', md: '300px' }}
          />
          <Image
            src='/assets/KKCD_Site_Schets_015.png'
            alt='Bij'
            w={{ base: '200px', md: '300px' }}
            mt={{ base: '30px', md: '50px' }}
            ml={{ base: '-50px', md: '-80px' }}
          />
        </Box>
        <Text py={5}>
          <Text
            as='h2'
            fontFamily={'heading'}
            fontWeight='bold'
            fontSize={{ base: '2xl', md: '3xl' }}
            color='#6f73b2'
            textAlign='center'
            mb={4}
          >
            Tijdens de Kinder Klimaat Concert Dag staat het perspectief van kinderen en jongeren op klimaatverandering centraal.
          </Text>
          <Text
            as='span'
            textStyle={'paragraphBlock'}
            textAlign='center'
            fontWeight='bold'
            display='block'
          >
            Kinderen hebben nog een open blik, stellen eerlijke vragen en kunnen door hun kwetsbaarheid mensen aan het denken zetten.
            Daarom willen we kinderen één dag in het jaar een platform geven om door muziek te maken, te tekenen, te dansen en te dichten op te komen voor hun toekomst:{' '}
            <Text as='span' display='inline' fontStyle='italic'>
              positief en hoopvol!
            </Text>
          </Text>
        </Text>

      </Container>
    </Box>
  )
}
