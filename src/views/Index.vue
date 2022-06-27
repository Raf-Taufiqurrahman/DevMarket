<template>
    <div class="container w-full mx-auto my-10 px-4">
        <div class="my-4">
            <div class="grid grid-cols-8 gap-6">
                <div
                    class="col-span-12 md:col-span-5 lg:col-span-6 bg-white rounded-lg p-3 text-center border border-gray-100">
                    <img src="../assets/css.png" class="inline-block">
                </div>

                <div class="row-span-5 col-span-12 md:col-span-3 lg:col-span-2">
                    <div class="rounded-md p-1 border-double border-2 bg-rose-500">
                        <h3 class="font-bold uppercase text-white text-center">Category</h3>
                    </div>
                    <a href="" class="p-2 flex items-center border rounded-lg bg-white my-2 hover:scale-105 duration-200
                        hover:bg-gray-600 hover:text-white">
                        <img src="../assets/bootstrap.png" class="w-10">
                        <div class="flex flex-col ml-2">
                            <p class="font-bold">Iphone</p>
                            <p class="text-xs font-bold text-gray-400">2 product</p>
                        </div>
                    </a>
                    <a href=""
                        class="p-2 flex items-center text-white justify-center border rounded-lg bg-teal-600 my-2 hover:bg-teal-500 hover:scale-110 duration-150">
                        <p class="font-medium mr-2">See all category</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="my-4">
            <div class="my-2">
                <h3 class="font-bold uppercase text-teal-600">News Product</h3>
            </div>
            <div class="grid grid-cols-1 gap-1">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div class="bg-white rounded-lg p-3 text-center border border-gray-100 hover:scale-110 duration-200">
                <img src="../assets/html.png" class="inline-block">
                <h4 class="font-bold my-2">Iphone</h4>
                <p class="text-xs font-medium text-gray-400">Smartphone</p>
                <p class="text-md font-medium my-2 text-green-600">Rp. 1.000.000</p>
            </div>
        </div>
    </div>
</template>