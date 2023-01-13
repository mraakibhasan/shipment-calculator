//  Copyright (c) 2022 The CodeGrammer
//  Use, modification and distribution are subject to the
//  TCG License, Version 1.0. (See accompanying file

// DOM Elements
const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tabcontent')

// Functions
const activateTab = tabnum => {

    tabs.forEach(tab => {
        tab.classList.remove('active')
    })

    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
    })

    document.querySelector('#tab' + tabnum).classList.add('active')
    document.querySelector('#tabcontent' + tabnum).classList.add('active')
    localStorage.setItem('jstabs-opentab', JSON.stringify(tabnum))

}

// Event Listeners
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activateTab(tab.dataset.tab)
    })
})


// Retrieve stored data
const opentab = JSON.parse(localStorage.getItem('jstabs-opentab')) || '3'

// and..... Action!
activateTab(opentab)
function myReset(){
    //incity
    document.getElementById('mainform').reset();
    document.getElementById('weight_in').innerHTML = '00 Kg';
    document.getElementById('price_in').innerHTML = '00 BDT';
    document.getElementById('pickup_result_in').innerHTML = 'From Area';
    document.getElementById('deliver_result_in').innerHTML = 'To Area';
    document.getElementById('total_ammount_in').innerHTML = '00';
    document.getElementById('deliver_charge_in').innerHTML = 'Tk. 00';
    document.getElementById('cod_charge_in').innerHTML = 'Tk. 00';
    document.getElementById('package_in').innerHTML = 'Not selected';
    //nare city
    document.getElementById('mainform2').reset();
    document.getElementById('weight_near').innerHTML = '00 Kg';
    document.getElementById('price_near').innerHTML = '00 BDT';
    document.getElementById('pickup_result_near').innerHTML = 'From Area';
    document.getElementById('deliver_result_near').innerHTML = 'To Area';
    document.getElementById('total_ammount_near').innerHTML = '00';
    document.getElementById('deliver_charge_near').innerHTML = 'Tk. 00';
    document.getElementById('cod_charge_near').innerHTML = 'Tk. 00';
    document.getElementById('package_near').innerHTML = 'Not selected';
    //out city
    document.getElementById('mainform3').reset();
    document.getElementById('weight_out').innerHTML = '00 Kg';
    document.getElementById('price_out').innerHTML = '00 BDT';
    document.getElementById('pickup_result_out').innerHTML = 'From Area';
    document.getElementById('deliver_result_out').innerHTML = 'To Area';
    document.getElementById('total_ammount_out').innerHTML = '00';
    document.getElementById('deliver_charge_out').innerHTML = 'Tk. 00';
    document.getElementById('cod_charge_out').innerHTML = 'Tk. 00';
    document.getElementById('package_out').innerHTML = 'Not selected';

}
//Inside Dhaka Js Code//
submit_btn_in.addEventListener("click", (e) => {
    e.preventDefault();

})
function myResultIn() {
    let weight_in = document.getElementById('input_weight_in').value;
    let price_in = document.getElementById('input_price_in').value;
    let package_in = document.getElementById('input_package_in').value;
    let pick_area_in = document.getElementById('input_pick_area_in').value;
    let deliver_area_in = document.getElementById('input_deliver_area_in').value;
    let pick_area_in_2nd = document.getElementById('input_pick_area_in_2nd').value;
    let deliver_area_in_2nd = document.getElementById('input_deliver_area_in_2nd').value;
    document.getElementById('weight_in').innerHTML = weight_in + ' ' + 'Kg';
    document.getElementById('price_in').innerHTML = 'Tk. ' + price_in;
    document.getElementById('pickup_result_in').innerHTML = pick_area_in + pick_area_in_2nd;
    document.getElementById('deliver_result_in').innerHTML = deliver_area_in + deliver_area_in_2nd;
    document.getElementById('package_in').innerHTML = package_in;

    if (weight_in <= 1) {
        document.getElementById('total_ammount_in').innerHTML = parseInt(price_in) + 64;
        document.getElementById('deliver_charge_in').innerHTML = 'Tk. 64';
        document.getElementById('cod_charge_in').innerHTML = 'Tk. 00';
    }
    else if (weight_in <= 2) {
        document.getElementById('total_ammount_in').innerHTML = parseInt(price_in) + 79;
        document.getElementById('deliver_charge_in').innerHTML = 'Tk. 79';
        document.getElementById('cod_charge_in').innerHTML = 'Tk. 00';
    }
    else if (weight_in <= 3) {
        document.getElementById('total_ammount_in').innerHTML = parseInt(price_in) + 94;
        document.getElementById('deliver_charge_in').innerHTML = 'Tk. 94';
        document.getElementById('cod_charge_in').innerHTML = 'Tk. 00';
    }
    else if (weight_in <= 4) {
        document.getElementById('total_ammount_in').innerHTML = parseInt(price_in) + 109;
        document.getElementById('deliver_charge_in').innerHTML = 'Tk. 109';
        document.getElementById('cod_charge_in').innerHTML = 'Tk. 00';
    }
    else if (weight_in <= 10) {
        document.getElementById('total_ammount_in').innerHTML = parseInt(price_in) + 109;
        document.getElementById('deliver_charge_in').innerHTML = 'Tk. 109';
        document.getElementById('cod_charge_in').innerHTML = 'Tk. 00';
    }
    else if (weight_in > 10 ) {
        document.getElementById('total_ammount_in').innerHTML = 'N/A';
        document.getElementById('deliver_charge_in').innerHTML = 'N/A '  + weight_in + '>10';
        document.getElementById('cod_charge_in').innerHTML = 'N/A '  + weight_in + '>10';
    }
}
function insideKhulna(answer) {
    if (answer.value == 12){
        document.getElementById('from_area_div_in').classList.add('d-none');
        document.getElementById('to_area_div_in').classList.add('d-none');
        document.getElementById('from_area_div_in_2nd').classList.remove('d-none');
        document.getElementById('to_area_div_in_2nd').classList.remove('d-none');
    }
    else {
        document.getElementById('from_area_div_in').classList.remove('d-none');
        document.getElementById('to_area_div_in').classList.remove('d-none');
        document.getElementById('from_area_div_in_2nd').classList.add('d-none');
        document.getElementById('to_area_div_in_2nd').classList.add('d-none');
    }
}
//End Inside Dhaka Js Code//

