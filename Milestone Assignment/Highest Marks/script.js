

const highestMarks = () => {
    const st1 = parseInt(document.getElementById('st1').value);
    const st2 = parseInt(document.getElementById('st2').value);
    const st3 = parseInt(document.getElementById('st3').value);
    const st4 = parseInt(document.getElementById('st4').value);
    const st5 = parseInt(document.getElementById('st5').value);

    let marks = [st1, st2, st3, st4, st5];
    let highestMarks = 0;
    for(let i = 0; i < marks.length; i++){
        
        // calculating highest marks:
        highestMarks < marks[i] ? (highestMarks = marks[i]) : (highestMarks = highestMarks);

    }
    document.getElementById('msg').innerHTML = "Highest Marks is : " + highestMarks;
    console.log(highestMarks)
    return false;
}
