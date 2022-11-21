import styles from '../styles/Home.module.css'
import { Button, Container, Grid } from '@nextui-org/react'
import React from 'react'
import Character, { CharacterSkill, SkillTitle } from './character'

import { SearchInput } from '../components/search_input'
import { Header } from '../components/header'
import DefaultLayout from '../layouts/default'

export function HelloPage() {
    return (
        <Container>
            <Header></Header>
            <Container
                alignItems="center"
                as="section"
                className="center__container"
                css={{
                    position: 'relative',
                    // height: '100%',
                    height: 'calc(70vh)',
                    // '@xsMax': {
                    //     height: 'calc(100vh - 64px)',
                    // },
                }}
                display="flex"
                // gap={0}
                // justify="space-between"
                // lg={true}
                // wrap="nowrap"
            >
                <Grid.Container>
                    <Grid xs={12} justify="center">
                        <SearchInput></SearchInput>
                    </Grid>
                </Grid.Container>
            </Container>

            {/* <Character></Character> */}
        </Container>
    )
}

interface Props {
    routes: string[]
    currentRoute: string
}

const IndexPage: React.FC<Props> = ({ routes, currentRoute }) => {
    return (
        <DefaultLayout
            routes={routes}
            currentRoute={currentRoute}
        ></DefaultLayout>
    )
}

export default IndexPage
