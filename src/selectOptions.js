//Esta función me permite ingresar opciones en los option de la etiqueta html select.
//const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const months = {
    "January": "01",
    "February": "02",
    "March": "03",
    "April": "04",
    "May": "05",
    "June": "06",
    "July": "07",
    "August": "08",
    "September": "09",
    "October": "10",
    "November": "11",
    "December": "12"
}


const selectOptions = {
    optionsMonths: (select)=>{
        for (const prop in months) {
            select.innerHTML += `<option>${prop}</option>`;
        }
    },
    optionsYears: (select)=>{
        //ingresar años option en el html
        const date = new Date();
        const actualYear = date.getFullYear();
        for(let i=actualYear; i<=actualYear+8; i++){
            select.innerHTML += `<option>${i}</option>`
        }
    },
    changeMonth: (select, label)=>{
        select.addEventListener("change", ()=>{
            let valueMonth = select.value;
            label.innerHTML = `${months[valueMonth]}`;
        })
    },
    changeYear: (select, label)=>{
        select.addEventListener("change", ()=>{
            let valueYear = select.value.toString();
            //console.log(typeof(valueYear));
            label.innerHTML = `${valueYear.substring(valueYear.length-2, valueYear.length)}`;
        });
    }

};

export default selectOptions;