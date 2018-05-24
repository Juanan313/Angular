
export class Peticion {

    constructor(
        public idIdioma: number,
        public idServicio: number,
        public idTraductor: number,
        public nombreSolicitante: string,
        public descripcion: string,
        public email: string,
        public tlfn: number
    ) { }
}