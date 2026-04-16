"use cache";
import { cacheLife } from 'next/cache'
import Header from "@/components/header/Header";
import Image from "next/image";
import FriendCard from '@/components/main/home/FriendCard';
import friends from "@/static/friends.json";


export default async function Home() {
  cacheLife("hours");
  console.log(friends);

  return (
    <>
      <Header></Header>
      <p className='ml-2 text-2xl font-bold'>Friends</p>
      <div>
        {friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)}
      </div>
    </>
  );
}
