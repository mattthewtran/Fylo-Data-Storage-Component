import React, { useState } from "react";

function App(){

    const [range, setRange] = useState(0);
    function handleChange(event){
       const value = event.target.value;
       setRange(value);
       
    }
    return  <div className="container">
       <div className="row">
       <div className="col-lg-5"> 
       <div className="logo-container">
       <img className="logo" src="../images/logo.svg" alt="logo-icon" />
       <div className="icon-image document"><img className="document-icon" alt="document-icon" src="../images/icon-document.svg" /></div>
       <div className="icon-image folder"><img className="folder-icon" alt="folder-icon" src="../images/icon-folder.svg" /></div>
       <div className="icon-image upload"><img className="upload-icon" alt="upload-icon" src="../images/icon-upload.svg" /></div>
       </div>
       </div>
       <div className="col-lg-6">
       <div className="input-container">
         <p className="storage-used-msg">You've used <span>{range} GB</span> of your storage </p>
         <input
         onChange={handleChange}
        list="mylist"
        type="range"
        min="0"
        max="1000"
        step="5"
        value={range}
      />
      <div className="storage-card">
          <div className="storage-left">
              <span className="storage-left-msg">{1000 - range}</span> GB LEFT
          </div>
      </div>
      <span><p className="min-storage">0 GB</p></span>
      <span><p className="max-storage">1000 GB</p></span>
      </div>
       </div>
       </div>
    </div>
}

export default App;