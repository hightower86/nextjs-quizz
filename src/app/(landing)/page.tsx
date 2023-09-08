'use client';
import { FC, useEffect, useState } from 'react';
import { UserButton } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
import LandingScreen from '@/components/LandingScreen';
import { Loader, Loader2 } from 'lucide-react';

const LandingPage = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    const [count, setCount] = useState<number>(
        (typeof window !== 'undefined' &&
            parseInt(localStorage.getItem('loginCount') || '')) ||
            0
    );

    useEffect(() => {
        if (isSignedIn) {
            setCount((prev) => prev + 1);
        }
    }, [isSignedIn]);

    useEffect(() => {
        localStorage.setItem('loginCount', count.toString());
    }, [count]);

    if (!isLoaded) {
        return (
            <div className="h-full w-full flex justify-center items-center">
                <Loader className="animate-spin" />
            </div>
        );
    }

    if (!isSignedIn || !user) {
        return null;
    }

    return (
        <div className="w-full md:w-[540px] mx-auto bg-slate-300 h-full flex flex-col justify-evenly items-center px-2 relative">
            <h1 className="text-5xl">Hello World</h1>
            <UserButton afterSignOutUrl="/" />
            {count === 1 && <LandingScreen count={count} />}
        </div>
    );
};

export default LandingPage;
