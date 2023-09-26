import { EAttribute, ETarget } from "../shared/enums/enums";
import { ISkill } from "../shared/interfaces/interfaces";

export const skill00: ISkill = {
    id: 0,
    name: 'Golpe Cortante',
    img: 'assets/skills/00.png',
    description: '+2 Ataque',
    attribute: [EAttribute.A],
    bonus: 2,
    extraDamage: 0,
    cure: 0,
    cost: 2,
    target: ETarget.E,
    effect: ''
}

// ----------------------------------Skills Guerreiro----------------------------------------
export const skill01: ISkill = {
    id: 1,
    name: 'Em Guarda',
    img: 'assets/skills/01.png',
    description: '+2 Defesa',
    attribute: [EAttribute.D],
    bonus: 2,
    extraDamage: 0,
    cure: 0,
    cost: 2,
    target: ETarget.A,
    effect: ''
}

export const skill02: ISkill = {
    id: 2,
    name: 'Qubra Guarda',
    img: 'assets/skills/02.png',
    description: '-3 Defesa',
    attribute: [EAttribute.D],
    bonus: -3,
    extraDamage: 0,
    cure: 0,
    cost: 3,
    target: ETarget.E,
    effect: ''
}

export const skill03: ISkill = {
    id: 3,
    name: 'Punir',
    img: 'assets/skills/03.png',
    description: '+3 Ataque',
    attribute: [EAttribute.A],
    bonus: 3,
    extraDamage: 0,
    cure: 0,
    cost: 3,
    target: ETarget.A,
    effect: ''
}

export const skill04: ISkill = {
    id: 4,
    name: 'Corte Cruzado',
    img: 'assets/skills/04.png',
    description: '+3 Ataque',
    attribute: [EAttribute.A],
    bonus: 3,
    extraDamage: 0,
    cure: 0,
    cost: 2,
    target: ETarget.A,
    effect: ''
}

export const skill05: ISkill = {
    id: 5,
    name: 'Lâmina Giratória',
    img: 'assets/skills/05.png',
    description: '+3 Ataque / +3 Velocidade',
    attribute: [EAttribute.A, EAttribute.S],
    bonus: 3,
    extraDamage: 0,
    cure: 0,
    cost: 3,
    target: ETarget.A,
    effect: ''
}

export const skill06: ISkill = {
    id: 6,
    name: 'Decapitar',
    img: 'assets/skills/06.png',
    description: '+5 Ataque / +2 Dano',
    attribute: [EAttribute.A],
    bonus: 5,
    extraDamage: 2,
    cure: 0,
    cost: 5,
    target: ETarget.A,
    effect: ''
}

// ----------------------------------Skills Arqueiro-----------------------------------------
export const skill07: ISkill = {
    id: 7,
    name: 'Disparar Flecha',
    img: 'assets/skills/07.png',
    description: '+1 Ataque',
    attribute: [EAttribute.A],
    bonus: 1,
    extraDamage: 0,
    cure: 0,
    cost: 1,
    target: ETarget.A,
    effect: ''
}

export const skill08: ISkill = {
    id: 8,
    name: 'Flecha Dupla',
    img: 'assets/skills/08.png',
    description: '+2 Ataque',
    attribute: [EAttribute.A],
    bonus: 2,
    extraDamage: 0,
    cure: 0,
    cost: 2,
    target: ETarget.A,
    effect: ''
}

export const skill09: ISkill = {
    id: 9,
    name: 'Flecha Tripla',
    img: 'assets/skills/09.png',
    description: '+3 Ataque',
    attribute: [EAttribute.A],
    bonus: 3,
    extraDamage: 0,
    cure: 0,
    cost: 3,
    target: ETarget.A,
    effect: ''
}

export const skill10: ISkill = {
    id: 10,
    name: 'Tiro Rápido',
    img: 'assets/skills/10.png',
    description: '+2 Ataque / +2 Velocidade',
    attribute: [EAttribute.A, EAttribute.V],
    bonus: 2,
    extraDamage: 0,
    cure: 0,
    cost: 3,
    target: ETarget.A,
    effect: ''
}

