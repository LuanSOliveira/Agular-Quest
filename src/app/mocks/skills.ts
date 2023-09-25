import { EAttribute, ETarget } from "../shared/enums/enums";
import { ISkill } from "../shared/interfaces/interfaces";

export const skill00: ISkill = {
    id: 0,
    name: 'Golpe Cortante',
    img: 'assets/skills/00.png',
    description: '+2 Ataque',
    attribute: EAttribute.A,
    bonus: 2,
    cost: 2,
    target: ETarget.E
}

export const skill01: ISkill = {
    id: 1,
    name: 'Em Guarda',
    img: 'assets/skills/01.png',
    description: '+2 Defesa',
    attribute: EAttribute.D,
    bonus: 2,
    cost: 2,
    target: ETarget.A
}

export const skill02: ISkill = {
    id: 2,
    name: 'Qubra Guarda',
    img: 'assets/skills/02.png',
    description: '-3 Defesa',
    attribute: EAttribute.D,
    bonus: -3,
    cost: 3,
    target: ETarget.E
}

export const skill03: ISkill = {
    id: 3,
    name: 'Punir',
    img: 'assets/skills/03.png',
    description: '+3 Ataque',
    attribute: EAttribute.A,
    bonus: 3,
    cost: 3,
    target: ETarget.A
}

export const skillList: ISkill[] = [
    skill00,
    skill01,
    skill02,
    skill03
]