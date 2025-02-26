<template>
    <div class="bg-[#1A0B2E] text-white px-8 py-12">
        <div class="flex flex-col  sm:justify-center lg:flex-row lg:justify-evenly ">
            <!-- Left Section -->
            <div class="flex flex-col gap-6 max-w-sm sm:self-center">
                <img src="../assets/pics/logo.png" alt="Logo" class="w-54">
                <p class="text-gray-300 text-lg">
                    Discover and explore an immersive world of new maps, talented creators, and exhilarating experiences tailored for Fortnite players on this innovative platform.
                </p>
                <div class="relative w-full">
                    <input type="email" placeholder="Email address"
                        class="w-full p-3 bg-transparent border border-gray-500 rounded-md placeholder-gray-400">
                    <span class="absolute right-8  top-1/3 transform -translate-y-1/2 text-red-500 text-4xl font-bold">→</span>
                </div>
            </div>

            <!-- Center Sections -->
            <div class="flex flex-row gap-32 mt-8 lg:mt-0 sm:self-center">
                <div class="flex flex-col gap-4">
                    <h2 class="text-lg font-semibold mb-4">EXPLORE</h2>
                    <ul class="space-y-2 list-disc">
                        <li class="text-gray-400 hover:text-red-500">About</li>
                        <li class="text-gray-400 hover:text-red-500">Discover Live</li>
                        <li class="text-gray-400 hover:text-red-500">Categories</li>
                        <li class="text-gray-400 hover:text-red-500">Consulting</li>
                        <li class="text-gray-400 hover:text-red-500">Contact</li>
                    </ul>
                </div>
                <div class="flex flex-col gap-4">
                    <h2 class="text-lg font-semibold mb-4">RESOURCES</h2>
                    <ul class="space-y-2 list-disc">
                        <li class="text-gray-400 hover:text-red-500">News & Updates</li>
                        <li class="text-gray-400 hover:text-red-500">Top Studios</li>
                        <li class="text-gray-400 hover:text-red-500">Top Developers</li>
                        <li class="text-gray-400 hover:text-red-500">Event Calendars</li>
                        <li class="text-gray-400 hover:text-red-500">Skin Databases</li>
                    </ul>
                </div>
            </div>

            <!-- Right Section -->
            <div class="mt-8 lg:mt-0 flex flex-col gap-7 sm:self-center">
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
                    <p class=" "> NEEDHELP@FORTNITEDATA.COM</p>
                </div>
            </div>
        </div>
        
        <!-- Copyright -->
        <div class="mt-12 border-t border-gray-600 pt-6 text-center text-gray-400 flex flex-row justify-around">
            <div>
                &copy; Copyrights, 2023 Fortnitedata.com
            </div>
            <div class="flex gap-4 ">
                <i class="fab fa-twitter text-gray-400 hover:text-red-500 cursor-pointer"></i>
                <i class="fab fa-facebook text-gray-400 hover:text-red-500 cursor-pointer"></i>
                <i class="fab fa-pinterest text-gray-400 hover:text-red-500 cursor-pointer"></i>
                <i class="fab fa-instagram text-gray-400 hover:text-red-500 cursor-pointer"></i>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
</style>
