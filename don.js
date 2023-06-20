//  console.log(document.domain);
//  console.log(ent.title);
//  console.lodocument.URL);
//  console.log(document.doctype);
//  console.log(document.body);
//  console.log(document.head);
//  console.log(document.all[10]);
//  console.log(document.getElementById("main"));
//  console.log(document.getElementById("main-header"));
//  console.log(document.getElementById("header-title"));
//  var headerTitle = document.getElementById("header-title");
//  console.log(headerTitle);
//  console.log(document.forms);
//  console.log(document.links);
//  console.log(document.images);
 //headerTitle.innerText = "james";
// headerTitle.textContent = "karis";
// headerTitle.innerHTML = "kazungu";
//var li = (document.getElementsByTagName('li'));
//console.log(li)
//li[0].textContent = 'hamez';
//li[1].innerHTML = 'baraka';
//li[2].innerText = 'samson';
//li[3].style.color = 'blue';
//li[2].style.backgroundColor = 'yellow';
// const items = document.querySelectorAll(['.list-group-item']);
// items.forEach((item) => console.log(item));
// const ul = document.querySelector(['.list-group']);
// ul.remove();
// ul.firstElementChild.innerHTML = 'karis';
// ul.lastElementChild.style.color = 'blue';
const myForm = document.querySelector('#my-form');
const btn = document.querySelector('.btn');
const msg = document.querySelector('.msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
//const userList = document.querySelector('#users');


// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//    console.log(e.target.className);
// });

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
   e.preventDefault();


    if (nameInput.value === '' || emailInput.value === '') {
        //msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';
        } else {
            console.log('success');
        }

}

