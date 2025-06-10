<!DOCTYPE html>
<html lang="es"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Trama Social</title>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<style>
    body {
      font-family: 'Roboto', sans-serif;
      background-color: #f3f4f6;
    }
    .dropdown-menu {
      display: none;
    }
    .dropdown:hover .dropdown-menu {
      display: block;
    }
  </style>
</head>
<body class="bg-gray-100">
<header class="bg-white shadow-md sticky top-0 z-50">
<div class="container mx-auto px-4 py-3 flex items-center justify-between">
<div class="flex items-center">
<span class="material-icons text-red-600 text-3xl mr-2">movie_filter</span>
<h1 class="text-2xl font-bold text-gray-800">TRAMA</h1>
<button class="ml-6 bg-red-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-red-700 transition duration-300">
<span class="material-icons mr-2">add</span>
          Crear Publicación
          <span class="material-icons ml-2">arrow_drop_down</span>
</button>
</div>
<div class="flex-1 max-w-xl ml-6">
<div class="relative">
<span class="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">search</span>
<input class="w-full bg-gray-100 border border-gray-300 rounded-full py-2 px-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Buscar en Trama" type="text"/>
</div>
</div>
<div class="flex items-center space-x-4">
<button class="text-gray-600 hover:text-red-600 transition duration-300">
<span class="material-icons text-2xl">chat_bubble_outline</span>
</button>
<button class="text-gray-600 hover:text-red-600 transition duration-300">
<span class="material-icons text-2xl">notifications_none</span>
</button>
<button class="text-gray-600 hover:text-red-600 transition duration-300">
<span class="material-icons text-2xl">add_circle_outline</span>
</button>
<div class="relative dropdown">
<button class="flex items-center text-gray-700 hover:text-red-600 transition duration-300">
<img alt="Avatar de Danieloide" class="w-8 h-8 rounded-full mr-2 border-2 border-red-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkodHpMEQenfA8z8Jwd4JlzuI0rVOj1S7x8k-6vI6Xplui3xe6J0dTUmmpaWQq7QPPxCOfzXmmfS8Pb94oeuw2yqbyu_tSZY1zA95w_yLoPq2juowML29AYxP-BaADFsA5iN72rZfHTpO8zia7tcnEOAPDAWBv3JTy7Ka22ffpyUtDBCPCPYGfmOXKOW0GDPZ8VnQMahB0jS8sRqAk8Z_vPSyTiNx7iVgaKNsAANb2kwJYY7Q6w-JnxSpVBRYUP3mqhEaSJQh91jTN"/>
<span class="font-medium text-sm">Danieloide</span>
<span class="material-icons text-gray-500">arrow_drop_down</span>
</button>
<div class="dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-20 py-1">
<a class="block px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white" href="#">Mi Perfil</a>
<a class="block px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white" href="#">Mis Listas</a>
<a class="block px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white" href="#">Configuración</a>
<hr class="my-1 border-gray-200"/>
<a class="block px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white" href="#">Cerrar Sesión</a>
</div>
</div>
</div>
</div>
</header>
<main class="container mx-auto px-4 py-6 grid grid-cols-12 gap-6">
<aside class="col-span-3 sticky top-20 h-screen">
<nav class="bg-white p-4 rounded-lg shadow-md">
<h2 class="text-lg font-semibold text-gray-800 mb-3">Navegación</h2>
<ul>
<li><a class="flex items-center py-2 px-3 text-gray-700 hover:bg-red-100 hover:text-red-600 rounded-md transition duration-300" href="#"><span class="material-icons mr-3">home</span>Inicio</a></li>
<li><a class="flex items-center py-2 px-3 text-gray-700 hover:bg-red-100 hover:text-red-600 rounded-md transition duration-300" href="#"><span class="material-icons mr-3">movie</span>Películas</a></li>
<li><a class="flex items-center py-2 px-3 text-gray-700 hover:bg-red-100 hover:text-red-600 rounded-md transition duration-300" href="#"><span class="material-icons mr-3">tv</span>Series</a></li>
<li><a class="flex items-center py-2 px-3 text-gray-700 hover:bg-red-100 hover:text-red-600 rounded-md transition duration-300" href="#"><span class="material-icons mr-3">list</span>Mis Listas</a></li>
<li><a class="flex items-center py-2 px-3 text-gray-700 hover:bg-red-100 hover:text-red-600 rounded-md transition duration-300" href="#"><span class="material-icons mr-3">explore</span>Explorar</a></li>
</ul>
</nav>
<div class="bg-white p-4 rounded-lg shadow-md mt-6">
<h2 class="text-lg font-semibold text-gray-800 mb-3">Listas Populares</h2>
<ul>
<li><a class="text-sm text-gray-600 hover:text-red-500" href="#">Películas para llorar</a></li>
<li><a class="text-sm text-gray-600 hover:text-red-500" href="#">Comedias románticas</a></li>
<li><a class="text-sm text-gray-600 hover:text-red-500" href="#">Clásicos del terror</a></li>
</ul>
</div>
</aside>
<div class="col-span-6">
<div class="bg-white p-4 rounded-lg shadow-md mb-6">
<div class="flex items-center">
<img alt="Avatar de usuario" class="w-12 h-12 rounded-full mr-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMgi9n-3Z7ZNLFVSkkgDgG43urU_bGwfbOE75cMThnMFpx1oVKP3GgipIsAcfdk4bK41pIcU7Fq5I9r6yk-avukDiBWINacHcv_OUObBEHn0JZeMKLirar7x_n1sWNHsaJ8RLLgU9FQdmxEqMVOYrX99G0zD_HATDt0LbqmRnZx_j18GDhWtYYWwd-Np3pX5V9oXxMvYb_rsYVR2V2BRTFLFl7pXxBOJC8LDpz22CJAOKT1-fvshvB3W6zS5CfF0TvWojhGsnvUmr2"/>
<input class="w-full bg-gray-100 border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Crear Publicación" type="text"/>
<button class="ml-3 text-gray-500 hover:text-red-600">
<span class="material-icons text-3xl">image</span>
</button>
<button class="ml-2 text-gray-500 hover:text-red-600">
<span class="material-icons text-3xl">gif_box</span>
</button>
</div>
</div>
<div class="bg-white p-4 rounded-lg shadow-md mb-6">
<div class="flex items-center justify-between mb-4">
<div class="flex space-x-2">
<button class="bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium text-sm flex items-center hover:bg-red-200 transition duration-300">
<span class="material-icons mr-1 text-lg">movie</span>Películas
            </button>
