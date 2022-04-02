var rIndex, table = document.getElementById("show");
var row = 1;

var oldvalue = undefined;
var newRow = undefined;
var count_flag = 0;

var iconsHead =null;

function validation(name,age)
{

    if (!name || !age) {
        alert("Enter all fields");
        return false;
    } else if (name == "null" || name == "undefined") {
        alert("Enter a valid name");
        return false;
    } else if (age > 99 || age < 1) {
        alert("Enter a valid age");
        return false;
    } else {}
}

function AddRow() {

var name = document.getElementById("name").value;
var age = document.getElementById("age").value;
// function validation(name,age);

 let response1 = validation(name,age);
 if(response1 != false)
 {
        var show = document.getElementById("show");

        let newRow = show.insertRow(row);

        let cell1 = newRow.insertCell(0);

        let cell2 = newRow.insertCell(1);

        let cell3 = newRow.insertCell(2);

        let cell4 = null;

        if(iconsHead == null)
        {
            var thead = document.getElementById("table-header-place-holder");
            iconsHead = thead.insertCell(2);
            iconsHead.outerHTML= "<th><center><b>Delete</b></center></th>";
        }

        console.log(newRow.rowIndex);

        cell1.innerHTML = "<td>" + name + " </td>";

        cell2.innerHTML = "<td>"  + age  + "</td>";

        cell3.innerHTML='<i class="fa fa-trash  w3-xxlarge"></i>';

        cell3.onclick= function checkFunction()
        {
            RemoveRow(newRow);
        }
        console.log(newRow.rowIndex);

        row++;


        editTable(newRow,cell4);
 }
else{
    return;
}





}

var logs = null;

function editTable(newRow,cell4) {
    // console.log('Entry Check.......')
var cells = table.getElementsByTagName("td");
console.log("Cells...... "+cells+"CF..... "+count_flag);
for (var j = count_flag; j < cells.length; j++) {
    count_flag++;
      console.log("Count_Flag = "+count_flag)
   
    cells[j].ondblclick = function() {
     
        console.log("Checking .....");
        if (this.hasAttribute("data-clicked")) {
            
            return;
        }

        this.setAttribute("data-clicked", "yes");
        this.setAttribute("data-text", this.innerHTML);
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.value = this.innerHTML;

        input.onblur = function() {
           
       
            let td = input.parentElement;
            var org_text = input.parentElement.getAttribute("data-text");
            let current_text = this.value;

            var org_text = input.parentElement.getAttribute("data-text");
            console.log("org_text " + org_text);
            console.log("current_text " + current_text);

           

            if(current_text === "null" || current_text === "undefined" )
            {
                alert("Enter a valid values");
                return;
            }
            if(!current_text)
            {
                alert("Enter a values");
                return;
            }
            if(current_text.replace(/\s/g, "").length <=0)
            {
                alert("Enter a valid values");
                return;
            }

            if (org_text != current_text  ) {

           
                
                console.log("Changes detected!");
                td.removeAttribute("data-clicked");
                td.removeAttribute("data-text");
                td.innerHTML = current_text;
                oldvalue = Date() + org_text;
                console.log(oldvalue);
                console.log(" rIndex " + rIndex);
              
                if(logs == null)
                {
                    var thead = document.getElementById("table-header-place-holder");
                    logs = thead.insertCell(3);
                    logs.innerHTML= "<center><b>Logs</b></center>";
                }

                if(cell4 == null){

                    cell4 = newRow.insertCell(3);
                    cell4.innerHTML = "<ul>"+"<li>" + oldvalue +" </li>"+" </ul>";
                }else{
                    var temp = cell4.innerHTML;
                    cell4.innerHTML = "<ul>"+"<li>"+ oldvalue +"</li>"+"</ul>"; 
                    cell4.innerHTML+=temp;
                }
                console.log(org_text + " is changed to " + current_text);
                
                
            } else {
                // alert("Don't Enter a Empty space");
                console.log(" No Changes detected!");
                td.removeAttribute("data-clicked");
                td.removeAttribute("data-text");
                td.innerHTML = org_text;
            }

           
        };

        this.innerHTML = "";
        this.append(input);
        this.firstElementChild.select();
    };
}



}

function RemoveRow(Row)
{
   
   var text = "Are you want to delete a selected row!";
//    console.log("Column count = "+Row.cells.length);
    if(confirm(text) == true)
    {
    //    console.log("Row index = "+Row.rowIndex);
       
        table.deleteRow(Row.rowIndex);
        row--;
        count_flag-=Row.cells.length;

       
        console.log("Row is deleted");
    }
    else{
        console.log("Rows is not deleted");
    }
}

// function validation(name,age)
// {

//     if (!name || !age) {
//         alert("Enter all fields");
//         return;
//     } else if (name == "null" || name == "undefined") {
//         alert("Enter a valid name");
//         return;
//     } else if (age > 99 || age < 1) {
//         alert("Enter a valid age");
//         return;
//     } else {}
// }