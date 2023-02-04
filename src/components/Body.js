import React,{useState} from 'react'
import './styles/Body.css'
import copyicon from './images/copyicon.png'
import clearicon from './images/trash.png'
import uppercaseicon from './images/uppercase2.png'
import lowercaseicon from './images/lowercase4.png'
import title from './images/title.png'
export default function Body(props) {
  let [inputvalue,updateinputvalue] = useState('')
  function copy_to_clipboard(){
        let textvalue = document.getElementById('inputfield');
        textvalue.select();
        textvalue.setSelectionRange(0, 99999);//for mobile device 
        navigator.clipboard.writeText(textvalue.value);
  }
  function checksentence(signal){
    let count = 1;
    let set_sentencevalue = document.getElementById('no_sentence')
    for (let index = 0; index < inputvalue.length; index++) {
        if(inputvalue[index] === '.' && inputvalue[index+1] !== null && inputvalue[index+1] !== '' && inputvalue[index+1] !== ' '){
            count++;
        }
    }
    if(signal === 0){
      set_sentencevalue.innerHTML = count;
    }else{
      set_sentencevalue.innerHTML = '0';
    }
  }
  function pagecount(signal){
    let set_page_no = document.getElementById('page_no')
    let wordslength = inputvalue.split(' ').length
    let pagenumber = Math.ceil(wordslength/500)
    if(signal === 0){
      set_page_no.innerHTML = pagenumber;
    }else{
      set_page_no.innerHTML = '0';
    }
  }
  function checkreadingtime(signal){
    let set_read_time = document.getElementById('read_time')
    let wordslength = inputvalue.split(' ').length
    let readingrate = (wordslength*0.004).toFixed(4)
    // toFixed(3)
    if(signal === 0 ){
      set_read_time.innerHTML = readingrate+'/M'
    }else{
      set_read_time.innerHTML = 0+'/M'
    }
  } 
  
  function firstLetterUpper(theString) {
    var newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
  return newString;
  }
  function toTitleCase() {
    let newstring =  inputvalue.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
    updateinputvalue(newstring);
  }
  function clear_all(){
    pagecount(1);
    checkreadingtime(1);
    checksentence(1);
   
  }
  return (
    <>
    <div id='body_main_cont' className={`body_main_cont_${props.mode}`}>
        <div id='inputfield_container'>
            <div id='inputfield_box'>
                <p > <label htmlFor="exampleFormControlTextarea1" className={`form-label  form_label_${props.mode}`}>Text Analyzer : analyze your text here </label></p>
                <textarea  className={`textarea_${props.mode}`} cols="120" id="inputfield"  value={inputvalue} onChange={function(event){updateinputvalue(event.target.value);checksentence(0);pagecount(0);checkreadingtime(0);if(event.target.value === 0){clear_all()}}}   rows="10"></textarea>
            </div>
            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button type="button" onClick={copy_to_clipboard} className={`btn btn-outline-${props.mode === 'dark'?'secondary':'primary'} btns_${props.mode}`}><img src={copyicon} alt="load" /></button>
                <button type="button" onClick={function(){updateinputvalue(inputvalue.toUpperCase())}} className={`btn btn-outline-${props.mode === 'dark'?'secondary':'primary'} btns_${props.mode}`}><img src={uppercaseicon} alt="load" /></button>
                <button type="button"  onClick={function(){updateinputvalue(inputvalue.toLowerCase())}} className={`btn btn-outline-${props.mode === 'dark'?'secondary':'primary'} btns_${props.mode}`}><img src={lowercaseicon} alt="load" /></button>
                <button type="button" onClick={()=>{updateinputvalue('');clear_all()}} className={`btn btn-outline-${props.mode === 'dark'?'secondary':'primary'} btns_${props.mode}`}><img src={clearicon} alt="load" /></button>
                      <button type="button" class={`btn btn-outline-${props.mode === 'dark'?'secondary':'primary'} dropdown-toggle btns_${props.mode}`} data-bs-toggle="dropdown" aria-expanded="false"><img src={title} alt="" /></button>
                      <ul class={`dropdown-menu drop_down_${props.mode}`}>
                          <button type="button" onClick={function(){updateinputvalue(firstLetterUpper(inputvalue))}}  className="dropdown-item">Sentence Case</button>
                          <button type="button" onClick={toTitleCase}  className="dropdown-item">Title Case</button>
                          <button type="button" onClick={function(){updateinputvalue(inputvalue.replaceAll('  ',''))}} className="dropdown-item">Clear Space</button>
                          <button type="button" onClick={function(){updateinputvalue(inputvalue.replaceAll('\n',' '))}} className="dropdown-item">Clear line break</button>
                      </ul>
              
                  
            </div>
        </div>
        <table className={`table table_cont_${props.mode}`} >
      <tbody>
        <tr>
          <td>Total character with white space</td>
          <td>{inputvalue.length}</td>

        </tr>
        <tr>
          <td>Total character without white space</td>
          <td>{inputvalue.replaceAll(' ','').length}</td>
          
        </tr>
        <tr>
          <td>No of Words</td>
          <td>{inputvalue !== ''?inputvalue.split(' ').filter(function(num) {return num !== ''}).length:0}</td>
          
        </tr>
        <tr>
          <td colSpan="1">No of Paragaraph</td>
          <td colSpan="1">{inputvalue !== ''?inputvalue.split('\n').length:0}</td>
        
        </tr>
        <tr>
          <td colSpan="1">No of Sentence</td>
          <td id='no_sentence' colSpan="1">0</td>
        
        </tr>
        <tr>
          <td colSpan="1">No of Page</td>
          <td id='page_no' colSpan="1">0</td>
        </tr>
        <tr>
          <td colSpan="1">Average Reading Time</td>
          <td id='read_time' colSpan="1">0/m</td>
        </tr>
      </tbody>
    </table>
        <div id='front_about' className={`front_about_${props.mode}`}>
            <h4>What is Text Analyzer</h4>
            <p className='h5'>Text Analyzer – Text Analyzer tool is a word counter that provides an statistics about the words, characters, sentences, paragraphs and pages in a real time along with the number of characters without white spaces.</p>
            <p className='h5'>This handy word counting tool runs in all popular web browsers such as Firefox, Chrome, Opera, Safari, and Internet Explorer.  Text Analyzer tool is suitable to count words and characters in books, essays, novels, blogs, Twitter, Face book statuses.</p>
            <p className='h5'>Writers leverage it to improve word choice and writing style. Additionally, to assist with public speaking our tool will accurately estimate speaking time to help with preparation for class presentations, wedding speeches, or anything of the sort.</p>
            <p className='h5'>Use the word counter by typing directly into the text area or pasting your content into text you’re your statistics will display at the bottom. You can also change your content into Uppercase, Lowercase, Title case, Sentence case, Remove extra spaces and can also remove line break.</p>
        </div>
  </div>

    </>
  )
}
