var premium_1= 380;
var premium_2= 2150;
var premium_3= 380;
var premium_4= 550;
var premium_5= 400;
var premium_6= 630;
var premium_7= 860;

var insured_1 = 19000;
var insured_2 = 43000;
var insured_3 = 19000;
var insured_4 = 27500;
var insured_5 = 20000;
var insured_6 = 31500;
var insured_7 = 43000;

var premium = 0;
var insured_amount = 0;
var crop_id = 0;
var array_crops = [];
var array_area = [];
var array_premium =[];
var array_insured = [];
var array_deleted_crop_id = [];
var deleted_num = 0;
var delete_num_count = 0;

function change_unit(get_unit) {
		if (get_unit == "h") {
			document.getElementById("unit").innerHTML = "(Hector)";
		}
		else if (get_unit == "r") {
			document.getElementById("unit").innerHTML = "(R)";
		}
		calculate_vima();
		return get_unit;
}
function convert_to_hector(convert) {
	var unit = document.getElementById("area_unit");
	if(unit.value == "h") {
		return convert;
	}
	else if(unit.value == "r") {
		convert = convert / 100;
		return convert;
	}

}
function calculate_vima() {
	var area = document.getElementById("area").value;
	area = convert_to_hector(area);

	var crop_name = document.getElementById("crop_name").value;
	if (crop_name == "Black Gram (Urad)") {
		premium = premium_1 * area;
		insured_amount = insured_1 * area;
	}
	else if (crop_name == "Cotton (Kapas)") {
		premium = premium_2 * area;
		insured_amount = insured_2 * area;
	}
	else if (crop_name == "Green Gram (Moong)") {
		premium = premium_3 * area;
		insured_amount = insured_3 * area;
	}
	else if (crop_name == "Maize (Makka)") {
		premium = premium_4 * area;
		insured_amount = insured_4 * area;
	}
	else if (crop_name == "Pearl Millet (Bajra)") {
		premium = premium_5 * area;
		insured_amount = insured_5* area;
	}
	else if (crop_name == "Pigeon Pea (Red Gram/Arhar/Tur)") {
		premium = premium_6 * area;
		insured_amount = insured_6 * area;
	}
	else if (crop_name == "Soybean (Bhat)") {
		premium = premium_7 * area;
		insured_amount = insured_7* area;
	}

	document.getElementById("premium").value = premium.toFixed(2);
	document.getElementById("insured_amount").value = insured_amount.toFixed(2);
	return true;
}
function reset_form() {
	crop_id = 0;
	array_crops = [];
	array_area = [];
	array_premium =[];
	array_insured = [];

	document.getElementById("unit").innerHTML = "(Hector)";
	location.reload();

}
function calculate_total() {
	var loop_var = array_premium.length;
	var total_area = 0;
	var total_premium = 0;
	var total_insured = 0;
	for (var i = 1; i < loop_var; i++) {
		total_area = parseFloat(array_area[i]) + parseFloat(total_area);
		total_premium = parseFloat(array_premium[i]) + parseFloat(total_premium);
		total_insured = parseFloat(array_insured[i]) + parseFloat(total_insured);
	}
	document.getElementById("total_area").innerHTML = total_area.toFixed(2);
	document.getElementById("total_premium").innerHTML = total_premium.toFixed(2);
	document.getElementById("total_insured").innerHTML = total_insured.toFixed(2);
	FarmerExtDet();
}
function submit_form() {
	if(crop_id > 9 && deleted_num == 0) {
		alert("Maximum 10 Crops are allowed");
		return false;
	}
	crop_id++;
	if (deleted_num != 0) {
			delete_num_count = crop_id;
			crop_id = array_deleted_crop_id[deleted_num];
			deleted_num = deleted_num - 1;
	}
	else {
			if(delete_num_count != 0) {
				crop_id = delete_num_count;
				delete_num_count = 0;
			}
	}
	array_crops[crop_id] = document.getElementById("crop_name").value;
	array_area[crop_id] = parseFloat(convert_to_hector(document.getElementById("area").value)).toFixed(2);
	array_premium[crop_id] = parseFloat(document.getElementById("premium").value).toFixed(2);
	array_insured[crop_id] = parseFloat(document.getElementById("insured_amount").value).toFixed(2);
	document.getElementById("row" + crop_id).style.display = "";
	document.getElementById("crop" + crop_id).innerHTML = array_crops[crop_id];
	document.getElementById("area" + crop_id).innerHTML = array_area[crop_id];
	document.getElementById("premium" + crop_id).innerHTML = array_premium[crop_id];
	document.getElementById("insured" + crop_id).innerHTML = array_insured[crop_id];
	calculate_total();
	document.getElementById("calculator").reset();
	document.getElementById("premium").value = "";
	document.getElementById("insured_amount").value = "";
	document.getElementById("unit").innerHTML = "(Hector)";
	return true;

}
function remove_crop(crop_serial) {
		document.getElementById("row" + crop_serial).style.display="none";
		deleted_num = deleted_num+1;
		array_deleted_crop_id[deleted_num] = crop_serial;
		array_crops[crop_serial] = "";
		array_area[crop_serial] = "0";
		array_premium[crop_serial] = "0";
		array_insured[crop_serial] = "0";
		calculate_total();


}

