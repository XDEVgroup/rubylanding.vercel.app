import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../components/HeaderBlack";
import Image from "next/image";
import Footer from "../../components/Footer";
import { api } from "../../utils/api";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Head from "next/head";
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import Whatsapp from "../../components/Whatsapp";
import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import superjson from 'superjson';
import { blogRouter } from '../../server/api/routers/blogs';
import {createTRPCContext} from '../../server/api/trpc'
import BlogNLindex from "../../components/BlogNLindex";
import BlogENindex from "../../components/BlogENindex";


function BlogId() {
  const router = useRouter();
  //focus deze query voor serverfetch
  
  const { data: dataNL, isLoading: isLoadingItemsNL } =
  api.blog.getBlogNL.useQuery();
  const { data: dataEN, isLoading: isLoadingItemsEN } =
    api.blog.getBlogEN.useQuery();

  

  return (
    <>
      <Head>
        <title>Ruby Finance - Blogs</title>
        <meta
          name="description"
          content={`Ruby Finance, Blogs over de laatste trends voor boekhouding en belastingzaken`}
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
      </Head>
      <div className="h-full min-h-screen">
        <Header />
        {isLoadingItemsNL ? (
          <div className="-mt-36 flex min-h-screen items-center justify-center">
            <Image src="/rubygif.gif" alt="" className="h-10 animate-pulse" height={50} width={100}/>
          </div>
        ) : (
          <div>
            {router.locale == "nl-NL" ? (
              /* NL */
             <BlogNLindex />
            ) : (
              /* EN */
              <BlogENindex />
            )}
          </div>
        )}
        <div className="fixed bottom-6 right-6">
          <Whatsapp />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BlogId;

