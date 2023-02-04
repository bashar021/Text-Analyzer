import React,{useState} from 'react'
// const txtHistory = window.UndoRedojs(5);
// const jsUndoRedo = require("js-undo-redo")

// import React ,{use} from 'react';

export default function Experiments() {
    
    let [inputvalue,updateinputvalue] = useState("")
    let [character, setCharcater] = useState("");
    const setvalue = function(td){
        let textvalue = document.getElementById('txt');
        updateinputvalue(textvalue.value)
    }
    const  copyclipboard = function(){
        let textvalue = document.getElementById('txt');
        textvalue.select();
        textvalue.setSelectionRange(0, 99999);//for mobile device 
        navigator.clipboard.writeText(textvalue.value);
        alert('text has been copied');
    }
    function checksentence(){
        let count = 1;
        for (let index = 0; index < inputvalue.length; index++) {
            if(inputvalue[index] === '.' && inputvalue[index+1] !== null && inputvalue[index+1] !== '' && inputvalue[index+1] !== ' '){
                count++;
            }
            
        }
        console.log(count+" sentences")
    }
    function checkreadingtime(){
        let wordslength = inputvalue.split(' ').length
        let readingrate = (wordslength*0.004)
        console.log(readingrate+' minnute')
    }
    function pagecount(){
        let wordslength = inputvalue.split(' ').length
        let pagenumber = Math.ceil(wordslength/500)
        console.log(pagenumber)


    }
    // let refinewords = inputvalue.replaceAll('  ','')
   
    function clr_doublespace(){
        let refinewords = inputvalue.replaceAll('\n',' ')
        console.log("this is original "+ inputvalue)
        console.log(refinewords)
    }
    function firstLetterUpper(theString) {
        var newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
      return newString;
    }
    
    function convertToSentenceCase() {
      var newString = firstLetterUpper(inputvalue);
     
      console.log(newString)
    }
    // function toTitleCase() {
    //     let newstring = inputvalue.toLowerCase().split(' ').map(function (word) {
    //       return (word.charAt(0).toUpperCase() + word.slice(1));
    //     }).join(' ');
    //     console.log(inputvalue)
    //     console.log(newstring)
    // }
    function toTitleCase() {
        let newstring =  inputvalue.replace(
          /\w\S*/g,
          function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
        
        console.log(inputvalue)
        console.log(newstring)
      }
  return (
        <>
        <div>
            <h1>This is a word counter </h1>
            <textarea name="" id="txt" onChange={setvalue}  cols="30" rows="10"></textarea>
            <div className="text-center">
                <button type="button" onClick={copyclipboard} className="btn btn-primary">Copy To Clipboard</button>
                <button type="button" onClick={function(){console.log(inputvalue.length)}} className="btn btn-primary">count char with space</button>
                <button type="button" onClick={function(){console.log(inputvalue.replaceAll(' ','').length)}} className="btn btn-primary">count char with space</button>
                <button type="button" onClick={function(){console.log(inputvalue.split(' ').length)}} className="btn btn-primary">count words</button>
                <button type="button" onClick={function(){console.log(inputvalue.toUpperCase())}} className="btn btn-primary">Uppercase</button>
                <button type="button" onClick={function(){console.log(inputvalue.toLowerCase())}} className="btn btn-primary">Lowercase</button>
                <button type="button" onClick={function(){document.getElementById('txt').value = '';updateinputvalue('')}} className="btn btn-primary">Clear text</button>
                <button type="button" onClick={function(){console.log(inputvalue.split('\n').length)}} className="btn btn-primary">check Para</button>
                <button type="button" onClick={checksentence} className="btn btn-primary">check sentence</button>
                <button type="button" onClick={checkreadingtime} className="btn btn-primary">reading time</button>
                <button type="button" onClick={pagecount} className="btn btn-primary">Page Count</button>
                <button type="button" onClick={toTitleCase} className="btn btn-primary">Clear all extra space </button>

            </div>
        </div>
        </>
  )
}
// export default experiments;
