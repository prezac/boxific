<?php
$shadow = explode(" ", $rule['box_shadow']);
$border_top = explode(" ", $rule['border_top']);
$border_right = explode(" ", $rule['border_right']);
$border_bottom = explode(" ", $rule['border_bottom']);
$border_left = explode(" ", $rule['border_left']);
$border_radius = explode(" ", $rule['border_radius']);
$outline = explode(" ", $rule['outline']);

$box_border_style = array(
	'dotted' => __('dotted', 'boxific'),
	'dashed' => __('dashed', 'boxific'),
	'solid' => __('solid', 'boxfic'),
	'double' => __('double', 'boxific'),
	'groove' => __('groove', 'boxific'),
	'ridge' => __('ridge', 'boxfic'),
	'inset' => __('inset', 'boxific'),
	'outset' => __('outset', 'boxific'),
);

$box_outline_style = array(
	'dotted' => __('dotted', 'boxific'),
	'dashed' => __('dashed', 'boxific'),
	'solid' => __('solid', 'boxific'),
	'double' => __('double', 'boxific'),
	'groove' => __('groove', 'boxific'),
	'ridge' => __('ridge', 'boxific'),
	'inset' => __('inset', 'boxific'),
	'outset' => __('outset', 'boxific'),
	'none' => __('none', 'boxific'),
);
?>
<div id="boxific-rule-<?php echo $rule['id'];?>" class="boxific-rule<?php if($rule['collapsed']=='true'):?> collapsed<?php endif?>" rel="<?php echo $rule['id'];?>">
	<div class="boxific-rule-controls">
		<a href="javascript:void(0);" class="collapse" title="<?php _e('Collapse rule', 'boxific')?>"><img src="<?php echo plugins_url('images/collapse.png', __FILE__);?>" alt="collapse"/></a>
		<a href="javascript:void(0);" class="delete" title="<?php _e('Delete rule', 'boxific')?>"><img src="<?php echo plugins_url('images/delete.png', __FILE__);?>" alt="delete"/></a>
	</div>
	<div class="boxific-rule-collapsed">
		<span></span>
	</div>
	<fieldset>
		<legend>
			<span class="boxific-selector-wrap">
				<input type="text" value="<?php echo $rule['selector']?>" class="boxific-selector" rel="<?php _e('Enter selector here', 'boxific');?>"/>
			</span>
		</legend>
		<span class="boxific-selector-prototype"></span>

		<div class="boxific-box-settings">
			<div class="boxific-box-preview">
				<label><?php _e('Preview', 'boxific');?></label>
					<div class="boxific-box">
						<?php _e('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'boxific');?>
					</div><!-- .boxific-box -->
			</div><!-- .boxific-box-preview -->

			<div class="boxific-box-outfit-wrap1">
				<div class="boxific-box-color-outer-wrap">
					<label><?php _e('Background color', 'boxific');?></label>
					<span class="boxific-box-color-wrap">
						<label for="fc">#</label>
						<input type="text" size="6" name="box[color]" class="boxific-box-color" maxlength="6" value="<?php echo $rule['background_color']?>"/>
					</span>
					<img src="<?php echo plugins_url( 'images/color.png', __FILE__ );?>" alt="Color wheel" class="boxific-colorwheel"/>
				</div><!-- .boxfic-box-color-outer-wrap -->
				<div class="boxific-box-color-outer-wrap">
					<label><?php _e('Shadow color', 'boxific');?></label>
					<span class="boxific-box-color-wrap">
						<label for="fc">#</label>
						<input type="text" size="6" name="box[shadow_color]" class="boxific-shadow-color" maxlength="6" value="<?php if ($shadow[3]=="") {echo $rule['box_shadow_color'];}else{echo $shadow[3];}?>"/>
					</span>
					<img src="<?php echo plugins_url( 'images/color.png', __FILE__ );?>" alt="Color wheel" class="boxific-colorshadowwheel"/>
				</div><!-- .boxific-box-color-outer-wrap -->
			</div><!-- .boxific-box-outfit-wrap1 -->

			<div class="boxific-box-outfit-wrap7">
				<div class="boxific-boxwrap-shadow-horizontal">
					<label><?php _e('Horizontal shadow position', 'boxific');?></label>
					<div class="boxific-boxslider-shadow-horizontal"></div>
					<input type="hidden" class="boxific-shadow-horizontal" value="<?php if ($shadow[0]=="") {echo $rule['box_shadow_horizontal'];}else{echo $shadow[0];}?>"/>
				</div><!-- .boxific-boxwrap-shadow-horizontal -->
				<div class="boxific-boxwrap-shadow-vertica">
					<label><?php _e('Vertical shadow position', 'boxific');?></label>
					<div class="boxific-boxslider-shadow-vertical"></div>
					<input type="hidden" class="boxific-shadow-vertical" value="<?php if ($shadow[1]=="") {echo $rule['box_shadow_vertical'];}else{echo $shadow[1];}?>"/>
				</div><!-- .boxific-boxwrap-shadow-vertical -->
				<div class="boxific-boxwrap-shadow-blur">
					<label><?php _e('Blur shadow position', 'boxific');?></label>
					<div class="boxific-boxslider-shadow-blur"></div>
					<input type="hidden" class="boxific-shadow-blur" value="<?php if ($shadow[2]=="") {echo $rule['box_shadow_blur'];}else{echo $shadow[2];}?>"/>
				</div><!-- .boxific-boxwrap-shadow-blur -->
			</div><!-- .boxific-box-outfit-wrap7 -->

			<div class="boxific-box-outfit-wrap2">
				<div class="boxific-boxwrap-border-top-width">
					<label><?php _e('Top line width', 'boxific');?></label>
					<div class="boxific-boxslider-border-top-width"></div>
					<input type="hidden" class="boxific-border-top-width" value="<?php if ($border_top[0]=="") {echo $rule['border_top_width'];}else{echo $border_top[0];}?>"/>
				</div><!-- .boxific-boxwrap-border-top-width -->
				<div class="boxific-boxswrap-border-top-style">
					<label><?php _e('Top line style', 'boxific');?></label>
					<select class="boxific-boxselect-border-top-style" name="box[border_top_style]">
					<?php foreach( $box_border_style as $k => $border_style ):?>
						<?php if( $k == $border_top[1] ):?>
						<option selected="selected" value="<?php echo $k ?>"><?php echo $border_style;?></option>
						<?php else: ?>
						<option value="<?php echo $k ?>"><?php echo $border_style;?></option>
						<?php endif;?>
					<?php endforeach; ?>
					</select>
				</div><!-- .boxific-boxwrap-border-top-style -->
				<div class="boxific-box-color-outer-wrap">
				<label><?php _e('Top line color', 'boxific');?></label>
				<span class="boxific-box-color-wrap">
					<label for="fc">#</label>
					<input type="text" size="6" name="box[border_top_color]" class="boxific-border-top-color" maxlength="6" value="<?php if ($border_top[2]=="") {echo $rule['border_top_color'];}else{echo $border_top[2];}?>"/>
					</span>
					<img src="<?php echo plugins_url( 'images/color.png', __FILE__ );?>" alt="Color wheel" class="boxific-colorbordertopwheel"/>
				</div><!-- .boxific-box-color-outer-wrap -->
				<div class="boxific-boxwrap-top-left-radius">
					<label><?php _e('Top-left radius', 'boxific');?></label>
					<div class="boxific-boxslider-top-left-radius"></div>
					<input type="hidden" class="boxific-top-left-radius" value="<?php if ($border_radius[0]=="") {echo $rule['border_top_left_radius'];}else{echo $border_radius[0];}?>"/>
				</div><!-- .boxific-boxwrap-top-left-radius -->
			</div><!-- .boxific-box-outfit-wrap2 -->

			<div class="boxific-box-outfit3-wrap">
				<div class="boxific-boxwrap-border-right-width">
					<label><?php _e('Right line width', 'boxific');?></label>
					<div class="boxific-boxslider-border-right-width"></div>
					<input type="hidden" class="boxific-border-right-width" value="<?php if ($border_right[0]=="") {echo $rule['border_right_width'];}else{echo $border_right[0];}?>"/>
				</div><!-- .boxific-boxwrap-border-right-width -->
				<div class="boxific-boxswrap-border-right-style">
					<label><?php _e('Righ line style', 'boxific');?></label>
					<select class="boxific-boxselect-border-right-style" name="box[border_right_style]">
					<?php foreach( $box_border_style as $k => $border_style ):?>
						<?php if( $k == $border_right[1] ):?>
						<option selected="selected" value="<?php echo $k ?>"><?php echo $border_style;?></option>
						<?php else: ?>
						<option value="<?php echo $k ?>"><?php echo $border_style;?></option>
						<?php endif;?>
					<?php endforeach; ?>
					</select>
				</div><!-- .boxific-boxwrap-border-right-style -->
				<div class="boxific-box-color-outer-wrap">
				<label><?php _e('Right line color', 'boxific');?></label>
				<span class="boxific-box-color-wrap">
					<label for="fc">#</label>
					<input type="text" size="6" name="box[border_right_color]" class="boxific-border-right-color" maxlength="6" value="<?php if ($border_right[2]=="") {echo $rule['border_right_color'];}else{echo $border_right[2];}?>"/>
					</span>
					<img src="<?php echo plugins_url( 'images/color.png', __FILE__ );?>" alt="Color wheel" class="boxific-colorborderrightwheel"/>
				</div><!-- .boxific-box-color-outer-wrap -->
				<div class="boxific-boxwrap-top-right-radius">
					<label><?php _e('Top-right radius', 'boxific');?></label>
					<div class="boxific-boxslider-top-right-radius"></div>
					<input type="hidden" class="boxific-top-right-radius" value="<?php if ($border_radius[1]=="") {echo $rule['border_top_right_radius'];}else{echo $border_radius[1];}?>"/>
				</div><!-- .boxific-boxwrap-top-right-radius -->
			</div><!-- .boxific-box-outfit-wrap3 -->

			<div class="boxific-box-outfit-wrap4">
				<div class="boxific-boxwrap-border-bottom-width">
					<label><?php _e('Bottom line width', 'boxific');?></label>
					<div class="boxific-boxslider-border-bottom-width"></div>
					<input type="hidden" class="boxific-border-bottom-width" value="<?php if ($border_bottom[0]=="") {echo $rule['border_bottom_width'];}else{echo $border_bottom[0];}?>"/>
				</div><!-- .boxific-boxwrap-border-bottom-width -->
				<div class="boxific-boxswrap-border-bottom-style">
					<label><?php _e('Bottom line style', 'boxific');?></label>
					<select class="boxific-boxselect-border-bottom-style" name="box[border_bottom_style]">
					<?php foreach( $box_border_style as $k => $border_style ):?>
						<?php if( $k == $border_bottom[1] ):?>
						<option selected="selected" value="<?php echo $k ?>"><?php echo $border_style;?></option>
						<?php else: ?>
						<option value="<?php echo $k ?>"><?php echo $border_style;?></option>
						<?php endif;?>
					<?php endforeach; ?>
					</select>
				</div><!-- .boxific-boxwrap-border-bottom-style -->
				<div class="boxific-box-color-outer-wrap">
				<label><?php _e('Bottom line color', 'boxific');?></label>
				<span class="boxific-box-color-wrap">
					<label for="fc">#</label>
					<input type="text" size="6" name="box[border_bottom_color]" class="boxific-border-bottom-color" maxlength="6" value="<?php if ($border_bottom[2]=="") {echo $rule['border_bottom_color'];}else{echo $border_bottom[2];}?>"/>
					</span>
					<img src="<?php echo plugins_url( 'images/color.png', __FILE__ );?>" alt="Color wheel" class="boxific-colorborderbottomwheel"/>
				</div><!-- .boxific-box-color-outer-wrap -->
				<div class="boxific-boxwrap-bottom-right-radius">
					<label><?php _e('Bottom-right radius', 'boxific');?></label>
					<div class="boxific-boxslider-bottom-right-radius"></div>
					<input type="hidden" class="boxific-bottom-right-radius" value="<?php if ($border_radius[2]=="") {echo $rule['border_bottom_right_radius'];}else{echo $border_radius[2];}?>"/>
				</div><!-- .boxific-boxwrap-bottom-right-radius -->
			</div><!-- .boxific-box-outfit-wrap4 -->

			<div class="boxific-box-outfit-wrap5">
				<div class="boxific-boxwrap-border-left-width">
					<label><?php _e('Left line width', 'boxific');?></label>
					<div class="boxific-boxslider-border-left-width"></div>
					<input type="hidden" class="boxific-border-left-width" value="<?php if ($border_left[0]=="") {echo $rule['border_left_width'];}else{echo $border_left[0];}?>"/>
				</div><!-- .boxific-boxwrap-border-left-width -->
				<div class="boxific-boxswrap-border-left-style">
					<label><?php _e('Left line style', 'boxific');?></label>
					<select class="boxific-boxselect-border-left-style" name="box[border_left_style]">
					<?php foreach( $box_border_style as $k => $border_style ):?>
						<?php if( $k == $border_left[1] ):?>
						<option selected="selected" value="<?php echo $k ?>"><?php echo $border_style;?></option>
						<?php else: ?>
						<option value="<?php echo $k ?>"><?php echo $border_style;?></option>
						<?php endif;?>
					<?php endforeach; ?>
					</select>
				</div><!-- .boxific-boxwrap-border-left-style -->
				<div class="boxific-box-color-outer-wrap">
				<label><?php _e('Left line color', 'boxific');?></label>
				<span class="boxific-box-color-wrap">
					<label for="fc">#</label>
					<input type="text" size="6" name="box[border_left_color]" class="boxific-border-left-color" maxlength="6" value="<?php if ($border_left[2]=="") {echo $rule['border_left_color'];}else{echo $border_left[2];}?>"/>
					</span>
					<img src="<?php echo plugins_url( 'images/color.png', __FILE__ );?>" alt="Color wheel" class="boxific-colorborderleftwheel"/>
				</div><!-- .boxific-box-color-outer-wrap -->
				<div class="boxific-boxwrap-bottom-left-radius">
					<label><?php _e('Bottom-left radius', 'boxific');?></label>
					<div class="boxific-boxslider-bottom-left-radius"></div>
					<input type="hidden" class="boxific-bottom-left-radius" value="<?php if ($border_radius[3]=="") {echo $rule['border_bottom_left_radius'];}else{echo $border_radius[3];}?>"/>
				</div><!-- .boxific-boxwrap-bottom-left-radius -->
			</div><!-- .boxific-box-outfit-wrap5 -->

			<div class="boxific-box-outfit-wrap8">
				<div class="boxific-boxwrap-outline-width">
					<label><?php _e('Outline width', 'boxific');?></label>
					<div class="boxific-boxslider-outline-width"></div>
					<input type="hidden" class="boxific-outline-width" value="<?php if ($outline[0]=="") {echo $rule['outline_width'];}else{echo $outline[0];}?>"/>
				</div><!-- .boxific-boxwrap-outline-width -->
				<div class="boxific-boxswrap-outline-style">
					<label><?php _e('Outline style', 'boxific');?></label>
					<select class="boxific-boxselect-outline-style" name="box[outline_style]">
					<?php foreach( $box_outline_style as $k => $outline_style ):?>
						<?php if( $k == $outline[1] ):?>
						<option selected="selected" value="<?php echo $k ?>"><?php echo $outline_style;?></option>
						<?php else: ?>
						<option value="<?php echo $k ?>"><?php echo $outline_style;?></option>
						<?php endif;?>
					<?php endforeach; ?>
					</select>
				</div><!-- .boxific-boxwrap-outline-style -->
				<div class="boxific-box-color-outer-wrap">
				<label><?php _e('Outline color', 'boxific');?></label>
				<span class="boxific-box-color-wrap">
					<label for="fc">#</label>
					<input type="text" size="6" name="box[outline_color]" class="boxific-outline-color" maxlength="6" value="<?php if ($outline[2]=="") {echo $rule['outline_color'];}else{echo $outline[2];}?>"/>
					</span>
					<img src="<?php echo plugins_url( 'images/color.png', __FILE__ );?>" alt="Color wheel" class="boxific-coloroutlinewheel"/>
				</div><!-- .boxific-box-color-outer-wrap -->
				<div class="boxific-boxwrap-outline-offset">
					<label><?php _e('Outline offset','boxific');?></label>
					<div class="boxific-boxslider-outline-offset"></div>
					<input type="hidden" class="boxific-outline-offset" value="<?php echo $rule['outline_offset']?>"/>
		                </div><!-- .boxific-boxwrap-outline-offset -->
			</div><!-- .boxific-box-outfit-wrap8 -->

		</div><!-- .boxific-box-settings -->
	</fieldset>
</div>
