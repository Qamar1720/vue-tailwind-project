<template>
    <div class="bg-[#1A0B2E] text-white px-8 py-12 font-oswald w-full">
        <div class="flex flex-col lg:flex-row lg:justify-between max-w-[1440px] w-full mx-auto">
            <!-- Left Section -->
            <div class="flex flex-col gap-6 max-w-sm">
                <img src="../assets/pics/logo.png" alt="Logo" class="w-54">
                <p class="text-gray-300 text-lg font-oswald overflow-hidden">
                    Discover and explore an immersive world of new maps, talented creators, and exhilarating experiences tailored for Fortnite players on this innovative platform.
                </p>
                <div class="relative w-full">
                    <input type="email" placeholder="Email address"
                        class="w-full p-3 bg-transparent border border-gray-500 rounded-md placeholder-gray-400">
                    <span class="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500 text-4xl font-bold">→</span>
                </div>
            </div>

            <!-- Center Sections -->
            <div class="flex md:flex-row flex-col gap-18 mt-6 lg:mt-0 max-w-[1440px] w-full">
                <div class="flex flex-col gap-4">
                    <h2 class="text-lg font-semibold mb-4">EXPLORE</h2>
                    <ul class="space-y-2 list-disc list-inside">
                        <li class="text-gray-400 hover:text-red-500">About</li>
                        <li class="text-gray-400 hover:text-red-500">Discover Live</li>
                        <li class="text-gray-400 hover:text-red-500">Categories</li>
                        <li class="text-gray-400 hover:text-red-500">Consulting</li>
                        <li class="text-gray-400 hover:text-red-500">Contact</li>
                    </ul>
                </div>
                <div class="flex flex-col gap-4">
                    <h2 class="text-lg font-semibold mb-4">RESOURCES</h2>
                    <ul class="space-y-2 list-disc list-inside">
                        <li class="text-gray-400 hover:text-red-500">News & Updates</li>
                        <li class="text-gray-400 hover:text-red-500">Top Studios</li>
                        <li class="text-gray-400 hover:text-red-500">Top Developers</li>
                        <li class="text-gray-400 hover:text-red-500">Event Calendars</li>
                        <li class="text-gray-400 hover:text-red-500">Skin Databases</li>
                    </ul>
                </div>
            </div>

            <!-- Right Section -->
            <div class="mt-8 lg:mt-0 flex flex-col gap-7 max-w-[1440px] w-full">
                <div>
                    <p class="text-gray-400 mb-2">Phone </p>
                    <p class="font-bold">+1 234 5678 910</p>
                </div>
                <div>
                    <p class="text-gray-400 mb-2">Address </p>
                    <p class="font-bold">USA</p>
                </div>
                <div>
                    <p class="text-gray-400">Email Address</p>
                    <p class="">NEEDHELP@FORTNITEDATA.COM</p>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="relative mt-12 pt-6 text-center text-gray-400 flex md:flex-row flex-col gap-4 md:gap-0 justify-around bg-[#1A0B2E]">
            <div class="flex gap-6 justify-center items-center text-2xl text-white cursor-pointer">
                <div class="border-2 rounded-full p-2 border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_0px]">
                    <i class="fa fa-twitter"></i>
                </div>
                <div class="border-2 rounded-full p-2 border-[#3E344B] hover:text-[#DF3F2A] shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]">
                    <i class="fa fa-facebook"></i>
                </div>
                <div class="border-2 rounded-full p-2 border-[#3E344B] hover:text-[#DF3F2A] shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]">
                    <i class="fa fa-pinterest"></i>
                </div>
                <div class="border-2 rounded-full p-2 border-[#3E344B] hover:text-[#DF3F2A] shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]">
                    <i class="fa fa-instagram"></i>
                </div>
            </div>
            <div>
                &copy; Copyrights, 2023 Fortnitedata.com
            </div>
        </div>
    </div>
</template>
