export const myForm = (infor) => new Promise((resolve, reject) => {
    const { value } = document.querySelector(infor.idElement);
    if (value == "") {
        document.querySelector(infor.errId).innerHTML = infor.content;
        reject();
    } else {
        document.querySelector(infor.errId).innerHTML = "";
        resolve();
    }
});