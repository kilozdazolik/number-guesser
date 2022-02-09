let number = Math.trunc((Math.random() * 100) + 1)
let guessCount = 0
let record = 999

document.querySelector(".btn-send").addEventListener("click", function () {
    let tip = Number(document.querySelector(".tip").value)
    console.log(tip, typeof tip)

    if (tip !== 0) {
        guessCount++
        document.querySelector(".text-tips").textContent = `Number of Guesses: ${guessCount}`
        if (tip > number) {
            document.querySelector(".text-info").textContent = "🔺 Too Big!"
        } else if (tip < number) {
            document.querySelector(".text-info").textContent = "🔻 Too Small!"
        } else if (tip === number) {
            document.querySelector(".text-info").textContent = "✅ Correct!"
            document.querySelector(".guess-number").style.backgroundColor = "#60b347"
            document.querySelector(".guess-number").textContent = number
            if (guessCount < record) {
                record = guessCount
                document.querySelector(".text-record").textContent = `Record: ${record} 🏆`
            }
        }
    } else {
        document.querySelector(".text-info").textContent = "🔴 You did not enter a number!"
    }
})

document.querySelector(".btn-repeat").addEventListener("click", function () {
    document.querySelector(".text-info").textContent = "-"
    document.querySelector(".guess-number").style.backgroundColor = "rgb(100, 227, 189)"
    document.querySelector(".guess-number").textContent = "?"
    guessCount = 0
    document.querySelector(".text-tips").textContent = `Number of Guesses: ${guessCount}`
    number = Math.trunc((Math.random() * 100) + 1)
})

document.querySelector(".btn-help").addEventListener("click", function () {
    document.querySelector(".modal").classList.toggle("hiden")
    document.querySelector(".blur").classList.toggle("hiden")
})

document.querySelector(".blur").addEventListener("click", function () {
    document.querySelector(".modal").classList.toggle("hiden")
    document.querySelector(".blur").classList.toggle("hiden")
})