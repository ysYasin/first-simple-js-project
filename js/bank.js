// deposite section
// document.getElementById('btn-deposite').addEventListener('click', function () {
//     const depoAmound = document.getElementById('depo-amound').value;
//     let depoChange = document.getElementById('depo-change').innerText;
//     depoChange = depoAmound;
// })
document.getElementById('btn-deposite').addEventListener('click', function () {
    const depoAmound = document.getElementById('depo-amound')
    const depoAmountValue = depoAmound.value;
    const depoInt = parseFloat(depoAmountValue);

    let depoChange = document.getElementById('depo-change');
    const depoInText = depoChange.innerText;
    let depoInNum = parseFloat(depoInText);

    let TotalBalence = document.getElementById('total-balence');
    const totalBalenceString = TotalBalence.innerText;
    let totalBalengeNumber = parseFloat(totalBalenceString);

    if (depoInt >= 0 && totalBalengeNumber > 0) {
        const depoFinalAmount = depoInNum + depoInt;
        const totalAmount = totalBalengeNumber + depoInt;
        depoChange.innerText = depoFinalAmount;
        TotalBalence.innerText = totalAmount;

    } else {
        alert('Please input amount in Number')
    }
    depoAmound.value = ''

});

document.getElementById('btn-withdrow').addEventListener('click', function () {
    const withdrowAmound = document.getElementById('withdrow-amound')
    const withdrowAmountInString = withdrowAmound.value;
    const withdrowAmountInNumber = parseFloat(withdrowAmountInString);

    let widroSpan = document.getElementById('w-change');
    const widroSpanString = widroSpan.innerText;
    let widroSpanNumber = parseFloat(widroSpanString);

    let TotalBalence = document.getElementById('total-balence');
    const totalBalenceString = TotalBalence.innerText;
    let totalBalengeNumber = parseFloat(totalBalenceString);

    if (withdrowAmountInNumber >= 0 && totalBalengeNumber > 0) {
        const withdrowFinalAmount = widroSpanNumber + withdrowAmountInNumber;
        const totalAmount = totalBalengeNumber - withdrowAmountInNumber;
        widroSpan.innerText = withdrowFinalAmount;
        TotalBalence.innerText = totalAmount;

    } else {
        alert('Please input amount in Number')
    }
    withdrowAmound.value = ''

});
