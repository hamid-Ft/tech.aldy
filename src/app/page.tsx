'use client';
import { Status, StatusIndicator, StatusLabel } from './_components/ui/status';
import LightRays from './_components/lightray';
import MultiButton from '@/components/ui/multi-button';
import { Facebook, Link, Linkedin, Twitter } from 'lucide-react';
import AnimatedOrbitalSystem from '@/components/hero-section';
import HeroSection from './_components/hero-section';

export default function Home() {
	const navLinks = [
		{
			icon: Twitter,
			onClick: () => window.open('https://twitter.com/share'),
			label: 'Share on Twitter',
		},
		{
			icon: Facebook,
			onClick: () => window.open('https://facebook.com/share'),
			label: 'Share on Facebook',
		},
		{
			icon: Linkedin,
			onClick: () => window.open('https://linkedin.com/share'),
			label: 'Share on LinkedIn',
		},
		{
			icon: Link,
			onClick: () => navigator.clipboard.writeText(window.location.href),
			label: 'Copy link',
		},
	];

	return (
		<main className="w-full h-full bg-background text-background relative">
			{/* <LightRays
				raysOrigin="top-left"
				raysColor="#ffffff"
				raysSpeed={1.5}
				lightSpread={2.8}
				rayLength={3}
				followMouse={true}
				mouseInfluence={0.1}
				noiseAmount={0.2}
				distortion={0.05}
			/> */}
			<div
			// className="flex gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			>
				<HeroSection />
				<section className='w-screen h-[50rem] flex flex-col items-center justify-end'>
					<h1 className="text-5xl font-bold text-primary user-select-none">سرویس‌های آلدی</h1>
				</section>

				{/* <Status status="online">
					<StatusIndicator />
					<StatusLabel />
				</Status>
				<Status status="offline">
					<StatusIndicator />
					<StatusLabel />
				</Status>
				<Status status="maintenance">
					<StatusIndicator />
					<StatusLabel />
				</Status>
				<Status status="degraded">
					<StatusIndicator />
					<StatusLabel />
				</Status>
				<MultiButton links={navLinks}>
					<Link size={15} />
					Aldy
				</MultiButton> */}
			</div>

			{/* <InfiniteMenu items={items} /> */}
			{/* <Loading />
			 */}
		</main>
	);
}
