import React, { useState } from 'react';
import Title from './Comps/Title';
import UploadForm from './Comps/UploadForm';
import ImageGrid from './Comps/ImageGrid';
import Modal from './Comps/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;