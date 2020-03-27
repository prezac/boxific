$ = jQuery.noConflict();

function boxific_selector_update(obj){
	var selector = obj;
	var prototype = selector.parent().parent().parent().find('.boxific-selector-prototype');
	var collapsed = selector.parent().parent().parent().parent().find('.boxific-rule-collapsed span');
	var wrap = selector.parent();
	var text = selector.val();
	
	if( !text.length ){
		text = selector.attr('rel');
	}
	
	prototype.text(text);
	collapsed.text(text);
	
	var width = prototype.width();

	wrap.width(width+15);

	if( $.browser.webkit ){
		var offset = wrap.offset().left;
		selector.offset({left: offset});
	}
	
}

/**
 *	Collapse box rule
 *
 */
function boxific_rule_collapse(rule){
	var collapsed = rule.find('.boxific-rule-collapsed');
	var fieldset = rule.find('fieldset');

		collapsed.show();
		fieldset.hide();
		rule.addClass('collapsed');
}

/**
 *	Collapse box rule
 *
 */
function boxific_rule_collapse_toggle(rule){
	var collapsed = rule.find('.boxific-rule-collapsed');
	var fieldset = rule.find('fieldset');
	
	if( rule.hasClass('collapsed') ){
		collapsed.hide();
		fieldset.show();
		rule.removeClass('collapsed');
	}else{
		collapsed.show();
		fieldset.hide();
		rule.addClass('collapsed');
	}
}

/**
 *	Collapse all box rules
 *
 */

function boxific_collapse_all(){
	
	$('.boxific-rule').each(function(){
		var rule = $(this);
		var collapsed = rule.find('.boxific-rule-collapsed');
		var fieldset = rule.find('fieldset');

		collapsed.show();
		fieldset.hide();
		rule.addClass('collapsed');
	});
	
}

/**
 *	Expand all box rules
 *
 */

function boxific_expand_all(){
	$('.boxific-rule').each(function(){
		var rule = $(this);
		var collapsed = rule.find('.boxific-rule-collapsed');
		var fieldset = rule.find('fieldset');

		collapsed.hide();
		fieldset.show();
		rule.removeClass('collapsed');
	});
}

