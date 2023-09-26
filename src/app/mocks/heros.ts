import { CreateUpgrade } from "../shared/functions/common/generatingFunction";
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
    skills: [],
    upgrade: []
  }

export const Guerreiro: IHero ={
    id: 0,
    status: 'ativo',
    name: 'Guerreiro',
    img: 'assets/tokens/00.png',
    gif: '',
    life: 10,
    maxLife: 10,
    energy: 5,
    maxEnergy: 5,
    atk: 3,
    def: 3,
    int: 3,
    spd: 3,
    skills: [skillList[0]],
    upgrade: [CreateUpgrade(2,0,1,1,0,1,[1, 2]), CreateUpgrade(2,1,1,1,1,0,[3]), CreateUpgrade(2,0,1,1,0,1,[4, 5]), CreateUpgrade(2,1,1,1,1,0,[6])]
}

export const Arqueiro: IHero ={
    id: 1,
    status: 'ativo',
    name: 'Arqueiro',
    img: 'assets/tokens/01.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 6,
    maxEnergy: 6,
    atk: 2,
    def: 2,
    int: 3,
    spd: 4,
    skills: [skillList[7]],
    upgrade: [CreateUpgrade(1,1,1,1,0,1,[8, 9]), CreateUpgrade(1,1,1,1,1,1,[10]), CreateUpgrade(1,1,1,1,0,1,[11, 12]), CreateUpgrade(1,1,1,1,1,2,[13])]
}

export const Clerigo: IHero ={
    id: 2,
    status: 'ativo',
    name: 'Clérigo',
    img: 'assets/tokens/02.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 8,
    maxEnergy: 8,
    atk: 2,
    def: 3,
    int: 3,
    spd: 2,
    skills: [skillList[14], skillList[15]],
    upgrade: [CreateUpgrade(1,1,0,1,1,0,[16, 17]), CreateUpgrade(1,1,1,0,1,0,[18, 19]), CreateUpgrade(1,1,0,1,1,0,[20,21,22]), CreateUpgrade(1,1,2,1,1,1,[23,24])]
}

export const Mago: IHero ={
    id: 3,
    status: 'ativo',
    name: 'Mago',
    img: 'assets/tokens/03.png',
    gif: '',
    life: 6,
    maxLife: 6,
    energy: 14,
    maxEnergy: 14,
    atk: 1,
    def: 1,
    int: 5,
    spd: 2,
    skills: [skillList[25], skillList[26], skillList[27]],
    upgrade: [CreateUpgrade(1,1,0,0,1,0,[28,29]), CreateUpgrade(1,1,0,0,1,0,[30,31]), CreateUpgrade(1,1,0,1,1,0,[32,33]), CreateUpgrade(1,1,2,1,2,1,[34,35])]
}

export const Soldado: IHero ={
    id: 4,
    status: 'ativo',
    name: 'Soldado',
    img: 'assets/tokens/04.png',
    gif: '',
    life: 10,
    maxLife: 10,
    energy: 5,
    maxEnergy: 5,
    atk: 3,
    def: 4,
    int: 2,
    spd: 2,
    skills: [skillList[36]],
    upgrade: [CreateUpgrade(2,1,1,1,0,0,[37,38]), CreateUpgrade(2,1,1,1,0,0,[39]), CreateUpgrade(3,1,1,1,1,1,[40,41,42]), CreateUpgrade(3,1,1,1,1,1,[43])]
}

export const Barbaro: IHero ={
    id: 5,
    status: 'ativo',
    name: 'Barbaro',
    img: 'assets/tokens/05.png',
    gif: '',
    life: 12,
    maxLife: 12,
    energy: 4,
    maxEnergy: 4,
    atk: 5,
    def: 3,
    int: 1,
    spd: 3,
    skills: [skillList[44], skillList[45]],
    upgrade: [CreateUpgrade(2,1,1,1,0,0,[46]), CreateUpgrade(2,1,1,1,0,1,[47,48]), CreateUpgrade(2,1,1,1,0,0,[49]), CreateUpgrade(2,1,2,1,0,1,[50])]
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
    atk: 1,
    def: 2,
    int: 4,
    spd: 3,
    skills: [skillList[51], skillList[52]],
    upgrade: [CreateUpgrade(1,1,0,1,1,0,[53]), CreateUpgrade(1,1,1,0,1,0,[54]), CreateUpgrade(1,2,0,1,1,0,[55]), CreateUpgrade(1,2,1,0,1,2,[56])]
}

