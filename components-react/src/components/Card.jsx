import React from 'react'

function Card( {name = "Doraemon", post="Saviour",state= "Dholakpur"}   ) {
    return (
      <div>
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          <img class="w-24 h-24 rounded-full mx-auto" src="https://c4.wallpaperflare.com/wallpaper/787/854/424/jujutsu-kaisen-satoru-gojo-anime-boys-anime-girls-hd-wallpaper-preview.jpg" alt="" width="384" height="512" />
          <div class="pt-6 text-center space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">
                {name}
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                {post}, {state}
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    );
  }


  export default Card