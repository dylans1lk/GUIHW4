// Dylan Silk - dylan_silk@student.uml.edu - 12/4/23

// Input validation handled by JQUERY
$(document).ready(function() { 
    $("#dynamicTableForm").validate({
        // the rules for our inputs
        rules: {
            minCol: {
                required: true,
                number: true,
                min: -50,
                max: 50,
            },
            maxCol: {
                required: true,
                number: true,
                min: -50,
                max: 50,
            },
            minRow: {
                required: true,
                number: true,
                min: -50,
                max: 50,
            },
            maxRow: {
                required: true,
                number: true,
                min: -50,
                max: 50,
            },
        },
        // error messages that go with the input validation
        messages: {
            minCol: {
                required: "Minimum Column's required to fill out. Enter a number -50 to 50.",
                number: "Minimum Column's required to be a number. Enter a number -50 - 50.",
                min: "Minimum Column's range is exceeded. Enter a number -50 - 50.",
                max: "Minimum Column's range is exceeded. Enter a number -50 - 50.",
            },
            maxCol: {
                required: "Maximum Columns's required to fill out. Enter a number -50 to 50.",
                number: "Maximum Column's required to be a number. Enter a number -50 - 50.",
                min: "Maximum Column's range is exceeded. Enter a number -50 - 50.",
                max: "Maximum Column's range is exceeded. Enter a number -50 - 50.",
            },
            minRow: {
                required: "Minimum Row's required to fill out. Enter a number -50 to 50.",
                number: "Minimum Row's required to be a number. Enter a number -50 - 50.",
                min: "Minimum Row's range is exceeded. Enter a number -50 - 50.",
                max: "Minimum Row's range is exceeded. Enter a number -50 - 50.",
            },
            maxRow: {
                required: "Maximum Row's required to fill out. Enter a number -50 to 50.",
                number: "Maximum Row's required to be a number. Enter a number -50 - 50.",
                range: "Maximum Row's range is exceeded. Enter a number -50 - 50.",
            },
        },

    });
    // if the form is valid, gen our table.
    $("#submit").on("click", function() {
        if ($("#dynamicTableForm").valid()) {
            genDynamicTable();
        }
    });
});

// Function to create the dynamic table
function genDynamicTable() {
    // Position for my table to be made :)
    var tablePosition = document.getElementById("dynamicTable");

    // Grabs numbers from the form
    var minCol = parseInt(document.getElementById("minCol").value);
    var maxCol = parseInt(document.getElementById("maxCol").value);
    var minRow = parseInt(document.getElementById("minRow").value);
    var maxRow = parseInt(document.getElementById("maxRow").value);

    // Builds the multiplication table
    var table = "<table rules='all'>";

    // Adds the top headers
    table += "<tr>" + "<th>" + "</th>";
    for (var i = minCol; i <= maxCol; i++) {
        table += "<th>" + i + "</th>";
    }
    table += "</tr>";

    // Adds all the other numbers
    for (var i = minRow; i <= maxRow; i++) {
        table += "<tr>";
        table += "<th>" + i + "</th>";

        for (var j = minCol; j <= maxCol; j++) {
            table += "<td>" + i*j + "</td>";
        }

        table += "</tr>";
    }
    table += "</table>"

    tablePosition.innerHTML = table;
}
