// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', () => {
    const $ = (id) => {
        return document.getElementById(id)
    };
    let width = 800
    let height = 700
    let cancelBtn = $('cancel')
    let form = $('empForm')
    
    window.resizeTo(width,height)
    window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2))

    cancelBtn.addEventListener('click', () => {
        window.close()
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let empID = $('id')
        let fullName = $('name')
        let ext = $('extension')
        let email = $('email')
        let department = $('department')
        let parentOutput = window.opener.document.getElementById('loginDetails')
        parentOutput.innerHTML = `ID: ${empID.value}<br>
                                  Name: ${fullName.value}<br>
                                  Extension: ${ext.value}<br>
                                  Email: ${email.value}<br>
                                  Department: ${department.value}`;
        window.close()
    });
});
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700-

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT-

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN-

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM-

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW-

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE