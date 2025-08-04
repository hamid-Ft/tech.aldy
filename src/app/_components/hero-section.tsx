'use client';

import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useEffect, useRef, useState } from 'react';

const HeroSection: React.FC = () => {
	const [lastScrollY, setLastScrollY] = useState(0);
	gsap.registerPlugin(MotionPathPlugin);
	const main1Ref = useRef<SVGSVGElement>(null);

	useEffect(() => {
		const currentMain1Ref = main1Ref.current;
		if (!currentMain1Ref) return;

		gsap.set(currentMain1Ref, { opacity: 1 });

		const tl = gsap.timeline({ defaults: { duration: 45 } });

		tl.from('.main1', { duration: 1, autoAlpha: 0, ease: 'power1.inOut' }, 0)
			.fromTo('.m1_cGroup', { opacity: 0 }, { duration: 0.3, opacity: 1, stagger: 0.1 }, 0)
			.from(
				'.m1_cGroup',
				{
					duration: 2.5,
					scale: 1,
					transformOrigin: '50% 50%',
					stagger: 0.05,
					ease: 'elastic',
				},
				0
			)
			.fromTo('.m1Bg', { opacity: 0 }, { duration: 1, opacity: 1, ease: 'power2.inOut' }, 0.2)

			.add('orbs', 1.2)

			.fromTo(
				'.orb1',
				{ xPercent: -35, yPercent: -5 },
				{
					motionPath: {
						path: MotionPathPlugin.convertToPath('.c1_line1', false)[0],
						start: 1.03,
						end: 1.22,
					},
					ease: 'none',
					yoyo: true,
					repeat: -1,
				},
				'orbs'
			)

			.fromTo(
				'.orb2',
				{ xPercent: -45, yPercent: -10 },
				{
					motionPath: {
						path: MotionPathPlugin.convertToPath('.c1_line2', false)[0],
						start: 0.98,
						end: 1.2,
					},
					ease: 'none',
					yoyo: true,
					repeat: -1,
				},
				'orbs'
			)

			.fromTo(
				'.orb3',
				{ xPercent: -50, yPercent: -15 },
				{
					motionPath: {
						path: MotionPathPlugin.convertToPath('.c1_line3', false)[0],
						start: 1.06,
						end: 1.31,
					},
					ease: 'none',
					yoyo: true,
					repeat: -1,
				},
				'orbs'
			)

			.fromTo(
				'.orb3b',
				{ xPercent: -50, yPercent: -25 },
				{
					motionPath: {
						path: MotionPathPlugin.convertToPath('.c1_line3', false)[0],
						start: 1.49,
						end: 1.65,
					},
					ease: 'none',
					yoyo: true,
					repeat: -1,
				},
				'orbs'
			)

			.fromTo(
				'.orb3c',
				{ xPercent: -45, yPercent: -15 },
				{
					motionPath: {
						path: MotionPathPlugin.convertToPath('.c1_line3', false)[0],
						start: 0.95,
						end: 1.2,
					},
					ease: 'none',
					yoyo: true,
					repeat: -1,
				},
				'orbs'
			)

			.fromTo(
				'.orb4',
				{ xPercent: -50, yPercent: -25 },
				{
					motionPath: {
						path: MotionPathPlugin.convertToPath('.c1_line4', false)[0],
						start: 1.14,
						end: 1.26,
					},
					ease: 'none',
					yoyo: true,
					repeat: -1,
				},
				'orbs'
			)

			.fromTo(
				'.orb4b',
				{ xPercent: -50, yPercent: -25 },
				{
					motionPath: {
						path: MotionPathPlugin.convertToPath('.c1_line4', false)[0],
						start: 1.41,
						end: 1.6,
					},
					ease: 'none',
					yoyo: true,
					repeat: -1,
				},
				'orbs'
			)

			.fromTo(
				'.m1Orb',
				{ scale: 0, transformOrigin: '50% 50%' },
				{
					duration: 0.8,
					scale: 1.5,
					ease: 'back.out(3)',
					stagger: 0.15,
					overwrite: 'auto',
				},
				'orbs'
			)
			.fromTo(
				'.m1OrbBlank',
				{ opacity: 0 },
				{
					duration: 0.8,
					opacity: function (i: number) {
						return 0.2 + i / 7;
					},
					stagger: 0.1,
					overwrite: 'auto',
				},
				'orbs'
			)
			.fromTo(
				'.m1OrbBlank',
				{
					x: function (i: number) {
						return 620 - (i / 4) * 380;
					},
					transformOrigin: function (i) {
						return -(620 - (i / 4) * 380) + 'px 0px';
					},
					rotation: function (i) {
						return [99, -10, 55, 110, 120][i];
					},
				},
				{
					rotation: function (i: number, target: Element) {
						return +gsap.getProperty(target, 'rotation') + 75;
					},
					yoyo: true,
					repeat: -1,
				},
				'orbs'
			);

		const handleMouseMove = (e: MouseEvent) => {
			const m1_cGroups = currentMain1Ref.querySelectorAll('.m1_cGroup');
			const c1_solids_lines = currentMain1Ref.querySelectorAll('.c1_solid, .c1_line');
			const m1OrbBlanks = currentMain1Ref.querySelectorAll('.m1OrbBlank');

			m1_cGroups.forEach((group, i) => {
				gsap.to(group, {
					duration: 1,
					x: (e.clientX / window.innerWidth / (i + 1)) * 150,
					y: i * -20 * (e.clientY / window.innerHeight),
					rotation: Math.random() * 0.1,
					overwrite: 'auto',
				});
			});

			c1_solids_lines.forEach((element) => {
				gsap.to(element, {
					duration: 1,
					attr: { opacity: 1.1 - 0.75 * (e.clientY / window.innerHeight) },
				});
			});

			m1OrbBlanks.forEach((orb) => {
				gsap.to(orb, {
					duration: 1,
					opacity: 0.2 + 0.55 * (e.clientY / window.innerHeight),
				});
			});
		};

		const handleClick = () => {
			const m1_cGroups = currentMain1Ref.querySelectorAll('.m1_cGroup');
			m1_cGroups.forEach((group, i) => {
				if (gsap.getProperty(group, 'scale') !== 1) return;
				gsap.fromTo(
					group,
					{ transformOrigin: '50% 50%', scale: 1 },
					{
						duration: 0.7 - i / 25,
						scale: 0.9,
						ease: 'back.in(10)',
						yoyo: true,
						repeat: 1,
					}
				);
			});
		};

		let lastScrollTop = 0;

		const firstScroll = () => {
			const st = window.scrollY || document.documentElement.scrollTop;
			if (st > lastScrollTop) {
				lastScrollTop = st <= 0 ? 0 : st;
				return;
			}
			if (st < lastScrollTop && st === 0) {
				handleClick();
			}
			lastScrollTop = st;
		};

		const handleScroll = () => {
			const scrollHeight = window.innerHeight;
			if (window.scrollY > scrollHeight - 100) {
				document.body.classList.add('show-after');
			} else {
				document.body.classList.remove('show-after');
			}
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('scroll', firstScroll);

		currentMain1Ref.addEventListener('mousemove', handleMouseMove);
		currentMain1Ref.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('scroll', firstScroll);
			tl.kill();
			if (currentMain1Ref) {
				currentMain1Ref.removeEventListener('mousemove', handleMouseMove);
				currentMain1Ref.removeEventListener('click', handleClick);
			}
		};
	}, []);

	return (
		<>
			<div className="absolute top-0 right-0 left-0 w-screen !h-[100vh] z-30 pointer-events-none overflow-hidden">
				<svg
					ref={main1Ref}
					className="main1 z-10 pointer-events-auto"
					width="100%"
					height="100%"
					viewBox="0 0 1 1200">
					<defs>
						<linearGradient id="grad1" x1="50%" y1="0%" x2="50%" y2="100%">
							<stop offset="10%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.9 }} />
							<stop offset="99%" style={{ stopColor: 'var(--secondary)', stopOpacity: 0.1 }} />
						</linearGradient>
						<linearGradient id="gradbg" x1="50%" y1="0%" x2="50%" y2="100%">
							<stop offset="0%" style={{ stopColor: '#aeaeae', stopOpacity: 0.01 }} />
							<stop offset="10%" style={{ stopColor: '#aeaeae', stopOpacity: 0.02 }} />
							<stop offset="20%" style={{ stopColor: '#aeaeae', stopOpacity: 0.03 }} />
							<stop offset="30%" style={{ stopColor: '#aeaeae', stopOpacity: 0.04 }} />
							<stop offset="40%" style={{ stopColor: '#aeaeae', stopOpacity: 0.05 }} />
							<stop offset="50%" style={{ stopColor: '#aeaeae', stopOpacity: 0.06 }} />
							<stop offset="60%" style={{ stopColor: '#aeaeae', stopOpacity: 0.07 }} />
							<stop offset="70%" style={{ stopColor: '#aeaeae', stopOpacity: 0.08 }} />
							<stop offset="80%" style={{ stopColor: '#aeaeae', stopOpacity: 0.09 }} />
							<stop offset="90%" style={{ stopColor: '#aeaeae', stopOpacity: 0.1 }} />
							<stop offset="100%" style={{ stopColor: '#121212', stopOpacity: 0.2 }} />
						</linearGradient>
						<radialGradient id="grad3" cx="-50%" cy="100%" r="110%" fx="20%" fy="0%">
							<stop offset="0%" style={{ stopColor: 'var(--secondary) ' }} />
							<stop offset="70%" style={{ stopColor: 'hsla(0, 0%, 0%, 0)' }} />
						</radialGradient>
					</defs>

					<rect className="m1Bg" fill="url(#grad2)" width="100%" height="100%" />

					<g className="m1_stage ">
						<g className="m1_cGroup">
							<circle className="m1OrbBlank" cx="0" cy="50" r="50" fill="var(--primary)" />

							<circle
								className="c1_line c1_line4"
								cx="0"
								cy="50"
								r="550"
								fill="none"
								strokeWidth="2"
								stroke="url(#grad1)"
								opacity="0.4"
							/>
							<g className="m1Orb orb4b">
								<image xlinkHref="/images/aldy-pay-logo-mini.png" width="60" height="60" />
							</g>

							<g className="m1Orb orb4">
								<circle cx="15" cy="10.5" r="20" fill="none" />
								<image xlinkHref="/images/aldy-pay-logo.png" x="-5" y="-1" width="60" height="60" />
							</g>
						</g>
						<g className="m1_cGroup">
							<circle className="m1OrbBlank" cx="0" cy="50" r="25" fill="var(--primary)" />

							<circle
								className="c1_line c1_line3"
								cx="0"
								cy="50"
								r="450"
								fill="none"
								strokeWidth="2"
								stroke="url(#grad1)"
								opacity="0.4"
							/>

							<g className="m1Orb orb3c">
								<image xlinkHref="/images/AldyPay-logo.png" width="40" height="40" />
							</g>
							<g className="m1Orb orb3b">
								<image xlinkHref="/images/daily-market-logo.png" width="60" height="60" />
							</g>
							<g className="m1Orb orb3">
								<image
									xlinkHref="/images/WhaleMarket-Logo.png"
									x="-10"
									y="-18"
									width="100"
									height="100"
								/>{' '}
							</g>
						</g>
						<g className="m1_cGroup">
							<circle className="m1OrbBlank" cx="0" cy="50" r="15" fill="var(--primary)" />

							<circle
								className="c1_line c1_line2"
								cx="0"
								cy="50"
								r="360"
								fill="none"
								strokeWidth="2"
								stroke="url(#grad1)"
								opacity="0.5"
							/>

							{/* <g className="m1Orb orb2">
								<circle cx="18.5" cy="7" r="25" fill="#000" />
								<circle cx="18.5" cy="7" r="29" fill="none" stroke="#000" strokeWidth="2" />
								<image
									xlinkHref="/images/WhaleMarket-Logo.png"
									x="-1.5"
									y="-13"
									width="40"
									height="40"
									className="!-z-50"
								/>
							</g> */}
						</g>
						<g className="m1_cGroup">
							<circle className="m1OrbBlank" cx="0" cy="50" r="20" fill="var(--primary)" />
							<circle className="m1OrbBlank" cx="0" cy="50" r="40" fill="var(--primary)" />

							<circle className="c1_solid" cx="0" cy="50" r="280" fill="url(#grad1)" opacity="0.2" />
							<circle
								className="c1_line c1_line1"
								cx="0"
								cy="50"
								r="279"
								fill="none"
								strokeWidth="3"
								stroke="url(#grad1)"
								opacity="0.5"
							/>
							<g className="m1Orb orb1">
								{/* <circle cx="12.5" cy="7" r="18" fill="var(--primary)" /> */}
								{/* <circle cx="12.5" cy="7" r="16" fill="none" stroke="var(--secondary)" strokeWidth={1} /> */}

								<image
									xlinkHref="/images/daily-market-logo.png"
									x="-15"
									y="-20.5"
									width="55"
									height="55"
								/>
							</g>
						</g>

						<g className="m1_cGroup">
							<circle className="c1_solid" cx="0" cy="50" r="220" fill="url(#grad1)" opacity="0.4" />
						</g>
						<g className="m1_cGroup">
							<circle className="c1_solid" cx="0" cy="50" r="150" fill="url(#grad1)" opacity="0.5" />
						</g>
						<g className="m1_cGroup">
							<circle
								className="c1_solid"
								cx="0"
								cy="50"
								r="80"
								fill="var(--secondary)"
								stroke="transparent"
								strokeWidth={10}
								opacity="0.6"
							/>
							<image xlinkHref="/svg/aldy-trademark.svg" x="-60" y="-12.5" width="120" height="120" />
						</g>
					</g>
				</svg>
			</div>
		</>
	);
};
export default HeroSection;
