import { Box, Container } from '@chakra-ui/react'
import { Heading } from '@/components/mdx'
import React from 'react'

export const Media= () => {
  const [isPlayerLoaded, setIsPlayerLoaded] = React.useState(false)

  return (
    <Box id={'media'} as='section' scrollMarginTop={'80px'} bg='#eeeeee'>
      <Container maxW='container.lg'  pt={10} pb={10}>
        <Heading as='h1' size='2xl' textAlign={'center'}>
          Media
        </Heading>
        <Box
          w='100%'
          h={{ base: '305px', md: '560px' }}
          borderRadius='lg'
          overflow='hidden'
          boxShadow='md'
          display='flex'
          position='relative'
          bg='#eeeeee'
        >
          {!isPlayerLoaded && (
            <Box
              as='button'
              type='button'
              aria-label='Play video'
              onClick={() => setIsPlayerLoaded(true)}
              position='absolute'
              inset={0}
              zIndex={1}
              bgImage='url(/media/video-first-frame.jpg)'
              bgSize='cover'
              bgPosition='center'
              border='0'
              cursor='pointer'
            >
              <Box
                as='span'
                position='absolute'
                left='50%'
                top='50%'
                transform='translate(-50%, -50%)'
                bg='rgba(0, 0, 0, 0.65)'
                color='white'
                px={5}
                py={3}
                borderRadius='9999px'
                fontWeight='bold'
              >
                Play video
              </Box>
            </Box>
          )}
          {isPlayerLoaded && (
            <iframe
              width='100%'
              height='100%'
              style={{ display: 'block', border: 0, backgroundColor: '#eeeeee' }}
              src='https://player.vimeo.com/video/1133141624?autoplay=1&title=0&byline=0&portrait=0&dnt=1'
              title='Kinder Klimaat Concert Dag pitch'
              allow='autoplay; fullscreen; picture-in-picture; encrypted-media'
              allowFullScreen
            />
          )}
        </Box>

      </Container>
    </Box>
  )
}
