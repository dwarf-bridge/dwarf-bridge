import { useTheme as useNextTheme } from 'next-themes'
import {
    Avatar,
    Badge,
    Button,
    Navbar,
    Text,
    useTheme,
} from '@nextui-org/react'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'
import React from 'react'

export interface Props {
    routes?: string[]
    hasNotify?: boolean
    isHome?: boolean
}

export const Header: React.FC<Props> = ({ routes }) => {
    const { setTheme } = useNextTheme()
    const { isDark } = useTheme()
    return (
        <>
            <Navbar variant="floating">
                <Navbar.Brand>
                    <Text
                        h1
                        size={30}
                        css={{
                            textGradient: '45deg, $blue600 -20%, $pink600 50%',
                        }}
                        weight="bold"
                    >
                        Dwarf&nbsp;
                    </Text>
                    <Text
                        h1
                        size={30}
                        css={{
                            textGradient:
                                '45deg, $purple600 -20%, $pink600 100%',
                        }}
                        weight="bold"
                    >
                        Bridge&nbsp;
                    </Text>
                    <Badge color={'warning'} size={'sm'}>
                        Pré-Alpha
                    </Badge>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <Navbar.Link isActive variant={'underline'} href="/">
                        Search
                    </Navbar.Link>
                    <Navbar.Link href="/">
                        Characters<Badge size="xs">Soon</Badge>
                    </Navbar.Link>
                    <Navbar.Link href="/builds">
                        Builds<Badge size="xs">Soon</Badge>
                    </Navbar.Link>
                    <Navbar.Link href="/">
                        Wars<Badge size="xs">Soon</Badge>
                    </Navbar.Link>
                    <Navbar.Link href="/">
                        Hunting Places
                        <Badge size="xs">Soon</Badge>
                    </Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Button
                        style={{
                            cursor: 'pointer',
                            background: 'transparent',
                            border: 'none',
                            padding: 0,
                            width: '32px',
                            minWidth: '32px',
                        }}
                        onPress={() => {
                            console.log('pressed')
                            setTheme(isDark ? 'light' : 'dark')
                        }}
                    >
                        {isDark ? (
                            <RiSunFill size={20}></RiSunFill>
                        ) : (
                            <RiMoonFill size={20} color={'black'}></RiMoonFill>
                        )}
                    </Button>
                    <Badge content="Soon" size="xs">
                        <Avatar>Soon</Avatar>
                    </Badge>
                </Navbar.Content>
            </Navbar>
        </>
    )
}

export default { Header }
