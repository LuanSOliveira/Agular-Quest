export interface IPlay {
    dungeon: number,
    heros: number[]
}

export interface IGroup {
    groupList: IHero[]
}

export interface IHero {
    id: number,
    status: string
    name: string,
    img: string,
    gif: string,
    life: number,
    maxLife: number,
    energy: number,
    maxEnergy: number,
    atk: number,
    def: number,
    int: number,
    spd: number,
    skills: ISkill[],
    upgrade: IUpgrade[]
}

export interface ISkill {
    id: number,
    name: string,
    img: string,
    description: string,
    attribute: string[],
    bonus: number,
    extraDamage: number,
    cure: number,
    cost: number,
    target: string,
    effect: any
}

export interface IGif {
    id: number,
    name: string[],
    gif: string[]
}

export interface IUpgrade {
    life: number,
    energy: number,
    atk: number,
    def: number,
    int: number,
    spd: number,
    skills: ISkill[]
}