import React,{useEffect} from 'react'
import "./styles/About.css"

export default function About(props) {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className={`main_body main_body_${props.mode}`}>
      <div className={`about_box about_box_${props.mode}`}>
        <h2>What is Text Analyzer</h2>
        <p className='h5 about_para'>Text Analyzer – Text Analyzer tool is a word counter that provides an statistics about the words, characters, sentences, paragraphs and pages in a real time along with the number of characters without white spaces.</p>
        <p className='h5 about_para'>This handy word counting tool runs in all popular web browsers such as Firefox, Chrome, Opera, Safari, and Internet Explorer.  Text Analyzer tool is suitable to count words and characters in books, essays, novels, blogs, Twitter, Face book statuses.</p>
        <p className='h5 about_para'>Writers leverage it to improve word choice and writing style. Additionally, to assist with public speaking our tool will accurately estimate speaking time to help with preparation for class presentations, wedding speeches, or anything of the sort.</p>
        <p className='h5 about_para'>Use the word counter by typing directly into the text area or pasting your content into text you’re your statistics will display at the bottom. You can also change your content into Uppercase, Lowercase, Title case, Sentence case, Remove extra spaces and can also remove line break.</p>
        <h2>Another Features</h2>
        <h4>Random Word Genrator</h4>
        <p className="h5 about_para">Random Words Generator- It is a word generator that will generate random words for a variety of activities or uses.  Even better it allows you to adjust the parameters of the random words to best fit your needs.</p>
        <p className="h5 about_para">The first option the tool allows you to adjust is the number of random words to be generated. Another option you have is choosing the number of words length of the randomized words.</p>
        <p className="h5 about_para">Teachers can use this tool to help create vocabulary tests or challenging students to correctly use words in a sentence. For students they can use it to study for spelling bees build their vocabulary and learn new words. Both can use it to improve creativity by using it to faster creative writing.</p>
        <h4>String Replacer</h4>
        <p className="h5 about_para">Replace text that you enter or paste into the New String text field window with the value that you have place into the Old String text field. This Replace Word feature is not case sensitive. If your put the word red into the New String text field you will replace red and not Red where it appears</p>
        <p className="h5 about_para">In the New String text field type or paste the block of text that includes the material that you want to replace. In the Old String text field enter the text that you want to replace. Click on the replace button to replace your word.</p>

      </div>

    </div>

  )
}
