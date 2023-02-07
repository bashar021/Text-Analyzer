
import React,{useState,useEffect} from 'react'
import './styles/Randomwords.css'
var randomWords = require('random-words');
export default function Randomwords(props) {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    let [mywordlist,updatemywordlist] = useState([])
    let [NoWords,updatenowords] = useState(5)
    let [WordsLength,updatewordslength] = useState(5)
    let [Wordsarr,updatewordsarr] = useState([])
    function updatemylist(myword){
        updatemywordlist(mywordlist.concat(myword))
    }
    function genrate_random_words(){
        let genratewords = randomWords({ exactly: parseInt(NoWords),maxLength: parseInt(WordsLength)})
        updatewordsarr(genratewords)
    }
    
  return (
    <div className={`main_body pt-5 main_body_${props.mode}`}>
        <div className={`material_container material_container_${props.mode}`}>
            <h2 className={`title title_${props.mode}`}>Random Word Generator </h2>
            <div class={`input-group mb-3 input_group_${props.mode}`}>
                <span class="input-group-text">No. of Words</span>
                <input type="number" min="0" max="10"  onChange={function(event){if(event.target.value !== 0){updatenowords(event.target.value)}else{updatenowords(5)};}} class="form-control" placeholder='deafault'/>
                <span class="input-group-text">Words Max Length</span>
                <input type="number" min="0" max="10" onChange={function(event){if(event.target.value!== 0){updatewordslength(event.target.value)}else{updatewordslength(5)}}} class="form-control" placeholder='deafault' aria-label="Server"/>
                <button type="button" onClick={genrate_random_words} class={`btn btn-${props.mode === 'dark'?'dark':'secondary'} ms-3`}>Genrate</button>
            </div>
            <div className={`result_container result_container_${props.mode}`}>
                <p style={{color:props.mode === 'dark'?' rgb(177, 174, 174)':'black'}} id='notice' >Click on words to add in your list </p>
                <div className={`genrated_words genrated_words_${props.mode}`}>
                    {Wordsarr !== 0?Wordsarr.map((words,index)=>{return <p className='ms-3 px-3 mb-3' onClick={function(event){updatemylist(event.target.innerText)}} key={index}>{words}</p>}):<span style={{display:'none'}}>.</span>}
                </div>
                <p style={{color:props.mode === 'dark'?' rgb(177, 174, 174)':'black'}}>Your Word List</p>
                <div className={`your_list your_list_${props.mode}`}>
                   
                    {mywordlist.length > 0?mywordlist.map((word,index)=>{return <p key={index} className='ms-3 px-3 mt-3 mb-3'>{word}</p>}): <span style={{display:'none'}} >.</span>}
                </div>
                <button type="button" onClick={function(){updatemywordlist([])}} class={`btn btn-${props.mode === 'dark'?'dark':'secondary'} mt-3`}>Clear</button>
                <button type="button" onClick={function(){navigator.clipboard.writeText(mywordlist);}} class={`btn btn-${props.mode === 'dark'?'dark':'secondary'} mt-3 ms-3`}>Copy</button>
            </div>
        </div>
        <div className={`about_randomword about_randomword_${props.mode}`}>
            <h2>What is word Generator  </h2>
            <p className='h5'>Random word generator is another feature of a Text Analyzer which generates random words for you. Random words provide by a Random Word Generator is not a meaningless it will be always meaning full which is a best part of the Random word generator.</p>
            <p className='h5'>It is very simple to use it you have to select the No. of words length and No. character length of words. You can also add your selective words into your word list and can generate more words and can copy the list of your word list.</p>
           
        </div>
    </div>
  )
}