//Start Near Dhaka Js Code//
submit_btn_near.addEventListener("click", (e) => {
    e.preventDefault();

})
function myResultNear() {
    let weight_near = document.getElementById('input_weight_near').value;
    let price_near = document.getElementById('input_price_near').value;
    let package_near = document.getElementById('input_package_near').value;
    let pick_area_near = document.getElementById('input_pick_area_near').value;
    let deliver_area_near = document.getElementById('input_deliver_area_near').value;
    console.log(weight_near);
    document.getElementById('weight_near').innerHTML = weight_near + ' ' + 'Kg';
    document.getElementById('price_near').innerHTML = 'Tk. ' + price_near;
    document.getElementById('pickup_result_near').innerHTML = pick_area_near;
    document.getElementById('deliver_result_near').innerHTML = deliver_area_near;
    document.getElementById('package_near').innerHTML = package_near;

    if (weight_near <= 1) {
        document.getElementById('total_ammount_near').innerHTML = parseInt(price_near) + 100;
        document.getElementById('deliver_charge_near').innerHTML = 'Tk. 100';
        document.getElementById('cod_charge_near').innerHTML = 'Discounted';
    }
    else if (weight_near <= 2) {
        document.getElementById('total_ammount_near').innerHTML = parseInt(price_near) + 125;
        document.getElementById('deliver_charge_near').innerHTML = 'Tk. 125';
        document.getElementById('cod_charge_near').innerHTML = 'Discounted';
    }
    else if (weight_near <= 3) {
        document.getElementById('total_ammount_near').innerHTML = parseInt(price_near) + 140;
        document.getElementById('deliver_charge_near').innerHTML = 'Tk. 140';
        document.getElementById('cod_charge_near').innerHTML = 'Discounted';
    }
    else if (weight_near <= 4) {
        document.getElementById('total_ammount_near').innerHTML = parseInt(price_near) + 155;
        document.getElementById('deliver_charge_near').innerHTML = 'Tk. 155';
        document.getElementById('cod_charge_near').innerHTML = 'Discounted';
    }
    else if (weight_near <= 10) {
        document.getElementById('total_ammount_near').innerHTML = parseInt(price_near) + 155;
        document.getElementById('deliver_charge_near').innerHTML = 'Tk. 155';
        document.getElementById('cod_charge_near').innerHTML = 'Discounted';
    }
    else if (weight_near > 10 ) {
        document.getElementById('total_ammount_near').innerHTML = 'N/A';
        document.getElementById('deliver_charge_near').innerHTML = 'N/A '  + weight_near + '>10';
        document.getElementById('cod_charge_near').innerHTML = 'N/A '  + weight_near + '>10';
    }
}
//End Near Dhaka Js Code//

