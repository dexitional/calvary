import { useState } from "react"
import Image from 'next/image'
import Logo from '../../../public/logo.png'
import { getPost } from "@/utils/api";
import { Post } from "@/typings";
import { urlFor } from "@/sanity";
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from "@/components/RichTextComponents";

type Props = {
  params: {
     slug:string;
  }
}

export default async function Post({ params: { slug }}: Props) {
  const post:Post = await getPost(slug);
  
  return (
    <article className="space-y-6">
      <h1 className="my-3 md:my-10 text-2xl md:text-4xl text-gray-800 font-medium">{post.title}</h1>
      <section className="relative">
        <div className="relative h-96 w-full">
          <Image className="object-contain" src={urlFor(post.mainImage).url()} alt="" fill/>
        </div>
        <div className="px-6 py-1.5 bg-slate-100/70 text-gray-500 font-semibold text-xs text-center">
          <p>Caption</p>
        </div>
      </section>
      <section className="w-full space-y-4 text-base text-gray-600">
        <PortableText value={post.body} components={RichTextComponents}/> 
      </section>
    </article>
  )
}
