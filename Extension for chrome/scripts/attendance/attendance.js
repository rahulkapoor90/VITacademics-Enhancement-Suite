// $(function () {
// 	//remove remove default css file
// 	$('link[href="style.css"]').remove();
// 	$('link[href="style2.css"]').remove();

// 	// remove inline attributes
// 	$('*[style]').removeAttr('style');
// 	$('*').removeAttr('cellspacing');
// 	$('*').removeAttr('cellpadding');
// 	$('*').removeAttr('width');
// 	$('*').removeAttr('height');
// 	$('*').removeAttr('bordercolor');
// 	$('*').removeAttr('bgcolor');
// 	$('*').removeAttr('border');
// 	$('*').removeAttr('align');
// 	$('*').removeAttr('valign');
// 	$('font').contents().unwrap();
// 	$('u').contents().unwrap();
// 	$('br').remove();

// 	$('table').eq(0).replaceWith('<div class="container-fluid">' + $('table').eq(0).html() + '</div>');

// 	$('center').eq(0).replaceWith('<h5>' + $('center').eq(0).text() + '</h5>');

// 	// attendance date range form
// 	while ($('form table').length > 0) {
// 		$('form table').eq(0).replaceWith('<div>' + $('form table').html() + '</div>');
// 	}
// 	$('form').eq(0).addClass('card-panel hoverable');
// 	$('form b').remove();
// 	$('form').eq(0).find('a').remove();
// 	$('form img').remove();
// 	//from date 32 ; to date 33
// 	$('#demo32').attr('type', 'date');
// 	$('#demo32').removeAttr('readonly');
// 	$('#demo32').addClass('datepicker');
// 	$('#demo33').attr('type', 'date');
// 	$('#demo33').removeAttr('readonly');
// 	$('#demo33').addClass('datepicker');
// 	$('#demo32').attr('placeholder', 'Select from date');
// 	$('#demo33').attr('placeholder', 'Select to date');

// 	$('form').eq(0).prepend('<b>CGPA<b>');

// 	while ($('table').eq(2).find('td').length > 0) {
// 		$('table').eq(2).find('td').eq(0).replaceWith('<div class="col s1 center-align"><td>' + $('table').eq(2).find('td').eq(0).html() + '</td></div>');
// 	}
// 	while ($('table').eq(2).find('tr').length > 0) {
// 		$('table').eq(2).find('tr').eq(0).replaceWith('<div class="card-panel hoverable"><div class="row">' + $('table').eq(2).find('tr').eq(0).html() + '</div></div>');
// 	}
// 	while ($('table').length > 2) {
// 		$('table').eq(2).replaceWith('<div>' + $('table').eq(2).html() + '</div>');
// 	}
// 	$('.col:first-child').remove(); //Sr. no.
// 	$('.col:nth-child(2)').addClass('boldCol'); //course title
// 	// $('.col:nth-child(4)').addClass('s2'); // slot
// 	$('.col:nth-child(8)').append('%');
// 	$('.col:nth-child(8)').addClass('boldCol');
// 	$('.col:nth-child(5)').remove(); //Reg. Date

// 	$("input[type='submit']").addClass('btn col');
// 	$('.col:last-child').addClass('right');
// 	var i = $(".btn").parent().length - 1;
// 	while (i >= 0) {
// 		i--;
// 		$(".btn").parent().eq(i).replaceWith('<form method="post" action="attn_report_details.asp">' + $(".btn").parent().eq(i).html() + '</form>');
// 	}
// 	$(".submit3").addClass('btn');

// 	$('table').addClass(function () {
// 		return 'centered hoverable highlight z-depth-1';
// 	});

// 	// datepicker initialization
// 	$('.datepicker').pickadate({
// 		selectMonths: true, // Creates a dropdown to control month
// 		selectYears: 5 // Creates a dropdown of 15 years to control year
// 	});
// 	// set default date
// 	var $input = $('#demo32').pickadate();
// 	var picker = $input.pickadate('picker');
// 	picker.set('select', [2016, 06, 11]);
// 	$input = $('#demo33').pickadate();
// 	picker = $input.pickadate('picker');
// 	picker.set('select', [2016, 10, 11]);
// });

$(function () {
	//remove remove default css file
	$('link[href="style.css"]').remove();
	$('link[href="style2.css"]').remove();

	// remove inline attributes
	$('*[style]').removeAttr('style');
	$('*').removeAttr('cellspacing');
	$('*').removeAttr('cellpadding');
	$('*').removeAttr('width');
	$('*').removeAttr('height');
	$('*').removeAttr('bordercolor');
	$('*').removeAttr('bgcolor');
	$('*').removeAttr('border');
	$('*').removeAttr('align');
	$('*').removeAttr('valign');
	$('*').removeAttr('onmouseover');
	$('*').removeAttr('onmouseout');
	$('font').contents().unwrap();
	$('u').contents().unwrap();
	// $('br').remove();

	// attendance date range form
	while ($('form table').length > 0) {
		$('form table').eq(0).replaceWith('<div>' + $('form table').html() + '</div>');
	}
	$('form').eq(0).addClass('card-panel hoverable');
	$('form b').remove();
	$('form').eq(0).find('a').remove();
	$('form img').remove();
	//from date 32 ; to date 33
	$('#demo32').attr('type', 'date');
	$('#demo32').removeAttr('readonly');
	$('#demo32').addClass('datepicker');
	$('#demo33').attr('type', 'date');
	$('#demo33').removeAttr('readonly');
	$('#demo33').addClass('datepicker');
	$('#demo32').attr('placeholder', 'Select from date');
	$('#demo33').attr('placeholder', 'Select to date');

	$('form').eq(0).prepend('<b>CGPA<b>');

	$('table').eq(0).replaceWith('<div class="container-fluid">' + $('table').eq(0).html() + '</div>');

	$('table').addClass(function () {
		return 'centered hoverable highlight z-depth-1';
	});

	while ($('b').length > 0) {
		$('b').eq(0).replaceWith('<div style="font-weight:bold;">' + $('b').eq(0).text() + '</div>');
	}
	$('center').eq(0).replaceWith('<h5>' + $('center').eq(0).text() + '</h5>');

	$(".submit3").addClass('btn');
	$("input[type='submit']").addClass('btn');

	// datepicker initialization
	$('.datepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 5 // Creates a dropdown of 15 years to control year
	});
	// set default date
	var $input = $('#demo32').pickadate();
	var picker = $input.pickadate('picker');
	picker.set('select', [2016, 06, 11]);
	$input = $('#demo33').pickadate();
	picker = $input.pickadate('picker');
	picker.set('select', [2016, 10, 11]);

	$('button').addClass('btn-floating btn');
});