export const skill11: ISkill = {
    id: 11,
    name: 'Flecha Flamejante',
    img: 'assets/skills/11.png',
    description: '+3 Ataque / +1 Dano',
    attribute: [EAttribute.A],
    bonus: 3,
    extraDamage: 1,
    cure: 0,
    cost: 4,
    target: ETarget.A,
    effect: ''
}

export const skill12: ISkill = {
    id: 12,
    name: 'Flecha Guiada',
    img: 'assets/skills/12.png',
    description: '-3 Defesa',
    attribute: [EAttribute.D],
    bonus: -3,
    extraDamage: 0,
    cure: 0,
    cost: 3,
    target: ETarget.E,
    effect: ''
}

export const skill13: ISkill = {
    id: 13,
    name: 'Flecha Guiada',
    img: 'assets/skills/13.png',
    description: '+5 Ataque',
    attribute: [EAttribute.A],
    bonus: 5,
    extraDamage: 0,
    cure: 0,
    cost: 4,
    target: ETarget.A,
    effect: ''
}

// ----------------------------------Skills Clérigo------------------------------------------
export const skill14: ISkill = {
    id: 14,
    name: 'Golpear',
    img: 'assets/skills/14.png',
    description: '+1 Ataque',
    attribute: [EAttribute.A],
    bonus: 1,
    extraDamage: 0,
    cure: 0,
    cost: 1,
    target: ETarget.A,
    effect: ''
}

export const skill15: ISkill = {
    id: 15,
    name: 'Curar',
    img: 'assets/skills/15.png',
    description: 'Cura 1 de vida do grupo',
    attribute: [EAttribute.V],
    bonus: 0,
    extraDamage: 0,
    cure: 1,
    cost: 3,
    target: ETarget.G,
    effect: ''
}

export const skill16: ISkill = {
    id: 16,
    name: 'Barreira Mágica',
    img: 'assets/skills/16.png',
    description: '+2 Defesa',
    attribute: [EAttribute.D],
    bonus: 2,
    extraDamage: 0,
    cure: 0,
    cost: 2,
    target: ETarget.A,
    effect: ''
}

export const skill17: ISkill = {
    id: 17,
    name: 'Oração',
    img: 'assets/skills/17.png',
    description: '+1 Todos Atributos',
    attribute: [EAttribute.A, EAttribute.D, EAttribute.I, EAttribute.S],
    bonus: 1,
    extraDamage: 0,
    cure: 0,
    cost: 2,
    target: ETarget.A,
    effect: ''
}

export const skill18: ISkill = {
    id: 18,
    name: 'Cura Massiva',
    img: 'assets/skills/18.png',
    description: 'Cura 4 de vida do grupo',
    attribute: [EAttribute.V],
    bonus: 0,
    extraDamage: 0,
    cure: 4,
    cost: 5,
    target: ETarget.G,
    effect: ''
}

export const skill19: ISkill = {
    id: 19,
    name: 'Abençoar',
    img: 'assets/skills/19.png',
    description: 'Cura 4 de energia do grupo',
    attribute: [EAttribute.V],
    bonus: 0,
    extraDamage: 0,
    cure: 4,
    cost: 0,
    target: ETarget.G,
    effect: ''
}

export const skill20: ISkill = {
    id: 20,
    name: 'Sacramento',
    img: 'assets/skills/20.png',
    description: '+3 Ataque / +3 Defesa',
    attribute: [EAttribute.A, EAttribute.D],
    bonus: 3,
    extraDamage: 0,
    cure: 0,
    cost: 4,
    target: ETarget.A,
    effect: ''
}

export const skill21: ISkill = {
    id: 21,
    name: 'Queimar o Mal',
    img: 'assets/skills/21.png',
    description: '+4 Ataque',
    attribute: [EAttribute.A],
    bonus: 4,
    extraDamage: 0,
    cure: 0,
    cost: 4,
    target: ETarget.A,
    effect: ''
}

export const skill22: ISkill = {
    id: 22,
    name: 'Reviver',
    img: 'assets/skills/22.png',
    description: 'Revive aliados mortos',
    attribute: [EAttribute.V],
    bonus: 0,
    extraDamage: 0,
    cure: 0,
    cost: 9,
    target: ETarget.G,
    effect: ''
}

