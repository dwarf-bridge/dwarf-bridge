import {
    Button,
    Card,
    Container,
    Row,
    Tooltip,
    Progress,
    Text,
} from '@nextui-org/react'
import React, { RefAttributes, PropsWithoutRef } from 'react'

export enum SkillTitle {
    'Sword' = 'Sword',
    'Axe' = 'Axe',
    'Club' = 'Club',
    'Magic' = 'Magic',
    'Distance' = 'Distance',
    'Fist' = 'Fist',
    'Shielding' = 'Shielding',
    'Fishing' = 'Fishing',
}

interface Skill {
    title: SkillTitle
    level?: number
    progress?: number
}

interface CharacterProfile {
    level: number
    skills: Skill[]
}

export const CharacterSkill = (skill: Skill) => {
    return (
        <Container xs css={{}}>
            <Row gap={0}>
                <div style={{ width: 70 }}>
                    <Text b size={14}>
                        {skill.title}
                    </Text>
                </div>
                <div>
                    <Container>
                        <Text size={14}>{skill.level || 'Unknown'}</Text>
                        <Tooltip
                            content={skill.progress + '%'}
                            trigger={'hover'}
                        >
                            <div style={{ width: 200 }}>
                                <Progress
                                    color={'gradient'}
                                    size="xs"
                                    value={skill.progress || 0}
                                ></Progress>
                            </div>
                        </Tooltip>
                    </Container>
                </div>
            </Row>
        </Container>
    )
}

export default function Character() {
    return (
        <Card css={{ mw: '400px' }}>
            <Card.Body>
                <CharacterSkill
                    level={110}
                    title={SkillTitle['Axe']}
                    progress={70}
                ></CharacterSkill>
                <CharacterSkill
                    level={110}
                    title={SkillTitle['Sword']}
                    progress={70}
                ></CharacterSkill>
                <CharacterSkill
                    level={110}
                    title={SkillTitle['Club']}
                    progress={70}
                ></CharacterSkill>
                <CharacterSkill
                    level={110}
                    title={SkillTitle['Distance']}
                    progress={70}
                ></CharacterSkill>
                <CharacterSkill
                    level={110}
                    title={SkillTitle['Magic']}
                    progress={70}
                ></CharacterSkill>
                <CharacterSkill
                    level={110}
                    title={SkillTitle['Shielding']}
                    progress={70}
                ></CharacterSkill>
                <CharacterSkill
                    level={110}
                    title={SkillTitle['Fist']}
                    progress={70}
                ></CharacterSkill>
                <CharacterSkill
                    level={110}
                    title={SkillTitle['Fishing']}
                    progress={70}
                ></CharacterSkill>
                <CharacterSkill title={SkillTitle['Fishing']}></CharacterSkill>
            </Card.Body>
        </Card>
    )
}
