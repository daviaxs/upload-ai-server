import fastify from 'fastify'
import { createTranscriptionRoute } from './routes/create-transcription'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'

const app = fastify()

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)

app
  .listen({
    path: '0.0.0.0',
    port: 6969,
  })
  .then(() => {
    console.log('Servidor rodando na porta http://localhost:6969')
  })
