import { Box, Container, OrderedList, ListItem, Text } from '@chakra-ui/react'
import { Heading } from '@/components/mdx'
import React from 'react'

export const VoortrajectText = () => {
  const [isPlayerLoaded, setIsPlayerLoaded] = React.useState(false)

  return (
    <Box id={'voortraject'} as='section' scrollMarginTop={'80px'} bg='#eeeeee'>
      <Container maxW='container.lg'  pt={10} pb={10}>
        <Heading as='h1' size='2xl' textAlign={'center'}>
          Voortraject
        </Heading>
        <Text  as='span' textStyle={'paragraphBlock'}>
          De Kinder Klimaat Concert Dag is meer dan alleen de dag zelf. In de maand voorafgaand aan het evenement doorlopen de deelnemers een inhoudelijk uitdagend en creatief traject. Dit traject heeft tot doel artistieke en persoonlijke groei te stimuleren, evenals de verbinding tussen diverse groepen.
        </Text>
        <Text  as='span' textStyle={'paragraphBlock'}>
          De selectie van deelnemers wordt verzorgd door initiatiefnemers Luna en Donna van Leeuwen, in samenwerking met partners binnen talentontwikkeling. Zij stellen een diverse en inclusieve groep samen op basis van motivatie, talent en achtergrond. De deelnemende musici gaan niet alleen artistiek aan de slag, maar doen ook een unieke podiumervaring op als geëngageerd kunstenaar. Tijdens de repetities worden zij voorbereid op hun maatschappelijke rol op het podium en in de toekomst.
        </Text>
        <Text  as='span' textStyle={'paragraphBlock'}>
          Hoe neem je als slagwerker of violist het publiek overtuigend mee?
        </Text>
        <Text  as='span' textStyle={'paragraphBlock'}>
          Tijdens de repetities spreken musici met elkaar wat klimaatverandering en de verandering van de seizoenen voor hen betekent. Daaruit voortvloeiend worden er vragen gesteld. Een selectie van deze vragen wordt opgenomen in de voorstelling. Professor Erik van Sebille, die veel weet over hoe publiek toegankelijk over wetenschap geïnformeerd kan worden, gaat deze vragen beantwoorden. Zo ontstaat er, onder supervisie van onze creatief producent Wijnand Honig, een bijzondere voorstelling.
        </Text>
        <Text  as='span' textStyle={'paragraphBlock'}>
          De jongeren van Sounds for Freedom die een vlucht achtergrond hebben, brengen uiteenlopende ervaringen en perspectieven mee. Zij komen uit landen waar droogte of extreme hitte het dagelijks leven al beïnvloed. Zij maken hun eigen “Climate Song” om mensen te laten voelen wat zij hebben beleefd.
        </Text>
        <Text  as='span' textStyle={'paragraphBlock'}>

          De Kindercomponist der Nederlanden, Kobus Jansen, schrijft in opdracht van dit Kinder Klimaat Concert een compositie over de lente. Ter voorbereiding ontvangt hij coachings van componist Camiel Jansen. Voor Kobus is dit een bijzondere kans om zijn compositie vaardigheden en creatieve talenten verder uit te bouwen en te leren hoe componisten maatschappelijke thema’s kunnen verklanken.
        </Text>
        <Text  as='span' textStyle={'paragraphBlock'}>
          Vanaf het begin van het cursusjaar 2026-2027 zullen basisschoolleerlingen van deelnemende scholen uit diverse regio's aan de slag gaan met de Kinder Klimaat Concert Tekeningen. Het doel is om kinderen uit alle lagen van de bevolking op een laagdrempelige manier bij het project te betrekken, ongeacht of ze een instrument bespelen of thuis iets meekrijgen over het klimaat. Deze tekeningen zullen de seizoenen verbeelden tijdens het concert.
        </Text>
        <Text  as='span' textStyle={'paragraphBlock'}>

        <Heading as='h2' size='xl' textAlign={'center'}>
          Repetitieproces
        </Heading>
        <Text as='span' textStyle='paragraphBlock'>
          Het repetitieproces bestaat uit meerdere fasen:
        </Text>

        <OrderedList>
          <ListItem>Kleine groepsrepetities (muzikale en inhoudelijke voorbereiding)</ListItem>
          <ListItem>
            Verdiepende sessies, mede begeleid door professor Erik van Sebille
          </ListItem>
          <ListItem>Gezamenlijke repetities op de dag zelf.</ListItem>
        </OrderedList>
        </Text>

      </Container>
    </Box>
  )
}
