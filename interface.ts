interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(){
    return {
        nome: `Bruno`,
        email: `teste@teste`,
    }
}

function setUser(){
    //...
}