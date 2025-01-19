// Using Class

// class user{
//     constructor(email,password){
//         this.email=email
//         this.password=password
//     }

//     get email(){
//         return this._email.toUpperCase()
//     }

//     set email(value){
//         this._email = value
//     }

//     get password(){
//         return `${this._password}ABC`
//     }

//     set password(value){
//         this._password = value
//     }
// }

// const ankit = new user("Ankit@gmail.com","1230")
// console.log(ankit);

// Using Function

// function User (email,password){
//     this.email=email
//     this.password=password

//     Object.defineProperty(this,'email',{
//         get:function(){
//             return this._email.toUpperCase()
//         },

//         set:function(value){
//             this._email = value
//         }
//     })
// }

// const chai = new User("Ankit@gmail.com","123")
// console.log(chai.email);

//

// Using Object 

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);


