var akanArray = [{
        "Sunday": "Kwasi",
        "Monday": "Kwadwo",
        "Tuesday": "Kwabena",
        "Wednesday": "Kwaku",
        "Thursday": "Yaw",
        "Friday": "Kofi",
        "Saturday": "Kwame"
    },
    {
        "Sunday": "Akosua",
        "Monday": "Adwoa",
        "Tuesday": "Abenaa",
        "Wednesday": "Akua",
        "Thursday": "Yaa",
        "Friday": "Afua",
        "Saturday": "Ama"

    }
]

var weekDayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var colorIndex = 0;


function changeDOM() {
    var doc = document.getElementsByTagName("BODY")[0];


}

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
        document.getElementById("the-gender").style.color = 'red';
        return false;
    }


    return formValid;

}

function getUserDetails() {
    var mdate = parseInt(document.getElementById("mdate").value);
    var mmonth = parseInt(document.getElementById("mmonth").value);
    var myear = parseInt(document.getElementById("myear").value);
    var gender = document.getElementsByName("gender");

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            var GenderValue = gender[i].value;
    }

    var userDetails = {
        mdate: mdate,
        mmonth: mmonth,
        myear: myear,
        myGenderValue: GenderValue,

    }


    return userDetails;

}

function aggregateFunctions() {
    var formValid = validateForm();

    if (!formValid) {
        validateForm();
        return false;
    } {
        getUserDetails();
        verifyUserBirthday();
        findUserAkanName();
        printUserAkanName();
        return false;

    }
}