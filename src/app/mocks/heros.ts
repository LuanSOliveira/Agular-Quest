import { IHero } from "../interfaces/interfaces";

export const voidHero: IHero = {
    id: 0,
    name: '',
    img: '',
    life: 0,
    maxLife: 0,
    energy: 0,
    maxEnergy: 0,
    atk: 0,
    def: 0,
    int: 0,
    spd: 0,
  }

export const Aventureira: IHero ={
    id: 0,
    name: 'Aventureira',
    img: 'assets/tokens/00.png',
    life: 10,
    maxLife: 10,
    energy: 5,
    maxEnergy: 5,
    atk: 3,
    def: 2,
    int: 3,
    spd: 3,
}

export const Alquimista: IHero ={
    id: 1,
    name: 'Alquimista',
    img: 'assets/tokens/01.png',
    life: 8,
    maxLife: 8,
    energy: 8,
    maxEnergy: 8,
    atk: 1,
    def: 1,
    int: 5,
    spd: 3,
}

export const Animal: IHero ={
    id: 1,
    name: 'Animal',
    img: 'assets/tokens/02.png',
    life: 13,
    maxLife: 13,
    energy: 5,
    maxEnergy: 5,
    atk: 5,
    def: 3,
    int: 1,
    spd: 3,
}

export const Arqueira: IHero ={
    id: 1,
    name: 'Arqueira',
    img: 'assets/tokens/03.png',
    life: 8,
    maxLife: 8,
    energy: 8,
    maxEnergy: 8,
    atk: 3,
    def: 2,
    int: 2,
    spd: 5,
}

export const HeroList: IHero[] = [
  Aventureira,
  Alquimista,
  Animal,
  Arqueira
]