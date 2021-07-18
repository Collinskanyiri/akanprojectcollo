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

function changeToDom() {
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

function verifyUserBirthday() {
    var userDetailsObject = getUserDetails();
    mdate = userDetailsObject.mdate;
    mmonth = userDetailsObject.mmonth;
    myear = userDetailsObject.myear;

    var a = Math.floor((14 - mmonth) / 12);
    var y = myear - a;
    var m = mmonth + 12 * a - 2;
    dayOfWeek = (mdate + y + Math.floor(y / 4) - Math.floor(y / 100) +
        Math.floor(myear / 400) + Math.floor((31 * m) / 12)) % 7;

    return dayOfWeek;

}

function findUserAkanName() {
    var userDetailsObject = getUserDetails();
    mGender = userDetailsObject.myGenderValue;
    userWeekDayIndex = verifyUserBirthday();


    var dayOfTheWeek = weekDayArray[userWeekDayIndex];

    if (mGender === "male") {

        var akanArrayObject = akanArray[0];

        for (var key in akanArrayObject) {
            if (akanArrayObject.hasOwnProperty(key)) {
                if (key === dayOfTheWeek) {
                    akanName = akanArrayObject[key];
                }
            }
        }
    } else if (mGender === "female") {
        var akanArrayObject = akanArray[1];

        for (var key in akanArrayObject) {
            if (akanArrayObject.hasOwnProperty(key)) {
                if (key === dayOfTheWeek) {

                    akanName = akanArrayObject[key];
                }
            }
        }

    } else {
        alert("Error occurred!");
    }

    var importantDetails = {
        akanName: akanName,
        dayOfTheWeek: dayOfTheWeek,
        mGender: mGender


    }
    return importantDetails;

}

function printUserAkanName() {
    clearInterval(changeToDom);
    var akanDetails = findUserAkanName();
    akanName = akanDetails.akanName;
    dayOfTheWeek = akanDetails.dayOfTheWeek;
    mGender = akanDetails.mGender;

    var doc = document.getElementsByTagName("BODY")[0];




    document.getElementById("myAkan").innerHTML = "WOW!! We found it.Your Akan name is  " + akanName;
    document.getElementById("reason").innerHTML = 'Since, You are a ' + mGender + ' born on ' + dayOfTheWeek;
    document.getElementById("myAkan").style.textDecoration = "underline";
    document.getElementById("myAkan").style.color = 'red';
    document.getElementById("myAkan").style.fontSize = '45px';
    document.getElementById("reason").style.color = 'blue';
    document.getElementById("reason").style.fontSize = '45px';


}

function clearInput() {
    window.location.reload();
}