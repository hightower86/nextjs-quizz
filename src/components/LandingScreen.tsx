import { Dispatch, FC, SetStateAction, useState } from 'react';
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
                'px-5 py-4 absolute h-full w-full z-150 flex flex-col justify-between items-center ',
                `bg-adel-${screenNumber.toString()}`
            )}
        >
            <Image src={img[screenNumber - 1]} alt="screen picture" />
            <h2 className="text-4xl font-bold  text-slate-700">
                {titles[screenNumber - 1]}
            </h2>
            <p className=" text-slate-800">{describtions[screenNumber - 1]}</p>
            <Button
                variant="outline"
                size="lg"
                onClick={onCkipClick}
                className="bg-transparent border-black border-2 text-lg"
            >
                Skip
            </Button>
        </div>
    );
};

export default LandingScreen;
