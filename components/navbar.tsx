'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavbarDrawer from './navbar-drawer';
import AnchorNav from './anchor-nav';
import { navItems } from '@/constants';
import { Themetoggle } from './ThemeToggle';
import UserAccountNav from './UserAccountNav';
import SignInButton from './SignInButton';
import { useSession } from 'next-auth/react';

const Navbar = () => {

  const { data: session } = useSession();

  return (
    <nav className="z-50 sticky top-0 w-full bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border-b border-primary/10 px-4 lg:px-8
">
      <div className="max-w-[88rem] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className='flex items-center space-x-12'>
            <Link href="/" className="flex items-center space-x-1">
              <Image src="/logo.png" width={30} height={30} priority={false} alt="Logo" unoptimized={true} className="rounded-xl" />
              <span className="text-2xl font-bold">test</span>
            </Link>

            <div
              className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <AnchorNav
                  key={item.name + item.href}
                  activeClassName="text-black dark:text-white font-semibold"
                  absolute
                  href={item.href}
                >
                  {item.name}
                </AnchorNav>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link href="https://twitter.com/AmanShakya0018" target="_blank">
              <p className="text-sm font-medium text-zinc-400 hover:text-foreground/80 relative">Twitter</p>
            </Link>
            <Link href="https://www.linkedin.com/in/amanshakya0018/" target="_blank">
              <p className="text-sm font-medium text-zinc-400 hover:text-foreground/80 relative">LinkedIn</p>
            </Link>
            <Themetoggle />
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInButton text={"Sign In"} />
            )}
          </div>
          <div className="lg:hidden flex items-center space-x-1">
            <Themetoggle />
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInButton text={"Sign In"} />
            )}
            <NavbarDrawer />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;