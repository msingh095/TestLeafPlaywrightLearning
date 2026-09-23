function getGrade(studentScore){
     let grade;
    switch(true){
       
        case studentScore>=90:
        grade ="A"
        console.log("Grade A")
        break
        case studentScore>=80:
         grade ="B"
        console.log("Grade B")
        break
        case studentScore>=70:
        grade ="C"
        console.log("Grade C")
        break
        case studentScore>=60:
        grade ="D"
        console.log("Grade D")
        break
        case studentScore>=50:
        grade ="E"
        console.log("Grade E")
        break
        default:
        grade ="F"
        console.log("Failed")
        break
        

    }  
    return grade; 
}


getGrade(95) // A
getGrade(85) // B
getGrade(75) // C
getGrade(65) // D
getGrade(55) // E
getGrade(40) // F