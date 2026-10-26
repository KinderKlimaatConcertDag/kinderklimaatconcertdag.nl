import { Box, Container, Divider, Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { Heading, Image } from '@/components/mdx'

export const Editie2026 = () => {
  const [started, setStarted] = useState(false)
  const playerRef = useRef(null)
  const player = useRef(null)
  const ready = useRef(false)
  const wantsPlay = useRef(false)

  // The player is created in the background (hidden behind the preview image) so that the
  // click handler can call playVideo() synchronously; browsers only allow unmuted autoplay
  // when playback starts within the user gesture.
  useEffect(() => {
    let cancelled = false

    const createPlayer = () => {
      if (cancelled || !playerRef.current) return
      const mount = document.createElement('div')
      playerRef.current.appendChild(mount)
      player.current = new window.YT.Player(mount, {
        videoId: 'NP4kIBrUTYM',
        host: 'https://www.youtube-nocookie.com',
        width: '100%',
        height: '100%',
        playerVars: { rel: 0, playsinline: 1 },
        events: {
          onReady: () => {
            ready.current = true
            if (wantsPlay.current) player.current.playVideo()
          },
          onStateChange: (e) => {
            if (e.data === 1) setStarted(true)
          },
        },
      })
    }

    if (window.YT && window.YT.Player) {
      createPlayer()
    } else {
      const previous = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => {
        if (previous) previous()
        createPlayer()
      }
      if (!document.getElementById('youtube-iframe-api')) {
        const script = document.createElement('script')
        script.id = 'youtube-iframe-api'
        script.src = 'https://www.youtube.com/iframe_api'
        document.head.appendChild(script)
      }
    }

    return () => {
      cancelled = true
      ready.current = false
      if (player.current && player.current.destroy) player.current.destroy()
      player.current = null
    }
  }, [])

  const handlePlay = () => {
    wantsPlay.current = true
    if (ready.current) player.current.playVideo()
  }

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
          Kinder Klimaat Concert Dag 2026 groot succes
        </Heading>
        <Divider borderColor='black.200' />
        <Text as='span' fontSize='2xl' fontStyle='italic' textStyle={'paragraphBlock'} mt={4}>
          "Dit was misschien wel een van de mooiste, aangrijpendste, urgentste, belangrijkste concerten, die ik dit jaar en in mijn hele leven heb meegemaakt."
          <Text as='span' display='block' mt={2}>
            (Frank Elderson, directielid Europese Centrale Bank)
          </Text>
        </Text>
        <Divider borderColor='black.200' />
        <Box mt={8} mb={10} w='100%' aspectRatio='16 / 9' borderRadius='md' overflow='hidden' bg='black' position='relative'>
          <Box ref={playerRef} position='absolute' inset={0} sx={{ iframe: { width: '100%', height: '100%', border: 0 } }} />
          {!started && (
            <Box
              as='button'
              type='button'
              aria-label='Video afspelen'
              onClick={handlePlay}
              position='absolute'
              inset={0}
              w='100%'
              h='100%'
              cursor='pointer'
            >
              <Image src='/media/video-first-frame.jpg' alt='' w='100%' h='100%' objectFit='cover' />
              <Box
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                w='72px'
                h='72px'
                borderRadius='full'
                bg='rgba(0,0,0,0.65)'
                _after={{
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '54%',
                  transform: 'translate(-50%, -50%)',
                  borderStyle: 'solid',
                  borderWidth: '14px 0 14px 24px',
                  borderColor: 'transparent transparent transparent white',
                }}
              />
            </Box>
          )}
        </Box>
        <Text as='span' textStyle={'paragraphBlock'} mt={4}>
          11 oktober was het zover: de eerste editie van het Kinder Klimaat Concert Dag vond plaats
          in Utrecht. Het evenement werd afgetrapt met indrukwekkend slagwerk, wat meteen de toon
          zette voor een meeslepend concert.
        </Text>
        <Text as='span' textStyle={'paragraphBlock'} mt={4}>
          Oprichters Luna en Donna van Leeuwen: "Het is haast onvoorstelbaar hoeveel mensen ons
          hebben laten weten dat ze gehuild hebben door de muziek, gespeeld door jonge mensen die
          hoopvol maar ook kwetsbaar zijn. Ook mensen die nooit naar een concert gaan waren
          geëmotioneerd."
        </Text>
        <Text as='span' textStyle={'paragraphBlock'} mt={4}>
          Er werd op hoog niveau gemusiceerd, waarbij een grote diversiteit aan stijlen langskwam,
          inclusief een nieuw werk van de Kindercomponist der Nederlanden en het lied "Wat is er aan
          de hand met mijn land?" van zangers van de stichting Sounds for Freedom.
        </Text>
        <Text as='span' textStyle={'paragraphBlock'} mt={4}>
          Het thema Behoud onze seizoenen, herkenbaar voor alle leeftijden, zorgde voor verbinding
          in de zaal. Door vragen van de kinderen als "Komt er ooit nog een Elfstedentocht?" werd
          laagdrempelig wetenschap betrokken bij het geheel. Professor Erik van Sebille
          beantwoordde deze vragen en introduceerde zo alle seizoenen.
        </Text>
        <Text as='span' textStyle={'paragraphBlock'} mt={4}>
          "Wat gaat er mis, en wat is
          er mogelijk om dit te voorkomen?"
        </Text>
        <Text as='span' textStyle={'paragraphBlock'} mt={4}>
          Zeer enthousiaste reacties waren er ook van de directeur van de Raad voor Cultuur en de
          secretaris-generaal van het ministerie van Onderwijs, Cultuur en Wetenschap die aanwezig
          waren. Zij hopen dat er een vervolg zal zijn.
        </Text>
      </Container>
    </Box>
  )
}
