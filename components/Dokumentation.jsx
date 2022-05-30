import React from 'react';
import { users } from '../data';
import Image from 'next/image';
import Circle from './Circle';

const Dokumentation = () => {
  return (
    <div className="">
      <div>
        <p className=" border-b-4 inline-block border-green-400 font-bold text-3xl mb-10 ml-4 md:ml-20 mt-10 md:mt-20 ">
          TESTIMONIAL
        </p>
      </div>
      <div className="block md:flex mb-10 ml-4 md:ml-20">
        {users.map((user) => (
          <div key={user.id} className="">
            <div className="w-10 ">
              <Image
                src={`/images/${user.logo}`}
                alt="image"
                width="30"
                height="30"
                objectFit="cover"
                layout="responsive"
              />
            </div>
            <div className="p-4 text-justify italic">{user.comment}</div>
            <div className="flex mb-10 space-x-4">
              <div>
                <Image
                  src={`/images/${user.avatar}`}
                  alt=""
                  width="45"
                  height="45"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-bold">{user.name}</p>
                <p>{user.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dokumentation;
