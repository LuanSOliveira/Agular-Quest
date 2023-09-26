export function UpdatePlay(service: any): void {
    const dataStore: any = localStorage.getItem('Angular Quest - Play')
    const dataPlay: any = JSON.parse(dataStore)
    service.setPlay(dataPlay)
}