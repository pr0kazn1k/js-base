class Form {
  
  isValid = false;
  
  constructor(form) {
    this.form = form;
    //this.init();
  }

  init() {
    this.form.addEventListener('submit', this.submit.bind(this));
    this.inputs = [...this.form.querySelectorAll('input, textarea')];
    
    this.inputs.forEach(input => {
      console.log(input);
	}
  }
  
  validate() {
    console.log('validate');
    
    
  }
  
  submit(e) {
    e.preventDefault();
    
    //this.init();
    
    if (this.isValid) {
      console.log('submit ok!');
	}
    
    console.log('!submit', this.isValid);
  }
 
  
}

const forms = document.querySelectorAll('form');

[...forms].forEach(form => {
  new Form(form);
});
