
import React, { useState } from 'react'

const Counter = () => {

  const [text,setText] = useState("");
  const [word, setWord] = useState(0);

  const countWord = (txt) => {
    // Split the text by whitespace characters
    const words = txt.split(/\s+/);
    console.log(words);
    // Filter out empty words
    const nonEmptyWords = words.filter((word) => word.trim() !== '');
    console.log(nonEmptyWords);
    // Return the count of non-empty words
    setWord(nonEmptyWords.length);
}

  return (
    <div className='counter-container'>

        <div className="numbers-holder">

          <div className="counter-box">
            <p>📝Word</p>
            <p className='count'>
              { text.length>0 ? word : null}
            </p>
          </div>

          <div className="counter-box">
            <p>✍️Letter</p>
            <p className='count'>{ text.length>0 ? text.split(" ").join("").length : null}</p>
          </div>

          <div className="counter-box">
            <p>📜Paragraph</p>
            <p className='count'>
            { text.length>0 ? text.split(/\r\n|\r|\n/).length : null}
            </p>
          </div>

        </div>

        <div className="text-box">
            <textarea className='textarea' placeholder='Enter/paste Your Text Here'
            value={text}
            onChange={ (e) =>{
              setText(e.target.value);
              countWord(e.target.value);
            }}></textarea>
        </div>

        <div className="button-box">
            <button
            onClick={()=>{
              setText(text.toUpperCase());
            }}
            >Click to UpperCase</button>
            <button
            onClick={() => {
              setText(text.toLocaleLowerCase())
            }}
            >Click to LowerCase</button>
        </div>

        {text.length > 0 ?
                (
                    <div className='preview'>
                        <h4>Preview</h4>
                        <p>{text}</p>
                    </div>
                )
                : ' '}
    </div>
  )
}

export default Counter
