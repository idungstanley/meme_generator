import './header.css'

export default function Header() {
  return (
    <header className='header'>
      <img src='./troll-face.png' alt='img not found'  className='header--img'/>
      <h2 className='header--title'>Meme Generator</h2>
      <h4 className='header--project'>React Course - Project 3</h4>
    </header>
  )
}
