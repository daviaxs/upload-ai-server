import fastify from 'fastify'
import { getAllPromptsRoute } from './routes/get-all-prompts'

const app = fastify()

app.register(getAllPromptsRoute)

app
  .listen({
    path: '0.0.0.0',
    port: 6969,
  })
  .then(() => {
    console.log('Servidor rodando na porta http://localhost:6969')
  })
