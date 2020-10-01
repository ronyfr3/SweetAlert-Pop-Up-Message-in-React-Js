import React from 'react';
import Swal from 'sweetalert2'
import '@sweetalert2/themes/bulma/bulma.css'

//install all themes
// npm install @sweetalert2/themes
//import themes
// themes:::::dark,minimal,borderless,bootstarp-4,bulma,material-ui,wordPress admin.
//  import "@sweetalert2/themes/dark/dark.css"


function SweetAlert(){

  //Button Click Function
  const handleClick=()=>
  {
    Swal.fire({
      icon: 'success',//success info,question,warning,error
      text: "Login SuccessFull",
      type: 'success',
      timer: 1500,
      showCancelButton: false,//do true to get two button
      confirmButtonColor: 'green',
      cancelButtonColor: 'pink',
      animation: true,
    //   imageUrl: 'https://unsplash.it/400/200',
    //   imageWidth: 400,
    //   imageHeight: 200,
    //   imageAlt: 'Custom image', 
        //     backdrop: `
        //     rgba(0,0,123,0.4)
        //     url("https://unsplash.it/400/200")
        //     center left
        //     no-repeat
        // ` ,
    //   reverseButtons: true, //reverse those buttons
      confirmButtonText: 'Yes, delete it!'
    })
  }

    return (
            <div>
            
                <h1>Sweet Alert Pop up Message</h1>             
                <button onClick={handleClick} style={{textAlign:'center',margin:'100px',color: 'red',padding:'10px',fontFamily:'cursive',fontSize:'18px',fontWeight:'bold'}}>Click</button>

            </div>
)
};

export default SweetAlert;