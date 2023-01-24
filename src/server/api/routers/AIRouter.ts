import { Configuration } from 'openai'
import { OpenAIApi } from 'openai/dist/api'
import { z } from 'zod'

import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export const AIRouter = createTRPCRouter({
  addBlogAI: protectedProcedure
    .input(z.object({topic: z.any()}))
    .mutation(async ({input}) => {
      const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Maak een titel met het volgende keyword: ${input.topic}`,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      return res.data.choices[0]!.text
    }),

    addBlogAIText: protectedProcedure
    .input(z.object({topic: z.any()}))
    .mutation(async ({input}) => {
      const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Maak een blog met de volgende titel: ${input.topic}`,
        temperature: 1,
        max_tokens: 300,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })

      return res?.data
    }),
})