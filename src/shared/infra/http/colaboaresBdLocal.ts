interface Colaborador {
    nome?: string;
    socket_id?: string;
    email: string;
    matricula: number;
    nota: number | 0;
    reacoes?: ('Like' | 'Orgulho' | 'Excelente Trabalho' | 'Colaboração')[];
    desc?: string;
    foto_url?:string
}


const colaboradores: Colaborador[] = [];

colaboradores.push({
    email: 'lucas.fernandes@cliente.com',
    matricula: 3748,
    nota: 0,
    nome: 'lucas',
    foto_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh93jjw5cmAyruyfJGCi235sGXjAKU65-S5Q&usqp=CAU'
})
colaboradores.push({
    email: 'pedro.lima@cliente.com',
    matricula: 2482,
    nota: 0,
    nome: 'pedro'
})
colaboradores.push({
    email: 'maria.julianelli@cliente.com',
    matricula: 6449,
    nota: 0,
    nome: 'maria'
})
colaboradores.push({
    email: 'kevin.restom@cliente.com',
    matricula: 2749,
    nota: 0,
    nome: 'kevin'
})

colaboradores.push({
    email: 'amanda.amorim@cliente.com',
    matricula: 4128,
    nota: 0,
    nome: 'amanda'
})

colaboradores.push({
    email: 'fernanda.silva@cliente.com',
    matricula: 9252,
    nota: 0,
    nome: 'fernanda'
})
colaboradores.push({
    email: 'carla.pereira@cliente.com',
    matricula: 5945,
    nota: 0,
    nome: 'carla'
})
colaboradores.push({
    email: 'pedro.matos@cliente.com',
    matricula: 4879,
    nota: 0,
    nome: 'pedro'
})
colaboradores.push({
    email: 'nathalia.garcia@cliente.com',
    matricula: 1827,
    nota: 0,
    nome: 'nathalia'
})
colaboradores.push({
    email: 'leonardo.lima@cliente.com',
    matricula: 1318,
    nota: 0,
    nome: 'leonardo'
})

colaboradores.push({
    email: 'giulia.scarppa@cliente.com',
    matricula: 3564,
    nota: 0,
    nome: 'giuliana'
})

colaboradores.push({
    email: 'michael.pereira@cliente.com',
    matricula: 9178,
    nota: 0,
    nome: 'michael'
})

colaboradores.push({
    email: 'natan.franco@cliente.com',
    matricula: 6870,
    nota: 0,
    nome: 'natan'
})
colaboradores.push({
    email: 'otávio.costa@cliente.com',
    matricula: 5723,
    nota: 0,
    nome: 'otávio'
})
colaboradores.push({
    email: 'thales.ferreira@cliente.com',
    matricula: 1996,
    nota: 0,
    nome: 'thales'
})
colaboradores.push({
    email: 'anna.alves@cliente.com',
    matricula: 2049,
    nota: 0,
    nome: 'anna'
})
colaboradores.push({
    email: 'alvaro.souza@cliente.com',
    matricula: 1694,
    nota: 0,
    nome: 'alvaro'
})
colaboradores.push({
    email: 'marcela.santos@cliente.com',
    matricula: 1694,
    nota: 0,
    nome: 'marcela'
})
colaboradores.push({
    email: 'ana.oliveira@cliente.com',
    matricula: 2710,
    nota: 0,
    nome: 'ana'
})

export { colaboradores }