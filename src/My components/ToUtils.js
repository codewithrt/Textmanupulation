// import { click } from '@testing-library/user-event/dist/click';
// import react from 'react';
import React from 'react'
import { useState } from 'react';

export default function ToUtils(props) {
    
    // always();
    const [text, settext] = useState("")

    const OnclickfuncU = () => {
        console.log(text);
        const newtext = text.toUpperCase();
        settext(newtext)
    }
    const Onchangefunc = (event) => {

        settext(event.target.value)
    }
    const OnclickfuncL = () => {
        const newtl = text.toLowerCase();
        settext(newtl)
    }
    let x = "";
    let che = 0
    const OnExtract = () => {
        //    console.log("this is exract");
        let fex = document.querySelector(".exter")
        let m = document.getElementById("extracte")
        if (che === 0) {
            const a = text.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
            if (a === null) {
                alert("No Emails to extract")
            }
            else {
                if (text === null) {
                    alert("Please Write something to extract email")
                    // che = 0;
                }
                else {
                    for (let index = 0; index < a.length; index++) {
                        let f = a[index].toString();
                        if (x.match(f) === null) {
 
                        x = x + f + "  <br> ";
                        }
                       

                    }

                    m.innerHTML = `<h3> Your Extraxted Emails are </h3>
                 ${x}  `;

                    fex.innerHTML = "Hide Extracted Email"
                    che = 1;
                }
            }

        }
        else if (che === 1) {
            m.innerHTML = ``;
            fex.innerHTML = "Extract Email"
            che = 0;
            
        }

    }

    const OnClear = () => {
        settext("")
        let ma = document.getElementById("extracte")
        ma.innerHTML=``
        let fex = document.querySelector(".exter")
        fex.innerHTML = "Extract Email"

    }
    const OnSaveEmail = () => {
        if (localStorage.getItem("email") === null) {
            localStorage.setItem("email", x)
        }
        else {
            let men = localStorage.getItem('email');
            let y = men + x;
            localStorage.setItem("email", y)
        }
    }
    let man = 0;
    const OnShow = () => {
        let rex = localStorage.getItem("email")
        let rex2 = document.querySelector(".hides")
        if (man === 0) {
            if (rex === null) {
                document.getElementById("show").innerHTML = ``;
                alert("Sorry no Email to Show")
            } else {
                document.getElementById("show").innerHTML = `<h2>Your Saved Emails Are</h2><br>
                                                                      ${rex}
                                        `;
                rex2.innerHTML = "Hide Saved Emails"
                man = 1;
            }

        }
        else if (man === 1) {
            document.getElementById("show").innerHTML = ``
            rex2.innerHTML = "Show Saved Email"
            man = 0;
        }

    }
    const OnClearemail = () => {
        window.localStorage.clear();
        document.querySelector(".hides").innerHTML = "Show Saved Email"
        OnShow();
    }
   
    const remove = () => {
        let fr = text.split(/[ ]+/);
        settext(fr.join(" "))
    }
    const copi = () => {
        let man = document.getElementById("lef5")
        man.select()
        navigator.clipboard.writeText(man.value)
    }
    let himd = 0;
    const Hideprev = () => {
        if (himd ===0) {
            document.getElementById("prev").innerHTML = ``;
            document.querySelector(".hid").innerHTML = "Show Preview"
            himd = 1;
        }
        else{
            document.querySelector(".hid").innerHTML = "Hide Preview"
            document.getElementById("prev").innerHTML = `<h3>Preview</h3>
                                                          <p>${text}</p>`;
             himd = 0;                                             
        }
        
    }

   
     let req = text.split(" ")
     let we = 0
     for (let index = 0; index < req.length; index++) {
         if (req[index] !== "") {
             we = we +1
         }
         
     }

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "#0c1a65" : "white" }}>
                <h2>
                    Please Enter your text here
                </h2>
                <div className="mb-2">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }} id="lef5" onChange={Onchangefunc} rows="5"></textarea>
                </div>
                <span>
                    <button className='btn btn-primary my-2 mx-1' onClick={OnclickfuncU}>Convert to UpperCase</button>
                </span>
                <span>
                    <button className="btn btn-primary my-1 mx-1" onClick={OnclickfuncL}>Convert to LowerCase</button>
                </span>
                <span >
                    <button className="btn btn-primary my-1 mx-1 exter" onClick={OnExtract}>Extract Email</button>
                </span>
                <span>
                    <button className="btn btn-primary my-1 mx-1" onClick={OnSaveEmail}>Save Email</button>
                </span>
                <span>
                    <button className="btn btn-primary my-1 mx-1 hides" onClick={OnShow}> Show Saved Email</button>
                </span>
                <span>
                    <button className="btn btn-primary my-1 mx-1" onClick={OnClear}>Clear Text</button>
                </span>
                <span>
                    <button className="btn btn-primary my-1 mx-1" onClick={OnClearemail}>Clear Saved Email</button>
                </span>
                <span>
                    <button className="btn btn-primary my-1 mx-1" onClick={remove}>Remove Spaces</button>
                </span>
                <span>
                    <button className="btn btn-primary my-1 mx-1" onClick={copi}>Do copy </button>
                </span>
                <span>
                    <button className="btn btn-primary my-1 mx-1 hid" onClick={Hideprev}>Hide Preview</button>
                </span>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>
                    Your Text Summary
                </h2>
                <p>Your text has <b> {we} </b> words and <b>{text.length}</b>  characters</p>
                <p> This whole document can be read in <b> {(we) * 0.008} </b> minutes</p>
                <div id="prev">
                <h3>
                    Preview
                </h3>
                <p>{text}</p>
                </div>
                <div id="extracte">

                </div>

                <div id="emails">

                </div>
                <div id="show">

                </div>
            </div>
        </>
    )
}
