class Validator {
  
  static rules = {
    required: [
      {
        rule: val => !val.length,
        invalidMessage: 'Обязательно для заполнения',
      }
    ],
    email: [
      {
        rule: val => val.length < 2,
        invalidMessage: 'Неверный email',
      }
    ],
    phone: [
      {
        rule: val => val.replace(/[^\d]+/g, "").length < 11,
        invalidMessage: 'Введите номер телефона'
      }
    ],
    isString: [
      {
        rule: val => !val.match(/[^a-zA-Zа-яА-я]/g),
        invalidMessage: 'Должны быть только из букв'
      }
    ],
  };

  static addRules(name, rule, invalidMessage) {
    if(!this.rules[name]) {
      this.rules[name] = [];
    }
    this.rules[name].push({rule, invalidMessage})
  }
  
  static check(value, rules) {
    const errors = [];
    
    rules.forEach(ruleName => {
      if(this.rules[ruleName]) {
        const rules = this.rules[ruleName];
        rules.forEach(rule => {
          if (rule.rule(value)) {
            errors.push(rule.invalidMessage);
          }
        });
      } else {
        console.log(`Правила '${ruleName}' не существует!`);
      }
    });
    
    return {
      errors,
      isValid: !errors.length,
    }
  }
  
}

Validator.addRules('test', val => val.length < 3, 'Test message');

console.log(Validator.check('test', ['email', 'required', 'test']));
console.log(Validator.check('', ['required', 'phone']));
