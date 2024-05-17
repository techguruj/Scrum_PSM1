
document.querySelector("[data-cy='continue-btn']").click()

setTimeout(() => {document.querySelector("[data-cy='continue-btn']").click();}, 1000); 


function clickFirstElement() {
    
    var firstCheckbox = document.querySelector("ion-checkbox");   
    var firstRadio = document.querySelector("ion-radio");


    if (firstCheckbox) {
        firstCheckbox.click();
    }


    if (firstRadio) {
        firstRadio.click();
    }
}


async function waitAndLog() {
    
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    for (let i = 0; i < 34; i++) {
        console.log(i);
        clickFirstElement();
        var continueButton = document.querySelector("[data-cy='continue-btn']");
        if (continueButton) {
            continueButton.click();
        }
        await delay(900);
    }
}


waitAndLog().then(() => {
    console.log("done");
    document.querySelector("[data-cy='finish-btn']").click();
    setTimeout(() => {document.querySelector("#test_confirm_finish").click();}, 1000); 

});
