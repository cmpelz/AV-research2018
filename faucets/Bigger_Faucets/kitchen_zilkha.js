/*FILE SETTING UP KITCHEN IMAGE THAT LIGHTS UP WHEN CORRESPONDING APPLIANCES TURN ON*/


/*function to print text to canvas described in index.html*/
function print( text, ID ) {
    document.getElementById( ID ).innerHTML = text;
}

var imId;

/*function to insert image to canvas described in index.html*/
function insertImg( imgSrc, width, height, id ){
   var img = document.createElement("img");
   img.src = imgSrc;
   img.width = width;
   img.height = height;
   img.id = id;

   imId = id;

   document.write('<img id = "id" src = "' + imgSrc + '" style = "margin:0px auto;display:block" width = "' + width + '" height = "' + height + '" class = "center" />');
}

/*method checks which appliance has switched state and updates kitchen image*/
function checkChange(name) {
  for(k = 0; k < sim_appliances.length; k++) {
    if(sim_appliances[k].name == name) {
      changePic(k);
    }
  }
}


/*method changes the image according to which appliance (num) has switched states*/
function changePic(num){
    var filePath1 = KITCHEN_VIS_IMAGES_PATH;
    var srcImg = document.getElementById( "id" ).src;
    var filePath2 = KITCHEN_VIS_IMAGES_PATH;


    // Fridge lights up
    if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_on.png";
sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_toaster_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_toaster_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_toaster_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_toaster_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_toaster_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_all_off.jpg";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_oven_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_oven_toaster_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_toaster_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_stove_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_oven_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_all_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_stove_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_toaster_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_stove_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_stove_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_stove_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_toaster_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_stove_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_toaster_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
    sim_appliances[1].change = false;
} else if ( num == 1 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
    sim_appliances[1].change = false;

    // STOVE lights up

} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_oven_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_all_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_toaster_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_toaster_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_toaster_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_toaster_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_toaster_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_toaster_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_all_off.jpg";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_oven_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_oven_toaster_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_toaster_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_toaster_on.png";
    sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_toaster_on.png";
    sim_appliances[0].change = false;
/*
//STOVE lights up
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_stove_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_oven_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_all_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_hood_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_hood_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_hood_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_all_off.jpg";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_oven_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_oven_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_stove_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_toaster_on.png";
sim_appliances[0].change = false;
} else if ( num == 0 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_stove_toaster_on.png";
sim_appliances[0].change = false;
*/

// HOOD lights up

} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_toaster_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_toaster_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_oven_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_all_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_toaster_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_all_off.jpg";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_oven_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
  document.getElementById("id").src = filePath2 + "kitchen_2_oven_toaster_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_toaster_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_stove_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_toaster_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_stove_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_toaster_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_stove_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_stove_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_stove_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_toaster_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_stove_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_toaster_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
    sim_appliances[2].change = false;
} else if ( num == 2 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_toaster_on.png";
    sim_appliances[2].change = false;

// OVEN lights up

} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_oven_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_toaster_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_oven_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_all_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_toaster_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_toaster_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_toaster_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_stove_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_toaster_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_stove_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_toaster_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_stove_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_stove_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_stove_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_toaster_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_stove_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_toaster_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_all_off.jpg";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_toaster_on.png";
    sim_appliances[4].change = false;
} else if ( num == 4 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_oven_toaster_on.png";
    sim_appliances[4].change = false;

    // TOASTER lights up

} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_all_off.jpg" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_toaster_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_all_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_oven_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_toaster_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_toaster_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_oven_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_hood_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_toaster_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_all_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_hood_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_toaster_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_toaster_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_oven_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_stove_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_stove_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_toaster_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_toaster_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_oven_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_fridge_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_fridge_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_toaster_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_toaster_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_oven_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_hood_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_stove_hood_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_toaster_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_toaster_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_stove_hood_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_oven_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_stove_hood_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_hood_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_stove_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_toaster_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_stove_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_toaster_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_stove_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_oven_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_stove_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_stove_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_oven_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_oven_toaster_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_oven_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_oven_on.png";
    sim_appliances[3].change = false;
} else if ( num == 3 && srcImg == ( filePath1 + "kitchen_2_toaster_on.png" ) ) {
    document.getElementById("id").src = filePath2 + "kitchen_2_all_off.jpg";
    sim_appliances[3].change = false;
} else {
    console.log( "Error  " + document.getElementById("id").src);
}
}