export const skill23: ISkill = {
    id: 23,
    name: 'Círculo Sagrado',
    img: 'assets/skills/23.png',
    description: '+5 Ataque / +5 Defesa',
    attribute: [EAttribute.A, EAttribute.D],
    bonus: 5,
    extraDamage: 0,
    cure: 0,
    cost: 6,
    target: ETarget.A,
    effect: ''
}

export const skill24: ISkill = {
    id: 24,
    name: 'Punição Divina',
    img: 'assets/skills/24.png',
    description: '+7 Ataque',
    attribute: [EAttribute.A],
    bonus: 7,
    extraDamage: 0,
    cure: 0,
    cost: 6,
    target: ETarget.A,
    effect: ''
}

// ----------------------------------Skills Mago---------------------------------------------
export const skill25: ISkill = {
id: 25,
name: 'Teletransporte',
    img: 'assets/skills/25.png',
    description: '+2 Velocidade',
    attribute: [EAttribute.S],
    bonus: 2,
    extraDamage: 0,
    cure: 0,
    cost: 1,
    target: ETarget.A,
    effect: ''
}

export const skill26: ISkill = {
id: 26,
name: 'Flecha de Fogo',
    img: 'assets/skills/26.png',
    description: '+2 Ataque',
    attribute: [EAttribute.A],
    bonus: 2,
    extraDamage: 0,
    cure: 0,
    cost: 1,
    target: ETarget.A,
    effect: ''
}

export const skill27: ISkill = {
id: 27,
name: 'Escudo de Gelo',
    img: 'assets/skills/27.png',
    description: '+2 Defesa',
    attribute: [EAttribute.D],
    bonus: 2,
    extraDamage: 0,
    cure: 0,
    cost: 1,
    target: ETarget.A,
    effect: ''
}

export const skill28: ISkill = {
id: 28,
name: 'Muralha de Fogo',
    img: 'assets/skills/28.png',
    description: '-5 Ataque',
    attribute: [EAttribute.A],
    bonus: -5,
    extraDamage: 0,
    cure: 0,
    cost: 4,
    target: ETarget.E,
    effect: ''
}

export const skill29: ISkill = {
id: 29,
name: 'Muralha de Gelo',
    img: 'assets/skills/29.png',
    description: '-3 Ataque / -3 Velocidade',
    attribute: [EAttribute.A, EAttribute.S],
    bonus: -3,
    extraDamage: 0,
    cure: 0,
    cost: 4,
    target: ETarget.E,
    effect: ''
}

export const skill30: ISkill = {
id: 30,
name: 'Bola de Fogo',
    img: 'assets/skills/30.png',
    description: '+7 Ataque',
    attribute: [EAttribute.A],
    bonus: 5,
    extraDamage: 0,
    cure: 0,
    cost: 5,
    target: ETarget.A,
    effect: ''
}

export const skill31: ISkill = {
id: 31,
name: 'Espinhos de Gelo',
    img: 'assets/skills/31.png',
    description: '-4 Ataque / -4 Velocidade',
    attribute: [EAttribute.A, EAttribute.S],
    bonus: -4,
    extraDamage: 0,
    cure: 0,
    cost: 5,
    target: ETarget.E,
    effect: ''
}

export const skill32: ISkill = {
id: 32,
name: 'Pilar de Fogo',
    img: 'assets/skills/32.png',
    description: '+9 Ataque',
    attribute: [EAttribute.A],
    bonus: 9,
    extraDamage: 0,
    cure: 0,
    cost: 7,
    target: ETarget.A,
    effect: ''
}

export const skill33: ISkill = {
id: 33,
name: 'Floresta de Gelo',
    img: 'assets/skills/33.png',
    description: '-9 Velocidade',
    attribute: [EAttribute.S],
    bonus: -9,
    extraDamage: 0,
    cure: 0,
    cost: 7,
    target: ETarget.E,
    effect: ''
}

