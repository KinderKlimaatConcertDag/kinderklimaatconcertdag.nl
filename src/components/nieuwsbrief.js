import { Box } from '@chakra-ui/react'
import { Heading } from '@/components/mdx'
import Script from 'next/script'

export const Nieuwsbrief = () => (
  <>
    <Box
      as='section'
      maxW='600px'
      mx='auto'
      my={8}
      id='nieuwsbrief'
      scrollMarginTop='100px'
    >
      <Heading as='h2' size='lg' color='#6f73b2'>
        Blijf op de hoogte
      </Heading>
      <Box
        as='form'
        action='https://kinderklimaatconcertdag.us22.list-manage.com/subscribe/post?u=f394bc926b2cd174d7f75915b&amp;id=27d742c9dd&amp;f_id=0009c2e1f0'
        method='post'
        target='_blank'
        noValidate
        mt={4}
      >
        <Box as='label' htmlFor='mce-EMAIL' display='block' mb={2}>
          E-mailadres <Box as='span' color='red.500'>*</Box>
        </Box>
        <Box
          as='input'
          type='email'
          name='EMAIL'
          id='mce-EMAIL'
          required
          width='100%'
          border='1px solid'
          borderColor='gray.300'
          borderRadius='md'
          padding={3}
        />
        <Box position='absolute' left='-5000px' aria-hidden='true'>
          <Box
            as='input'
            type='text'
            name='b_f394bc926b2cd174d7f75915b_27d742c9dd'
            tabIndex={-1}
            value=''
            readOnly
          />
        </Box>
        <Box
          as='input'
          type='submit'
          name='subscribe'
          value='Aanmelden voor de nieuwsbrief'
          mt={4}
          px={5}
          py={3}
          border='none'
          borderRadius='md'
          backgroundColor='#6f73b2'
          color='white'
          cursor='pointer'
        />
      </Box>
    </Box>
    <Script
      src='https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
      strategy='afterInteractive'
    />
    <Script id='mailchimp-form-config' strategy='afterInteractive'>
      {`(function() {
        window.fnames = window.fnames || [];
        window.ftypes = window.ftypes || [];
        window.fnames[0] = 'EMAIL';
        window.ftypes[0] = 'email';
      })();`}
    </Script>
  </>
)