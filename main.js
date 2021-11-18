/*Gestion du Logo + blog articles*/

//http://localhost/wordpress_site/wp-json/wp/v2/posts // modif du fichier functions // page_logo_src

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://cedrickk.promo-90.codeur.online/linsayshoes/wp-json/wp/v2/posts?_embed', true);

// If specified, responseType must be empty string or "text"
xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {

            var myData = xhr.response;
            var logo = xhr.response[0].page_logo_src;
            for (var i = 0; i < myData.length; i++) {

                // let x = "<div class='box-content h-32 w-32 p-4 border-4'>" + myData[i].slug + "</div>"

                let content = myData[i].excerpt.rendered.replace(/(<([^>]+)>)/ig, "");
                let full = myData[i].content.rendered;
                let idBtn = myData[i].id;

                let x = '<div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">'
                    + '<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">'
                    + '<a href="#" class="flex flex-wrap no-underline hover:no-underline">'
                    + '<img src="' + myData[i]["yoast_head_json"]["og_image"][0]["url"] + '"'
                    + 'class="rounded-t pb-6">'
                    + '<div class ="w-full font-bold text-xl text-gray-900 px-6">' + myData[i].title.rendered
                    + '</div>'
                    + '<p class ="text-gray-800 font-serif text-base px-6 mb-5">'
                    + content
                    + '</p>'
                    + '</a>'
                    + '</div>'
                    + '<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">'
                    + '<a button type="button" id="btn_' + idBtn + '" class="btnBlog bg-white hover:bg-gray-100 text-gray-600  py-2 px-2 border border-gray-400 rounded shadow"'
                    + 'data-id = "btn' + idBtn + '" >voir les articles</button></a >'
                    + '<br/><br/>'
                    + '<p class ="w-full text-gray-600 text-xs md:text-sm px-6">' + myData[i].date + '</p>'
                    + '</div>'
                    + '</div>';

                document.getElementById("myContent").innerHTML += x;
                document.addEventListener('click', function (e) {
                    if (e.target && e.target.id == 'btn_' + idBtn ) {
                        //alert(full);

                        // Get the modal
                        var modal = document.getElementById("myModal");

                        var mcontent = document.getElementById("m_content");
                        // Get the <span> element that closes the modal
                        var span = document.getElementsByClassName("close")[0];



                        // When the user clicks on <span> (x), close the modal
                        span.onclick = function () {
                            modal.style.display = "none";
                        }

                        // When the user clicks anywhere outside of the modal, close it
                        window.onclick = function (event) {
                            if (event.target == modal) {
                                modal.style.display = "none";
                            }
                        }
                        mcontent.innerHTML = full;
                        modal.style.display = "block";

                    }
                });




            }

            document.getElementById("logo").src = logo;

        }
    }
};

xhr.send(null);



/*Gestion du menu*/

//http://localhost/wordpress_site/wp-json/wp-api-menus/v2/menus/2 // Voir extension de menu

// var menuXHR = new XMLHttpRequest();
// menuXHR.open('GET', 'http://localhost/wordpress_site/wp-json/wp-api-menus/v2/menus/2', true);

// // If specified, responseType must be empty string or "text"
// menuXHR.responseType = 'json';

// menuXHR.onload = function () {
//     if (menuXHR.readyState === menuXHR.DONE) {
//         if (menuXHR.status === 200) {

//             var myMenu = menuXHR.response;

//             //console.log(myMenu.items.length); NOMBRE D'ENTREES DE MENU

//             // console.log(myMenu.items[0].title); Retounre la première entrée de menu

//             for (var i = 0; i < myMenu.items.length; i++) {

//                 var menu = myMenu.items[i].title;
//                 var url = myMenu.items[i].url;

//                 let y = '<li class="mr-2">'
//                     + '<a class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"'
//                     + 'href = "' + url + '" >' + menu + '</a >'
//                     + '</li >';

//                 document.getElementById("mainMenu").innerHTML += y;



//             }



//         }
//     }
// };

// menuXHR.send(null);

//js w3 schools
// Accordion 
function myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Click on the "Jeans" link on page load to open the accordion for demo purposes
document.getElementById("myBtn").click();


// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}
