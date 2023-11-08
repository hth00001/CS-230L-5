import react from 'react';
import "bootstrap/dist/css/bootstrap.css";

// function Contact(){
//     return(
//     <div className="d-flex justify-content-center align-items-center">
//         <form class="w-50" >
//         <h1>Contact Us</h1>
//         <div class="form-group">
//             <label for="exampleFormControlInput1" class="text-left">First Name</label>
//             <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name"/>
//         </div>
//         <div class="form-group">
//             <label for="exampleFormControlSelect1" class="text-left">Last Name</label>
//             <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Last Name"/>
            
//         </div>
//         <div class="form-group">
//             <label for="exampleFormControlInput1" class="text-left">Email address</label>
//             <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
//         </div>
//         <div class="form-group">
//             <label for="exampleFormControlTextarea1" class="text-left">Message</label>
//             <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter text here"></textarea>
//         </div>
// </form>
// </div>
// );
// }
// export default Contact;
function Contact() {
    const labelStyle = {
      textAlign: "left" // Aligns the label text to the left
    };
  
    const formGroupStyle = {
      display: "flex",
      flexDirection: "column", // Aligns the form elements vertically
      alignItems: "flex-start" // Aligns the form elements to the left
    };
  
    return (
      <div className="d-flex justify-content-center align-items-center">
        <form className="w-50">
          <h1>Contact Us</h1>
          <p></p>
          <div className="form-group" style={formGroupStyle}>
            <label htmlFor="exampleFormControlInput1" style={labelStyle}>First Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First Name" />
          </div>
          <div className="form-group" style={formGroupStyle}>
            <label htmlFor="exampleFormControlInput2" style={labelStyle}>Last Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Last Name" />
          </div>
          <div className="form-group" style={formGroupStyle}>
            <label htmlFor="exampleFormControlInput3" style={labelStyle}>Phone Number</label>
            <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="xxx-xxx-xxxx" />
          </div>
          <div className="form-group" style={formGroupStyle}>
            <label htmlFor="exampleFormControlInput3" style={labelStyle}>Email address</label>
            <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="name@example.com" />
          </div>
          <div className="form-group" style={formGroupStyle}>
            <label htmlFor="exampleFormControlTextarea1" style={labelStyle}>Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter text here"></textarea>
          </div>
        </form>
      </div>
    );
  }
  
  export default Contact;
  
  
  
  
  
  