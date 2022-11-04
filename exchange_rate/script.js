const api_key = "09c9906d9a1d52a229ddc2ba";
const url = " https://v6.exchangerate-api.com/v6/" + api_key;
const datalist1 = document.querySelector("#datalist1");
const datalist2 = document.querySelector("#datalist2");
const list1 = document.querySelector("#list1");
const list2 = document.querySelector("#list2");
const btn = document.querySelector(".btn_");
const amount = document.querySelector("#amount");
const info_text = document.querySelector("#info_text");


fetch(url+"/codes")
.then(res=> res.json())
.then(data=>{
    const items = data.supported_codes;
    let options;
    for(let item of items){
       // console.log(item);
       options+=` <option value=${item[0]}> ${item[1]} </option>`;
    }
    list1.innerHTML=options;
    list2.innerHTML=options;
});

btn.addEventListener("click",(()=>{
    const from = datalist1.value;
    const to = datalist2.value;
    const unit = amount.value;
    fetch(url+"/latest/" + from)
    .then(res=>res.json())
    .then(data=>{
        const result = (data.conversion_rates[to]*unit).toFixed(5);
        info_text.innerHTML=`
        ${amount.value} ${from} = ${result} ${to}
       `
       // console.log(data.conversion_rates[to]);
    });
}));


