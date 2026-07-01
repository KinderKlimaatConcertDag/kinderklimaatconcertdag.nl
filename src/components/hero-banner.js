import { Box, Container, Text } from '@chakra-ui/react'
import { Image } from '@/components/mdx'

export const HeroBanner = () => {
  return (
    <Box as='section' bg='#EEEEEE' overflowX='hidden'>
      <Box w='100%' pt={'60px'}>
        <Box position='relative'>
          <Image
            src={'/assets/KKCD_Site_Schets_01.png'}
            alt='Kinder Klimaat Concert Dag'
            w='100%'
            h={{ base: '280px', md: 'auto' }}
            objectFit='cover'
          />
          <Text
            position='absolute'
            top='50%'
            left='50%'
            transform='translate(-50%, -50%)'
            fontSize={{ base: '5xl', lg: '7xl' }}
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
        <Box display='flex' justifyContent={{ base: 'center', md: 'flex-start' }} flexWrap={{ base: 'wrap', md: 'nowrap' }} gap={{ base: 4, md: 8 }} mt={{ base: '-40px', md: '-60px' }} position='relative' zIndex={1} alignItems='flex-start'>
          <Image
            src='/assets/KKCD_Site_Schets_014.png'
            alt='Kinder Klimaat Concert Dag'
            w={{ base: '300px'}}
            mt={{ base: '60px', md: '80px' }}
          />
          <Box display='flex' gap={{ base: 4, md: 8 }} alignItems='flex-start' minW={0}>
            <a
              href='https://www.tivolivredenburg.nl/agenda/87928530/kinder-klimaat-concert-dag-11-10-2026'
              target='_blank'
              rel='noopener noreferrer'
              style={{ display: 'inline-block', width: '60%', maxWidth: '300px', flexShrink: 1, cursor: 'pointer', position: 'relative', zIndex: 1 }}
            >
              <Image
                src='/assets/vignet_11okt.png'
                alt='EDITIE #1 - ZO 11 OKT 2026 - TivoliVredenburg Utrecht'
                w='100%'
                cursor='pointer'
              />
            </a>
            <Image
              src='/assets/KKCD_Site_Schets_015.png'
              alt='Bij'
              w={{ base: '45%', md: '300px' }}
              maxW='300px'
              mt={{ base: '30px', md: '50px' }}
              ml={{ base: '-40px', sm: '-50px', md: '-80px' }}
              flexShrink={1}
            />
          </Box>
        </Box>
        <Box py={5}>
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
        </Box>
      </Container>
      <Box bg='#6f73b2' py={{ base: 6, md: 8 }} px={4} id='tickets' scrollMarginTop={'80px'}>
        <Container maxW='container.lg'>
          <Text
            as='a'
            href='https://www.tivolivredenburg.nl/agenda/87928530/kinder-klimaat-concert-dag-11-10-2026'
            target='_blank'
            rel='noopener noreferrer'
            display='block'
            textAlign='center'
            fontFamily='heading'
            fontWeight='bold'
            fontSize={{ base: '4xl', md: '6xl' }}
            color='#eec216'
            textDecoration='underline'
            cursor='pointer'
            _hover={{ color: '#f7d85c' }}
          >
            Koop je tickets hier!
          </Text>
        </Container>
      </Box>
    </Box>
  )
}
