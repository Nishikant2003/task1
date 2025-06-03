function valid(){
    
    const name=document.forms["myForm"]["name"].value;
    if(name==""){
        alert("Name field is empty")
        document.getElementById("name").focus();
        return false;
    }
    const comments=document.forms["myForm"]["comments"].value;
    if(comments==""){
        alert("comments field is empty")
        document.getElementById("comments").focus();
        return false;
    }
    const gender=document.forms["myForm"]["gender"].value;
    if(gender==""){
        alert("gender is not chosen")
        document.getElementById("gender").focus();
        return false;
    }
}