<button class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium text-sm flex items-center hover:bg-gray-200 transition duration-300">
<span class="material-icons mr-1 text-lg">tv</span>Series
            </button>
<button class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium text-sm flex items-center hover:bg-gray-200 transition duration-300">
<span class="material-icons mr-1 text-lg">new_releases</span>New
            </button>
<button class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium text-sm flex items-center hover:bg-gray-200 transition duration-300">
<span class="material-icons mr-1 text-lg">trending_up</span>Top
            </button>
<button class="bg-gray-100 text-gray-700 px-3 py-2 rounded-full hover:bg-gray-200 transition duration-300">
<span class="material-icons text-lg">more_horiz</span>
</button>
</div>
<button class="bg-gray-100 text-gray-700 px-3 py-2 rounded-md flex items-center hover:bg-gray-200 transition duration-300 text-sm">
<span class="material-icons text-lg">sort</span>
</button>
</div>
<div class="border-t border-gray-200 pt-4">
<div class="flex items-start">
<div class="flex flex-col items-center mr-3 text-gray-500">
<button class="hover:text-red-500"><span class="material-icons">arrow_upward</span></button>
<span class="text-sm font-bold">15</span>
<button class="hover:text-blue-500"><span class="material-icons">arrow_downward</span></button>
</div>
<div class="flex-1">
<div class="flex items-center mb-1">
<img alt="Avatar de Marie_bug" class="w-8 h-8 rounded-full mr-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLe59xQ5MDl6HbJdwnDq2uQaK4mCEYBWb3vqHjW6STFTKbgsNALRy8di5uQTvy2rNiYyyvIdaovEyzpvQmUt8TvndWu2ipIzgGvjUUDzynLTEH-2P4KSBgrmN8qgQ5uraTGiahTYPAeb4uskX1izvyYByBgt8n9mQ1AQrGweLqpebiyjmcTA6XhxuAQG-wPcqJMUTDPNvCZ6Gn751gsCEKgu1MMXdIZxFSOcpoG0DeM5Njbl0Q1HTyKxxWeuyVdRpqwx1HEa-fnZQY"/>
<div>
<span class="font-semibold text-sm text-gray-800">Marie_bug</span>
<span class="text-xs text-gray-500 ml-1">· Hace 22 Horas</span>
</div>
</div>
<h3 class="text-lg font-semibold text-gray-900 mb-1">Lucy (2014)
                <span class="ml-2 text-yellow-400">