//Start Out Dhaka Js Code//
submit_btn_out.addEventListener("click", (e) => {
    e.preventDefault();

})
function myResultOut(){
    let weight_out = document.getElementById('input_weight_out').value;
    let price_out = document.getElementById('input_price_out').value;
    let package_out = document.getElementById('input_package_out').value;
    let pick_area_out = document.getElementById('input_pick_area_out').value;
    let deliver_area_out = document.getElementById('input_deliver_area_out').value;

    document.getElementById('weight_out').innerHTML = weight_out + ' ' + 'Kg';
    document.getElementById('price_out').innerHTML = 'Tk. ' + price_out;
    document.getElementById('pickup_result_out').innerHTML = pick_area_out;
    document.getElementById('deliver_result_out').innerHTML = deliver_area_out;
    document.getElementById('package_out').innerHTML = package_out;

    if (weight_out <= 1) {
        document.getElementById('total_ammount_out').innerHTML = parseInt(price_out) + 155;
        document.getElementById('deliver_charge_out').innerHTML = 'Tk. 155';
        document.getElementById('cod_charge_out').innerHTML = 'Discounted';
    }
    else if (weight_out <= 2) {
        document.getElementById('total_ammount_out').innerHTML = parseInt(price_out) + 175;
        document.getElementById('deliver_charge_out').innerHTML = 'Tk. 175';
        document.getElementById('cod_charge_out').innerHTML = 'Discounted';
    }
    else if (weight_out <= 3) {
        document.getElementById('total_ammount_near').innerHTML = parseInt(price_out) + 205;
        document.getElementById('deliver_charge_out').innerHTML = 'Tk. 205';
        document.getElementById('cod_charge_out').innerHTML = 'Discounted';
    }
    else if (weight_out <= 4) {
        document.getElementById('total_ammount_out').innerHTML = parseInt(price_out) + 235;
        document.getElementById('deliver_charge_out').innerHTML = 'Tk. 135';
        document.getElementById('cod_charge_out').innerHTML = 'Discounted';
    }
    else if (weight_out <= 10) {
        document.getElementById('total_ammount_out').innerHTML = parseInt(price_out) + 235;
        document.getElementById('deliver_charge_out').innerHTML = 'Tk. 235';
        document.getElementById('cod_charge_out').innerHTML = 'Discounted';
    }
    else if (weight_out > 10 ) {
        document.getElementById('total_ammount_out').innerHTML = 'N/A';
        document.getElementById('deliver_charge_out').innerHTML = 'N/A '  + weight_out + '>10';
        document.getElementById('cod_charge_out').innerHTML = 'N/A '  + weight_out + '>10';
    }
}

//End Out Dhaka Js Code//