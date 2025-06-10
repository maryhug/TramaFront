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
              <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Cinephile</h2>
            </div>
            <div class="flex items-center gap-9">
              <a class="text-white text-sm font-medium leading-normal" href="#">Home</a>
              <a class="text-white text-sm font-medium leading-normal" href="#">Movies</a>
              <a class="text-white text-sm font-medium leading-normal" href="#">Series</a>
              <a class="text-white text-sm font-medium leading-normal" href="#">People</a>
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
            <button
              class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#223649] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <div class="text-white" data-icon="Bell" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYmvMQdO_NNLH1PbFdwoS1vS6DrlzIb3Bz3roo6TAaek5wdUl2MRrEoSp3tTeshbhlxosA4OvO5mpfdPgWOWWhXJjGXtAfd6OOliwUvc2f0kvuzZoIfXQRE3JNuXGFlz10prO44ac9DhP8RKTjKtmrf0-OvBRuwxlVZtqji4T5Ws2kkKGbR7cpguiSyCE5sF2-FBvDwXMZ6kBtDvDxeft5NSn8Q1qrq7xfueObIZgKugkIYhhgZI6ajSg8jYxih4G8EKOdFD2d69z6");'
            ></div>
          </div>
        </header>
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4"><p class="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">My Lists</p></div>
            <div class="pb-3">
              <div class="flex border-b border-[#314d68] px-4 gap-8">
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-[#0b80ee] text-white pb-[13px] pt-4" href="#">
                  <p class="text-white text-sm font-bold leading-normal tracking-[0.015em]">All</p>
                </a>
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#90aecb] pb-[13px] pt-4" href="#">
                  <p class="text-[#90aecb] text-sm font-bold leading-normal tracking-[0.015em]">Public</p>
                </a>
                <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#90aecb] pb-[13px] pt-4" href="#">
                  <p class="text-[#90aecb] text-sm font-bold leading-normal tracking-[0.015em]">Private</p>
                </a>
              </div>
            </div>
            <h3 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">My Lists</h3>
            <div class="flex items-center gap-4 bg-[#101a23] px-4 min-h-[72px] py-2">
              <div class="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-12" data-icon="Heart" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col justify-center">
                <p class="text-white text-base font-medium leading-normal line-clamp-1">Favorites</p>
                <p class="text-[#90aecb] text-sm font-normal leading-normal line-clamp-2">10 items</p>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-[#101a23] px-4 min-h-[72px] py-2">
              <div class="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-12" data-icon="SmileyNervous" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm53.66-53.66a8,8,0,0,1-11.32,11.32L160,163.31l-10.34,10.35a8,8,0,0,1-11.32,0L128,163.31l-10.34,10.35a8,8,0,0,1-11.32,0L96,163.31,85.66,173.66a8,8,0,0,1-11.32-11.32l16-16a8,8,0,0,1,11.32,0L112,156.69l10.34-10.35a8,8,0,0,1,11.32,0L144,156.69l10.34-10.35a8,8,0,0,1,11.32,0ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm72,0a12,12,0,1,1,12,12A12,12,0,0,1,152,108Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col justify-center">
                <p class="text-white text-base font-medium leading-normal line-clamp-1">Sad</p>
                <p class="text-[#90aecb] text-sm font-normal leading-normal line-clamp-2">5 items</p>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-[#101a23] px-4 min-h-[72px] py-2">
              <div class="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-12" data-icon="Smiley" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col justify-center">
                <p class="text-white text-base font-medium leading-normal line-clamp-1">Romance</p>
                <p class="text-[#90aecb] text-sm font-normal leading-normal line-clamp-2">8 items</p>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-[#101a23] px-4 min-h-[72px] py-2">
              <div class="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-12" data-icon="Sword" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M216,32H152a8,8,0,0,0-6.34,3.12l-64,83.21L72,108.69a16,16,0,0,0-22.64,0l-12.69,12.7a16,16,0,0,0,0,22.63l20,20-28,28a16,16,0,0,0,0,22.63l12.69,12.68a16,16,0,0,0,22.62,0l28-28,20,20a16,16,0,0,0,22.64,0l12.69-12.7a16,16,0,0,0,0-22.63l-9.64-9.64,83.21-64A8,8,0,0,0,224,104V40A8,8,0,0,0,216,32ZM52.69,216,40,203.32l28-28L80.68,188Zm70.61-8L48,132.71,60.7,120,136,195.31ZM208,100.06l-81.74,62.88L115.32,152l50.34-50.34a8,8,0,0,0-11.32-11.31L104,140.68,93.07,129.74,155.94,48H208Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col justify-center">
                <p class="text-white text-base font-medium leading-normal line-clamp-1">Action</p>
                <p class="text-[#90aecb] text-sm font-normal leading-normal line-clamp-2">12 items</p>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-[#101a23] px-4 min-h-[72px] py-2">
              <div class="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-12" data-icon="Smiley" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col justify-center">
                <p class="text-white text-base font-medium leading-normal line-clamp-1">Comedy</p>
                <p class="text-[#90aecb] text-sm font-normal leading-normal line-clamp-2">7 items</p>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-[#101a23] px-4 min-h-[72px] py-2">
              <div class="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-12" data-icon="SmileyNervous" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm53.66-53.66a8,8,0,0,1-11.32,11.32L160,163.31l-10.34,10.35a8,8,0,0,1-11.32,0L128,163.31l-10.34,10.35a8,8,0,0,1-11.32,0L96,163.31,85.66,173.66a8,8,0,0,1-11.32-11.32l16-16a8,8,0,0,1,11.32,0L112,156.69l10.34-10.35a8,8,0,0,1,11.32,0L144,156.69l10.34-10.35a8,8,0,0,1,11.32,0ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm72,0a12,12,0,1,1,12,12A12,12,0,0,1,152,108Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col justify-center">
                <p class="text-white text-base font-medium leading-normal line-clamp-1">Thriller</p>
                <p class="text-[#90aecb] text-sm font-normal leading-normal line-clamp-2">9 items</p>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-[#101a23] px-4 min-h-[72px] py-2">
              <div class="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-12" data-icon="Planet" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col justify-center">
                <p class="text-white text-base font-medium leading-normal line-clamp-1">Sci-Fi</p>
                <p class="text-[#90aecb] text-sm font-normal leading-normal line-clamp-2">6 items</p>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-[#101a23] px-4 min-h-[72px] py-2">
              <div class="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-12" data-icon="FilmSlate" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col justify-center">
                <p class="text-white text-base font-medium leading-normal line-clamp-1">Documentary</p>
                <p class="text-[#90aecb] text-sm font-normal leading-normal line-clamp-2">11 items</p>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-[#101a23] px-4 min-h-[72px] py-2">
              <div class="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-12" data-icon="FilmSlate" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col justify-center">
                <p class="text-white text-base font-medium leading-normal line-clamp-1">Animation</p>
                <p class="text-[#90aecb] text-sm font-normal leading-normal line-clamp-2">4 items</p>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-[#101a23] px-4 min-h-[72px] py-2">
              <div class="text-white flex items-center justify-center rounded-lg bg-[#223649] shrink-0 size-12" data-icon="FilmSlate" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col justify-center">
                <p class="text-white text-base font-medium leading-normal line-clamp-1">Drama</p>
                <p class="text-[#90aecb] text-sm font-normal leading-normal line-clamp-2">15 items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
