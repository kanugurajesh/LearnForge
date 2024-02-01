"use client";

import Image from "next/image";
import styles from "@/styles/career.module.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Career() {
  const [selectedCareer, setSelectedCareer] = useState(
    "Please select a career"
  );
  const [careerDescription, setCareerDescription] = useState("");

  const router = useRouter();

  const handleClick = (e: any) => {
    const customValue = e.target.getAttribute("alt") as string;

    toast.success(`You selected ${customValue}`);

    const readFile = async (name: string) => {
      const markdown = await import(`@/data/${name}.d.ts`);
      const data = markdown.data;
      setCareerDescription(data[customValue]);
      return markdown.data;
    };

    readFile("career");

    setSelectedCareer(customValue);

    // remove all selected classes
    const images = document.querySelectorAll("img");

    images.forEach((image) => {
      image.classList.remove(`${styles.imageSelected}`);
    });

    // add selected class to clicked image
    e.target.classList.add(`${styles.imageSelected}`);
  };

  const handleGetGuidance = () => {
    if (!selectedCareer || selectedCareer === "Please select a career") {
      toast.error("Please select a career");
      return;
    }
    router.push(`/Guide-Eval/GetGuidance/${selectedCareer}`);
  };

  const handleEvaluate = () => {
    if (!selectedCareer || selectedCareer === "Please select a career") {
      toast.error("Please select a career");
      return;
    }
    router.push(`/Courses/${selectedCareer}`);
  };

  return (
    <main className={`p-10 flex mt-10 ${styles.career} w-full`}>
      <Toaster />
      <div className={`${styles.imageContainer}`}>
        <Image
          src="/icons/html5.svg"
          alt="html5"
          width={80}
          height={80}
          onClick={handleClick}
        />
        <Image
          src="/icons/css3.svg"
          alt="css3"
          width={80}
          height={80}
          onClick={handleClick}
        />
        <Image
          src="/icons/javascript.svg"
          alt="javascript"
          width={80}
          height={80}
          onClick={handleClick}
        />
        <Image
          src="/icons/typescript.svg"
          alt="typescript"
          width={80}
          height={80}
          onClick={handleClick}
        />
        <Image
          src="/icons/mongodb.svg"
          alt="mongodb"
          width={80}
          height={80}
          onClick={handleClick}
        />
        <Image
          src="/icons/reactjs.svg"
          alt="reactjs"
          width={80}
          height={80}
          onClick={handleClick}
        />
        <Image
          src="/icons/express.svg"
          alt="express"
          width={80}
          height={80}
          onClick={handleClick}
        />
        <Image
          src="/icons/tailwindcss.svg"
          alt="tailwindcss"
          width={80}
          height={80}
          onClick={handleClick}
        />
        <Image
          src="/icons/nextjs.svg"
          alt="nextjs"
          width={80}
          height={80}
          onClick={handleClick}
        />
        <Image
          src="/icons/azure.svg"
          alt="azure"
          width={80}
          height={80}
          onClick={handleClick}
        />
        <Image
          src="/icons/devops.svg"
          alt="devops"
          width={80}
          height={80}
          onClick={handleClick}
        />
        <Image
          src="/icons/github.svg"
          alt="github"
          width={80}
          height={80}
          onClick={handleClick}
        />
        <Image
          src="/icons/git.svg"
          alt="git"
          width={80}
          height={80}
          onClick={handleClick}
        />
        <Image
          src="/icons/docker.svg"
          alt="docker"
          width={80}
          height={80}
          onClick={handleClick}
        />
        <Image
          src="/icons/graphql.svg"
          alt="graphql"
          width={80}
          height={80}
          onClick={handleClick}
        />
        <Image
          src="/icons/kubernetes.svg"
          alt="kubernetes"
          width={80}
          height={80}
          onClick={handleClick}
        />
      </div>
      <div className={`${styles.imageContent}`}>
        <h1 className={`${styles.h1}`}>{selectedCareer}</h1>
        <p className={`${styles.p}`}>{careerDescription}</p>
        <div className="mt-5 flex flex-col gap-3">
          <Button onClick={handleGetGuidance} className={cn("w-[200px]")}>
            Get guidance
          </Button>
          <Button onClick={handleEvaluate} className={cn("w-[200px]")}>
            Evaluate
          </Button>
        </div>
      </div>
    </main>
  );
}
