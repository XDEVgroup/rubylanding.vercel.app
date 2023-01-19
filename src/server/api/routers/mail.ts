import { protectedProcedure } from './../trpc';
import { z } from "zod";
import nodemailer from "nodemailer"
import {  publicProcedure, createTRPCRouter } from "../trpc";

export const mailRouter = createTRPCRouter({
    /* stuur mail naar Mailadressen */
  addContact: publicProcedure
    .input(z.object({ name: z.string(), email: z.string(), telefoon: z.string(), checked: z.boolean()}))
    .mutation(async ({ input,ctx }) => {
      const transporter = nodemailer.createTransport({
        host: "mail.zxcs.nl",
        port: 465,
        secure: true,
        auth: {
          user: "info@rubyfinance.nl", // generated ethereal user
          pass: process.env.MAIL_CLIENT_SECRET // generated ethereal password
        },
      });

      const info:any = await transporter.sendMail({
        from: input.email, // sender address
        to: "mark@rubyfinance.nl", // list of receivers
        subject: `${input.checked ? "RUBY Aanvraag, ik wil een offerte" : "RUBY Aanvraag, bel mij terug."}`, // Subject line
        text: `Mijn naam is ${input.name}, mijn telefoonnummer is ${input.telefoon} en ik ${input.checked ? "wil een offerte." : "wil geen offerte" }`, // plain text body
        html: `Mijn naam is ${input.name}, mijn telefoonnummer is ${input.telefoon} en ik ${input.checked ? "wil een offerte." : "wil geen offerte" }`, // html body
      });

      await ctx.prisma.aanvraag.create({
        data: {naam: input.name,
        telefoon: input.telefoon,
        mail: input.email,
        offerte: input.checked}
      })

      return  info.messageId;
    }),

    getContact: protectedProcedure
    
    .query(async ({ ctx }) => {

      const data = await ctx.prisma.aanvraag.findMany()

      return  data;
    }),

    addgebeld: protectedProcedure
    .input(z.object({ id: z.string()}))
    .mutation(async ({ ctx,input }) => {
      const find = await ctx.prisma.aanvraag.findFirst({
        where:{
          id: input.id
        }
      })

      if(!find?.gebeld){
        const setTrue:any = await ctx.prisma.aanvraag.update({
          where: {
            id: input.id
          },
          data:{
            gebeld: true
          }
          
        })
        return setTrue
      }
      else{
        const setFalse:any = await ctx.prisma.aanvraag.update({
          where: {
            id: input.id
          },
          data:{
            gebeld: false
          }
        })
        return setFalse
      }
      
      
      
    }),

   
  });
  


