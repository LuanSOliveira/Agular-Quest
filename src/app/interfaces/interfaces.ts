export interface IGroup {
    groupList: IHero[] | []
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