<span class="material-icons text-base">star</span>
<span class="material-icons text-base">star</span>
<span class="material-icons text-base">star</span>
<span class="material-icons text-base">star_border</span>
<span class="material-icons text-base">star_border</span>
</span>
</h3>
<p class="text-gray-700 text-sm leading-relaxed">
                Muy buena película. Me encantó. Scarlett Johansson es una gran actriz. Los efectos visuales son muy buenos. La trama es buena. El jefe de la mafia coreana es re despiadado sin ningún tipo de remordimientos. Sólo le importa sus intereses.
                Morgan Freeman es también un gran actor. Personifica muy bien su personaje de científico. La califico a la película con un 10.
              </p>
<div class="mt-3 flex items-center space-x-4 text-gray-500">
<button class="flex items-center text-sm hover:text-red-600 transition duration-300">
<span class="material-icons mr-1 text-lg">chat_bubble_outline</span> 2 comentarios
                </button>
<button class="flex items-center text-sm hover:text-red-600 transition duration-300">
<span class="material-icons mr-1 text-lg">share</span> Compartir
                </button>
<button class="flex items-center text-sm hover:text-red-600 transition duration-300">
<span class="material-icons mr-1 text-lg">bookmark_border</span> Guardar
                </button>
<button class="text-sm hover:text-red-600 transition duration-300">
<span class="material-icons text-lg">more_horiz</span>
</button>
</div>
</div>
</div>
</div>
<div class="border-t border-gray-200 pt-4 mt-6">
<div class="flex items-start">
<div class="flex flex-col items-center mr-3 text-gray-500">
<button class="hover:text-red-500"><span class="material-icons">arrow_upward</span></button>
<span class="text-sm font-bold">3</span>
<button class="hover:text-blue-500"><span class="material-icons">arrow_downward</span></button>
</div>
<div class="flex-1">
<div class="flex items-center mb-1">
<img alt="Avatar de Aang" class="w-8 h-8 rounded-full mr-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-WP4UGPYAkA0PhIdNPW5HlFLvrjfh5qCocuprhlB4rCBxTAIEt5g6MtG4-NYX-fVh2Fe0ae8fCa9a6w9bv6bhXccnsUxehiVNyckiaJvaJc8KEhHqLMcKelfO2khcI9yVw2EwFzMYkb8vsm_ubXvl-Lm9TGKHxYhODE878vGAI9gnt-W7-c2Z43ThW44CmMrzw46MiIj-f8pUVygKUlFUoECcsaqfD8IKa87WG_CEubIqAatdk97Rc3P3ZFjQ6S_24VhVRUaLpZIl"/>
<div>
<span class="font-semibold text-sm text-gray-800">Aang_</span>
<span class="text-xs text-gray-500 ml-1">· Hace 4 días</span>
</div>
</div>
<h3 class="text-lg font-semibold text-gray-900 mb-2">La La Land (2016)
                <span class="ml-2 text-yellow-400">
<span class="material-icons text-base">star</span>
<span class="material-icons text-base">star</span>
<span class="material-icons text-base">star</span>
<span class="material-icons text-base">star</span>
<span class="material-icons text-base">star_half</span>
</span>
</h3>
<img alt="Póster de la película La La Land" class="rounded-lg mb-3 w-full max-w-md mx-auto shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXT7KCoRQgrseIVr_E1g5EtS9xN4PLjk88Qs5ZpOTODdbyt7j2BaSsQhnjvBaSr1A27LrEzlLeRPABQcM3QJUD5r2c6jIwDVOPDgUWX8iZ1lId_F1NsiKdyw5yPm9lSF2MOmhknkOy6gPINzMWanZUc7kjAS6gijCURro8N9fLDzXfzQ1Mzb-EMV9Lh9kvHKQUOHz7VF1D92tur2xHMSy0BnmNkyQce7w-wHw_jXAX4wvKf-lKkDQFMoibqWBgR3o4vrICquPxM-S4"/>
<div class="mt-3 flex items-center space-x-4 text-gray-500">
<button class="flex items-center text-sm hover:text-red-600 transition duration-300">
<span class="material-icons mr-1 text-lg">chat_bubble_outline</span> 2 comentarios
                </button>
