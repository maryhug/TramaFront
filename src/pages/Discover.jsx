import React from "react";

const DiscoverSection = () => {
    const releases = [
        {
            title: "The Last Frontier",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCMvc_nhydKfv4-FvgLFrXiilhpWxATO3MA58YVH7QWkfEB8DpXLvcP2o3p2kT6fIei2ucjw9B99FhNOoTslb1GK9vsf95YhR2f4Jn7Xvd0LweVAA_tF19VWgA9g00vKR8H_nsRpIXSuHhp7VHKthC_B6SCuKxlQBdT10cgNeokjioebbLFFOxrbwfBKKpK6f713J4HcpZ0zToM10OJkYO9wuoa2b5ya5Alk8TiTGHwdNne8uTXb2Yz1EZMnJfFF33YSNsg6b-D_Moc",
        },
        {
            title: "Echoes of the Past",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCcdHYScJNo2xRr4OFhwu1E_WpakA1u9h49NG9Nmjo2ufTxlA3YMGI3An1sVMYkj5K50PKNJmBhP3FUakTRklnnDAGdc9C-SONnatuNGQm53tQralQ8HGKyIlXXYR4mqYA8uOGPkQF05vLZodvn25TEyNClWfB8z865o8PjB3BmLk1RFNweBZZqGGkRxui1h9N6JU-t6vaq1QQEx-89eQgTEbwlrHnBzqVyo_jxmwKsUl_5zE1fQ_nkziePcTfvGD1a2CD_GT2SsOt4",
        },
        {
            title: "The Silent Witness",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBjXw0kS1ngCUukY97VmHy15AcD2kzXCYRESgAnQo1ek0v2P6GCHnJv3qH6a3Aj_Af6MeNUKE0OrKF3g0jvRJMLoZ-7z4_6yMpSDuP0DqXaN-s3f56BoZgRcLxKvc_0saiR6Cr0KAwW41LXN8BrWGgRIefIfsNARnPFzD7nOJgV7uxt1zj_DJ3kzw5b84kqYJ_jMV5GNWncKVm-jQHigENKxk1LjAWPwUFxPpk-0wugHqaSnVNpDOsUuRKK358ZlXjYLDQTJ_3K9Tck",
        },
        {
            title: "The Crimson Tide",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuD9GaWHNaw4nd9XBXau3RjWvgBMx5qzRUmNZn_MiaQdUNgl0xcc98dd53TatP_kdpxTpJOE-Q9MVUsIcVtwjtVMPLftoAHiW-qiOVpAa8ArKq4ihFMHqm36mADp8BzOGDnWf_1EExFgz2OFB61aGhgCvSBnh1r4wfMWL8hHYNOrEEG1p5fQ3_chuZuz9-ZV-eOkDvfSkuLEo1oxZKJ6sxkJ8boCU0vVsGPTTPA1UYN1Ag5LjX1-Uf8FOceBKdigaIT0lzvYV4fw4VVg",
        },
        {
            title: "Whispers of the Wind",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBBfFDPrNaAL_WlrUcu8R9yA1wPSbiWeALN8cuKVgaiRcYR3PstzFY7GXocacYGFUv1Pb15KvY34vY92z1fXXTIkA-B6J43CuGhv5fh4oQnqUWfcYVnghDP6VgQNFPHsh7XOhMH9mZMiQOsRxLQC8AvBN8r6E7xrzk-reCPEripL-7Y1xNx2XQUsxqoXjcw4oUBFncD8yDxJWl02IErqguO5xLOdiGvc5Y-10lABwkadpRc-I_Yvjf7RIxFFv2gcZpXp-kNLz07mfju",
        },
    ];

    const users = [
        {
            name: "Sophia Bennett",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDMJlF0-Qf2p5A4iLeo296VEZCFu5Hdl1AYIzJ04lw4Qa2puWKvX4b0Ie4XnUkYu2_S3q1bmhfuEjjpnAtQdDOeL8pU80Z3jYoi8w_I96xYku34QDitPStybuxov5jyrqfOkeZ_IQQV-7nDhfLLLBxWbVfuvLsN4s3hWDx8u-iP2UzHLNusb4TD3vDqv13k89lieg1pfBNG0pvY-TTDKWiy_KAO_J9dwiU8PYnZGYl_T4sdZI-Pkde5pTdEGqWkg2nRcnRkCuG1is0c",
        },
        {
            name: "Ethan Carter",
            image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDB2-TO8o0YW-65GrxVgsoy5kaYCSCtLPG0TQnS_nxqCvCyufe2dq9zHEkPu2bqkLwmkgcdZP1vjdbIKOrtYLZlL7pk5aUhw7KypLFDF5rhCRXPNnJGop8B6paN-WJT0utZI5lpZ7Oj1tzznVWZkYI6Ki27STvgwGvT9wQ_7dxQiEuFbF5KKraTwJjxMgvFhuXUVE_Fr5-YSpcjO48xLC7tLmYuA6mYrIE5G5fC1WZ_3GhkjMrnDm8gzlrKjH39fi6EYrCsywPNPvA-",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-900 font-semibold text-white">

            <div className="flex flex-col px-10 py-5 max-w-7xl mx-auto">
                <h2 className="text-[28px] font-semibold pb-3 pt-5">Discover</h2>

                <section className="pt-4">
                    <h3 className="text-lg font-semibold pb-2">New Releases</h3>
                    <div className="flex overflow-x-auto gap-3 py-4 no-scrollbar">
                        {releases.map((release, i) => (
                            <div key={i} className="min-w-40 flex flex-col gap-4">
                                <div
                                    className="aspect-[3/4] bg-cover bg-center rounded-xl"
                                    style={{backgroundImage: `url(${release.image})`}}
                                ></div>
                                <p className="text-base font-medium">{release.title}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="pt-4">
                    <h3 className="text-lg font-semibold pb-2">Popular Users</h3>
                    <div className="flex overflow-x-auto gap-8 py-4 no-scrollbar">
                        {users.map((user, i) => (
                            <div key={i} className="min-w-32 text-center flex flex-col gap-4">
                                <div
                                    className="aspect-square w-full bg-cover bg-center rounded-full mx-auto"
                                    style={{backgroundImage: `url(${user.image})`}}
                                ></div>
                                <p className="text-base font-medium">{user.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default DiscoverSection;
