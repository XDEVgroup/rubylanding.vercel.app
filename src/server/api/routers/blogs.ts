import { Input } from "postcss";
import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";


  export const blogRouter = createTRPCRouter({
    AddBlogALL: protectedProcedure
    .input(z.object({ 
      routerLang: z.string(),
      title: z.string(),
      author: z.string(),
      text: z.string(),
      image: z.string(),
     }))
      .mutation(async ({ ctx, input }) => {
        if(input.routerLang.includes("nl-NL")){
          const data = await ctx.prisma.blog.create({
         
            data: {
              title: input.title,
              author: input.author,
              text: input.text,
              image: input.image,
              
              language: "NL"
            }
          });
          return data
        }else{
          const data = await ctx.prisma.blog.create({
         
            data: {
              title: input.title,
              author: input.author,
              text: input.text,
              image: input.image,
              
              language: "EN"
            }
          });
          return data
        }
        }),
        
        

      EditBlogNL: protectedProcedure
    .input(z.object({ 

      id: z.string(),
      title: z.string(),
      author: z.string(),
      text: z.string(),
      image: z.string(),
     
     }))
      .mutation(async ({ ctx, input }) => {
        const data = await ctx.prisma.blog.update({
          where:{
            id: input.id
          },
          data: {
            title: input.title,
            author: input.author,
            text: input.text,
            image: input.image,
          
            language: "NL"
          }
        });
        return data
      }),
  
      AddBlogEN: protectedProcedure.input(z.object({ 
        title: z.string(),
        author: z.string(),
        text: z.string(),
        image: z.string(),
        
       })).mutation(async ({ ctx,input }) => {
        const data = await ctx.prisma.blog.create({
          data: {
            title: input.title,
            author: input.author,
            text: input.text,
            image: input.image,
            
  
            language: "EN"
          }
        });
        return data
    }),

    EditBlogEN: protectedProcedure
    .input(z.object({ 
      id: z.string(),
      title: z.string(),
      author: z.string(),
      text: z.string(),
      image: z.string(),
     
     }))
      .mutation(async ({ ctx, input }) => {
        const data:any = await ctx.prisma.blog.update({
          where:{
            id: input.id
          },
          data: {
            title: input.title,
            author: input.author,
            text: input.text,
            image: input.image,
           
            language: "EN"
          }
        });
        return data
      }),

    getBlogALL: publicProcedure.input(z.object({routerLang: z.string()})).query(async ({ ctx, input }) => {
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

  getSpecBlog: publicProcedure.input(z.object({ 
    id: z.string(),
    routerLang: z.string(),
    
   })).query(async ({ ctx, input }) => {
    if(input.routerLang.includes("nl-NL")){
      const data = await ctx.prisma.blog.findFirst({
        where:{
          id: input.id,
          language: "NL"
        }
      });
      return data
    }else{
      const data = await ctx.prisma.blog.findFirst({
        where:{
          id: input.id,
          language: "EN"
        }
      });
      return data
    }
    
}),

getRandomBlogALL: publicProcedure.input(z.object({ 
  routerLang: z.string(),
  
  
 })).query(async ({ ctx,input }) => {
  if(input.routerLang.includes("nl-NL")){
    const data = await ctx.prisma.blog.findMany({
      where:{
        language: "NL"
      }
    });
   return data[Math.floor(Math.random()*data.length)]
  }else{
    const data = await ctx.prisma.blog.findMany({
      where:{
        language: "EN"
      }
    });
   return data[Math.floor(Math.random()*data.length)]
  }
  
}),


getSpecBlogEN: publicProcedure.input(z.object({ 
  id: z.string(),
  
  
 })).query(async ({ ctx, input }) => {
  const data = await ctx.prisma.blog.findFirst({
    where:{
      id: input.id,
      language: "EN"
    }
  });
  return data
}),

DeleteBlogEN: protectedProcedure.input(z.object({ 
  id: z.string(),
 })).mutation(async ({ ctx, input }) => {
  const data = await ctx.prisma.blog.delete({
    where:{
      id: input.id,
    }
  });
  return data
}),

DeleteBlogNL: protectedProcedure.input(z.object({ 
  id: z.string(),
 })).mutation(async ({ ctx, input }) => {
  const data = await ctx.prisma.blog.delete({
    where:{
      id: input.id,
    }
  });
  return data
}),
  
  });

