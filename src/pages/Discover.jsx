// // GET https://tramaback-api.up.railway.app/movies/latest
//
// import React, { useEffect, useState } from "react";
//
// const DiscoverSection = () => {
//     const [releases, setReleases] = useState([]);
//
//     useEffect(() => {
//         fetch("https://tramaback-api.up.railway.app/movies/popular/week")
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log("Respuesta de la API:", data);
//                 if (Array.isArray(data)) {
//                     setReleases(data);
//                 } else if (Array.isArray(data.movies)) {
//                     setReleases(data.movies);
//                 } else {
//                     setReleases([]);
//                 }
//             })
//             .catch((err) => console.error(err));
//     }, []);
//
//     return (
//         <div className="min-h-screen bg-gray-900 font-semibold text-white">
//             <div className="flex flex-col px-10 py-5 max-w-7xl mx-auto">
//                 <h2 className="text-[28px] font-semibold pb-3 pt-5">Discover</h2>
//                 <section className="pt-4">
//                     <h3 className="text-lg font-semibold pb-2">Nuevos Lanzamientos</h3>
//                     <div className="flex overflow-x-auto gap-3 py-4 no-scrollbar">
//                         {releases.map((release, i) => (
//                             <div key={i} className="min-w-40 flex flex-col gap-4">
//                                 <div
//                                     className="aspect-[3/4] bg-cover bg-center rounded-xl"
//                                     style={{ backgroundImage: `url(${release.posterUrl})` }}
//                                 ></div>
//                                 <p className="text-base font-medium">{release.title}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// };
//
// export default DiscoverSection;

import React, { useEffect, useState } from "react";

const DiscoverSection = () => {
    const [releases, setReleases] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://tramaback-api.up.railway.app/movies/popular/week")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setReleases(data);
                } else if (Array.isArray(data.movies)) {
                    setReleases(data.movies);
                } else {
                    setReleases([]);
                }
            })
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        fetch("https://tramaback-api.up.railway.app/trama/users")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setUsers(data);
                } else if (Array.isArray(data.users)) {
                    setUsers(data.users);
                } else {
                    setUsers([]);
                }
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 font-semibold text-white">
            <div className="flex flex-col px-10 py-5 max-w-7xl mx-auto">
                <h2 className="text-[28px] font-semibold pb-3 pt-5">Discover</h2>
                <section className="pt-4">
                    <h3 className="text-lg font-semibold pb-2">Nuevos Lanzamientos</h3>
                    <div className="flex overflow-x-auto gap-3 py-4 no-scrollbar">
                        {releases.map((release, i) => (
                            <div key={i} className="min-w-40 flex flex-col gap-4">
                                <div
                                    className="aspect-[3/4] bg-cover bg-center rounded-xl"
                                    style={{ backgroundImage: `url(${release.posterUrl})` }}
                                ></div>
                                <p className="text-base font-medium">{release.title}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="pt-8">
                    <h3 className="text-lg font-semibold pb-2">Usuarios</h3>
                    <div className="flex overflow-x-auto gap-3 py-4 no-scrollbar">
                        {users.map((user, i) => (
                            <div key={i} className="min-w-40 flex flex-col gap-2 bg-gray-800 p-4 rounded-xl">
                                <p className="text-base font-medium">{user.name}</p>
                                <p className="text-sm text-gray-400">{user.email}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DiscoverSection;