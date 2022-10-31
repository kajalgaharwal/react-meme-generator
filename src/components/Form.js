import React, { useEffect, useState } from 'react';
export default function Form() {
  const [memeTopText, setMemeTopText] = useState('');
  const [memeBottomText, setMemeBottomText] = useState('');
  const [memeImage, setMemeImage] = useState('https://i.imgflip.com/1bij.jpg');

  const [allMemes, setAllMemes] = useState([]);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMemeImage(url);
    setMemeTopText('');
    setMemeBottomText('');
  }
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === 'topText') {
      setMemeTopText(value);
    } else if (name === 'bottomText') {
      setMemeBottomText(value);
    }
  }
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes));
  }, []);

  return (
    <main>
      <div className='form my-3'>
        <input
          type='text'
          className='form-control'
          name='topText'
          placeholder='Enter top text of meme'
          value={memeTopText}
          onChange={handleChange}
        />
        <input
          type='text'
          className='form-control'
          name='bottomText'
          placeholder='Enter bottom text of meme'
          value={memeBottomText}
          onChange={handleChange}
        />

        <button
          type='button'
          className='btn btn-primary'
          onClick={getMemeImage}>
          Get a new meme Image
        </button>
      </div>
      <div className='memeImageContainer'>
        <img id='memeImage' src={memeImage} alt='' width='100%' height='100%' />
        <h4 className='memeTopText'>{memeTopText}</h4>
        <h4 className='memeBottomText'>{memeBottomText}</h4>
      </div>
    </main>
  );
}
