function logi(){
    window.location = './login.html'
}
function regi(){
    window.location = './register.html'
}
function regis(){
    let acc = {
        user:user.value,
        acno:acno.value,
        psw:psw.value,
        balance:0
    }
    if(acc.user==""||acc.acno==""||acc.psw==""){
        alert("Please enter all details!")
    }
    else{
        if(acc.acno in localStorage){
            alert("A profile with this account number already exists!")
        }
        else{
            localStorage.setItem(acc.acno,JSON.stringify(acc))
            alert("Account details added succesfully.")
            window.location="./login.html"
        }
    }
    user.value=""
    acno.value=""
    psw.value=""
}
function login(){
    if(acno1.value in localStorage){
        let acc1 = JSON.parse(localStorage.getItem(acno1.value))
        if(acc1.psw == psw1.value){
            sessionStorage.setItem("acnot",JSON.stringify(acc1))
            alert('Login successfull.')
            window.location="./home.html"
        }
        else{
            alert('Login failed! Wrong password.')
        }
    }
    else{
        alert('Login failed! Wrong account number.')
    }
    acno1.value=""
    psw1.value=""
}
var acnon = JSON.parse(sessionStorage.getItem("acnot"))
heading.innerHTML = `Welcome ${acnon.user}`
function deposit(){
    var acnod = JSON.parse(sessionStorage.getItem("acnot"))
    if(acnod.acno in localStorage){
        let acc2 = JSON.parse(localStorage.getItem(acnod.acno))
        if(acc2.psw == psw2.value){
            var newbal = acc2.balance+Number(amt.value)
            alert("Transaction successful.")
            depodisp.innerHTML = `Account balance: Rs. ${newbal}`
            let acnod1 ={
                user:acc2.user,
                acno:acc2.acno,
                psw:acc2.psw,
                balance:newbal
            }
            localStorage.setItem(acnod1.acno,JSON.stringify(acnod1))
            sessionStorage.setItem("acnot",JSON.stringify(acnod1))
            amt.value=""
            psw2.value=""
            withdisp.innerHTML=""
        }
        else{
            alert('Transaction failed! Wrong password.')
            psw2.value=""
        }
    }

}
function withdraw(){
    var acnow = JSON.parse(sessionStorage.getItem("acnot"))
    if(acnow.acno in localStorage){
        let acc2 = JSON.parse(localStorage.getItem(acnow.acno))
        if(acc2.psw == psw3.value){
            if(acc2.balance>=amt1.value){
                var newbal = acc2.balance-Number(amt1.value)
                alert("Transaction successful.")
                withdisp.innerHTML = `Account balance: Rs. ${newbal}`
                let acnow1 ={
                    user:acc2.user,
                    acno:acc2.acno,
                    psw:acc2.psw,
                    balance:newbal
                }
                localStorage.setItem(acnow1.acno,JSON.stringify(acnow1))
                sessionStorage.setItem("acnot",JSON.stringify(acnow1))
                amt1.value=""
                psw3.value=""
                depodisp.innerHTML=""
            }
            else{
                alert("Transaction failed! Insufficient balance.")
                amt1.value=""
            }
        }
        else{
            alert('Transaction failed! Wrong password.')
            psw3.value=""
        }
    }
}
function balan(){
    var acnob = JSON.parse(sessionStorage.getItem("acnot"))
    alert(`Your account balance is: Rs. ${acnob.balance}`)
}
function logout(){
    sessionStorage.clear()
    window.location = "./login.html"
}