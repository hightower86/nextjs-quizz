import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface LandingScreenProps {
    count: number;
}

const titles = ['First Screen', 'Second Screen', 'Third Screen'];
const colors = ['bg-blue-600', 'bg-green-700', 'bg-orange-700'];

const LandingScreen: FC<LandingScreenProps> = ({ count }) => {
    const [screenNumber, setScreenNumber] = useState(count);

    if (screenNumber > 3) return null;

    return (
        <div
            className={cn(
                'absolute h-full w-full z-50  flex flex-col justify-evenly items-center',
                colors[screenNumber - 1]
            )}
        >
            <h1 className="text-6xl text-white">Fird Screen</h1>
            <Button
                variant="outline"
                size="lg"
                onClick={() => setScreenNumber((prev) => prev + 1)}
            >
                {titles[screenNumber - 1]}
            </Button>
        </div>
    );
};

export default LandingScreen;
