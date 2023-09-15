import fastify from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'Hello world'
})

app
  .listen({
    path: '0.0.0.0',
    port: 6969,
  })
  .then(() => {
    console.log('Servidor rodando na porta http://localhost:6969')
  })