function boxific_init_rules(){
	
	// Update box preview
	
	$('.boxific-rule').each(function(){
		var rule = $(this);
		var background_color = rule.find('.boxific-box-color').val();
		var border_top_width = rule.find('.boxific-border-top-width').val();
        	var border_top_style = rule.find('.boxific-boxselect-border-top-style').val();        
		var border_top_color = rule.find('.boxific-border-top-color').val();
		var border_right_width = rule.find('.boxific-border-right-width').val();
        	var border_right_style = rule.find('.boxific-boxselect-border-right-style').val();        
		var border_right_color = rule.find('.boxific-border-right-color').val();
		var border_bottom_width = rule.find('.boxific-border-bottom-width').val();
        	var border_bottom_style = rule.find('.boxific-boxselect-border-bottom-style').val();        
		var border_bottom_color = rule.find('.boxific-border-bottom-color').val();
		var border_left_width = rule.find('.boxific-border-left-width').val();
        	var border_left_style = rule.find('.boxific-boxselect-border-left-style').val();        
		var border_left_color = rule.find('.boxific-border-left-color').val();
        	var top_left_radius = rule.find('.boxific-top-left-radius').val();
	        var top_right_radius = rule.find('.boxific-top-right-radius').val();
        	var bottom_right_radius = rule.find('.boxific-bottom-right-radius').val();
	        var bottom_left_radius = rule.find('.boxific-bottom-left-radius').val();
		var box_shadow_hor = rule.find('.boxific-shadow-horizontal').val();
		var box_shadow_ver = rule.find('.boxific-shadow-vertical').val();
		var box_shadow_blur = rule.find('.boxific-shadow-blur').val();
		var box_shadow_color = rule.find('.boxific-shadow-color').val();
	        var outline_width = rule.find('.boxific-outline-width').val();
        	var outline_offset = rule.find('.boxific-outline-offset').val();       
	        var outline_style = rule.find('.boxific-boxselect-outline-style').val();        
        	var outline_color = rule.find('.boxific-outline-color').val();       
	
		rule.find('.boxific-box').css({
			'background-color': '#' + background_color,
			'border-top': border_top_width + 'px ' + border_top_style + ' #' + border_top_color,
		        'border-right': border_right_width + 'px ' + border_right_style + ' #' + border_right_color,
			'border-bottom': border_bottom_width + 'px ' + border_bottom_style + ' #' + border_bottom_color,
		        'border-left': border_left_width + 'px ' + border_left_style + ' #' + border_left_color,
			'border-radius': top_left_radius + 'px ' + top_right_radius + 'px ' + bottom_right_radius + 'px ' + bottom_left_radius + 'px',
			'box-shadow': box_shadow_hor + 'px ' + box_shadow_ver + 'px '+ box_shadow_blur + 'px '+ '#' + box_shadow_color,
			'outline': outline_width + 'px ' + outline_style + ' #' + outline_color,
			'outline-offset': outline_offset + 'px',
	});
		
	// Setup color picker
		
	rule.find('.boxific-colorwheel').ColorPicker({
		color: '#00000',
		onChange: function (hsb, hex, rgb) {
			rule.find('.boxific-box').css('background-color', '#' + hex);
			rule.find('.boxific-box-color').val(hex);
		}
	});
	
	rule.find('.boxific-colorbordertopwheel').ColorPicker({
		color: '#000000',
		onChange: function (hsb, hex, rgb) {
        	        var border_top = rule.find('.boxific-border-top-width').val() +'px '+rule.find('.boxific-boxselect-border-top-style').val()+' #'+hex;
	                rule.find('.boxific-box').css('border-top', border_top);
		    	rule.find('.boxific-border-top-color').val(hex);
		}
	});

        rule.find('.boxific-colorborderrightwheel').ColorPicker({
		color: '#000000',
		onChange: function (hsb, hex, rgb) {
	                var border_right = rule.find('.boxific-border-right-width').val() +'px '+rule.find('.boxific-boxselect-border-right-style').val()+' #'+hex;
               		rule.find('.boxific-box').css('border-right', border_right);
		    	rule.find('.boxific-border-right-color').val(hex);
		}
	});

        rule.find('.boxific-colorborderbottomwheel').ColorPicker({
		color: '#000000',
		onChange: function (hsb, hex, rgb) {
        	        var border_bottom = rule.find('.boxific-border-bottom-width').val() +'px '+rule.find('.boxific-boxselect-border-bottom-style').val()+' #'+hex;
                	rule.find('.boxific-box').css('border-bottom', border_bottom);
			rule.find('.boxific-border-bottom-color').val(hex);
		}
	});

        rule.find('.boxific-colorborderleftwheel').ColorPicker({
		color: '#000000',
		onChange: function (hsb, hex, rgb) {
        	        var border_left = rule.find('.boxific-border-left-width').val() +'px '+rule.find('.boxific-boxselect-border-left-style').val()+' #'+hex;
                	rule.find('.boxific-box').css('border-left', border_left);
			 rule.find('.boxific-border-left-color').val(hex);
		}
	});

        rule.find('.boxific-colorshadowwheel').ColorPicker({
		color: '#000000',
		onChange: function (hsb, hex, rgb) {
        	        var shadow = rule.find('.boxific-shadow-horizontal').val()+'px '+rule.find('.boxific-shadow-vertical').val()+'px '+rule.find('.boxific-shadow-blur').val()+'px #'+hex;
                	rule.find('.boxific-box').css('box-shadow', shadow);
			rule.find('.boxific-shadow-color').val(hex);
		}
	});

        rule.find('.boxific-coloroutlinewheel').ColorPicker({
		color: '#000000',
		onChange: function (hsb, hex, rgb) {
                	var outline = rule.find('.boxific-outline-width').val()+'px '+rule.find('.boxific-boxselect-outline-style').val()+' #'+hex;
                	rule.find('.boxific-box').css('outline', outline);
			rule.find('.boxific-outline-color').val(hex);
		}
	});

		
});

//Set selects
$('.boxific-boxselect-border-top-style').change(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
	//alert(rule.attr('id'));
       	var border_top = rule.find('.boxific-border-top-width').val()+'px '+$(this).val()+' #'+rule.find('.boxific-border-top-color').val();
	rule.find('.boxific-box').css('border-top', border_top);
});

$('.boxific-boxselect-border-right-style').change(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
       	var border_right = rule.find('.boxific-border-right-width').val()+'px '+$(this).val()+' #'+rule.find('.boxific-border-right-color').val();
	rule.find('.boxific-box').css('border-right', border_right);
});

$('.boxific-boxselect-border-bottom-style').change(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
       	var border_bottom = rule.find('.boxific-border-bottom-width').val()+'px '+$(this).val()+' #'+rule.find('.boxific-border-bottom-color').val();
	rule.find('.boxific-box').css('border-bottom', border_bottom);
});

