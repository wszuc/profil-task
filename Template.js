const initialForm = `<form>
<div class="form form-intial">
    <section>
        <label for="question">Question</label>
        <input type="question" name="question">
    </section>
    <section>
        <label for="type">Type</label>
        <select name="type">
            <option value="yes/no">Yes/No</option>
            <option value="text">Text</option>
            <option value="number">Number</option>
        </select>
    </section>
</div>
</form>`


class FormBuilder {
    constructor(type) {
        this.type = type
    }
    generateForm() {
        switch (type) {
            case 'initial':
                return initialForm
                break;
            case 'text':
                return textForm
                break;
            default:
                break;
        }
    }

}

export default FormBuilder