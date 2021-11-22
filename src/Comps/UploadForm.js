import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/bmp', 'image/ico', 'image/gif','image/tiff'];
    
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        }else {
            setFile(null);
            setError('Please select an image file (.bmp, .ico, .jpeg, .jpg, .gif, .tiff, .png)');
        }
    };

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} /> 
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{ error}</div>}
                { file && <div>{ file.name }</div> } 
                { file && <ProgressBar file={file} setFile={setFile} /> } 
            </div>
        </form>
    );
}

export default UploadForm;