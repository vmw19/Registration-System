class User {
    constructor(firstName, lastName, email, password, age, address, cardNumber, phone, color) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.address = address;
        this.cardNumber = cardNumber;
        this.phone = phone;//##attention##
        this.color = color;
    }
}

var vicky= new User('vicky', 'warren', 'alwaysvicky23@gmail.com', 'asdg','0000-0000-0000-0000');

console.log(userList);

function register(){
    let inputFirstName=$('#txtFirstname').val();
    let inputLastName=$('#txtLastname').val();
    let inputEmail=$('#txtEmail').val();
    let inputPassword=$('#txtPassword').val();
    let inputAge=jQuery("#txtAge").val();
    let inputAddress=$("#txtAddress").val();
    let inputCardNumber=$('#txtCardNumber').val();
    let inputPhone=$("#txtPhone").val();
    let inputColor=$("#txtColor").val();

    //create theUser
    let theUser=new User(inputFirstName,inputLastName, inputEmail, inputPassword, inputAge, inputAddress, inputCardNumber, inputPhone, inputColor);
    //validate the user**Extra HW

    console.log(theUser);
    //clear the inputs
    $("input").val("");
}
function init(){
    console.log("Registration");
    //hook events
}
window.onload=init;