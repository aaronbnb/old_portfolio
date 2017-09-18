import React from 'react';

class Resume extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <iframe src="http://docs.google.com/gview?url=https://files.acrobat.com/a/preview/221da6ab-c3cd-4cb5-b0e8-08928ce5e780&embedded=true"
          ></iframe>
      </div>
    );
  }
}

export default Resume;
