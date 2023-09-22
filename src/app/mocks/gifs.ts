import { IGif } from "../shared/interfaces/interfaces"

const gifEspadachim: IGif = {
    id: 0,
    name: ['Espadachim', 'Espadachim'],
    gif: ['assets/tokens/00m.gif', 'assets/tokens/00f.gif']
}

const gifArqueiro: IGif = {
    id: 1,
    name: ['Arqueiro', 'Arqueira'],
    gif: ['assets/tokens/01m.gif', 'assets/tokens/01f.gif']
}

const gifClerigo: IGif = {
    id: 2,
    name: ['Clérigo', 'Clériga'],
    gif: ['assets/tokens/02m.gif', 'assets/tokens/02f.gif']
}

const gifMago: IGif = {
    id: 3,
    name: ['Mago', 'Maga'],
    gif: ['assets/tokens/03m.gif', 'assets/tokens/03f.gif']
}

const gifSoldado: IGif = {
    id: 4,
    name: ['Soldado', 'Soldada'],
    gif: ['assets/tokens/04m.gif', 'assets/tokens/04f.gif']
}

const gifBarbaro: IGif = {
    id: 5,
    name: ['Barbaro', 'Barbara'],
    gif: ['assets/tokens/05m.gif', 'assets/tokens/05f.gif']
}

const gifAlquimista: IGif = {
    id: 6,
    name: ['Alquimista', 'Alquimista'],
    gif: ['assets/tokens/06m.gif', 'assets/tokens/06f.gif']
}

const gifNecromante: IGif = {
    id: 7,
    name: ['Necromante', 'Necromante'],
    gif: ['assets/tokens/07m.gif', 'assets/tokens/07f.gif']
}

export const gifList: IGif[] = [
    gifEspadachim,
    gifArqueiro,
    gifClerigo,
    gifMago,
    gifSoldado,
    gifBarbaro,
    gifAlquimista,
    gifNecromante
]