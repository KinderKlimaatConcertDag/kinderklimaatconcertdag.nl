import {
  Box,
  Container,
  Text,
} from '@chakra-ui/react'
import React from 'react'

import { Heading } from '@/components/mdx'

export const Contact = () => {
  return (
    <Box id={'contact'} as='section' scrollMarginTop={'100px'}>
      <Container maxW='container.lg'>
        <Heading as='h1' size='2xl' textAlign={'center'}>
          Contactgegevens
        </Heading>

        <Box py={4}>
          <Text fontSize={'lg'}>
            Bosuillaan 62, 3722XP Bilthoven | Kvk 97261734 | RSIN 867975209 | bank NL83 TRIO 0321 0861 98
          </Text>
        </Box>

      </Container>
    </Box>
  )
}