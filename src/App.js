const startButton = document.querySelector('.start-button')
const container = document.querySelector('.container')
let formContainer
let selectedField
let forms = []
let selectItems = []

const formInitial = `
<form id="form">
<div class="form form-intial">
    <section>
        <label for="question">Question</label>
        <input class="question" name="question">
    </section>
    <section>
        <label for="type">Type</label>
        <select name="type" class="select">
            <option value="">Select...</option>
            <option value="yes/no">Yes/No</option>
            <option value="text">Text</option>
            <option value="number">Number</option>
        </select>
    </section>
</div>
</form>
`
const formText = `
<label for="equals">Condition</label>
<div class="equals">
    <select name="equals">
        <option value="equals">Equals</option>
        <input type="text" name="equals">
</div>
`
const formYesNo = `
<legend>Condition</legend>
                    <div class="radio">
                        <div>
                            <select name="equals">
                                <option value="equals">Equals</option>
                            </select>
                        </div>
                        <div>
                            <label for="yes/no">Yes</label>
                            <input type="radio" name="yes/no" value="Yes">
                        </div>
                        <div>
                            <label for="yes/no">No</label>
                            <input type="radio" name="yes/no" value="No">
                        </div>

                    </div>
`
const formNumber = `
<legend>Condition</legend>
<div class="number">
    <div>
        <select name="equals">
            <option value="equals">Equals</option>
            <option value="greater">Greater than</option>
            <option value="less">Less than</option>
        </select>
    </div>
    <div>
        <input type="number" name="number">
    </div>
</div>
`


class FormObject {
    constructor(condition, question, type) {
        this.condition = condition
        this.question = question
        this.type = type
    }
}

function addForm(type) {
    switch (type) {
        case 'yes/no':
            forms.push(new FormObject('yes', '', ''))
            selectedField = formYesNo
            console.log(selectedField)
            break
        case 'number':
            forms.push(new FormObject('', '', ''))
            selectedField = formNumber
            break
        case 'text':
            forms.push(new FormObject('', '', ''))
            selectedField = formText
            break
        case null:
            forms.push(new FormObject(null, '', ''))
            break;
        default:
            console.error('Unexpected input')
            break
    }
    render()
    listen()
}

function listen() {
    selectItems = document.querySelectorAll('.select')
    for (let i = 0; i < selectItems.length; i++) {
        selectItems[i].addEventListener('change', (e) => {
            forms[i].condition = 'TODO'
            forms[i].question = document.querySelectorAll('.question')[i].value
            forms[i].type = document.querySelectorAll('.select')[i].value
            addForm(forms[i].type)
        })
    }
}

function render() {
    const formTemplate = `
            <section>
                ${selectedField}
            </section>
            <section>
                <label for="question">Question</label>
                <input class="question" name="question">
            </section>
            <section>
                <label for="type">Type</label>
                <select name="type" class="select">
                    <option value="">Select...</option>
                    <option value="yes/no">Yes/No</option>
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                </select>
            </section>
`
    for (let i = 0; i < forms.length; i++) {
        if (i == 0) {
            container.innerHTML = formInitial
            formContainer = document.getElementById('form')
        } else {
            const formFinished = document.createElement('div')
            formFinished.classList.add('form')
            formFinished.innerHTML = formTemplate
            formContainer.appendChild(formFinished)
        }

    }
}

startButton.addEventListener('click', (e) => {
    startButton.remove()
    addForm(null)
})