export const skill34: ISkill = {
id: 34,
name: 'Meteoro',
    img: 'assets/skills/34.png',
    description: '+11 Ataque / +1 Dano',
    attribute: [EAttribute.A],
    bonus: 11,
    extraDamage: 1,
    cure: 0,
    cost: 10,
    target: ETarget.A,
    effect: ''
}

export const skill35: ISkill = {
id: 35,
name: 'Tempestade de Gelo',
    img: 'assets/skills/35.png',
    description: '-7 Ataque / -7 Velocidade',
    attribute: [EAttribute.A, EAttribute.S],
    bonus: -7,
    extraDamage: 0,
    cure: 0,
    cost: 7,
    target: ETarget.E,
    effect: ''
}

// ----------------------------------Skills Soldado------------------------------------------
export const skill36: ISkill = {
id: 36,
name: 'Golpear',
    img: 'assets/skills/36.png',
    description: '+2 Ataque',
    attribute: [EAttribute.A],
    bonus: 2,
    extraDamage: 0,
    cure: 0,
    cost: 1,
    target: ETarget.A,
    effect: ''
}

export const skill37: ISkill = {
id: 37,
name: 'Arremessar Lança',
    img: 'assets/skills/37.png',
    description: '+2 Velocidade',
    attribute: [EAttribute.S],
    bonus: 2,
    extraDamage: 0,
    cure: 0,
    cost: 1,
    target: ETarget.A,
    effect: ''
}

export const skill38: ISkill = {
id: 38,
name: 'Atravessar',
    img: 'assets/skills/38.png',
    description: '-3 Defesa',
    attribute: [EAttribute.D],
    bonus: -3,
    extraDamage: 0,
    cure: 0,
    cost: 2,
    target: ETarget.E,
    effect: ''
}

export const skill39: ISkill = {
id: 39,
name: 'Lança Poderosa',
    img: 'assets/skills/39.png',
    description: '+3 Ataque',
    attribute: [EAttribute.A],
    bonus: 3,
    extraDamage: 0,
    cure: 0,
    cost: 2,
    target: ETarget.A,
    effect: ''
}

export const skill40: ISkill = {
id: 40,
name: 'Bandeira da Vingança',
    img: 'assets/skills/40.png',
    description: '+5 Ataque',
    attribute: [EAttribute.A],
    bonus: 5,
    extraDamage: 0,
    cure: 0,
    cost: 3,
    target: ETarget.A,
    effect: ''
}

export const skill41: ISkill = {
id: 41,
name: 'Bandeira da Sabedoria',
    img: 'assets/skills/41.png',
    description: '+5 Inteligência',
    attribute: [EAttribute.I],
    bonus: 5,
    extraDamage: 0,
    cure: 0,
    cost: 3,
    target: ETarget.A,
    effect: ''
}

export const skill42: ISkill = {
id: 42,
name: 'Bandeira da Moral',
    img: 'assets/skills/42.png',
    description: '+5 Defesa',
    attribute: [EAttribute.D],
    bonus: 5,
    extraDamage: 0,
    cure: 0,
    cost: 3,
    target: ETarget.A,
    effect: ''
}

export const skill43: ISkill = {
id: 43,
name: 'Investida Poderosa',
    img: 'assets/skills/43.png',
    description: '+7 Ataque / +1 Dano',
    attribute: [EAttribute.A],
    bonus: 7,
    extraDamage: 1,
    cure: 0,
    cost: 5,
    target: ETarget.A,
    effect: ''
}

// ----------------------------------Skills Barbaro------------------------------------------
export const skill44: ISkill = {
id: 44,
name: 'Fúria',
    img: 'assets/skills/44.png',
    description: '+Ataque = Vida/2',
    attribute: [EAttribute.A],
    bonus: 0,
    extraDamage: 0,
    cure: 0,
    cost: 2,
    target: ETarget.A,
    effect: ''
}

export const skill45: ISkill = {
id: 45,
name: 'Chutar',
    img: 'assets/skills/45.png',
    description: '+2 Ataque',
    attribute: [EAttribute.A],
    bonus: 2,
    extraDamage: 0,
    cure: 0,
    cost: 1,
    target: ETarget.A,
    effect: ''
}