function RateScore(num) {
		if (num == 1) {
			document.getElementById('Star1').style.color = "orange";
			document.getElementById('Star2').style.color = "black";
			document.getElementById('Star3').style.color = "black";
			document.getElementById('Star4').style.color = "black";
			document.getElementById('Star5').style.color = "black";
			document.getElementById('rating_score').innerHTML="Bad Experience";
		}
		else if (num == 2) {
			document.getElementById('Star1').style.color = "orange";
			document.getElementById('Star2').style.color = "orange";
			document.getElementById('Star3').style.color = "black";
			document.getElementById('Star4').style.color = "black";
			document.getElementById('Star5').style.color = "black";
			document.getElementById('rating_score').innerHTML="Not Satisfied";
		}
		else if (num == 3) {
			document.getElementById('Star1').style.color = "orange";
			document.getElementById('Star2').style.color = "orange";
			document.getElementById('Star3').style.color = "orange";
			document.getElementById('Star4').style.color = "black";
			document.getElementById('Star5').style.color = "black";
			document.getElementById('rating_score').innerHTML="Satisfied";
		}
		else if (num == 4) {
			document.getElementById('Star1').style.color = "orange";
			document.getElementById('Star2').style.color = "orange";
			document.getElementById('Star3').style.color = "orange";
			document.getElementById('Star4').style.color = "orange";
			document.getElementById('Star5').style.color = "black";
			document.getElementById('rating_score').innerHTML="Liked it a Lot";
		}
		else if (num == 5) {
			document.getElementById('Star1').style.color = "orange";
			document.getElementById('Star2').style.color = "orange";
			document.getElementById('Star3').style.color = "orange";
			document.getElementById('Star4').style.color = "orange";
			document.getElementById('Star5').style.color = "orange";
			document.getElementById('rating_score').innerHTML="Loved It";
		}
		else {
			return false;
		}
		var ratings = num;
		document.getElementById("rat_val").value=ratings;
		if (window.XMLHttpRequest) {
	      // code for IE7+, Firefox, Chrome, Opera, Safari
	      xmlhttp = new XMLHttpRequest();
	  } else {
	      // code for IE6, IE5
	      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  xmlhttp.open("GET","save.php?rat="+num,true);
	  xmlhttp.send();
		document.getElementById('rate_form').style.display="";
		return true;
}
function DontShowModal() {
	if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
  } else {
      // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET","Feedback_Save.php?state=never",true);
  xmlhttp.send();
}
function RemindLaterModal() {
	if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
  } else {
      // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET","Feedback_Save.php?state=later",true);
  xmlhttp.send();
}
function SubmitFeedBack() {

	var feed_name = document.getElementById("MyName").value;
	var feed_email = document.getElementById("mail").value;
	var feedback_mes = document.getElementById("textarr").value;
	var feed_val = document.getElementById("rat_val").value;

	if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
  } else {
      // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("ratings_error").style.display = "none";
				document.getElementById("ratings_success").style.display = "block";
						document.getElementById("sub_btn").innerHTML = "Submit";
			}
			else if (this.status == 400) {
				document.getElementById("ratings_error").style.display = "block";
				document.getElementById("ratings_success").style.display = "none";
						document.getElementById("sub_btn").innerHTML = "Submit";

			}
			else {
					document.getElementById("sub_btn").innerHTML = "<i class='fa fa-refresh fa-spin'></i> Processing...";
			}

		};
	  xmlhttp.open("GET","Feedback_Save.php?state=new&name="+feed_name+"&email="+feed_email+"&feed="+feedback_mes+"&val="+feed_val,true);
	  xmlhttp.send();
	}
function showAdditionalDetails() {
		if (document.getElementById("vle-only-check").checked == true) {
			document.getElementById("vle-extra-det").style.display="";
			document.getElementById("vle-print").style.display="";
			FarmerExtDet();
		}
		else if(document.getElementById("vle-only-check").checked == false) {
			document.getElementById("vle-extra-det").style.display="none";
			document.getElementById("vle-print").style.display="none";
		}
	}
	function FarmerExtDet() {
		var farm_name_var = document.getElementById("farm_name");
		var farm_vil_var = document.getElementById("farm_vil");
		var farm_amt_paid_var = document.getElementById("farm_amt_paid");
		var farm_amt_pending_var = document.getElementById("farm_amt_pend");
		var farm_amt_pending = document.getElementById("total_premium").innerHTML - farm_amt_paid_var.value;
		document.getElementById("farm_amt_pend").value = farm_amt_pending;

		document.getElementById("farmer-name-print").innerHTML = farm_name_var.value;
		document.getElementById("village-print").innerHTML = farm_vil_var.value;
		document.getElementById("amount-paid-print").innerHTML = farm_amt_paid_var.value;
		document.getElementById("amount-pending-print").innerHTML = farm_amt_pending;



	}
