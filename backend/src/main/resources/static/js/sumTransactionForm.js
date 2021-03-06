let form3 = '#sum-transaction-form';
$('#sumForm').click((e) => {
   e.preventDefault();

   $(form3).toggleClass('visible');

})
$(form3).submit(function (e) {
   e.preventDefault();
   let userId = $(form3 + ' #user_id').val();

   fetch(`http://localhost:8080/api/v1/transactions/sum/${userId}`, {
      method: "GET"
   }).then(res => {
      console.log(res.status);

      if (res.status == 200) {
         res.json().then((data) => {
            $('.container ul *').remove('*');
            $('.container ul').css({
               "grid-template-columns": "1fr"
            });
            $('.container ul').append(

               "<div class='card-sum' style='width: 50%;'>" +
               `<h2 >User id: ${data.userId}</h2>` +
               `<h2 >Sum: $${data.sum}</h2>` +

               "</div>"
            )

         })
      } else {
         res.text().then(str => {
            $('.container ul *').remove('*');
            $('.container ul').css({
               "grid-template-columns": "1fr"
            });
            $('.container ul').append(`<div class="card-err"><h1 >${str}</h1></div>`);
         });
      }
   })





});