<template>
    <div class="bg-[#1A0B2E] text-white px-8 py-12 font-oswald w-full">
        <div class="lg:flex lg:gap-20 max-w-[1440px] w-full mx-auto">
            <!-- Left Section -->
            <div class="flex flex-col gap-6 w-full lg:w-[35%]">
                <img src="../assets/pics/logo.png" alt="Logo" class="w-54">
                <p class="text-gray-300 text-lg font-oswald">
                    Discover and explore an immersive world of new maps, talented creators, and exhilarating experiences tailored for Fortnite players on this innovative platform.
                </p>
                <div class="relative w-full">
                    <input type="email" placeholder="Email address"
                        class="w-full p-6 font-bold text-gray-400 bg-transparent border border-gray-500 rounded-md placeholder-gray-400">
                    <span class="absolute right-4 top-10 transform -translate-y-3/4 text-red-500 text-4xl font-bold">→</span>
                </div>
            </div>

            <!-- Center Sections -->
            <div class="flex sm:flex-row sm:justify-around flex-col pl-0 lg:gap-8 gap-8 mt-10 lg:mt-0 w-full lg:w-[40%]">
                <div class="flex flex-col gap-4">
                    <h2 class="text-lg font-semibold mb-4">EXPLORE</h2>
                    <ul class="space-y-2 list-disc list-inside  cursor-pointer">
                        <li class="text-gray-400 marker:text-[#D93E31] hover:text-[#D93E31]">About</li>
                        <li class="text-gray-400 marker:text-[#D93E31] hover:text-[#D93E31]">Discover Live</li>
                        <li class="text-gray-400 marker:text-[#D93E31] hover:text-[#D93E31]">Categories</li>
                        <li class="text-gray-400 marker:text-[#D93E31] hover:text-[#D93E31]">Consulting</li>
                        <li class="text-gray-400 marker:text-[#D93E31] hover:text-[#D93E31]">Contact</li>
                    </ul>
                </div>
                <div class="flex flex-col gap-4">
                    <h2 class="text-lg font-semibold mb-4">RESOURCES</h2>
                    <ul class="space-y-2 list-disc list-inside cursor-pointer">
                        <li class="text-gray-400 marker:text-[#D93E31] hover:text-[#D93E31]">News & Updates</li>
                        <li class="text-gray-400 marker:text-[#D93E31] hover:text-[#D93E31]">Top Studios</li>
                        <li class="text-gray-400 marker:text-[#D93E31] hover:text-[#D93E31]">Top Developers</li>
                        <li class="text-gray-400 marker:text-[#D93E31] hover:text-[#D93E31]">Event Calendars</li>
                        <li class="text-gray-400 marker:text-[#D93E31] hover:text-[#D93E31]">Skin Databases</li>
                    </ul>
                </div>
            </div>
                
                <!-- Right Section -->
                <div class="mt-8 lg:mt-0 flex flex-col md:justify-start gap-7 w-full lg:w-[25%]">
                    <div>
                        <p class="text-gray-400 mb-2">Phone</p>
                        <p class="font-bold">+1 234 5678 910</p>
                    </div>
                    <div>
                        <p class="text-gray-400 mb-2">Address</p>
                        <p class="font-bold">USA</p>
                    </div>
                    <div>
                        <p class="text-gray-400 mb-2">Email Address</p>
                        <p class="font-bold break-words lg:max-w-[85%]">NEEDHELP@FORTNITEDATA.COM</p>
                    </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="relative mt-12 pt-6 text-center text-gray-400 flex md:flex-row flex-col gap-4 md:gap-0 justify-between bg-[#1A0B2E] border-2 border-[#3E344B] max-w-[1440px] mx-auto rounded-lg p-2 border-b-transparent">
            <div class="flex items-center justify-center">
                &copy; Copyrights, 2023 Fortnitedata.com
            </div>
            <div class="flex justify-center flex-wrap gap-4 md:gap-5 lg:gap-6 text-xl md:text-2xl text-white cursor-pointer px-2">
            <div class="border-2 lg:px-3 rounded-full px-2 md:px-3 md:py-2 lg:p-2 border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_0px]">
                <i class="fa fa-twitter"></i>
            </div>
            <div class="border-2 lg:px-4 rounded-full px-2 md:px-4 md:py-2 lg:p-2 border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]">
                <i class="fa fa-facebook"></i>
            </div>
            <div class="border-2 lg:px-3 rounded-full px-2 md:px-3 md:py-2 lg:p-2 border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]">
                <i class="fa fa-pinterest"></i>
            </div>
            <div class="border-2 lg:px-3 rounded-full px-2 md:px-3 md:py-2 lg:p-2 border-[#3E344B] hover:text-[#DF3F2A] hover:shadow-[#DF3F2A] hover:shadow-[0_0_22px_2px]">
                <i class="fa fa-instagram"></i>
            </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
  /* .trapezoid {
  position: relative;
  width: full; 
  height: 70px; 
  clip-path: polygon(10% 10%, 100% 0%, 85% 100%, 15% 100%);
  display: flex;
  border-color: #3E344B;
  align-items: center;
  justify-content: center;
} */
 @media screen and (min-width: 1024px) and (max-width: 1100px) {
    .email{
     width: 80%;
    }
 }
</style>