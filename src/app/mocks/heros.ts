import { IHero } from "../shared/interfaces/interfaces";
import { skillList } from "./skills";

export const voidHero: IHero = {
    id: 0,
    status: 'ativo',
    name: '',
    img: '',
    gif: '',
    life: 0,
    maxLife: 0,
    energy: 0,
    maxEnergy: 0,
    atk: 0,
    def: 0,
    int: 0,
    spd: 0,
    skills: []
  }

export const Espadachim: IHero ={
    id: 0,
    status: 'ativo',
    name: 'Espadachim',
    img: 'assets/tokens/00.png',
    gif: '',
    life: 10,
    maxLife: 10,
    energy: 5,
    maxEnergy: 5,
    atk: 3,
    def: 2,
    int: 3,
    spd: 3,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Arqueiro: IHero ={
    id: 1,
    status: 'ativo',
    name: 'Arqueiro',
    img: 'assets/tokens/01.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 8,
    maxEnergy: 8,
    atk: 1,
    def: 1,
    int: 5,
    spd: 3,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Clerigo: IHero ={
    id: 2,
    status: 'ativo',
    name: 'Clérigo',
    img: 'assets/tokens/02.png',
    gif: '',
    life: 13,
    maxLife: 13,
    energy: 5,
    maxEnergy: 5,
    atk: 5,
    def: 3,
    int: 1,
    spd: 3,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Mago: IHero ={
    id: 3,
    status: 'ativo',
    name: 'Mago',
    img: 'assets/tokens/03.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 8,
    maxEnergy: 8,
    atk: 3,
    def: 2,
    int: 2,
    spd: 5,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Soldado: IHero ={
    id: 4,
    status: 'ativo',
    name: 'Soldado',
    img: 'assets/tokens/04.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 8,
    maxEnergy: 8,
    atk: 3,
    def: 2,
    int: 2,
    spd: 5,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Barbaro: IHero ={
    id: 5,
    status: 'ativo',
    name: 'Barbaro',
    img: 'assets/tokens/05.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 8,
    maxEnergy: 8,
    atk: 3,
    def: 2,
    int: 2,
    spd: 5,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Alquimista: IHero ={
    id: 6,
    status: 'ativo',
    name: 'Alquimista',
    img: 'assets/tokens/06.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 8,
    maxEnergy: 8,
    atk: 3,
    def: 2,
    int: 2,
    spd: 5,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Necromante: IHero ={
    id: 7,
    status: 'ativo',
    name: 'Necromante',
    img: 'assets/tokens/07.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 8,
    maxEnergy: 8,
    atk: 3,
    def: 2,
    int: 2,
    spd: 5,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const HeroList: IHero[] = [
  Espadachim,
  Arqueiro,
  Clerigo,
  Mago,
  Soldado,
  Barbaro,
  Alquimista,
  Necromante
]