import { useRef } from "react"
import { CutCornerButton } from "../components/CutCornerButton"
import LearnMoreButton from "../components/LearnMoreButton"
import { motion, useScroll, useTransform } from "framer-motion"

const listItems = [
    "Connect your Phantom wallet",
    "Copy and paste the referral link",
    "Get paid instantly when your referrals play",
];


export const FeaturesGrid = () => {

    const torusRef = useRef(null);
    const firstHemisphereRef = useRef(null);
    const coneRef = useRef(null);
    const secondHemisphereRef = useRef(null);

    // Torus
    const {scrollYProgress: torusKnotScrollYProgress} = useScroll({
        target: torusRef, 
        offset: ['start end', 'end start'],
    });
    const torusKnotTranslateY = useTransform(torusKnotScrollYProgress, [0, 1], [100, -100]); // the speed
    const torusKnotRotate = useTransform(torusKnotScrollYProgress, [0, 1], [30, -30]); // the rotation direction

    // FirstHemisphere
    const {scrollYProgress: firstHemisphereScrollYProgress} = useScroll({
        target: firstHemisphereRef, 
        offset: ['start end', 'end start'],
    });
    const firstHemisphereTranslateY = useTransform(firstHemisphereScrollYProgress, [0, 1], [50, -50]); // the speed
    const firstHemisphereRotate = useTransform(firstHemisphereScrollYProgress, [0, 1], [-20, -50]); // the rotation direction

    // Cone
    const {scrollYProgress: coneScrollYProgress} = useScroll({
        target: coneRef, 
        offset: ['start end', 'end start'],
    });
    const coneTranslateY = useTransform(coneScrollYProgress, [0, 1], [-100, 100]); // the speed
    const coneRotate = useTransform(coneScrollYProgress, [0, 1], [12, 45]); // the rotation direction

    // SecondHemisphere
    const {scrollYProgress: secondHemisphereScrollYProgress} = useScroll({
        target: secondHemisphereRef, 
        offset: ['start end', 'end start'],
    });
    const secondHemisphereTranslateY = useTransform(secondHemisphereScrollYProgress, [0, 1], [50, -50]); // the speed
    const secondHemisphereRotate = useTransform(secondHemisphereScrollYProgress, [0, 1], [-20, 10]); // the rotation direction


    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
                    {/* LEFT SIDE CONTENT */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-2">
                            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                                 33% referral fee, 3x the commission of Stake
                            </h2>
                            <p className="text-xl lg:text-2xl text-zinc-400 mt-8">
                                 Metavegas.live offers the highest commission payouts in the world, ensuring that our tribe eats by referring players to decentralized games.
                            </p>
                            <ul className="flex flex-col gap-8 mt-12">
                                {listItems.map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full ">
                                            <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                                        </div>
                                        <span className="text-xl font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex gap-8 mt-12 items-center justify-center lg:justify-start lg:pr-2">
                                 <a href="https://play.metavegas.live" target="_blank" rel="noopener noreferrer">
                                 <CutCornerButton>PLAY</CutCornerButton>
                                 </a> {/* Closing tag added here */}
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="relative inline-flex z-0">
                                <motion.img 
                                    className="size-96 max-w-none" 
                                    src="/assets/images/torus-knot.png" 
                                    alt="Torus Knot image" 
                                    ref={torusRef} 
                                    style={{
                                        translateY: torusKnotTranslateY,
                                        rotate: torusKnotRotate,
                                    }}
                                />
                                <motion.img 
                                    className="absolute size-96 top-3/4 -z-10 scale-x-[-1]" 
                                    src="/assets/images/hemisphere.png" 
                                    alt="Hemisphere image" 
                                    ref={firstHemisphereRef} 
                                    style={{
                                        translateY: firstHemisphereTranslateY,
                                        rotate: firstHemisphereRotate,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {/* RIGHT SIDE CONTENT */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="relative hidden md:block">
                            <div className="absolute right-0 z-0">
                                <motion.img 
                                    className="size-96 max-w-none rotate-12" 
                                    src="/assets/images/cone.png" 
                                    alt="Cone image" 
                                    ref={coneRef} 
                                    style={{
                                        translateY: coneTranslateY,
                                        rotate: coneRotate,
                                    }}
                                />
                                <motion.img 
                                    className="absolute top-3/4 left-0 -z-10" 
                                    src="/assets/images/hemisphere.png" 
                                    alt="Hemisphere image" 
                                    ref={secondHemisphereRef} 
                                    style={{
                                        translateY: secondHemisphereTranslateY,
                                        rotate: secondHemisphereRotate,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                                Instant payouts with no middleman
                            </h2>
                            <div className="flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 gap-6">
                                <p>
                                     Start with $1000 in fake money to warm up with then use $SOL to win instantly to your Solana wallet without a middleman. Play live and tag @mvegaslive on X, Instaram socials or in our Telegram to win some more.
                                </p>
                                <p>
                                     We turn the best Metavegas.live playa content to digital assets airdropped to your wallet so that you can sell it in our tribe. 
                                </p>
                            </div>
                            <div className="flex gap-8 mt-12 items-center justify-center lg:justify-start lg:pr-2">
                            <a href="https://play.metavegas.live" target="_blank" rel="noopener noreferrer">
                            <CutCornerButton>PLAY</CutCornerButton>
                            </a> {/* Closing tag added here */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

