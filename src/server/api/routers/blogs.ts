import { Input } from "postcss";
import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";


  export const blogRouter = createTRPCRouter({
    
      

    getBlogALL: publicProcedure.input(z.object({routerLang: z.any()})).query(async ({ ctx, input }) => {
      if(input.routerLang.includes("nl-NL")){
        const data = await ctx.prisma.blog.findMany({
          orderBy: [
            {
              date: 'desc',
            },
            
          ],
          where:{
            language: "NL"
          }
        });
        
        return data
      }
      else{
        const data = await ctx.prisma.blog.findMany({
          orderBy: [
            {
              date: 'desc',
            },
            
          ],
          where:{
            language: "EN"
          }
        });
        return data
      }
      
  }),


  
  });

