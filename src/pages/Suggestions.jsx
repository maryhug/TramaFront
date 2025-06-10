<html>
<head>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
    <link
        rel="stylesheet"
        as="style"
        onload="this.rel='stylesheet'"
        href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&amp;family=Plus+Jakarta+Sans%3Awght%40400%3B500%3B700%3B800"
    />

    <title>Stitch Design</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
</head>
<body>
<div
    class="relative flex size-full min-h-screen flex-col bg-[#101a23] dark group/design-root overflow-x-hidden"
    style='font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;'
>
    <div class="layout-container flex h-full grow flex-col">
        <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#223649] px-10 py-3">
            <div class="flex items-center gap-8">
                <div class="flex items-center gap-4 text-white">
                    <div class="size-4">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path></svg>
                    </div>
                    <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">CineCritique</h2>
                </div>
                <div class="flex items-center gap-9">
                    <a class="text-white text-sm font-medium leading-normal" href="#">Home</a>
                    <a class="text-white text-sm font-medium leading-normal" href="#">My Profile</a>
                    <a class="text-white text-sm font-medium leading-normal" href="#">Lists</a>
                    <a class="text-white text-sm font-medium leading-normal" href="#">Settings</a>
                </div>
            </div>
            <div class="flex flex-1 justify-end gap-8">
                <label class="flex flex-col min-w-40 !h-10 max-w-64">
                    <div class="flex w-full flex-1 items-stretch rounded-xl h-full">
                        <div
                            class="text-[#90aecb] flex border-none bg-[#223649] items-center justify-center pl-4 rounded-l-xl border-r-0"
                            data-icon="MagnifyingGlass"
                            data-size="24px"
                            data-weight="regular"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            placeholder="Search"
                            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#223649] focus:border-none h-full placeholder:text-[#90aecb] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                            value=""
                        />
                    </div>
                </label>
                <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAayfI3oFaUAbHybyULX2713_sI1-UTAGhwp9qYaE6bVlSDkxAS4aW7SF9DuHtkW8XGEbVHvQJL7QnAu25tnZHlOw1sSoQLWmJXfS3NdiWJeATSG_oJIO4JSSDnnkdyFotzcrCXqz9mIOZjjpN5gsbahIuMviWsMjhauuOWqruGAoRbdXOlFvira2NRtN-ntWtzt9QqrLzsQo5kmHUY7ZpSmDqoL5MfFfriYcJgcdyuUAGBJ8aIRBNHzkpwU7dQV6F-u5shoJe6lUd7");'
                ></div>
            </div>
        </header>
        <div class="px-40 flex flex-1 justify-center py-5">
            <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div class="px-4 py-3">
                    <label class="flex flex-col min-w-40 h-12 w-full">
                        <div class="flex w-full flex-1 items-stretch rounded-xl h-full">
                            <div
                                class="text-[#90aecb] flex border-none bg-[#223649] items-center justify-center pl-4 rounded-l-xl border-r-0"
                                data-icon="MagnifyingGlass"
                                data-size="24px"
                                data-weight="regular"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#223649] focus:border-none h-full placeholder:text-[#90aecb] px-4 rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                value="Search for movies, users, or reviews"
                            />
                            <div class="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-[#223649] pr-2 pr-4">
                                <button
                                    class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] h-auto min-w-0 px-0"
                                >
                                    <div class="text-[#90aecb]" data-icon="XCircle" data-size="24px" data-weight="regular">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                            <path
                                                d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
                                            ></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </label>
                </div>
                <div class="flex gap-3 p-3 flex-wrap pr-4">
                    <button class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#223649] pl-4 pr-2">
                        <p class="text-white text-sm font-medium leading-normal">Movies</p>
                        <div class="text-white" data-icon="CaretDown" data-size="20px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                            </svg>
                        </div>
                    </button>
                    <button class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#223649] pl-4 pr-2">
                        <p class="text-white text-sm font-medium leading-normal">Users</p>
                        <div class="text-white" data-icon="CaretDown" data-size="20px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                            </svg>
                        </div>
                    </button>
                    <button class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#223649] pl-4 pr-2">
                        <p class="text-white text-sm font-medium leading-normal">Reviews</p>
                        <div class="text-white" data-icon="CaretDown" data-size="20px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                            </svg>
                        </div>
                    </button>
                    <button class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#223649] pl-4 pr-2">
                        <p class="text-white text-sm font-medium leading-normal">Lists</p>
                        <div class="text-white" data-icon="CaretDown" data-size="20px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                            </svg>
                        </div>
                    </button>
                </div>
                <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Suggestions</h2>
                <div class="flex items-center gap-4 bg-[#101a23] px-4 min-h-14">
                    <div class="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-10" data-icon="FilmSlate" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                                d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"
                            ></path>
                        </svg>
                    </div>
                    <p class="text-white text-base font-normal leading-normal flex-1 truncate">The Midnight Bloom</p>
                </div>
                <div class="flex items-center gap-4 bg-[#101a23] px-4 min-h-14">
                    <div class="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-10" data-icon="User" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                                d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                            ></path>
                        </svg>
                    </div>
                    <p class="text-white text-base font-normal leading-normal flex-1 truncate">Olivia Carter</p>
                </div>
                <div class="flex items-center gap-4 bg-[#101a23] px-4 min-h-14">
                    <div class="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-10" data-icon="FilmSlate" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                                d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"
                            ></path>
                        </svg>
                    </div>
                    <p class="text-white text-base font-normal leading-normal flex-1 truncate">Review of 'The Midnight Bloom'</p>
                </div>
                <div class="flex items-center gap-4 bg-[#101a23] px-4 min-h-14">
                    <div class="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-10" data-icon="FilmSlate" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                                d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"
                            ></path>
                        </svg>
                    </div>
                    <p class="text-white text-base font-normal leading-normal flex-1 truncate">My Favorite Movies</p>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
