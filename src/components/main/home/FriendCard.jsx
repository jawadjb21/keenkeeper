import Image from 'next/image';
import React from 'react';

const FriendCard = ({ friend }) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Image src={friend.picture} alt='Image of the friend' width={300} height={300}></Image>
            <p>{friend.days_since_contact}d ago</p>
        </div>
    );
};

export default FriendCard;