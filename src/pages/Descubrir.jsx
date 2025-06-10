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
              <a class="text-white text-sm font-medium leading-normal" href="#">My Profile</a>
              <a class="text-white text-sm font-medium leading-normal" href="#">Friends</a>
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
              style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFQkcTaXQAJC6b9cg9Ixs-ZFJTSDwsEWlPRQ4IXvu9DdJ8uVa648acgpGKQ05fP2idhjBGDtt9BqHojhLxQwN7lrAlREPps7VdxRw6IhxOfLgsvLQl7RjkkxX2o9_rUhA1-3U6SPWbxxADaaKm59KymKDgNEUn1lPTGqOLrkNpezaNXHOEnP9EffURxvmPpm_-HGIn21eYyIk636GmGLZim_vemdxvDdgCRyBq6idD6jnmpqzTidj7iGPeQsAfUXow96fw2xhQSUwU");'
            ></div>
          </div>
        </header>
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 class="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">Discover</h2>
            <h3 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">New Releases</h3>
            <div class="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
              <div class="flex items-stretch p-4 gap-3">
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMvc_nhydKfv4-FvgLFrXiilhpWxATO3MA58YVH7QWkfEB8DpXLvcP2o3p2kT6fIei2ucjw9B99FhNOoTslb1GK9vsf95YhR2f4Jn7Xvd0LweVAA_tF19VWgA9g00vKR8H_nsRpIXSuHhp7VHKthC_B6SCuKxlQBdT10cgNeokjioebbLFFOxrbwfBKKpK6f713J4HcpZ0zToM10OJkYO9wuoa2b5ya5Alk8TiTGHwdNne8uTXb2Yz1EZMnJfFF33YSNsg6b-D_Moc");'
                  ></div>
                  <p class="text-white text-base font-medium leading-normal">The Last Frontier</p>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcdHYScJNo2xRr4OFhwu1E_WpakA1u9h49NG9Nmjo2ufTxlA3YMGI3An1sVMYkj5K50PKNJmBhP3FUakTRklnnDAGdc9C-SONnatuNGQm53tQralQ8HGKyIlXXYR4mqYA8uOGPkQF05vLZodvn25TEyNClWfB8z865o8PjB3BmLk1RFNweBZZqGGkRxui1h9N6JU-t6vaq1QQEx-89eQgTEbwlrHnBzqVyo_jxmwKsUl_5zE1fQ_nkziePcTfvGD1a2CD_GT2SsOt4");'
                  ></div>
                  <p class="text-white text-base font-medium leading-normal">Echoes of the Past</p>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjXw0kS1ngCUukY97VmHy15AcD2kzXCYRESgAnQo1ek0v2P6GCHnJv3qH6a3Aj_Af6MeNUKE0OrKF3g0jvRJMLoZ-7z4_6yMpSDuP0DqXaN-s3f56BoZgRcLxKvc_0saiR6Cr0KAwW41LXN8BrWGgRIefIfsNARnPFzD7nOJgV7uxt1zj_DJ3kzw5b84kqYJ_jMV5GNWncKVm-jQHigENKxk1LjAWPwUFxPpk-0wugHqaSnVNpDOsUuRKK358ZlXjYLDQTJ_3K9Tck");'
                  ></div>
                  <p class="text-white text-base font-medium leading-normal">The Silent Witness</p>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9GaWHNaw4nd9XBXau3RjWvgBMx5qzRUmNZn_MiaQdUNgl0xcc98dd53TatP_kdpxTpJOE-Q9MVUsIcVtwjtVMPLftoAHiW-qiOVpAa8ArKq4ihFMHqm36mADp8BzOGDnWf_1EExFgz2OFB61aGhgCvSBnh1r4wfMWL8hHYNOrEEG1p5fQ3_chuZuz9-ZV-eOkDvfSkuLEo1oxZKJ6sxkJ8boCU0vVsGPTTPA1UYN1Ag5LjX1-Uf8FOceBKdigaIT0lzvYV4fw4VVg");'
                  ></div>
                  <p class="text-white text-base font-medium leading-normal">The Crimson Tide</p>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBBfFDPrNaAL_WlrUcu8R9yA1wPSbiWeALN8cuKVgaiRcYR3PstzFY7GXocacYGFUv1Pb15KvY34vY92z1fXXTIkA-B6J43CuGhv5fh4oQnqUWfcYVnghDP6VgQNFPHsh7XOhMH9mZMiQOsRxLQC8AvBN8r6E7xrzk-reCPEripL-7Y1xNx2XQUsxqoXjcw4oUBFncD8yDxJWl02IErqguO5xLOdiGvc5Y-10lABwkadpRc-I_Yvjf7RIxFFv2gcZpXp-kNLz07mfju");'
                  ></div>
                  <p class="text-white text-base font-medium leading-normal">Whispers of the Wind</p>
                </div>
              </div>
            </div>
            <h3 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Popular Users</h3>
            <div class="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
              <div class="flex items-stretch p-4 gap-8">
                <div class="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMJlF0-Qf2p5A4iLeo296VEZCFu5Hdl1AYIzJ04lw4Qa2puWKvX4b0Ie4XnUkYu2_S3q1bmhfuEjjpnAtQdDOeL8pU80Z3jYoi8w_I96xYku34QDitPStybuxov5jyrqfOkeZ_IQQV-7nDhfLLLBxWbVfuvLsN4s3hWDx8u-iP2UzHLNusb4TD3vDqv13k89lieg1pfBNG0pvY-TTDKWiy_KAO_J9dwiU8PYnZGYl_T4sdZI-Pkde5pTdEGqWkg2nRcnRkCuG1is0c");'
                  ></div>
                  <p class="text-white text-base font-medium leading-normal">Sophia Bennett</p>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDB2-TO8o0YW-65GrxVgsoy5kaYCSCtLPG0TQnS_nxqCvCyufe2dq9zHEkPu2bqkLwmkgcdZP1vjdbIKOrtYLZlL7pk5aUhw7KypLFDF5rhCRXPNnJGop8B6paN-WJT0utZI5lpZ7Oj1tzznVWZkYI6Ki27STvgwGvT9wQ_7dxQiEuFbF5KKraTwJjxMgvFhuXUVE_Fr5-YSpcjO48xLC7tLmYuA6mYrIE5G5fC1WZ_3GhkjMrnDm8gzlrKjH39fi6EYrCsywPNPvA-");'
                  ></div>
                  <p class="text-white text-base font-medium leading-normal">Ethan Carter</p>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKnndFdAC1Kw4X0ybrejAQHIGRydPF3IloNUPrjimmodoNMkA3EvQVSEoVPhLbEzPTAOSLTUTGgIWhghCaqRKdaS0PyAjJ7BAQjFfBr_tr-wTVkOnSUerI5TG43QmLo78B2PX97c8VVlwpD6rkdOHZY3VrGpKEn-2c0yJcXKIuaG5dyZzVIUHYQHEv3PtpzGiOgF9kV1a0DZrpZ5CN1E_Ju77BdsJS3Qxg8HGoIf6eX3YNSJarOawUR-JYUfU2CZT-dtjjzNr_Lj9f");'
                  ></div>
                  <p class="text-white text-base font-medium leading-normal">Olivia Hayes</p>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdmxeEOiAyXRB96OyQ04kybZdUXcV-j3oraHXMCjkl3ut-lh297E-tm7HpqoFOr8uLerHTajOwe2Cut8CHnAtT7pnBGSk2NbAlEuh4lsp0pBrfaE23Cp6jHG2n5_VqaK7EC3af5c5NZDBEWn3stCe9q7m98R7Ih9D1XvM_tY6sB5kvhw14vkfMuL04sU6NSfGqu-wNb4MXmZBTVDxRx01xvdXrKBRHYiu98rUxAxvDt0dM_jo4zDA-2kHV3l-jUbWmuXaJnBR066Ou");'
                  ></div>
                  <p class="text-white text-base font-medium leading-normal">Liam Foster</p>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
                  <div
                    class="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgRkoopQnivKojVrHhRVJBVGkM2KqqiZ2IbVmibF77w6zUUfG39teYHFkERTCqQYkS-gLhTq7cttzwLBLdOOl1rdURcRE5R6pDyuyBPA36QnapRpyQ1VFmZJ5OGocobVHHVfqmVKDJymKO-3KYrUrIpL2jMS3ernomU1Y6h6X6qb4MVQ4nSqL8FP8kcP1oeGQQZUPRWf_cDE7qnUF6R-YlU4Y7P6RxBotTXb0koDsHwbwqR3-qzLD1lSRnpZlSpwIRI7BDOFFMjlJ2");'
                  ></div>
                  <p class="text-white text-base font-medium leading-normal">Ava Morgan</p>
                </div>
              </div>
            </div>
            <h3 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Featured Lists</h3>
            <div class="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
              <div class="flex items-stretch p-4 gap-3">
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAekTmYVwlMUz0Qgux6nFJn-9WFmv9-rqYT76fSPC-oPaitlPChGQje55J7FmPpIB_mJNO3a6S5QyNOFerecWsK9Bpf-8m6qCno4YtoWmDHbq0wq__L2Hm0tk2NzWa26V523G9bvyjJdkpzit-UAoLPXs6qNh_iqNZDIpGZp5822H_GweehS6Dja4Z1A0FSRTEDil0fpIBsZBo00nHOsiRyErpe_fC3hBX-n63LhVxuasVIZXpyhmzy2meDZFkAfr7hl1lBcb08RnTb");'
                  ></div>
                  <p class="text-white text-base font-medium leading-normal">Top Romance Films</p>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZC9FfUptQovgRsrYOg_Cc71zPZlW3Y73Zbib3hQHnFYIcmgsn5pz90DiUBkT3wclnD2PxE-0vUOXA2OlxKJL-rjZsCu4qlfYDZLc576OlwcmwvkBoOJJ8HZuVCtqg9hsl3DJJmsXXdHILlAuggPJcFZ81x3ptPn2whEoSSMKWfrZUog5OqzeHQrmG4kl1n_MAjE9t7rSl4XwqSxZ-aREfvbL9kOuWiU3MdeF3eQGix5n9VX3yLMNEjSPs3nDOcilqGV1DnxOuArfk");'
                  ></div>
                  <p class="text-white text-base font-medium leading-normal">Heartbreaking Stories</p>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDdB4DBA6dU_SSwx4bsRRVPL4utrhFTIQ2p0hf9V3g1NGOPlggYgn-A4L6VpVND8TQJPkX2BxKttuFLHI0Tq8aa_w8YfTpkdgW6WhaglrCZJ_j6PGoxg9nMJrbCnNL9-XAvXDCv0Rr5jm-bucBCfRnDEzeZA3cUBJThcGW9bYPLOswFtpkQZSMEVqfl-9ttYXU4jhvuhYzjJmgjyNcObW96hdDSFsKV4wRHtO9OWZKdfdKD9Od_mEvah3ompqCZAb0Vx4rixg0qZbU");'
                  ></div>
                  <p class="text-white text-base font-medium leading-normal">Action-Packed Thrillers</p>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYjNHTnOV6E1764rTirDPc1YwJIiW7BHemrRK_bp64I0tulC8beTG1QE2VPi-4upUsCIoizURA3g3Eds9Ho7R8QvPrhX_0lV-wCXObb3s8EKLwEj8XLNR8ZtnLjEYqUZnq-ob9I9a23XgzuWP5LseNGCbmpgtX94iXeniZT6FpZxJaKbpeJhOw9yCFATCb6cwNWRJ3oFPwb3ozjTSMhUfeUHZnDFGMNtjNsBYryF3R4pcxfFklSu76qVSlxP1wuYOsiIrEnlLUwdTX");'
                  ></div>
                  <p class="text-white text-base font-medium leading-normal">Laugh Out Loud Comedies</p>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpVyg1-bUNXLmvpNHhdvjvFFBodtzlZ80jN4W-NhAMKvK2_askPrWTCt1MXfAd7qmFj39U4ItEDb2Bt0AZm09gMJsrFGRri6mXyvTVHG67nVgyXTXBzoCPaamKSqnoTVrbUbM3rg3I0meYVbkPqb1IOK4mu9rlQmfLHhnhjdi15-Wcycv7RlII9TFnoQISpuLWGwtiC7STmjtcEnrJ_yfaTh80XycUHuO5_pdYIbSN53Wj0Q0nq_ahKOwqX1tfl0bqXKeK28ohX1WU");'
                  ></div>
                  <p class="text-white text-base font-medium leading-normal">Scariest Horror Films</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>