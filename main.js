// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
// ( function(){
//   // Select the first element from the array
//   let form = formData[0];
//   let fieldsDiv = document.querySelector("#fields");
//   for(let i = 0; i < formData.length ;i++) {
//       let userInfo = formData[i]
//       if(userInfo.type === "textarea") {
//           let textarea = document.createElement("textarea");
//           fieldsDiv.append(textarea);
//       } else if(userInfo.type === "select") {
//          let select = document.createElement("select");
//          fieldsDiv.append(select);
//       } else {
//         let textbox = document.createElement("input");
//         textbox.type = userInfo.type;
//         textbox.placeholder = userInfo.label;
//         textbox.id = userInfo.id;
//         fieldsDiv.append(textbox);
//       }
//   }
//   console.log(userInfo);
//  } );

 (function() {
     let fieldsDiv = document.querySelector("#fields");
     for (let i = 0 ; i < formData.length ; i++) {
         let userInfo = formData[i]
         if (userInfo.type === "textarea") {
             let textarea = document.createElement("textarea");
             fieldsDiv.append(textarea);
         }
         else if (userInfo.type === "select") {
             let select = document.createElement("select");
             fieldsDiv.append(select);

          for (let j = 0; j < userInfo.options.length; j++) {
                 let selection = document.createElement("option")
                 selection.label = userInfo.options[j].label;
                 select.append(selection) // adding inside the parents of "select" not the child of selection.
             }
       } else {
             let textbox = document.createElement("input");
             textbox.type = userInfo.type;
             textbox.placeholder = userInfo.label;
             textbox.id = userInfo.id;
             fieldsDiv.append(textbox);
         }
     }
})(); //don't delete the (); will break the form.

// function select () {
//      let fieldsDiv = document.querySelector("#fields");
//     //  let userInfo = formData[i]
//  // for (let j = 0 ; j < formData.select.length; j++) {
//      let selection = document.createElement("option")
//      selection.label = formData.option[j].label;
//      selection.value = formData.option[j].value;
//      fieldsDiv.append(selection);
//
//  }
// }
  // Log the first object
  // console.log(function());
  // Log the string "First Name"
  // console.log( first.label );


// -------- Your Code Goes Below this Line --------