export const skill46: ISkill = {
id: 46,
name: 'Esmagar',
    img: 'assets/skills/46.png',
    description: '-3 Defesa',
    attribute: [EAttribute.D],
    bonus: -3,
    extraDamage: 0,
    cure: 0,
    cost: 1,
    target: ETarget.E,
    effect: ''
}
export const skill47: ISkill = {
id: 47,
name: 'Quebra Crânio',
    img: 'assets/skills/47.png',
    description: '-4 Defesa / -4 Velocidade',
    attribute: [EAttribute.D, EAttribute.S],
    bonus: -4,
    extraDamage: 0,
    cure: 0,
    cost: 2,
    target: ETarget.E,
    effect: ''
}

export const skill48: ISkill = {
id: 48,
name: 'Disparada',
    img: 'assets/skills/48.png',
    description: '+5 Velocidade',
    attribute: [EAttribute.S],
    bonus: 5,
    extraDamage: 0,
    cure: 0,
    cost: 2,
    target: ETarget.A,
    effect: ''
}

export const skill49: ISkill = {
id: 49,
name: 'Derrubada',
    img: 'assets/skills/49.png',
    description: '-7 Defesa',
    attribute: [EAttribute.D],
    bonus: -7,
    extraDamage: 0,
    cure: 0,
    cost: 3,
    target: ETarget.E,
    effect: ''
}

export const skill50: ISkill = {
id: 50,
name: 'Abalo Sísmico',
    img: 'assets/skills/50.png',
    description: '+10 Ataque',
    attribute: [EAttribute.A],
    bonus: 10,
    extraDamage: 0,
    cure: 0,
    cost: 4,
    target: ETarget.A,
    effect: ''
}

// ----------------------------------Skills Alquimista---------------------------------------
export const skill51: ISkill = {
id: 51,
name: 'Fogo Alquímico',
    img: 'assets/skills/51.png',
    description: '+2 Ataque',
    attribute: [EAttribute.A],
    bonus: 2,
    extraDamage: 0,
    cure: 0,
    cost: 1,
    target: ETarget.A,
    effect: ''
}

export const skill52: ISkill = {
id: 52,
name: 'Fabricar Poção',
    img: 'assets/skills/52.png',
    description: 'Cria uma poção aleatória',
    attribute: [EAttribute.V],
    bonus: 0,
    extraDamage: 0,
    cure: 0,
    cost: 5,
    target: ETarget.A,
    effect: ''
}

export const skill53: ISkill = {
id: 53,
name: 'Aplicar Mutagênico',
    img: 'assets/skills/53.png',
    description: '+3 Todos Atributos',
    attribute: [EAttribute.A, EAttribute.D, EAttribute.I, EAttribute.S],
    bonus: 3,
    extraDamage: 0,
    cure: 0,
    cost: 3,
    target: ETarget.A,
    effect: ''
}

export const skill54: ISkill = {
id: 54,
name: 'Infectar',
    img: 'assets/skills/54.png',
    description: '-5 Defesa / -5 Velocidade',
    attribute: [EAttribute.D, EAttribute.S],
    bonus: -5,
    extraDamage: 0,
    cure: 0,
    cost: 3,
    target: ETarget.E,
    effect: ''
}

export const skill55: ISkill = {
id: 55,
name: 'Bomba Alquímica',
    img: 'assets/skills/55.png',
    description: '+8 Ataque',
    attribute: [EAttribute.A],
    bonus: 8,
    extraDamage: 0,
    cure: 0,
    cost: 4,
    target: ETarget.A,
    effect: ''
}

export const skill56: ISkill = {
id: 56,
name: 'Mega Bomba',
    img: 'assets/skills/56.png',
    description: '+12 Ataque',
    attribute: [EAttribute.A],
    bonus: 12,
    extraDamage: 0,
    cure: 0,
    cost: 7,
    target: ETarget.A,
    effect: ''
}

