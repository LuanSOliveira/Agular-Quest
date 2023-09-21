export interface IPlay {
    dungeon: number
}

export interface IGroup {
    groupList: IHero[]
}

export interface IHero {
    id: number,
    status: string
    name: string,
    img: string,
    life: number,
    maxLife: number,
    energy: number,
    maxEnergy: number,
    atk: number,
    def: number,
    int: number,
    spd: number,
    skills: ISkill[]
}

export interface ISkill {
    id: number,
    name: string,
    img: string,
    description: string,
    attribute: string,
    bonus: number,
    cost: number
}