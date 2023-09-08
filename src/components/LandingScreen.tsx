'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import scr1 from '../../public/screen_1.png';
import scr2 from '../../public/screen_2.png';
import scr3 from '../../public/screen_3.png';

const titles = [
    '1. This is the first step of our app',
    '2. This is the second step of our app',
    '3. This is the third step of our app',
];
const describtions = [
    '1lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    '2lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    '3lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
];
const img = [scr1, scr2, scr3];

const LandingScreen = () => {
    const [screenNumber, setScreenNumber] = useState(1);

    if (screenNumber > 3) return null;

    const onCkipClick = () => {
        setScreenNumber((prev) => prev + 1);
    };

    console.log({ screenNumber });
    return (
        <div
            className={cn(
                'px-5 py-4 absolute h-full w-full z-150 flex flex-col justify-between items-center',
                {
                    'bg-adel-1': screenNumber === 1,
                    'bg-adel-2': screenNumber === 2,
                    'bg-adel-3': screenNumber === 3,
                }
            )}
        >
            <Image src={img[screenNumber - 1]} alt="screen picture" />
            <h2 className="text-4xl font-bold  text-slate-700">
                {titles[screenNumber - 1]}
            </h2>
            <p className=" text-slate-800">{describtions[screenNumber - 1]}</p>
            <div>
                <div className="flex justify-center items-center gap-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <span
                            key={i}
                            className={cn('h-2 w-2 rounded-full bg-slate-500', {
                                'bg-black': screenNumber === i + 1,
                            })}
                        ></span>
                    ))}
                </div>
                <Button
                    variant="outline"
                    size="lg"
                    onClick={onCkipClick}
                    className="my-8 bg-transparent border-black border-2 text-lg active:bg-transparent focus:bg-transparent"
                >
                    Skip
                </Button>
            </div>
        </div>
    );
};

export default LandingScreen;
