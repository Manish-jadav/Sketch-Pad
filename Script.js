    document.addEventListener("DOMContentLoaded",function(){
        createGrid(14);
    });
function createGrid(x) {
    var columns =x;
    var rows =x;

    var grid = document.createElement('div');
    grid.className = 'grid';
    for (var i = 1; i <= columns; i++) {
        var column = document.createElement('div'); // create column
        column.className = 'column';
        
        for (var j = 1; j <= rows; j++) {
            var row = document.createElement('div'); // create row
            row.className = 'row';
            column.appendChild(row); // append row in column
            
        }
        grid.appendChild(column); // append column inside grid
       
    }
    document.body.appendChild(grid);

    $(".row").width(400/rows);
    $(".row").height(400/rows);
    mycolor();
}    
function mycolor()
{
    var color=document.getElementById('favcolor').value;
    
            $(".row").mouseover(function() {
            $(this).css("background-color",color);
    
            });    
}
function eraser(){
    $(".row").mouseover(function() {
         $(this).css("background-color","");
        });
}
function fun(){
    $(".grid").remove();
    
    var columns =prompt("Enter Grid Width :");
    var rows =prompt("Enter Grid Height :");

    var grid = document.createElement('div');
    grid.className = 'grid';
    for (var i = 1; i <= columns; i++) {
        var column = document.createElement('div'); // create column
        column.className = 'column';
        
        for (var j = 1; j <= rows; j++) {
            var row = document.createElement('div'); // create row
            row.className = 'row';
            column.appendChild(row); // append row in column
            
        }
        grid.appendChild(column); // append column inside grid
    }
    document.body.appendChild(grid);

    $(".row").width(400/rows);
    $(".row").height(400/rows);

    var color=document.getElementById('favcolor').value;
  
        $(".row").mouseover(function() {
            $(this).css("background-color", color);
        
            });
        
        $(".row").click(function() {
            $(this).css("background-color", "white");
            });
        }

        
    
        






 



     
    

