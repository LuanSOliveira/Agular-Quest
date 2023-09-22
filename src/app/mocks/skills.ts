import { EAttribute, ETarget } from "../shared/enums/enums";
import { ISkill } from "../shared/interfaces/interfaces";

export const skill00: ISkill = {
    id: 0,
    name: 'Acampar',
    img: 'assets/skills/00.png',
    description: 'Curar 1 de vida do grupo',
    attribute: EAttribute.V,
    bonus: 1,
    cost: 3,
    target: ETarget.G
}

export const skill01: ISkill = {
    id: 1,
    name: 'Arremessar Rede',
    img: 'assets/skills/01.png',
    description: '+1 Ataque',
    attribute: EAttribute.A,
    bonus: 1,
    cost: 1,
    target: ETarget.E
}

export const skill02: ISkill = {
    id: 2,
    name: 'Fincar Bandeira',
    img: 'assets/skills/02.png',
    description: '+1 Defesa',
    attribute: EAttribute.D,
    bonus: 1,
    cost: 1,
    target: ETarget.A
}

export const skill03: ISkill = {
    id: 3,
    name: 'Skill-4',
    img: 'assets/skills/00.png',
    description: '+1 Ataque',
    attribute: '',
    bonus: 0,
    cost: 0,
    target: ETarget.A
}

export const skillList: ISkill[] = [
    skill00,
    skill01,
    skill02,
    skill03
]