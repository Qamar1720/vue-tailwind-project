<template>
    <div class="bg-[#1A0B2E] text-white px-8 py-12">
        <div class="flex flex-col lg:flex-row lg:justify-between">
            <!-- Left Section -->
            <div class="flex flex-col gap-6 max-w-sm">
                <img src="../assets/pics/logo.png" alt="Logo" class="w-48">
                <p class="text-gray-300 text-sm">
                    Discover and explore an immersive world of new maps, talented creators, and exhilarating experiences tailored for Fortnite players on this innovative platform.
                </p>
                <div class="relative w-full">
                    <input type="email" placeholder="Email address"
                        class="w-full p-3 bg-transparent border border-gray-500 rounded-md placeholder-gray-400">
                    <span class="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500 text-lg">→</span>
                </div>
            </div>

            <!-- Center Sections -->
            <div class="grid grid-cols-2 gap-12 mt-8 lg:mt-0">
                <div>
                    <h2 class="text-lg font-semibold mb-4">EXPLORE</h2>
                    <ul class="space-y-2">
                        <li class="text-gray-400 hover:text-red-500">About</li>
                        <li class="text-red-500 font-semibold">Discover Live</li>
                        <li class="text-gray-400 hover:text-red-500">Categories</li>
                        <li class="text-gray-400 hover:text-red-500">Consulting</li>
                        <li class="text-gray-400 hover:text-red-500">Contact</li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-lg font-semibold mb-4">RESOURCES</h2>
                    <ul class="space-y-2">
                        <li class="text-gray-400 hover:text-red-500">News & Updates</li>
                        <li class="text-gray-400 hover:text-red-500">Top Studios</li>
                        <li class="text-gray-400 hover:text-red-500">Top Developers</li>
                        <li class="text-gray-400 hover:text-red-500">Event Calendars</li>
                        <li class="text-gray-400 hover:text-red-500">Skin Databases</li>
                    </ul>
                </div>
            </div>

            <!-- Right Section -->
            <div class="mt-8 lg:mt-0">
                <h2 class="text-lg font-semibold mb-4">CONTACT</h2>
                <p class="text-gray-400 mb-2">Phone: +1 234 5678 910</p>
                <p class="text-gray-400 mb-2">Address: USA</p>
                <p class="text-gray-400">Email: <span>NEEDHELP@FORTNITEDATA.COM</span></p>
                <div class="flex gap-4 mt-4">
                    <i class="fab fa-twitter text-xl text-gray-400 hover:text-red-500"></i>
                    <i class="fab fa-facebook text-xl text-gray-400 hover:text-red-500"></i>
                    <i class="fab fa-pinterest text-xl text-gray-400 hover:text-red-500"></i>
                    <i class="fab fa-instagram text-xl text-gray-400 hover:text-red-500"></i>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="mt-12 border-t border-gray-600 pt-6 text-center text-gray-400 text-sm">
            &copy; Copyrights, 2023 Fortnitedata.com
        </div>
    </div>
</template>

<script>
</script>

<style>
</style>
