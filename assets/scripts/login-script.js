/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* Make variable for every element view */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* Make variable for saving informastion email and user password */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* Make an action for klik button result  */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    /* getting value from each input (email  and password) while button pressed */
    // TODO 1 : Mendapatkan input email dan password pengguna dari form.
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;

    /*make sure that email value and password according to the stored value*/
    /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
  if(email == expectedEmail && password == expectedPassword){
    /*if its fit the program will move to main page */
    goToHome();
  }else{
    /* however if doesnt fit show fail information input */
  showPopUp();
  }
});
