function calculateDdaPoints(){
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var y1 = document.getElementById("y1").value;
    var y2 = document.getElementById("y2").value;

    var dx = x2 - x1;
    var dy = y2 - y1;
    var steps;

    if ( Math.abs(dx) > Math.abs(dy) ) {
        steps = Math.abs(dx);
    } else {
        steps = Math.abs(dy);    
    }

    var xIncrement, yIncrement;

    xIncrement = dx/steps;
    yIncrement = dy/steps;

    var x, y;
    x = x1;
    y = y1;

    var record = `  <tr>
                    <td>    <span>    X </span></td>
                    <td>    <span>    Y </span></td>
                    <td>    <span>    X PLOT </span></td>
                    <td>    <span>    Y PLOT </span></td>
                    <tr>
                    <tr>
                    <td>    <span>    ${x} </span></td>
                    <td>    <span>    ${y} </span></td>
                    <td>    <span>    ${Math.trunc(roundUp(x))} </span></td>
                    <td>    <span>    ${Math.trunc(roundUp(y))} </span></td>
                    </tr>
                `;

    for (let i = 0; i < steps; i++) {
        x = parseFloat(x) + parseFloat(xIncrement);
        y = parseFloat(y) + parseFloat(yIncrement);

        record += ` <tr>
                    <td>    <span>    ${x} </span></td>
                    <td>    <span>    ${y} </span></td>
                    <td>    <span>    ${Math.trunc(roundUp(x))} </span></td>
                    <td>    <span>    ${Math.trunc(roundUp(y))} </span></td>
                    </tr>
                    `;
    }

    var recordTable = document.getElementById("insertRecords");
    recordTable.innerHTML = record;
}

function roundUp(value){
    return value+0.5;
}