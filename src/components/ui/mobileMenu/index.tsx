import React from 'react'

import { HomeIcon, UserCircleIcon, SearchCircleIcon } from "@heroicons/react/outline";

export default function MobileMenu() {
    return (
        <section id="bottom-navigation" className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-black shadow">
            <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-black shadow">
                <div id="tabs" className="flex justify-between">
                    <a href="#" className="w-full justify-center inline-block text-center pt-2 pb-1">
                        <HomeIcon />
                        <span className="tab tab-home block text-xs">Home</span>
                    </a>
                    <a href="#" className="w-full justify-center inline-block text-center pt-2 pb-1">
                        <SearchCircleIcon />
                        <span className="tab tab-kategori block text-xs">Category</span>
                    </a>
                    <a className="w-full justify-center inline-block text-center pt-2 pb-1">
                        <UserCircleIcon />
                        <span className="tab tab-account block text-xs">Account</span>
                    </a>
                </div>
            </section>
        </section>
    );
};