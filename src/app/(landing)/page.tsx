import { FC } from 'react';
import { UserButton } from '@clerk/nextjs';
interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = ({}) => {
    return (
        <div className="flex justify-between gap-4 px-8 py-4">
            <h1 className="text-7xl">LandingPage</h1>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
};

export default LandingPage;
