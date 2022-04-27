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

var records = '';
var flag = 1;

function calculateBresenhamPoints(){
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var y1 = document.getElementById("y1").value;
    var y2 = document.getElementById("y2").value;
    var dx = x2 - x1;
    var dy = y2 - y1;

    records = ` <tr>
                <td>    <span>    X </span></td>
                <td>    <span>    Y </span></td>
                <td>    <span>    D </span></td>
                <tr>
                `;
    if ( Math.abs(dx) > Math.abs(dy) ) {
        bresenham(x1, y1, x2, y2);
    } else {
        flag = 0;
        bresenham(y1, x1, y2, x2);
    }
    var recordTable = document.getElementById("insertRecords");
    recordTable.innerHTML = records;
}

function bresenham(xa, ya, xb, yb){
    var dx = xb - xa;
    var dy = yb - ya;

    var distance = 2* Math.abs(dy) - Math.abs(dx);

    if (dx > 0) {
        var c = parseInt(xa);
        var r = parseInt(ya);
        var f = parseInt(xb);
    } else {
        var c = parseInt(xb);
        var r = parseInt(yb);
        var f = parseInt(xa);
    }

    if ( flag == 1) {
        records += `<tr>
                    <td>    <span>    ${c} </span></td>
                    <td>    <span>    ${r} </span></td>
                    <td>    <span>    ${distance} </span></td>
                    <tr>
                `;
    }
    else{
        records += `<tr>
                    <td>    <span>    ${r} </span></td>
                    <td>    <span>    ${c} </span></td>
                    <td>    <span>    ${distance} </span></td>
                    <tr>
                `;
    }

    console.log(f);
    console.log(c);

    while ( parseInt(f) > parseInt(c) ){
        c = c + 1;
        if ( distance < 0) {
            distance = distance + ( 2*Math.abs(dy) );
            if (flag == 1) {
                records += `<tr>
                            <td>    <span>    ${c} </span></td>
                            <td>    <span>    ${r} </span></td>
                            <td>    <span>    ${distance} </span></td>
                            <tr>
                        `;
            } else {
                records += `<tr>
                            <td>    <span>    ${r} </span></td>
                            <td>    <span>    ${c} </span></td>
                            <td>    <span>    ${distance} </span></td>
                            <tr>
                        `;
            }
        } else {
            if ( ( dx>0 && dy>0 ) || (dx<0 && dy<0) ){
                r = r + 1;
            } else {
                r = r-1;
            }  
            distance = distance + (2*Math.abs(dy)) - (2*Math.abs(dx));
            if (flag == 1) {
                records += `<tr>
                            <td>    <span>    ${c} </span></td>
                            <td>    <span>    ${r} </span></td>
                            <td>    <span>    ${distance} </span></td>
                            <tr>
                        `;
            } else {
                records += `<tr>
                            <td>    <span>    ${r} </span></td>
                            <td>    <span>    ${c} </span></td>
                            <td>    <span>    ${distance} </span></td>
                            <tr>
                        `;
            }
        }
    }
}
