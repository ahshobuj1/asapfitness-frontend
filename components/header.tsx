"use client";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import Link from "next/link";

export const navLinks = [
	{
		label: "Home",
		href: "#",
	},

	{
		label: "Programs",
		href: "#",
	},
	{
		label: "Shop",
		href: "#",
	},
	{
		label: "Pricing",
		href: "#",
	},
];

export function Header() {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 mx-auto w-full max-w-7xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out py-4",
				{
					"border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-6xl md:shadow":
						scrolled,
				}
			)}
		>
			<nav
				className={cn(
					"flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out",
					{
						"md:px-2": scrolled,
					}
				)}
			>
				<Link
					className="rounded-md p-2 hover:bg-muted"
					href="/"
				>
					<Logo className="h-4" />
				</Link>

				<div className="hidden flex-1 items-center justify-center md:flex">
					{navLinks.map((link) => (
						<Button asChild key={link.label} size="sm" variant="ghost" className="text-lg">
							<Link href={link.href} className="text-lg font-medium transition-colors hover:text-primary">{link.label}</Link>
						</Button>
					))}
				</div>

				<div className="flex items-center gap-2">
					<div className="hidden items-center gap-2 md:flex">
						<Button size="sm" variant="outline">
							Sign In
						</Button>
						<Button size="sm">Get Started</Button>
					</div>
					<MobileNav />
				</div>
			</nav>
		</header>
	);
}
