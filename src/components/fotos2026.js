import { useCallback, useEffect, useState } from 'react'
import { Box, Button, Container, Grid, IconButton, Image, Modal, ModalContent, ModalOverlay, Text } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Heading } from '@/components/mdx'

export const Fotos2026 = ({ photos = [] }) => {
  const [current, setCurrent] = useState(null)
  const isOpen = current !== null

  const step = useCallback(
    (delta) => setCurrent((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length]
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') step(-1)
      if (e.key === 'ArrowRight') step(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, step])

  if (photos.length === 0) return null

  return (
    <Box id={'fotos2026'} as='section' scrollMarginTop={'80px'} bg='#62afa8'>
      <Container maxW='container.lg' pt={10} pb={10}>
        <Heading as='h1' size='2xl' textAlign={'center'}>
          Foto's 2026
        </Heading>
        <Grid mt={8} w='100%' templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={{ base: 2, md: 4 }}>
          {photos.map((src, index) => (
            <Box
              key={src}
              as='button'
              type='button'
              aria-label={`Foto ${index + 1} vergroten`}
              onClick={() => setCurrent(index)}
              aspectRatio='4 / 3'
              overflow='hidden'
              borderRadius='lg'
              boxShadow='md'
              bg='blackAlpha.300'
              _hover={{ '& img': { transform: 'scale(1.05)' } }}
            >
              <Image
                src={src}
                alt={`Kinder Klimaat Concert Dag 2026, foto ${index + 1}`}
                w='100%'
                h='100%'
                objectFit='cover'
                loading='lazy'
                transition='transform 0.3s'
              />
            </Box>
          ))}
        </Grid>
        <Text textAlign='center' fontStyle='italic' mt={2}>
          fotograaf: Alex Schröder
        </Text>
      </Container>

      <Modal isOpen={isOpen} onClose={() => setCurrent(null)} size='full' isCentered>
        <ModalOverlay bg='blackAlpha.900' />
        <ModalContent bg='transparent' boxShadow='none' onClick={() => setCurrent(null)}>
          {isOpen && (
            <Box
              position='relative'
              w='100%'
              h='100vh'
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              p={{ base: 2, md: 8 }}
            >
              <Image
                src={photos[current]}
                alt={`Kinder Klimaat Concert Dag 2026, foto ${current + 1}`}
                maxW='100%'
                maxH='calc(100vh - 120px)'
                objectFit='contain'
                borderRadius='md'
                onClick={(e) => e.stopPropagation()}
              />
              <Button
                as='a'
                href={photos[current]}
                download
                mt={4}
                size='sm'
                bg='#eec216'
                color='black'
                fontFamily='heading'
                onClick={(e) => e.stopPropagation()}
                sx={{ textDecoration: 'none !important' }}
                _hover={{ textDecoration: 'none !important', bg: '#d8af14' }}
              >
                Download foto
              </Button>
              <IconButton
                aria-label='Vorige foto'
                icon={<ChevronLeftIcon boxSize={8} />}
                position='absolute'
                left={{ base: 1, md: 4 }}
                top='50%'
                variant='ghost'
                color='white'
                _hover={{ bg: 'whiteAlpha.300' }}
                onClick={(e) => {
                  e.stopPropagation()
                  step(-1)
                }}
              />
              <IconButton
                aria-label='Volgende foto'
                icon={<ChevronRightIcon boxSize={8} />}
                position='absolute'
                right={{ base: 1, md: 4 }}
                top='50%'
                variant='ghost'
                color='white'
                _hover={{ bg: 'whiteAlpha.300' }}
                onClick={(e) => {
                  e.stopPropagation()
                  step(1)
                }}
              />
            </Box>
          )}
        </ModalContent>
      </Modal>
    </Box>
  )
}
