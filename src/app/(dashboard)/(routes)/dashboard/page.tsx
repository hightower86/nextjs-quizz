import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function DashboardPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <h1 className="text-7xl">Main Page</h1>
            </div>
            <Button variant="outline" size="lg">
                Click
            </Button>
        </main>
    );
}
