interface Colaborador {
    socket_id?: string;
    email: string;
    matricula: number;
    nota?: number;
    reacoes?: 'Like' | 'Orgulho' | 'Excelente Trabalho' | 'Colaboração';
    desc?: string;
}


const colaboradores: Colaborador[] = [];

colaboradores.push({
    email: 'lucas.fernandes@cliente.com',
    matricula: 3748,
    nota: 0
})
colaboradores.push({
    email: 'pedro.lima@cliente.com',
    matricula: 2482,
})
colaboradores.push({
    email: 'maria.julianelli@cliente.com',
    matricula: 6449,
})
colaboradores.push({
    email: 'kevin.restom@cliente.com',
    matricula: 2749,
})

colaboradores.push({
    email: 'amanda.amorim@cliente.com',
    matricula: 4128,
})

colaboradores.push({
    email: 'fernanda.silva@cliente.com',
    matricula: 9252,
})
colaboradores.push({
    email: 'carla.pereira@cliente.com',
    matricula: 5945,
})
colaboradores.push({
    email: 'pedro.matos@cliente.com',
    matricula: 4879,
})
colaboradores.push({
    email: 'nathalia.garcia@cliente.com',
    matricula: 1827,
})
colaboradores.push({
    email: 'leonardo.lima@cliente.com',
    matricula: 1318,
})

colaboradores.push({
    email: 'giulia.scarppa@cliente.com',
    matricula: 3564,
})

colaboradores.push({
    email: 'michael.pereira@cliente.com',
    matricula: 9178,
})

colaboradores.push({
    email: 'natan.franco@cliente.com',
    matricula: 6870,
})
colaboradores.push({
    email: 'otávio.costa@cliente.com',
    matricula: 5723,
})
colaboradores.push({
    email: 'thales.ferreira@cliente.com',
    matricula: 1996,
})
colaboradores.push({
    email: 'anna.alves@cliente.com',
    matricula: 2049,
})
colaboradores.push({
    email: 'alvaro.souza@cliente.com',
    matricula: 1694,
})
colaboradores.push({
    email: 'marcela.santos@cliente.com',
    matricula: 1694,
})
colaboradores.push({
    email: 'ana.oliveira@cliente.com',
    matricula: 2710,
})

export { colaboradores }