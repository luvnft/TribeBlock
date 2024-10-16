import type { CollectionEntry } from "astro:content"
import Card from "../components/Card"
import { getPostColorFromCategory } from "../utils/postUtils";
import { Tag } from "../components/Tag";
import { CutCornerButton } from "../components/CutCornerButton";
import { twMerge } from "tailwind-merge";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const LatestPosts = (props: { latestPosts: CollectionEntry<'blog'>[] }) => {

    const { latestPosts } = props;

    // We use Ref to see what position the specific div is in
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ['start end', 'start center'],
    });

    const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);

    return (
        <section className="py-60">
            <div className="container">

                <div className="max-w-3xl mx-auto">
                    <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">🛣️ Roadmap</h2>
                    <p className="text-xl lg:2xl text-center text-zinc-400 mt-8">
                        Metavegas.live is the new Vegas the culture owns with games, live shows, events and comedy shows.
                    </p>
                </div>
            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 md:mt-28">
                    <div className="flex flex-col gap-8">
                        {latestPosts.map(({ data: { title, description, category } }, postIndex) => (
                            <Card 
                                key={postIndex} 
                                color={getPostColorFromCategory(category)} 
                                buttonText="Read More"
                                className={twMerge((postIndex === 1 || postIndex === 3) && "md:hidden")}
                            >
                                <Tag color={getPostColorFromCategory(category)}>
                                    {category}
                                </Tag>
                                <h3 className="font-heading font-black text-3xl mt-3">
                                    {title}
                                </h3>
                                <p className="text-lg text-zinc-400 mt-6">
                                    {description}
                                </p>
                            </Card>
                        ))}
                    </div>

                    <motion.div 
                        className="hidden md:flex flex-col gap-8 mt-16" 
                        style={{
                            marginTop,
                        }}
                        ref={targetRef}
                    >
                        {latestPosts.map(({ data: { title, description, category } }, postIndex) => (
                            <Card 
                                key={postIndex} 
                                color={getPostColorFromCategory(category)} 
                                buttonText="Read More"
                                className={twMerge((postIndex === 0 || postIndex ===2 ) && "md:hidden")}
                            >
                                <Tag color={getPostColorFromCategory(category)}>
                                    {category}
                                </Tag>
                                <h3 className="font-heading font-black text-3xl mt-3">
                                    {title}
                                </h3>
                                <p className="text-lg text-zinc-400 mt-6">
                                    {description}
                                </p>
                            </Card>
                        ))}
                    </motion.div>
                </div>

                <div className="flex justify-center mt-48 md:mt-32">
                <a href="https://t.me/mvegaslive" target="_blank" rel="noopener noreferrer">
                            <CutCornerButton>TELEGRAM</CutCornerButton>
                            </a> {/* Closing tag added here */}
                </div>
            </div>
        </section>
    )
}
