// const body = document.querySelector('body');
// const nav = document.querySelector('nav');
// const mainUl = document.querySelector('.main-Ul');
// const menuList = document.querySelectorAll('.menu-list');
// const dropDownMenu = document.querySelectorAll('.drop-down');
// const [...dropDown] = dropDownMenu;
// const listItems = dropDown.map((element) => {
//   return element.querySelectorAll('li');
// });
// const menu1 = document.querySelector('.menu1');
// const menu2 = document.querySelector('.menu1');
// const menu3 = document.querySelector('.menu1');
// const menu4 = document.querySelector('.menu1');

// export function bodySettings() {
//   body.setAttribute('style', 'font-size:1.5rem;');
// }
// export function navSettings() {
//   nav.setAttribute(
//     'style',
//     'height:5vh;padding:0; display:inline-block; width:auto;'
//   );
// }
// export function mainUlSettings() {
//   mainUl.setAttribute(
//     'style',
//     'background:#aaa; padding:0; width:auto;position:relative; height:5vh; margin:0;text-align:center;'
//   );
// }
// export function menuListSettings() {
//   menuList.forEach((element) => {
//     element.setAttribute(
//       'style',
//       'cursor:pointer; background:#aaa; margin:0; display:inline-block; list-style-type:none; line-height:40px;width:12vw; padding:0 2px;'
//     );
//     element.addEventListener('mouseover', function () {
//       element.setAttribute(
//         'style',
//         'background:#d5d5d5; margin:0; border-radius: 5px; list-style-type:none; line-height:40px; display:inline-block; width:12vw; cursor:pointer;padding:0 2px;'
//       );
//     });
//     element.addEventListener('mouseout', function () {
//       element.setAttribute(
//         'style',
//         'background:#aaa; margin:0; list-style-type:none; line-height:40px; display:inline-block; width:12vw; cursor:pointer;padding:0 2px;'
//       );
//     });
    
//   });
//   const [...arr] = menuList;
//   const arrLi = arr.map(element => {
//     return element;
//   })
//   function expose() {
//     return arrLi;
//   }
//   return expose;
  
// }

// export function dropDownMenuSettings() {
//   dropDownMenu.forEach((element) => {
//     element.setAttribute(
//       'style',
//       'position:absolute;margin:0;width:auto;top:100%;'
//     );

//   });

// }

// export function listItemsSettings() {
//   listItems.forEach(element => {
//     element.forEach(elem => {
//       elem.setAttribute('style', 'display:none;background: #666;color:rgba(255, 255, 255, 0.7);')
//       elem.addEventListener('mouseover', function() {
//         // elem.setAttribute('style', 'background:#60606;')
//       })
//     })
//   })

//   const exposed = menuListSettings()();
//   exposed.forEach(element => {
//     element.addEventListener('mouseover', function() {
//       listItems.forEach(elem => {
//         elem.forEach(el => {
//           el.setAttribute('style', 'display:block; background:#60606;position:relative;')
//         })
//       })
//     })
//   })
    
// }
