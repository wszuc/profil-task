const startButton = document.querySelector('.start-button')
const container = document.querySelector('.container')
let selectedField = ``
let forms = []
let selectItems = []
const formInitial = `
<form>
<div class="form form-intial">
    <section>
        <label for="question">Question</label>
        <input type="question" name="question">
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
const formEmpty = `
<div class="form">
    <section>
        ${selectedField}
    </section>
    <section>
        <label for="question">Question</label>
        <input type="question" name="question">
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
<legend>Equals</legend>
                    <div class="radio">
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


class FormObject {
    constructor(condition, question, type) {
        this.condition = condition
        this.question = question
        this.type = type
    }
}

startButton.addEventListener('click', (e) => {
    startButton.remove()
    container.innerHTML = formInitial
    forms.push(new FormObject(null, '', ''))
    selectItems.push(document.querySelector('.select'))
    selectItems[0].addEventListener('change', (e) => { addForm(e.target.value) })
})

function addForm(type) {

}