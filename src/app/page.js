"use cache";
import { cacheLife } from 'next/cache'
import Header from "@/components/header/Header";
import Friends from '@/components/main/home/Friends';


export default async function Home() {
  cacheLife("hours");

  return (
    <>
      <Header></Header>
      <Friends></Friends>
    </>
  );
}
