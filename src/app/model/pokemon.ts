export class Pokemon{
    constructor(
        public id: number,
        public name: string,
        public names: Array<any>,
        public description: object,
        public varieties: Array<any>,
        public types: Array<any>,
        public generation:string,
        public height: number,
        public weight: number,
        public sprite: object,
        public hp: number,
        public attack: number,
        public defense: number,
        public specialAttack: number,
        public specialDefense: number,
        public speed: number
    ){}
}