$('.boxific-boxselect-border-left-style').change(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
       	var border_left = rule.find('.boxific-border-left-width').val()+'px '+$(this).val()+' #'+rule.find('.boxific-border-left-color').val();
	rule.find('.boxific-box').css('border-left', border_left);
});

$('.boxific-boxselect-outline-style').change(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
        var outline = rule.find('.boxific-outline-width').val()+'px '+$(this).val()+' #'+rule.find('.boxific-outline-color').val();    
	rule.find('.boxific-box').css('outline', outline);
});

// Set sliders

$('.boxific-boxslider-border-top-width').each(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
	var border_top_width = rule.find('.boxific-border-top-width').val();
       	var border_top_style = rule.find('.boxific-boxselect-border-top-style').val();     
	var border_top_color = rule.find('.boxific-border-top-color').val();
	if( border_top_width == '' ){
		border_top_width = 0;
	}
	$(this).slider({
		min: 0,
		max: 20,
		value: border_top_width,
		slide: function(event, ui){
			var rule = $(this).parent().parent().parent().parent().parent();
		        var border_top = ui.value+'px '+border_top_style+' #'+border_top_color;
			rule.find('.boxific-box').css('border-top', border_top);
			rule.find('.boxific-border-top-width').val(ui.value);
		}
	});
		
});

$('.boxific-boxslider-border-right-width').each(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
	var border_right_width = rule.find('.boxific-border-right-width').val();
       	var border_right_style = rule.find('.boxific-boxselect-border-right-style').val();        
	var border_right_color = rule.find('.boxific-border-right-color').val();
	if( border_right_width == '' ){
		border_right_width = 0;
	}
	$(this).slider({
		min: 0,
		max: 20,
		value: border_right_width,
		slide: function(event, ui){
			var rule = $(this).parent().parent().parent().parent().parent();
		        var border_right = ui.value+'px '+border_right_style+' #'+border_right_color;
			rule.find('.boxific-box').css('border-right', border_right);
			rule.find('.boxific-border-right-width').val(ui.value);
		}
	});
		
});
    
$('.boxific-boxslider-border-bottom-width').each(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
	var border_bottom_width = rule.find('.boxific-border-bottom-width').val();
       	var border_bottom_style = rule.find('.boxific-boxselect-border-bottom-style').val();        
	var border_bottom_color = rule.find('.boxific-border-bottom-color').val();
	if( border_bottom_width == '' ){
		border_bottom_width = 0;
	}
	$(this).slider({
		min: 0,
		max: 20,
		value: border_bottom_width,
		slide: function(event, ui){
			var rule = $(this).parent().parent().parent().parent().parent();
		        var border_bottom = ui.value+'px '+border_bottom_style+' #'+border_bottom_color;
			rule.find('.boxific-box').css('border-bottom', border_bottom);
			rule.find('.boxific-border-bottom-width').val(ui.value);
		}
	});
	
});
    
$('.boxific-boxslider-border-left-width').each(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
	var border_left_width = rule.find('.boxific-border-left-width').val();
       	var border_left_style = rule.find('.boxific-boxselect-border-left-style').val();        
	var border_left_color = rule.find('.boxific-border-left-color').val();
	if( border_left_width == '' ){
		border_left_width = 0;
	}
	$(this).slider({
		min: 0,
		max: 20,
		value: border_left_width,
		slide: function(event, ui){
			var rule = $(this).parent().parent().parent().parent().parent();
		        var border_left = ui.value+'px '+border_left_style+' #'+border_left_color;
			rule.find('.boxific-box').css('border-left', border_left);
			rule.find('.boxific-border-left-width').val(ui.value);
		}
	});
	
});

$('.boxific-boxslider-top-left-radius').each(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
        var top_left_radius = rule.find('.boxific-top-left-radius').val();
        var top_right_radius = rule.find('.boxific-top-right-radius').val();
        var bottom_right_radius = rule.find('.boxific-bottom-right-radius').val();
        var bottom_left_radius = rule.find('.boxific-bottom-left-radius').val();
	$(this).slider({
		min: 0,
		max: 20,
		value: top_left_radius,
		slide: function(event, ui){
			var rule = $(this).parent().parent().parent().parent().parent();
		        var border_radius = ui.value+'px '+top_right_radius+'px '+bottom_right_radius+'px '+bottom_left_radius+'px';
			rule.find('.boxific-box').css('border-radius', border_radius);
			rule.find('.boxific-top-left-radius').val(ui.value);
		}
	});
		
});

