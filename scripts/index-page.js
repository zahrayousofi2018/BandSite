const name = document.getElementById('name')
const comment = document.getElementById('comment')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addElementListener('comment', (e) => {
    let messages =[]
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})