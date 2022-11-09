import './meme.css'
export default function Meme() {
  return (
    <main>
      <form action='' className='form'>
        <input type='text' className='meme--input' placeholder='Top text'/>
        <input type='text' className='meme--input' placeholder='Bottom text'/>
        <button className='meme--btn'>Get a new meme image ✨</button>
      </form>
    </main>
  )
}
