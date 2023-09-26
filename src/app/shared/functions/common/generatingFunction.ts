import { skillList } from "src/app/mocks/skills"
import { IHero, ISkill, IUpgrade } from "../../interfaces/interfaces"

export function RandomHeros(numberOfHeros: number): number[] {
    const list: number[] = []

    while(list.length < numberOfHeros){
        const number = Math.floor(Math.random() * 20)
        if(!list.includes(number)){
            list.push(number)
        }
    }

    return list.sort((a, b) => a - b)

}

export function ActiveHeroList(list: IHero[], indexList: number[]): IHero[]{
    const newHeroList: IHero[] = []

    list.map(
        hero => {
            if(indexList.includes(hero.id)){
                newHeroList.push(hero)
            }
        }
    )

    return newHeroList

}

export function CreateUpgrade(
    life: number,
    energy: number,
    atk: number,
    def: number,
    int: number,
    spd: number,
    idSkill: number[]
    ): IUpgrade {
        let skillListUpgrade: ISkill[] = []
        idSkill.map(
            skill => {
                skillListUpgrade.push(skillList[skill])
            }
        )
        const newUpgrade: IUpgrade = {
            life: life,
            energy: energy,
            atk: atk,
            def: def,
            int: int,
            spd: spd,
            skills: skillListUpgrade
        }

        return newUpgrade

}