export const Necromante: IHero ={
    id: 7,
    status: 'ativo',
    name: 'Necromante',
    img: 'assets/tokens/07.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 10,
    maxEnergy: 10,
    atk: 1,
    def: 1,
    int: 5,
    spd: 2,
    skills: [skillList[57], skillList[58]],
    upgrade: [CreateUpgrade(0,2,0,0,1,0,[59,60]), CreateUpgrade(2,2,0,1,1,1,[61,62]), CreateUpgrade(0,2,0,0,1,0,[63]), CreateUpgrade(2,2,2,1,1,1,[64])]
}

export const Paladino: IHero ={
    id: 8,
    status: 'ativo',
    name: 'Paladino',
    img: 'assets/tokens/08.png',
    gif: '',
    life: 14,
    maxLife: 14,
    energy: 6,
    maxEnergy: 6,
    atk: 3,
    def: 5,
    int: 3,
    spd: 1,
    skills: [skillList[0]],
    upgrade: [CreateUpgrade(2,1,1,1,0,0,[0]), CreateUpgrade(2,1,1,1,1,1,[0]), CreateUpgrade(2,1,1,1,1,0,[0]), CreateUpgrade(2,1,1,2,1,1,[0])]
}

export const Bruxo: IHero ={
    id: 9,
    status: 'ativo',
    name: 'Bruxo',
    img: 'assets/tokens/09.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 8,
    maxEnergy: 8,
    atk: 1,
    def: 2,
    int: 4,
    spd: 2,
    skills: [skillList[0]],
    upgrade: [CreateUpgrade(1,1,0,0,1,0,[0]), CreateUpgrade(1,1,1,1,1,1,[0]), CreateUpgrade(1,1,0,0,1,1,[0]), CreateUpgrade(1,1,2,0,1,0,[0])]
}

export const Monge: IHero ={
    id: 10,
    status: 'ativo',
    name: 'Monge',
    img: 'assets/tokens/10.png',
    gif: '',
    life: 10,
    maxLife: 10,
    energy: 8,
    maxEnergy: 8,
    atk: 3,
    def: 3,
    int: 3,
    spd: 4,
    skills: [skillList[0]],
    upgrade: [CreateUpgrade(1,1,1,2,0,0,[0]), CreateUpgrade(1,1,1,0,1,2,[0]), CreateUpgrade(1,1,1,2,0,0,[0]), CreateUpgrade(1,1,1,0,1,2,[0])]
}

export const Musico: IHero ={
    id: 11,
    status: 'ativo',
    name: 'Músico',
    img: 'assets/tokens/11.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 10,
    maxEnergy: 10,
    atk: 1,
    def: 2,
    int: 3,
    spd: 3,
    skills: [skillList[0]],
    upgrade: [CreateUpgrade(1,1,0,0,1,0,[0]), CreateUpgrade(1,1,0,1,1,2,[0]), CreateUpgrade(1,1,0,0,1,0,[0]), CreateUpgrade(1,1,0,1,1,2,[0])]
}

export const Cacador: IHero ={
    id: 12,
    status: 'ativo',
    name: 'Caçador',
    img: 'assets/tokens/12.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 8,
    maxEnergy: 8,
    atk: 3,
    def: 2,
    int: 3,
    spd: 4,
    skills: [skillList[0]],
    upgrade: [CreateUpgrade(1,1,1,0,0,2,[0]), CreateUpgrade(1,1,1,1,1,0,[0]), CreateUpgrade(1,1,1,1,0,2,[0]), CreateUpgrade(1,1,1,0,1,0,[0])]
}

