import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IBlogPostMeta } from '@/types';
import { authors } from '@/data/authors';

interface Props {
    post: IBlogPostMeta;
}

const BlogCard: React.FC<Props> = ({ post }) => {
    const author = authors[post.author];
    const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <article className="h-full rounded-2xl border border-border/50 bg-white overflow-hidden hover:shadow-lg transition-shadow">
                {post.heroImage && (
                    <div className="aspect-[16/9] overflow-hidden bg-muted">
                        <Image
                            src={post.heroImage}
                            alt={post.title}
                            width={800}
                            height={450}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                )}
                <div className="p-6">
                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.slice(0, 3).map(tag => (
                                <span
                                    key={tag}
                                    className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                    <h2 className="text-lg md:text-xl font-semibold text-foreground leading-snug mb-2 group-hover:text-secondary transition-colors">
                        {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                        {post.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{author?.name ?? post.author}</span>
                        <div className="flex items-center gap-3">
                            <time dateTime={post.date}>{formattedDate}</time>
                            <span>{post.readingTime} min read</span>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default BlogCard;