// ----------------------------------Skills Necromante---------------------------------------
export const skill57: ISkill = {
id: 57,
name: 'Força Arcana',
    img: 'assets/skills/57.png',
    description: '+3 Ataque',
    attribute: [EAttribute.A],
    bonus: 3,
    extraDamage: 0,
    cure: 0,
    cost: 2,
    target: ETarget.A,
    effect: ''
}

export const skill58: ISkill = {
id: 58,
name: 'Força Arcana',
    img: 'assets/skills/58.png',
    description: '+3 Defesa',
    attribute: [EAttribute.D],
    bonus: 3,
    extraDamage: 0,
    cure: 0,
    cost: 2,
    target: ETarget.A,
    effect: ''
}

export const skill59: ISkill = {
id: 59,
name: 'Servo Morto-Vivo',
    img: 'assets/skills/59.png',
    description: '+4 Ataque',
    attribute: [EAttribute.A],
    bonus: 4,
    extraDamage: 0,
    cure: 0,
    cost: 4,
    target: ETarget.A,
    effect: ''
}

export const skill60: ISkill = {
id: 60,
name: 'Servo Morto-Vivo',
    img: 'assets/skills/60.png',
    description: '+4 Velocidade',
    attribute: [EAttribute.S],
    bonus: 4,
    extraDamage: 0,
    cure: 0,
    cost: 4,
    target: ETarget.A,
    effect: ''
}

export const skill61: ISkill = {
id: 61,
name: 'Círculo Necrótico',
    img: 'assets/skills/61.png',
    description: '+5 Defesa',
    attribute: [EAttribute.D],
    bonus: 5,
    extraDamage: 0,
    cure: 0,
    cost: 4,
    target: ETarget.A,
    effect: ''
}

export const skill62: ISkill = {
id: 62,
name: 'Lama',
    img: 'assets/skills/62.png',
    description: '-5 Velocidade',
    attribute: [EAttribute.S],
    bonus: -5,
    extraDamage: 0,
    cure: 0,
    cost: 4,
    target: ETarget.E,
    effect: ''
}

export const skill63: ISkill = {
id: 63,
name: 'Cemitério Vivo',
    img: 'assets/skills/63.png',
    description: '-7 Velocidade / -7 Defesa',
    attribute: [EAttribute.S, EAttribute.D],
    bonus: -7,
    extraDamage: 0,
    cure: 0,
    cost: 6,
    target: ETarget.E,
    effect: ''
}

export const skill64: ISkill = {
id: 64,
name: 'Forma Litch',
    img: 'assets/skills/64.png',
    description: '+10 Todos Atributos',
    attribute: [EAttribute.A, EAttribute.D, EAttribute.I, EAttribute.S],
    bonus: 10,
    extraDamage: 0,
    cure: 0,
    cost: 10,
    target: ETarget.A,
    effect: ''
}

// ----------------------------------Skills Paladino-----------------------------------------
// ----------------------------------Skills Bruxo--------------------------------------------
// ----------------------------------Skills Monge--------------------------------------------
// ----------------------------------Skills Músico-------------------------------------------
// ----------------------------------Skills Caçador------------------------------------------
// ----------------------------------Skills Assassino----------------------------------------
// ----------------------------------Skills Pirata-------------------------------------------
// ----------------------------------Skills Ladino-------------------------------------------
// ----------------------------------Skills Atirador-----------------------------------------
// ----------------------------------Skills Médico-------------------------------------------
// ----------------------------------Skills Druida-------------------------------------------
// ----------------------------------Skills Espiritual---------------------------------------

export const skillList: ISkill[] = [
    skill00, skill01, skill02, skill03, skill04, skill05, skill06, skill07, skill08, skill09,
    skill10, skill11, skill12, skill13, skill14, skill15, skill16, skill17, skill18, skill19,
    skill20, skill21, skill22, skill23, skill24, skill25, skill26, skill27, skill28, skill29,
    skill30, skill31, skill32, skill33, skill34, skill35, skill36, skill37, skill38, skill39,
    skill40, skill41, skill42, skill43, skill44, skill45, skill46, skill47, skill48, skill49,
    skill50, skill51, skill52, skill53, skill54, skill55, skill56, skill57, skill58, skill59,
    skill60, skill61, skill62, skill63, skill64,
]