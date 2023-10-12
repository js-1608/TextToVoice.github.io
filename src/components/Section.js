import '../App.css';

const Section=({text,setText,convertTextToSpeech})=>{
    
return(
   
<div className="section-container">
    <textarea
        value={text}
        onChange={(e)=>setText(e.target.value)}

    />
    <button
    className='btn-convert'
    onClick={()=>convertTextToSpeech()}
    >
        convert to speech</button>
</div>
    
)

}
export default Section;