$('.boxific-boxslider-top-right-radius').each(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
        var top_left_radius = rule.find('.boxific-top-left-radius').val();
        var top_right_radius = rule.find('.boxific-top-right-radius').val();
        var bottom_right_radius = rule.find('.boxific-bottom-right-radius').val();
        var bottom_left_radius = rule.find('.boxific-bottom-left-radius').val();
	$(this).slider({
		min: 0,
		max: 20,
		value: top_right_radius,
		slide: function(event, ui){
			var rule = $(this).parent().parent().parent().parent().parent();
		        var border_radius = top_left_radius+'px '+ui.value+'px '+bottom_right_radius+'px '+bottom_left_radius+'px';
			rule.find('.boxific-box').css('border-radius', border_radius);
			rule.find('.boxific-top-right-radius').val(ui.value);
		}
	});
		
});

$('.boxific-boxslider-bottom-right-radius').each(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
        var top_left_radius = rule.find('.boxific-top-left-radius').val();
        var top_right_radius = rule.find('.boxific-top-right-radius').val();
        var bottom_right_radius = rule.find('.boxific-bottom-right-radius').val();
        var bottom_left_radius = rule.find('.boxific-bottom-left-radius').val();
	$(this).slider({
		min: 0,
		max: 20,
		value: bottom_right_radius,
		slide: function(event, ui){
			var rule = $(this).parent().parent().parent().parent().parent();
		        var border_radius = top_left_radius+'px '+top_right_radius+'px '+ui.value+'px '+bottom_left_radius+'px';
			rule.find('.boxific-box').css('border-radius', border_radius);
			rule.find('.boxific-bottom-right-radius').val(ui.value);
		}
	});
		
});

$('.boxific-boxslider-bottom-left-radius').each(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
        var top_left_radius = rule.find('.boxific-top-left-radius').val();
        var top_right_radius = rule.find('.boxific-top-right-radius').val();
        var bottom_right_radius = rule.find('.boxific-bottom-right-radius').val();
        var bottom_left_radius = rule.find('.boxific-bottom-left-radius').val();
	$(this).slider({
		min: 0,
		max: 20,
		value: bottom_left_radius,
		slide: function(event, ui){
			var rule = $(this).parent().parent().parent().parent().parent();
	        	var border_radius = top_left_radius+'px '+top_right_radius+'px '+bottom_right_radius+'px '+ui.value+'px';
			rule.find('.boxific-box').css('border-radius', border_radius);
			rule.find('.boxific-bottom-left-radius').val(ui.value);
		}
	});
		
});

$('.boxific-boxslider-shadow-horizontal').each(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
	var box_shadow_hor = rule.find('.boxific-shadow-horizontal').val();
	var box_shadow_ver = rule.find('.boxific-shadow-vertical').val();
	var box_shadow_blur = rule.find('.boxific-shadow-blur').val();
	var box_shadow_color = rule.find('.boxific-shadow-color').val();
	if( box_shadow_hor == '' ){
		box_shadow_hor = 0;
	}
	if( box_shadow_ver == '' ){
		box_shadow_ver = 0;
	}
	if( box_shadow_blur == '' ){
		box_shadow_blur = 0;
	}
	$(this).slider({
		min: -5,
		max: 5,
		value: box_shadow_hor,
		step: 0.01,
		slide: function(event, ui){
			var rule = $(this).parent().parent().parent().parent().parent();
               		var shadow = ui.value +'px '+box_shadow_ver+'px '+box_shadow_blur+'px #'+box_shadow_color;
			rule.find('.boxific-box').css('box-shadow', shadow );
			rule.find('.boxific-shadow-horizontal').val(ui.value);
		}
	});
});

$('.boxific-boxslider-shadow-vertical').each(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
	var box_shadow_hor = rule.find('.boxific-shadow-horizontal').val();
	var box_shadow_ver = rule.find('.boxific-shadow-vertical').val();
	var box_shadow_blur = rule.find('.boxific-shadow-blur').val();
	var box_shadow_color = rule.find('.boxific-shadow-color').val();
	if( box_shadow_hor == '' ){
		box_shadow_hor = 0;
	}
	if( box_shadow_ver == '' ){
		box_shadow_ver = 0;
	}
	if( box_shadow_blur == '' ){
		box_shadow_blur = 0;
	}
	$(this).slider({
		min: -5,
		max: 5,
		value: box_shadow_ver,
		step: 0.01,
		slide: function(event, ui){
			var rule = $(this).parent().parent().parent().parent().parent();
               		var shadow = box_shadow_hor+'px '+ui.value +'px '+box_shadow_blur+'px #'+box_shadow_color;
			rule.find('.boxific-box').css('box-shadow', shadow );
			rule.find('.boxific-shadow-vertical').val(ui.value);
		}
	});
});
        
