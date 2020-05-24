import React, {  useState } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import './styles.css';


export default function MarkdownEditor(){
  const [markdown, setMarkdown] = useState('');

  const handleChange = e => {
    setMarkdown(e.target.value);
  }

  return(
    <div className="app">
      <textarea onChange={handleChange} value={markdown}/>
      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );


}

ReactDOM.render(<MarkdownEditor />,document.getElementById('root'));

