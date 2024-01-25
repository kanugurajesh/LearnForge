"use client";

import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Root.module.css'
import { Typewriter } from 'react-simple-typewriter'
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
    return (
        <main className="px-10 flex justify-around items-center">
            <Toaster />
            <div className="flex flex-col gap-6">
                <h1 className="font-black text-6xl">
                    <span style={{ color: 'black', fontWeight: 'bold'}}>
                        <Typewriter
                            words={['What is Mentify', 'AI Mental Support']}
                            loop={1000}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <p className="text-xl">Mentify is a platform for mental health awareness and support.</p>
                <Link href="/Guide-Eval" className={`font-bold text-xl max-w-max py-3 px-10 rounded-sm transition-all ease-in-out duration-400 ${styles.button} relative`} onClick={() => toast.success("Get started by choosing a picture in the left side and then select a option on right side")}>
                    <p className={styles.p}>Get Started</p>
                </Link>
            </div>
            <div>
                <Image src="/neurology.png" alt="Swap ai" width={400} height={400} />
            </div>
        </main>
    );
}