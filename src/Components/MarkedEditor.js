import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom'

marked.setOptions({
  gfm: true,
  breaks: true,
});

function App() {
  return(
    <div>
      <h1>Markdown Previewer</h1>
      <Editor />
    </div>
  );
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
    
        const defaultMarkdownPreview = `# Sample Markdown Header Level

## Sample Header Level 2

### Link

Here's a link to [Codepen](https://codepen.io).

### Code Block

1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.

### Inline Code

use `<addr>` element here instead.

### List

- First item
- Second item

### Blockquote

> xxxx.

### Image

![Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg "Logo")

### Bold Text

I just love **bold text**.
`;

    this.state = {
      previewMarkdown: defaultMarkdownPreview
    };
  
    this.markdownProcess = this.markdownProcess.bind(this);
    
  }

  markdownProcess(e) {
    this.setState({
      previewMarkdown: e.target.value,
    });   
  }  

  
  render () {

    return (
      <div>
        
        <p class="mt-5 mb-5 alert alert-secondary">Trans</p>
        
        <textarea class="form-control" id="editor" rows="10" value={this.state.previewMarkdown} onChange={this.markdownProcess} />
        
        <Preview markdown={this.state.previewMarkdown} />
      </div>
    )
  }
}

function Preview (props) {
  
  function rawMarkup() {
    let rawMarkup = marked(props.markdown, {sanitize: true});
    return { __html: rawMarkup };
  }

  return (
    <div>
      <h2 class="mt-5 mb-5 border-bottom">MKDW</h2> 
      
      <div id="preview" class="html__preview border rounded mb-5" dangerouslySetInnerHTML={rawMarkup()} />
    </div>
  )
}

/* ReactDOM.render(<App />, document.getElementById('app')); */