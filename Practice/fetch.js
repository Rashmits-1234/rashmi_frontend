const button = document.querySelector(".button");
button.addEventListener("click", handleClick);
const div = document.querySelector('#container');

async function handleClick() {
    console.log("Wait Loading.....!");


    try{
        const response = await fetch("https://p-9x7e.onrender.com/products/products");
        const res = await response.json();
        console.log(res.data);

        for(let i = 0 ; i < res.data.length; i++){
            const para = document.createElement('h1');
            para.innerText = res.data[i]._id + " =====>> " + res.data[i].pName;
            div.append(para);
            }
        }
        catch (error){
            console.error('Error fetching data: ',error);
        }
}                                                                                                                          