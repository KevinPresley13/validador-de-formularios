//<a href='https://br.freepik.com/fotos-vetores-gratis/aprendizagem'>Aprendizagem vetor criado por storyset - br.freepik.com</a>

let validator ={
    handleSubmit:(event)=>{
        event.preventDefault();

        validator.clearError();
        let send = true;
        let inputs = document.querySelectorAll('input');
        for(let i=0; i<inputs.length; i++){
            let input = inputs[i];
            let check = validator.checkInput(input);
            if(check !==true){
                send = false;
                validator.showError(input,check);
            }
        };

        if(send){
            form.submit();
        }

    },
    checkInput:(input)=>{
        let rules = input.getAttribute('data-rules');
        if (rules!==null){
            rules = rules.split('/');
            for(let k in rules){
                let rDetails = rules[k].split('=');
                switch (rDetails[0]){
                    case 'required':
                        if(input.value.trim() ==''){
                            return 'Preenchimento obrigatorio'
                        }
                    break;
                    case 'min':
                     
                    break;
                };

            };

        }
        return true;
    },
    showError:(input,error)=>{
        input.style.borderColor ='#ff0000';
        let errorElement = document.createElement('div');
        errorElement.classList.add('error')
        errorElement.innerHTML = error

        input.parentElement.insertBefore(errorElement,input.ElementSibling);
    },
    clearError:(input)=>{
        let errorElements = document.querySelectorAll('.error');
        for(let i=0; i<errorElements.length; i++){
            let inputs = form.querySelectorAll('input');
            for (let i=0; i<inputs.length; i++){
                inputs[i].style = '';
            }
            errorElements[i].remove();
            
        }
    }
};
let form = document.querySelector('form');
form.addEventListener('submit', validator.handleSubmit);