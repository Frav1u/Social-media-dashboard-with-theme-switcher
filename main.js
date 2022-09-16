const inputContainer = document.querySelector('input')
const rooElement = document.documentElement

const lightTheme = {
    '--background-page': 'linear-gradient(to bottom, hsl(225, 100%, 98%)35%, hsl(0, 0%, 100%)0, hsl(0, 0%, 100%)65%)',
    '--text-color': '#000000',
    '--background-card': 'hsl(227, 47%, 96%)',
    '--background-button': 'hsl(230, 22%, 74%)',
    '--text-color2': 'hsl(225, 12%, 44%)',
    '--h2-color': 'hsl(228, 12%, 44%)'
}

const darkTheme = {
    '--background-page': 'linear-gradient(to bottom, hsl(232, 19%, 15%)35%, hsl(230, 17%, 14%)0, hsl(230, 17%, 14%)65%)',
    '--text-color': 'hsl(0, 0%, 100%)',
    '--background-card': ' hsl(228, 28%, 20%)',
    '--background-button': 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%)',
    '--text-color2': 'hsl(228, 34%, 66%)',
    '--h2-color': 'hsl(0, 0%, 100%)'
}

inputContainer.addEventListener('change', function () {
    const isChecked = inputContainer.checked
    if (isChecked) {
        changeTheme(darkTheme)
    } else {
        changeTheme(lightTheme)
    }
})

function changeTheme(theme) {
    console.log(theme)
    for (let prop in theme) {
        changeProperty(prop, theme[prop])
    }
}

function changeProperty(Property, value) {
    rooElement.style.setProperty(Property, value)
}