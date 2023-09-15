import fastifyCors from '@fastify/cors'
import fastify from 'fastify'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateAICompletionRoute } from './routes/generate-ai-completion'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'

const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app
  .listen({
    path: '0.0.0.0',
    port: 6969,
  })
  .then(() => {
    console.log('Servidor rodando na porta http://localhost:6969')
  })
