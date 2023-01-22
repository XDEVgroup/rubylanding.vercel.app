import { Input } from "postcss";
import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";


  export const blogRouter = createTRPCRouter({
    AddBlogNL: protectedProcedure
    .input(z.object({ 
      title: z.string(),
      author: z.string(),
      text: z.string(),
      image: z.string(),
     }))
      .mutation(async ({ ctx, input }) => {
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

    getBlogNL: publicProcedure.query(async ({ ctx }) => {
      const data = await ctx.prisma.blog.findMany({
        orderBy: [
          {
            date: 'asc',
          },
          
        ],
        where:{
          language: "NL"
        }
      });
      return data
  }),

  getSpecBlogNL: publicProcedure.input(z.object({ 
    id: z.string(),
    
    
   })).query(async ({ ctx, input }) => {
    const data = await ctx.prisma.blog.findFirst({
      where:{
        id: input.id,
        language: "NL"
      }
    });
    return data
}),

getRandomBlogNL: publicProcedure.query(async ({ ctx }) => {
  const data = await ctx.prisma.blog.findMany({
    where:{
      language: "NL"
    }
  });
 return data[Math.floor(Math.random()*data.length)]
}),

getRandomBlogEN: publicProcedure.query(async ({ ctx }) => {
  const data = await ctx.prisma.blog.findMany({
    where:{
      language: "EN"
    }
  });
 return data[Math.floor(Math.random()*data.length)]
}),

  getBlogEN: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.blog.findMany({
      orderBy: [
        {
          date: 'asc',
        },
        
      ],
      where:{
      language: "EN"
    }});
    return data
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

