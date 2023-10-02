// Callback Functions
function getUser(callback){
    setTimeout(()=>{
        const user = ["Johan", "Tidy","Aragon", "Liebert"];
        callback(user)
    }
    , 3000);
}

// Memanggil function getUser
getUser((users)=>{ //Untuk dapat memanggil getUser, pada parameter harus memasukkan function lainnya
    console.log(users);   
});

// mendeklarasikan fungsi callback di luar argumen
// Mendeklarasikan fungsi utama
function getMembers(callback){
    setTimeout(()=>{
        const member = ["William", "Rasputin", "Miccolini", "Michael"];
        callback(member)
    }
    , 2000)
}
// Mendeklarasikan fungsi callbak
function getMembersCallback(member){
    console.log(member);
};
// Memanggil function utama dengan parameter function callbacj
getMembers(getMembersCallback);

//# Mengatasi Error ketika ada suatu kendala dalam proses asyncronous
function getData(isOffline, callback){
    setTimeout(()=>{
        const data_x = ["Image", "Video", "Photos"]
        if(isOffline){
            callback(new Error(`Cannot Retrieve Data due to offline connection`));
            return;
        }
        callback(null, data_x);
    }, 3000)
};

function getDataCallback(error, data){
    if(error){
        console.log('process failed', error.message);
        return;
    }
    console.log(`process succeess:`, data);
}

getData(true, getDataCallback);
getData(false, getDataCallback);