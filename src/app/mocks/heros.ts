import { IHero } from "../interfaces/interfaces";
import { skillList } from "./skills";

export const voidHero: IHero = {
    id: 0,
    status: 'ativo',
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
    skills: []
  }

export const Aventureira: IHero ={
    id: 0,
    status: 'ativo',
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
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Alquimista: IHero ={
    id: 1,
    status: 'ativo',
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
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Animal: IHero ={
    id: 2,
    status: 'ativo',
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
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Arqueira: IHero ={
    id: 3,
    status: 'ativo',
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
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Caçador: IHero ={
    id: 4,
    status: 'ativo',
    name: 'Caçador',
    img: 'assets/tokens/04.png',
    life: 8,
    maxLife: 8,
    energy: 8,
    maxEnergy: 8,
    atk: 3,
    def: 2,
    int: 3,
    spd: 4,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

//------------------------------------------------------------------------------------
export const Soldado: IHero ={
    id: 5,
    status: 'ativo',
    name: 'Soldado',
    img: 'assets/tokens/05.png',
    life: 12,
    maxLife: 12,
    energy: 5,
    maxEnergy: 5,
    atk: 4,
    def: 5,
    int: 2,
    spd: 2,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Assassina: IHero ={
    id: 6,
    status: 'ativo',
    name: 'Assassina',
    img: 'assets/tokens/06.png',
    life: 8,
    maxLife: 8,
    energy: 5,
    maxEnergy: 5,
    atk: 3,
    def: 1,
    int: 3,
    spd: 5,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Ninja: IHero ={
    id: 7,
    status: 'ativo',
    name: 'Ninja',
    img: 'assets/tokens/07.png',
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
    id: 8,
    status: 'ativo',
    name: 'Barbaro',
    img: 'assets/tokens/08.png',
    life: 10,
    maxLife: 10,
    energy: 5,
    maxEnergy: 5,
    atk: 6,
    def: 2,
    int: 1,
    spd: 3,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Ladrao: IHero ={
    id: 9,
    status: 'ativo',
    name: 'Ladrão',
    img: 'assets/tokens/09.png',
    life: 6,
    maxLife: 6,
    energy: 8,
    maxEnergy: 8,
    atk: 2,
    def: 2,
    int: 4,
    spd: 5,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Atirador: IHero ={
    id: 10,
    status: 'ativo',
    name: 'Atirador',
    img: 'assets/tokens/10.png',
    life: 6,
    maxLife: 6,
    energy: 4,
    maxEnergy: 4,
    atk: 4,
    def: 2,
    int: 2,
    spd: 3,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Guerreira: IHero ={
    id: 11,
    status: 'ativo',
    name: 'Guerreira',
    img: 'assets/tokens/11.png',
    life: 12,
    maxLife: 12,
    energy: 5,
    maxEnergy: 5,
    atk: 4,
    def: 5,
    int: 2,
    spd: 2,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Cleriga: IHero ={
    id: 12,
    status: 'ativo',
    name: 'Clériga',
    img: 'assets/tokens/12.png',
    life: 6,
    maxLife: 6,
    energy: 10,
    maxEnergy: 10,
    atk: 1,
    def: 2,
    int: 4,
    spd: 2,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Mago: IHero ={
    id: 13,
    status: 'ativo',
    name: 'Mago',
    img: 'assets/tokens/13.png',
    life: 5,
    maxLife: 5,
    energy: 14,
    maxEnergy: 14,
    atk: 1,
    def: 1,
    int: 6,
    spd: 2,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Samurai: IHero ={
    id: 14,
    status: 'ativo',
    name: 'Samurai',
    img: 'assets/tokens/14.png',
    life: 8,
    maxLife: 8,
    energy: 5,
    maxEnergy: 5,
    atk: 4,
    def: 3,
    int: 2,
    spd: 4,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const Monge: IHero ={
    id: 15,
    status: 'ativo',
    name: 'Monge',
    img: 'assets/tokens/15.png',
    life: 8,
    maxLife: 8,
    energy: 5,
    maxEnergy: 5,
    atk: 4,
    def: 3,
    int: 3,
    spd: 4,
    skills: [skillList[0], skillList[1], skillList[2], skillList[3]]
}

export const HeroList: IHero[] = [
  Aventureira,
  Alquimista,
  Animal,
  Arqueira,
  Caçador,
  Soldado,
  Assassina,
  Ninja,
  Barbaro,
  Ladrao,
  Atirador,
  Guerreira,
  Cleriga,
  Mago,
  Samurai,
  Monge
]