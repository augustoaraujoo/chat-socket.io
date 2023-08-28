interface Colaborador {
    nome?: string;
    socket_id?: string;
    email: string;
    matricula: number;
    nota: number | 0;
    reacoes?: ('Like' | 'Orgulho' | 'Excelente Trabalho' | 'Colaboração')[];
    desc?: (string)[];
    foto_url?: string
}


const colaboradores: Colaborador[] = [];

colaboradores.push({
    email: 'lucas.fernandes@cliente.com',
    matricula: 3748,
    nota: 0,
    nome: 'lucas',
    foto_url: '/src/imgs/1man.png'
})
colaboradores.push({
    email: 'pedro.lima@cliente.com',
    matricula: 2482,
    nota: 0,
    nome: 'pedro',
    foto_url: '/src/imgs/2man.jpeg'
})
colaboradores.push({
    email: 'maria.julianelli@cliente.com',
    matricula: 6449,
    nota: 0,
    nome: 'maria',
    foto_url: '/src/imgs/3woman.jpeg'
})
colaboradores.push({
    email: 'kevin.restom@cliente.com',
    matricula: 2749,
    nota: 0,
    nome: 'kevin',
    foto_url: '/src/imgs/4man.jpeg'
})

colaboradores.push({
    email: 'amanda.amorim@cliente.com',
    matricula: 4128,
    nota: 0,
    nome: 'amanda',
    foto_url: '/src/imgs/5woman.jpeg'
})

colaboradores.push({
    email: 'fernanda.silva@cliente.com',
    matricula: 9252,
    nota: 0,
    nome: 'fernanda',
    foto_url: '/src/imgs/6woman.jpeg'
})
colaboradores.push({
    email: 'carla.pereira@cliente.com',
    matricula: 5945,
    nota: 0,
    nome: 'carla',
    foto_url: '/src/imgs/7woman.jpeg'
})
colaboradores.push({
    email: 'pedro.matos@cliente.com',
    matricula: 4879,
    nota: 0,
    nome: 'pedro',
    foto_url: '/src/imgs/8man.jpeg'
})
colaboradores.push({
    email: 'nathalia.garcia@cliente.com',
    matricula: 1827,
    nota: 0,
    nome: 'nathalia',
    foto_url: '/src/imgs/9woman.jpeg'
})
colaboradores.push({
    email: 'leonardo.lima@cliente.com',
    matricula: 1318,
    nota: 0,
    nome: 'leonardo',
    foto_url: '/src/imgs/10man.jpeg'
})

colaboradores.push({
    email: 'giulia.scarppa@cliente.com',
    matricula: 3564,
    nota: 0,
    nome: 'giuliana',
    foto_url: '/src/imgs/11woman.jpeg'
})

colaboradores.push({
    email: 'michael.pereira@cliente.com',
    matricula: 9178,
    nota: 0,
    nome: 'michael',
    foto_url: '/src/imgs/12man.jpeg'
})

colaboradores.push({
    email: 'natan.franco@cliente.com',
    matricula: 6870,
    nota: 0,
    nome: 'natan',
    foto_url: '/src/imgs/13man.jpeg'
})
colaboradores.push({
    email: 'otávio.costa@cliente.com',
    matricula: 5723,
    nota: 0,
    nome: 'otávio',
    foto_url: '/src/imgs/14man.jpeg'
})
colaboradores.push({
    email: 'thales.ferreira@cliente.com',
    matricula: 1996,
    nota: 0,
    nome: 'thales',
    foto_url: '/src/imgs/15man.jpeg'
})
colaboradores.push({
    email: 'anna.alves@cliente.com',
    matricula: 2049,
    nota: 0,
    nome: 'anna',
    foto_url: '/src/imgs/16woman.jpeg'
})
colaboradores.push({
    email: 'alvaro.souza@cliente.com',
    matricula: 1694,
    nota: 0,
    nome: 'alvaro',
    foto_url: '/src/imgs/17man.jpeg'
})
colaboradores.push({
    email: 'marcela.santos@cliente.com',
    matricula: 1694,
    nota: 0,
    nome: 'marcela',
    foto_url: '/src/imgs/18woman.jpeg'
})
colaboradores.push({
    email: 'ana.oliveira@cliente.com',
    matricula: 2710,
    nota: 0,
    nome: 'ana',
    foto_url: '/src/imgs/19woman.jpeg'
})

export { colaboradores }