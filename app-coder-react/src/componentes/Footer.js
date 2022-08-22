import React from 'react'
import './styles/footer.css'

const footer = () => {
  return (
    <div className='footer'>
        <p>
            Trabajo propio, sin fines de lucro para el aprendizaje de ReactJs y poder seguir aprendiendo cada vez mas.
        </p>

        
        <div className="reds">
            <a href="https://www.instagram.com/" target="_blanck">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="44"
                    height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#fd0061" fill="none" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
            </a>
            <a href="https://www.facebook.com/" target="_blanck">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="44"
                    height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#00abfb" fill="none" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
            </a>

            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="44"
                    height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#00b341" fill="none" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
            </a>
        </div>
    </div>
  )
}

export default footer