$('.boxific-boxslider-shadow-blur').each(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
	var box_shadow_hor = rule.find('.boxific-shadow-horizontal').val();
	var box_shadow_ver = rule.find('.boxific-shadow-vertical').val();
	var box_shadow_blur = rule.find('.boxific-shadow-blur').val();
	var box_shadow_color = rule.find('.boxific-shadow-color').val();
	if( box_shadow_hor == '' ){
		box_shadow_hor = 0;
	}
	if( box_shadow_ver == '' ){
		box_shadow_ver = 0;
	}
	if( box_shadow_blur == '' ){
		box_shadow_blur = 0;
	}
	$(this).slider({
		min: 0,
		max: 5,
		value: box_shadow_blur,
		step: 0.01,
		slide: function(event, ui){
			var rule = $(this).parent().parent().parent().parent().parent();
               		var shadow = box_shadow_hor+'px '+box_shadow_ver+'px '+ui.value +'px #'+box_shadow_color;
			rule.find('.boxific-box').css('box-shadow', shadow );
			rule.find('.boxific-shadow-blur').val(ui.value);
		}
	});
});
        
$('.boxific-boxslider-outline-width').each(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
        var outline_width = rule.find('.boxific-outline-width').val();
        var outline_style = rule.find('.boxific-boxselect-outline-style').val();        
        var outline_color = rule.find('.boxific-outline-color').val(); 
	if( outline_width == '' ){
		outline_width = 0;
	}
	$(this).slider({
		min: 0,
		max: 5,
		value: outline_width,
		step: 0.01,
		slide: function(event, ui){
			var rule = $(this).parent().parent().parent().parent().parent();
               		var outline = ui.value +'px '+outline_style+' #'+outline_color;
			rule.find('.boxific-box').css('outline', outline );
			rule.find('.boxific-outline-width').val(ui.value);
		}
	});
});

$('.boxific-boxslider-outline-offset').each(function(){
	var rule = $(this).parent().parent().parent().parent().parent();
        var outline_offset = rule.find('.boxific-outline-offset').val();       
	if( outline_offset == '' ){
		outline_offset = 0;
	}
	$(this).slider({
		min: 0,
		max: 20,
		value: outline_offset,
		step: 0.01,
		slide: function(event, ui){
			var rule = $(this).parent().parent().parent().parent().parent();
               		var outline_offset = ui.value+'px';
			rule.find('.boxific-box').css('outline-offset', outline_offset );
			rule.find('.boxific-outline-offset').val(ui.value);
		}
	});
});

$('.boxific-selector').each(function(){
	/* Init all selector fields */
	boxific_selector_update($(this));
	
	$(this).focus(function(){
		var selector = $(this);
		var legend = selector.parent().parent();
		legend.addClass('focused');
		
		var text = selector.val();
		var rel = selector.attr('rel');
		
		if( text == rel ){
			selector.val('');
		}
		
	});
		
	$(this).blur(function(){
		var selector = $(this);
		var legend = selector.parent().parent();
		legend.removeClass('focused');
		
		var text = selector.val();
		var rel = selector.attr('rel');
		
		if( text == '' ){
			selector.val(rel);
		}
	});
		
		$(this).keyup(function(){
			boxific_selector_update($(this));
		});
	});
	
	// Rule controls
	$('.boxific-rule-controls .collapse').unbind();
	$('.boxific-rule-controls .collapse').click(function(){
		var rule = $(this).parent().parent();
		boxific_rule_collapse_toggle(rule);
	});
	
	$('.boxific-rule-controls .delete').unbind();
	$('.boxific-rule-controls .delete').each(function(){
		var rule = $(this).parent().parent();
		
		$(this).click(function(){
			
			if( confirm( 'Are you sure you want to delete the rule?' ) ){
				rule.slideUp('slow', function(){
					rule.remove();
					
					var data = {
							action: 'boxific_delete',
							rule: rule.attr('rel'),
						};

						$.post(ajaxurl, data, function(response) {
						});
					
				});
			}
		});
	});
	
	// Collapse at load
	$('.boxific-rule').each(function(){
		var rule = $(this);
		if( rule.hasClass('collapsed') ){
			boxific_rule_collapse(rule);
		}
	});
}