<button class="flex items-center text-sm hover:text-red-600 transition duration-300">
<span class="material-icons mr-1 text-lg">share</span> Compartir
                </button>
<button class="flex items-center text-sm hover:text-red-600 transition duration-300">
<span class="material-icons mr-1 text-lg">bookmark_border</span> Guardar
                </button>
<button class="text-sm hover:text-red-600 transition duration-300">
<span class="material-icons text-lg">more_horiz</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
<aside class="col-span-3 sticky top-20 h-screen">
<div class="bg-white p-4 rounded-lg shadow-md">
<h2 class="text-lg font-semibold text-gray-800 mb-3">Tendencias</h2>
<div class="space-y-3">
<div>
<span class="text-xs text-gray-500">Película tendencia</span>
<p class="font-medium text-gray-800 hover:text-red-600 cursor-pointer">Dune: Part Two</p>
<span class="text-xs text-gray-500">15.2k Publicaciones</span>
</div>
<div>
<span class="text-xs text-gray-500">Serie tendencia</span>
<p class="font-medium text-gray-800 hover:text-red-600 cursor-pointer">The Bear</p>
<span class="text-xs text-gray-500">12.8k Publicaciones</span>
</div>
<div>
<span class="text-xs text-gray-500">Actor tendencia</span>
<p class="font-medium text-gray-800 hover:text-red-600 cursor-pointer">Anya Taylor-Joy</p>
<span class="text-xs text-gray-500">10.1k Publicaciones</span>
</div>
</div>
<a class="text-sm text-red-600 hover:underline mt-4 block" href="#">Mostrar más</a>
</div>
<div class="bg-white p-4 rounded-lg shadow-md mt-6">
<h2 class="text-lg font-semibold text-gray-800 mb-3">A quién seguir</h2>
<div class="space-y-4">
<div class="flex items-center justify-between">
<div class="flex items-center">
<img alt="Avatar de usuario sugerido" class="w-10 h-10 rounded-full mr-3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjbNeLiVn-7xEcUFuWFFLWqmQCVQUDSkVH0W57SFhmriHraKmh05rnvkMUbPAgZh6fIKqZBbpNxJ0_J53033B36GWTrfZb1fQJYok2wmFurrSnpE5uCkSnCAu4tA_GjNNEZbrKV8s9gGio6xcyrVG-5oOLPor1ROF6OH375SvYdDIBAbsBzxcfbxH9TScW-KfRYei6OmDAxv1OH_NF0TJr4Ow-m089HP8xw0MyhxgCl0rtBno1lAxiIrAoVFi3gz4oyoUGb6CEiSI_"/>
<div>
<p class="font-medium text-sm text-gray-800">CinefiloX</p>
<p class="text-xs text-gray-500">@cinefilo_x</p>
</div>
</div>
<button class="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-red-600 transition duration-300">Seguir</button>
</div>
<div class="flex items-center justify-between">
<div class="flex items-center">
<img alt="Avatar de usuario sugerido" class="w-10 h-10 rounded-full mr-3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxT0Ln7xPPD0JCDYiO7GJbB1IZcLrYIMF6J3of2QZz9mKV6MgcajT1lvBBqGfJAten7PnDuGFQPF8S4pc78q6EgQs8YYnYcTQH-mzdHUoD8khUvTLdf-S0tnbSPoNy8CDYHt6WuaN82rRxKMapdBzrOowiBGOJX6hgHpN8cW9THh1W68xlgPCyVES3iuWEekVc5SMi24M_Dtg7UnpyERwDHMc9ddCuQ7Z6OkgHYn7Yap9Zs202DpKX-WsBgMrxnRdc6fmBHOMyjDKp"/>
<div>
<p class="font-medium text-sm text-gray-800">SeriesWatcher</p>
<p class="text-xs text-gray-500">@series_fan</p>
</div>
</div>
<button class="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-red-600 transition duration-300">Seguir</button>
</div>
</div>
<a class="text-sm text-red-600 hover:underline mt-4 block" href="#">Mostrar más</a>
</div>
</aside>
</main>

</body></html>
