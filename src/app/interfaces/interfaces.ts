export interface IGroup {
    groupList: IHero[] | null[]
}

export interface IHero {
    id: number,
    name: string,
    hp: number,
    mp: number,
    atk: number,
    def: number,
    satk: number,
    sdef: number,
    spd: number,
}