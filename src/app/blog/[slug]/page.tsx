import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug } from '@/content/blog';
import { buildMetadata } from '@/lib/metadata';
import { BlogPostTemplate } from '@/components/BlogPostTemplate';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata(post.meta, `/blog/${slug}`);
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  return <BlogPostTemplate post={post} />;
}