export const Assassino: IHero ={
    id: 13,
    status: 'ativo',
    name: 'Assassino',
    img: 'assets/tokens/13.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 8,
    maxEnergy: 8,
    atk: 4,
    def: 2,
    int: 2,
    spd: 5,
    skills: [skillList[0]],
    upgrade: [CreateUpgrade(1,1,1,0,0,1,[0]), CreateUpgrade(1,1,1,1,1,1,[0]), CreateUpgrade(1,1,1,1,1,1,[0]), CreateUpgrade(1,1,1,1,1,2,[0])]
}

export const Pirata: IHero ={
    id: 14,
    status: 'ativo',
    name: 'Pirata',
    img: 'assets/tokens/14.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 6,
    maxEnergy: 6,
    atk: 3,
    def: 2,
    int: 2,
    spd: 3,
    skills: [skillList[0]],
    upgrade: [CreateUpgrade(1,0,1,0,1,1,[0]), CreateUpgrade(1,0,1,0,0,1,[0]), CreateUpgrade(1,2,1,1,1,1,[0]), CreateUpgrade(1,2,1,1,1,1,[0])]
}

export const Ladino: IHero ={
    id: 15,
    status: 'ativo',
    name: 'Ladino',
    img: 'assets/tokens/15.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 10,
    maxEnergy: 10,
    atk: 3,
    def: 2,
    int: 2,
    spd: 5,
    skills: [skillList[0]],
    upgrade: [CreateUpgrade(1,1,1,1,1,1,[0]), CreateUpgrade(1,1,1,1,1,1,[0]), CreateUpgrade(1,1,1,1,1,1,[0]), CreateUpgrade(1,1,1,1,1,1,[0])]
}

export const Atirador: IHero ={
    id: 16,
    status: 'ativo',
    name: 'Atirador',
    img: 'assets/tokens/16.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 5,
    maxEnergy: 5,
    atk: 4,
    def: 1,
    int: 2,
    spd: 4,
    skills: [skillList[0]],
    upgrade: [CreateUpgrade(1,1,1,0,0,1,[0]), CreateUpgrade(1,1,1,1,0,1,[0]), CreateUpgrade(1,1,1,0,1,1,[0]), CreateUpgrade(1,1,1,1,0,1,[0])]
}

export const Medico: IHero ={
    id: 17,
    status: 'ativo',
    name: 'Médico',
    img: 'assets/tokens/17.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 10,
    maxEnergy: 10,
    atk: 1,
    def: 2,
    int: 4,
    spd: 2,
    skills: [skillList[0]],
    upgrade: [CreateUpgrade(1,1,0,0,1,0,[0]), CreateUpgrade(1,1,0,1,1,0,[0]), CreateUpgrade(1,1,0,0,1,0,[0]), CreateUpgrade(1,1,1,1,1,0,[0])]
}

export const Druida: IHero ={
    id: 18,
    status: 'ativo',
    name: 'Druida',
    img: 'assets/tokens/18.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 10,
    maxEnergy: 10,
    atk: 2,
    def: 2,
    int: 4,
    spd: 3,
    skills: [skillList[0]],
    upgrade: [CreateUpgrade(1,1,0,0,1,1,[0]), CreateUpgrade(1,1,1,1,1,0,[0]), CreateUpgrade(1,1,1,1,1,1,[0]), CreateUpgrade(3,3,0,0,1,0,[0])]
}

export const Espiritual: IHero ={
    id: 19,
    status: 'ativo',
    name: 'Espiritual',
    img: 'assets/tokens/19.png',
    gif: '',
    life: 8,
    maxLife: 8,
    energy: 10,
    maxEnergy: 10,
    atk: 2,
    def: 2,
    int: 4,
    spd: 3,
    skills: [skillList[0]],
    upgrade: [CreateUpgrade(1,1,0,0,1,0,[0]), CreateUpgrade(1,1,1,1,1,1,[0]), CreateUpgrade(1,1,0,0,1,0,[0]), CreateUpgrade(1,1,0,0,1,1,[0])]
}

export const HeroList: IHero[] = [
  Guerreiro,
  Arqueiro,
  Clerigo,
  Mago,
  Soldado,
  Barbaro,
  Alquimista,
  Necromante,
  Paladino,
  Bruxo,
  Monge,
  Musico,
  Cacador,
  Assassino,
  Pirata,
  Ladino,
  Atirador,
  Medico,
  Druida,
  Espiritual
]