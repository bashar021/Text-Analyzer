import React,{useState} from 'react'
import "./styles/Replacetext.css"

export default function Replacetext(props) {
    
    let [userinput,updateuser] = useState('')
    function replace(){
        let new_string = document.getElementById('new_string');
        let old_string = document.getElementById('old_string');
        let update_string = userinput.replaceAll(old_string.value,new_string.value)
        updateuser(update_string);
    }
  return (
    <div className={`body_replacetext body_replacetext_${props.mode}`} >
        <div className={`replacetext_container replacetext_container_${props.mode}`}>
            <h2>Word Replacer</h2>
            <textarea className={`textfield textfield_${props.mode}`} value={userinput} onChange={function(event){updateuser(event.target.value)}} name="" id="user_text_area" cols="100" rows="10"></textarea>
            <div class="input-group input_box">
                <span class={`input-group-text input_label input_label_${props.mode}`} >New String</span>
                <input type="text" id='new_string' class={`form-control replace_input replace_input_${props.mode}`}  aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group input_box">
                <span class={`input-group-text input_label input_label_${props.mode}`} id="basic-addon1">Old String</span>
                <input type="text" id='old_string' class={`form-control replace_input replace_input_${props.mode}`}  aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <button type="button" onClick={replace} class={`btn replace_btn_group btn-${props.mode === 'dark'?'secondary':'primary'}`}>Replace</button>
            <button type="button"  onClick={function(){navigator.clipboard.writeText(userinput)}}  class={`btn replace_btn_group btn-${props.mode === 'dark'?'secondary':'primary'}`}>Copy</button>
            <button type="button" onClick={()=>{updateuser('');document.getElementById('new_string').value = '';document.getElementById('old_string').value = ''}} class={`btn replace_btn_group btn-${props.mode === 'dark'?'secondary':'primary'}`}>Clear</button>
           
        </div>
        <div className={`about_randomword about_randomword_${props.mode}`}>
            <h2>Replace Word</h2>
            <p className="h5">Replace text that you enter or paste into the New String text field window with the value that you have place into the Old String text field. This Replace Word feature is not case sensitive. If your put the word red into the New String text field you will replace red and not Red where it appears</p>
            <p className="h5">In the New String text field type or paste the block of text that includes the material that you want to replace. In the Old String text field enter the text that you want to replace. Click on the replace button to replace your word.</p>
        </div>
    </div>
  )
}