$(document).ready(function(){
	
	boxific_init_rules();
	
	$('[class^="boxific-boxslider"]').mouseup(function() {
		$('.save-all a').click();		
		boxific_init_rules();
	});

	// Add new box rule
	$('#boxific-add-rule a').click(function(){
		var data = {
			action: 'boxific_add_rule'
		};
		$.post(ajaxurl, data, function(response) {
			var container = '#boxific-box-factory';
			$(container).append(response);
			boxific_init_rules();
		});
		$('.save-all a').click();		
	});
	
	// Save all changes
	$('.save-all a').click(function(){
		
		var rules = new Array();
		
		var button = $(this);
		
		button.addClass('ajax');
		
		$('.boxific-rule').each(function(){
			var rule = $(this);
			var background_color = rule.find('.boxific-box-color').val();
			var border_top_width = rule.find('.boxific-border-top-width').val();
        		var border_top_style = rule.find('.boxific-boxselect-border-top-style').val();        
			var border_top_color = rule.find('.boxific-border-top-color').val();
			var border_top = border_top_width+" "+border_top_style+" "+border_top_color;
			var border_right_width = rule.find('.boxific-border-right-width').val();
		        var border_right_style = rule.find('.boxific-boxselect-border-right-style').val();        
			var border_right_color = rule.find('.boxific-border-right-color').val();
			var border_right = border_right_width+" "+border_right_style+" "+border_right_color;
			var border_bottom_width = rule.find('.boxific-border-bottom-width').val();
        		var border_bottom_style = rule.find('.boxific-boxselect-border-bottom-style').val();        
			var border_bottom_color = rule.find('.boxific-border-bottom-color').val();
			var border_bottom = border_bottom_width+" "+border_bottom_style+" "+border_bottom_color;
			var border_left_width = rule.find('.boxific-border-left-width').val();
		        var border_left_style = rule.find('.boxific-boxselect-border-left-style').val();        
			var border_left_color = rule.find('.boxific-border-left-color').val();
			var border_left = border_left_width+" "+border_left_style+" "+border_left_color;
		        var top_left_radius = rule.find('.boxific-top-left-radius').val();
		        var top_right_radius = rule.find('.boxific-top-right-radius').val();
		        var bottom_right_radius = rule.find('.boxific-bottom-right-radius').val();
		        var bottom_left_radius = rule.find('.boxific-bottom-left-radius').val();
			var border_radius = top_left_radius+" "+top_right_radius+" "+bottom_right_radius+" "+bottom_left_radius;
			var box_shadow_hor = rule.find('.boxific-shadow-horizontal').val();
			var box_shadow_ver = rule.find('.boxific-shadow-vertical').val();
			var box_shadow_blur = rule.find('.boxific-shadow-blur').val();
			var box_shadow_color = rule.find('.boxific-shadow-color').val();
			var box_shadow = box_shadow_hor+" "+box_shadow_ver+" "+box_shadow_blur+" "+box_shadow_color;
		        var outline_width = rule.find('.boxific-outline-width').val();
		        var outline_offset = rule.find('.boxific-outline-offset').val();       
		        var outline_style = rule.find('.boxific-boxselect-outline-style').val();        
		        var outline_color = rule.find('.boxific-outline-color').val();  			
			var outline = outline_width+" "+outline_style+" "+outline_color;
			var outline_offset = outline_offset;

			rule_capsule = {
				//id: rule.attr('rel'),
				selector: rule.find('.boxific-selector').val(),
				background_color: background_color,
				border_top: border_top,
				border_right: border_right,
				border_bottom: border_bottom,
				border_left: border_left,
				border_radius: border_radius,
                                box_shadow: box_shadow,
                                outline: outline,
                                outline_offset: outline_offset,
                                collapsed: (rule.hasClass('collapsed'))?true:false
			};
			rules.push( rule_capsule );
		});
		
		var data = {
				action: 'boxific_save_all',
				rules: rules,
			};

			$.post(ajaxurl, data, function(response) {
				var container = '#boxific-box-factory';
				$(container).append(response);
				boxific_init_rules();
				button.removeClass('ajax');
			});
	});

	// Collapse all, uncollapse all
	$('.boxific-controls .collapse-all').click(function(){
		boxific_collapse_all();
	});
	
	$('.boxific-controls .expand-all').click(function(){
		boxific_expand_all();
	});
	
	
});
