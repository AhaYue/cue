// import { client } from '@/src/sanity/lib/client';
// import { getPost } from '@/src/sanity/lib/api';
// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import { urlForImage } from '@/src/sanity/lib/image';
// import { PortableText } from '@portabletext/react';

// export const revalidate = 60; // 每60秒重新验证页面

// // 生成静态路径参数
// export async function generateStaticParams() {
//   const posts = await client.fetch(`*[_type == "post"] { slug }`);
  
//   return posts.map((post: any) => ({
//     slug: post.slug.current,
//   }));
// }

// // 博客文章页面组件
// export default async function BlogPost({ params }: { params: { slug: string } }) {
//   const post = await getPost(params.slug);
  
//   if (!post) {
//     notFound();
//   }

//   return (
//     <article className="max-w-3xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      
//       {post.publishedAt && (
//         <div className="text-gray-500 mb-4">
//           发布于: {new Date(post.publishedAt).toLocaleDateString('zh-CN')}
//         </div>
//       )}
      
//       {post.mainImage && (
//         <div className="mb-8 relative w-full h-[400px]">
//           <Image 
//             src={urlForImage(post.mainImage).url()} 
//             alt={post.title || '博客文章图片'} 
//             fill
//             className="object-cover rounded-lg"
//           />
//         </div>
//       )}
      
//       <div className="prose max-w-none">
//         <PortableText value={post.body} />
//       </div>
//     </article>
//   );
// } 