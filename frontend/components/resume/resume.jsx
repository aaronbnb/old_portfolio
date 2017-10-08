import React from 'react';

class Resume extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <div height="250" background-color="black"></div>
          <object data="/pdf/sample-3pp.pdf#page=2" type="application/pdf" width="100%" height="100%">
             <p><b>Example fallback content</b>: This browser does not support PDFs. Please download the PDF to view it: <a href="/pdf/sample-3pp.pdf">Download PDF</a>.</p>
          </object>

      </div>
    );
  }
}

export default Resume;
