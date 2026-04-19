import { Link } from '@/components/mdx'
import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from '@chakra-ui/react'

export const DesktopNav = ({ navItems, ...props }) => {
  return (
    <Stack direction={'row'} spacing={4} {...props}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '/#'}
                fontSize={'sm'}
                fontFamily={'heading'}
                fontWeight={'bold'}
                whiteSpace={'nowrap'}
                flexShrink={0}
                color='white'
                _hover={{
                  textDecoration: 'none',
                  bg: 'whiteAlpha.200',
                  color: 'white',
                }}
                borderRadius='md'
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                bg={'black'}
                p={4}
                rounded={'xl'}
                w='fit-content'
                minW='unset'
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href ?? '#'}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: 'whiteAlpha.200',
      }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'white' }}
            fontFamily={'heading'}
            fontSize={'sm'}
            fontWeight={500}
            color='white'
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
      </Stack>
    </Link>
  )
}
