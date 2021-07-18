var akanArray = [{
        "Sunday": "Kwasi",
        "Monday": "Kwadwo",
        "Tuesday": "Kwabena",
        "Wednesday": "Kwaku",
        "Thurday": "Yaw",
        "Friday": "Kofi",
        "Saturday": "Kwame"
    },
    {
        "Sunday": "Akosua",
        "Monday": "Adwoa",
        "Tuesday": "Abenaa",
        "Wednesday": "Akua",
        "Thurday": "Yaa",
        "Friday": "Afua",
        "Saturday": "Ama"

    }
]
var weekDayArray = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function validateForm() {
    var gender = document.getElementsByName("gender");
    var mdate = document.getElementById("mdate");
    var mmonth = document.getElementById("mmonth");
    var myear = document.getElementById("myear");
    var formValid = false;
    var i = 0;
    document.getElementById("result").innerHTML = "";
    if (mdate.value == "" || mdate.value == null) {
        document.getElementById("result").innerHTML += "Day is Required";
        return false;
    } else {
        mdate.style.border = "";
        if (!isNaN(mdate.value)) {
            if (mdate.value <= 0 || mdate.value > 31) {
                document.getElementById("result").innerHTML += "Invalid Day";
                return false;
            }
        } else {
            document.getElementById("result").innerHTML += "Day must be a number";
            return false;
        }
    }
    if (mmonth.value == "" || mmonth.value == null) {
        document.getElementById("result").innerHTML += "Month is Required";
        return false;
    } else {
        mmonth.style.border = "";
        if (!isNaN(mmonth.value)) {
            if (mmonth.value <= 0 || mmonth.value > 12) {
                document.getElementById("result").innerHTML += "Invalid Month";
                return false;
            }
        } else {
            document.getElementById("result").innerHTML += "Month must be a number";
            return false;
        }
    }
    if (myear.value == "" || myear.value == null) {
        document.getElementById("result").innerHTML += "Year is Required";
        return false;
    } else {
        myear.style.border = "";
        if (!isNaN(myear.value)) {
            if (myear.value.length != 4) {
                document.getElementById("result").innerHTML += "Invalid Year";
                return false;
            }
        } else {
            document.getElementById("result").innerHTML += "Year must be a number";
            return false;
        }
    }

    while (!formValid && i < gender.length) {
        if (gender[i].checked)
            formValid = true;
        i++;
    }
    if (!formValid) {
        document.getElementById("gender").style.color = 'red';
        return false;
    }


    return formValid;

}