name_of_students=[];
function submit(){
    var display_student=[];
    for(var j=1;j<=4;j++){
        var name_of_student=document.getElementById("name_of_the_student"+j).value;
        console.log(name_of_student);
        name_of_students.push(name_of_student);
    }
    var len=name_of_students.length;
    for(var k=0;k<len;k++){
        display_student.push("<h4>name-"+name_of_students[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student;
    var removecommas=diaplay_student.joint("    ");
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_students.sort();
    var sort=[];
    var len=name_of_students.length;
    for(var k=0;k<len;k++){
        display_student.push("<h4>name-"+name_of_students[k]+"</h4>");
        
        var removecommas=diaplay_student.joint("    "); }
        document.getElementById("display_name_without_commas"),innerHTML=removecommas;  
}