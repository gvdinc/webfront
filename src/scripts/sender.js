function getYValue(){
    let Yres = 0;
    Yres = getCheckedCheckBoxesSumm();
    return Yres;
}

function getCheckedCheckBoxesSumm() {
    let checkboxes = document.getElementsByClassName('xer');
    let checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать
    for (let index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            checkboxesChecked.push(parseFloat(checkboxes[index].value));
        }
    }
    let res = 0;
    checkboxesChecked.forEach(i => res += i);
    return res; // для использования в нужном месте
}

function Coordinates(xline, yline, Rline) {
    this.x = xline;
    this.y = yline;
    this.r = Rline;

    this.Validate = function (){
        //console.log(this.x, this.y, this.r);
        let yres = true;

        let re = /^((\s*(-?)\d+(\.\d+)?\s*)?)$/m;
        if (!re.test(this.x)) {console.error("неверное значение y (" + this.x + ")"); }
        let xres = /*re.test(this.x) &&*/ re.test(this.x);
        xres = xres & this.x <= 3 && this.x >= -3;
        document.getElementById("InputBoxX").style.background = (xres) ? 'rgb(247, 212, 68)' : 'rgb(196, 36, 48)';
        return yres && xres;
    }
}

function drawTableRow(x, y, r, currentTime, number, result) {
    let newRow = "<tr>";
    newRow += "<th>" + parseFloat(x).toFixed(3) + "</th>";
    newRow += "<th>" + parseFloat(y).toFixed(3) + "</th>";
    newRow += "<th>" + parseFloat(r).toFixed(3) + "</th>";
    newRow += "<th>" + currentTime + "</th>";
    newRow += "<th>" + number + "</th>";
    newRow += (result === "false" || result === undefined)
        ? "<th><span style='color: red'>FALSE</span></th>"
        : "<th><span style='color: green'>TRUE</span></th>";
    newRow += "</tr>";
    $('#table tr:first').after(newRow);
}

function request(coordinates){
    //console.log(coordinates)
    $.ajax({
        url: "./controller",
        type: "POST",
        data: {'x': coordinates.x, 'y': coordinates.y, 'r': coordinates.r},
        success: function (resp) {
            //console.log(resp);
            var el = eval('('+resp+')');
            drawTableRow(el.x, el.y, el.r, el.currentTime, el.executionTime, el.result);
            addPoint(coordinates);
        },
        error: function (resp) {
            console.error("ERROR while sending request!")
        }
    });
}

function checkPoint(){
    console.log("compilation...")
    let inputs = [document.forms["requestForm"]["x"].value,
        getYValue(),
        document.forms["requestForm"]["R"].value];
    if (inputs[1]===""){document.getElementById("yComment").style.background = 'rgb(255, 0, 0)'; return false;}
    let coords = new Coordinates( parseFloat(inputs[0]), inputs[1], parseInt(inputs[2]));
    let isCorrect = coords.Validate();
    if (!isCorrect){ return false;}
    request(coords);

}

function addPoint(coordinates){
    let r = coordinates.r
    let x = (coordinates.x / coordinates.r * 200) + 200 - 20;
    let y = 200 - (coordinates.y / coordinates.r * 200) - 20;
    document.getElementById("graffiti").style = "display: block; left: "+x+"px; top: "+y+"px;";
}
