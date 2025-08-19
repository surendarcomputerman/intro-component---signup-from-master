let input = document.querySelectorAll('input')
let err = document.querySelector('.err-msg')
let btn = document.querySelector('.submit-btn')
let errP = document.querySelectorAll('.err-p')
let email = document.querySelector('.email')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

input.forEach((inpu, index) => {
    inpu.addEventListener('input', function () {
        if (errP[index]) {
            errP[index].style.display = 'none'
        }
        let isValid = false
        if (this === email) {
            isValid = emailRegex.test(this.value.trim())   
        }
        else {
            isValid = this.value.trim !== ''            
        }
        if (isValid) {
            this.style.borderColor = 'green'
        }
        else if (this.value.trim() !== '') {
            this.style.borderColor = 'red'
            if (errP[index]) {
                errP[index].style.display = 'block'
            }
        }
        else {
            this.style.borderColor = ''
        }
    })
})



btn.addEventListener('click', (e) => {
    e.preventDefault()
    
    let hasErrors = false
    
    // Validate each field
    input.forEach((inpu, index) => {
        let isValid = false
        
        if(inpu === email) {
            isValid = emailRegex.test(inpu.value.trim()) && inpu.value.trim() !== ''
        } else {
            isValid = inpu.value.trim() !== ''
        }
        
        if(!isValid) {
            inpu.style.borderColor = 'red'
            if(errP[index]) {
                errP[index].style.display = 'block'
            }
            hasErrors = true
        } else {
            inpu.style.borderColor = 'green'
            if(errP[index]) {
                errP[index].style.display = 'none'
            }
        }
    })
    
    if(!hasErrors) {
 
        setTimeout(() => {
             err.style.backgroundColor = "green"
           err.textContent = "Form submitted successfully!"
            input.forEach(inp => {
                inp.value = ''
                inp.style.borderColor = ""
            })
            errP.forEach(errPar => errPar.style.display = 'none')
        }, 1000)

        setTimeout(() => {
            err.textContent = "Try it free 7 days then $20/mo. thereafter"
            err.style.backgroundColor = "blue"
        }, 3000)
    }
})