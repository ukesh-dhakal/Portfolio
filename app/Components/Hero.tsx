import React from 'react'
import DarkVeil from '@/Reactbits/DarkVeil/DarkVeil'

const Hero = () => {
  return (
    <div className="hero min-h-screen text-white" id="hero">
      
        <DarkVeil />
      
      <div className='z-10 m-10'>
        <h1 className="text-7xl font-bold">Ukesh <br/> Dhakal</h1>
        <p className="py-10 text-2xl">
          Font-End Developer | UI/UX Designer | <br/>
        </p>
        <div className="flex flex-wrap justify-start gap-6 mb-8">
          <a
            href="https://instagram.com/why.is.ukesh"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-pink-500"
            aria-label="Instagram"
          >
            <svg className="w-10 h-10 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ukesh-dhakal/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-blue-600"
            aria-label="LinkedIn"
          >
            <svg className="w-10 h-10 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/>
            </svg>
          </a>
          <a
            href="https://discord.gg/ut2GSDwx"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-indigo-500"
            aria-label="Discord"
          >
            <svg className="w-10 h-10 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.073.035c-.211.375-.444.864-.608 1.249a18.524 18.524 0 0 0-5.487 0 12.51 12.51 0 0 0-.617-1.249.07.07 0 0 0-.073-.035 19.736 19.736 0 0 0-4.885 1.515.064.064 0 0 0-.03.027C.533 9.045-.32 13.579.099 18.057a.08.08 0 0 0 .028.056c2.052 1.507 4.041 2.422 5.992 3.029a.07.07 0 0 0 .078-.027c.461-.63.873-1.295 1.226-1.994a.07.07 0 0 0-.038-.098c-.652-.247-1.27-.549-1.872-.892a.07.07 0 0 1-.007-.117c.126-.094.252-.192.371-.291a.07.07 0 0 1 .073-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 0 1 .074.009c.12.099.245.197.372.291a.07.07 0 0 1-.006.117 12.298 12.298 0 0 1-1.873.892.07.07 0 0 0-.038.098c.36.699.772 1.364 1.226 1.994a.07.07 0 0 0 .078.028c1.961-.607 3.95-1.522 6.002-3.029a.07.07 0 0 0 .028-.055c.5-5.177-.838-9.673-3.548-13.661a.061.061 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"/>
            </svg>
          </a>
          <a
            href="mailto:dhakalukesh890@proton.me"
            className="transition-transform transform hover:scale-125 hover:text-red-500"
            aria-label="Mail"
          >
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/>
            </svg>
          </a>
          <a
            href="https://github.com/ukesh-dhakal"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125 hover:text-gray-800"
            aria-label="GitHub"
          >
            <svg
              className="w-10 h-10 md:w-10 md:h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.867 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.135 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
            </svg>
          </a>
          <a
            href="https://open.spotify.com/user/317dtavgsxwwm5jvkviexkhityay"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125 hover:text-green-500"
            aria-label="Spotify"
          >
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.371 0 0 5.371 0 12c0 6.627 5.371 12 12 12s12-5.373 12-12c0-6.629-5.371-12-12-12zm5.297 17.438c-.221.363-.691.477-1.055.256-2.891-1.77-6.543-2.168-10.826-1.18-.414.094-.832-.162-.926-.574-.094-.414.162-.832.574-.926 4.674-1.055 8.684-.613 11.863 1.309.363.221.477.691.256 1.115zm1.512-2.646c-.277.447-.857.592-1.305.316-3.309-2.045-8.361-2.637-12.285-1.438-.5.148-1.025-.137-1.172-.637-.148-.5.137-1.025.637-1.172 4.418-1.314 9.965-.668 13.707 1.646.447.277.592.857.316 1.285zm.137-2.771c-3.965-2.361-10.498-2.582-14.211-1.406-.604.188-1.252-.137-1.441-.74-.188-.604.137-1.252.74-1.441 4.168-1.293 11.285-1.045 15.746 1.582.553.33.729 1.037.398 1.59-.33.553-1.037.729-1.59.398z"/>
            </svg>
          </a>
        </div>
        <p className="text-2xl">
          Passionate for developing modern responsive <br/> web applications and technology .
        </p>
        <a className='btn btn-accent mt-8 p-7 text-xl' href="https://drive.google.com/file/d/1Zc3pPql1UDJbWZnJ0EPlxm3uJfL-TEbH/view?usp=sharing">Download Resume</a>
      </div>
    </div>
  )
}

export default Hero
