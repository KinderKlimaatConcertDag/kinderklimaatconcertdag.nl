import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Collapse,
  Flex,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

import { Link } from '@/components/mdx'

const MobileNavItem = ({ href, children, label }) => {
  const { isOpen, onToggle } = useDisclosure()

  const handleToggle = (e) => {
    if (children) {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <Stack spacing={4} onClick={handleToggle}>
      <Flex
        py={2}
        px={2}
        as={Link}
        href={href ?? '/#'}
        justify={'space-between'}
        align={'center'}
        borderRadius='md'
        _hover={{
          textDecoration: 'none',
          bg: 'whiteAlpha.200',
        }}
      >
        <Text
          fontFamily={'heading'}
          fontWeight={600}
          whiteSpace={'nowrap'}
          color={'white'}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            color={'white'}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'gray.200'}
          align={'start'}
        >
          {' '}
          {children &&
            children.map((child, index) => (
              <Link
                key={index}
                href={child.href ?? '#'}
                py={2}
                px={2}
                borderRadius='md'
                fontFamily={'heading'}
                fontSize={'sm'}
                whiteSpace={'nowrap'}
                color={'white'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'whiteAlpha.200',
                }}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

export const MobileNav = ({ navItems, isOpen }) => {
  if (!isOpen) return null

  return (
    <Stack
      p={4}
      display={{ md: 'none' }}
      zIndex={9999}
      pos='fixed'
      top='60px'
      w={'full'}
      bg={'black'}
      minH={'calc(100vh - 60px)'}
      css={{
        backdropFilter: 'saturate(180%) blur(5px)',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
      }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}
